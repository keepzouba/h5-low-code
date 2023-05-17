import React, { useState, useEffect } from "react";
import clone from "lodash/cloneDeep";
import { Button, Collapse, Dropdown, Menu } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { IComponentData, IComponent } from "../../../type";
import { EditorPlugins } from "../../../plugins";
import { PropsEditor } from "../PropsEditor";
import style from "./index.module.scss";

interface IFnWithGroupName extends IComponentData {
  group?: string;
}

interface IProps {
  fns: Array<IFnWithGroupName>;
  onChange: (fns: Array<IFnWithGroupName>) => void;
}

const getMenu = ({ onClick, groups }: any) => (
  <Menu>
    {groups.map((group: any) => {
      return (
        <Menu.Item key={group} onClick={() => onClick(group)}>
          {group}
        </Menu.Item>
      );
    })}
  </Menu>
);

export const FunctionEditor: React.FC<IProps> = ({
  fns: defaultFns,
  onChange,
}) => {
  const groups = EditorPlugins.functions.getGroups();
  const [, setCount] = useState(-1);
  const unsafeUpdate = () => setCount((v) => v + 1);
  const [fns, setFns] = useState<any>(defaultFns);

  useEffect(() => {
    setFns(defaultFns);
  }, [defaultFns, defaultFns.length]);

  const handleChange = (fns: any[]) => {
    onChange(
      fns.map((fn) => ({
        group: fn.group,
        name: fn.originName,
        originName: fn.originName,
        props: fn.props,
        schema: fn.schema,
      }))
    );
  };

  const addFunction = (fn: any, group: any) => {
    setFns((fns: any) => {
      fn.group = group;
      const newFns = [...fns, fn];
      handleChange(newFns);
      return newFns;
    });
  };

  const editFunction = (
    newProps: Record<string, unknown> | Pick<IComponent, "props">,
    index: number
  ) => {
    let newFn = fns[index];
    newFn.props = newProps;
    setFns((fns: any[]) => {
      fns.splice(index, 1, newFn);
      handleChange(fns);
      return fns;
    });
    unsafeUpdate();
  };

  const removeFunction = (index: number) => {
    setFns((fns: any[]) => {
      fns.splice(index, 1);
      handleChange(fns);
      return fns;
    });
    unsafeUpdate();
  };

  const onGroupChange = (group: string) => {
    if (!group) return [{}];
    addFunction(clone(EditorPlugins.functions.getObjsByGroup(group)[0]), group);
  };

  return (
    <div className={style.wrapper}>
      <Dropdown
        overlay={getMenu({ groups, onClick: onGroupChange })}
        placement="bottomLeft"
      >
        <Button>添加函数</Button>
      </Dropdown>
      <span className={style.desc}>编辑模式下无效</span>
      <main>
        <Collapse expandIconPosition={"right"} bordered={false} accordion>
          {fns.map((fn: any, index: number) => {
            return (
              <Collapse.Panel
                header={<span className={style.pannellHeader}>{fn.group}</span>}
                key={index}
                extra={
                  <DeleteOutlined
                    onClick={(event) => {
                      event.stopPropagation();
                      removeFunction(index);
                    }}
                  />
                }
              >
                <PropsEditor
                  key={index}
                  component={fn as IComponent}
                  onChange={(props) => editFunction(props, index)}
                />
              </Collapse.Panel>
            );
          })}
        </Collapse>
      </main>
    </div>
  );
};
