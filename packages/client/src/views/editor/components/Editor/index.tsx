import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Tabs, TabsProps } from "antd";
import { IComponent, IPageSetting } from "../../type";
import { PropsEditor } from "./PropsEditor";
import { FunctionEditor } from "./FunctionEditor";
import { SettingEditor } from "./SettingEditor";
import style from "./index.module.scss";

interface IProps {
  component: IComponent | null;
  setting: IPageSetting | null;
  onPropsChange: (props: Pick<IComponent, "props">) => void;
  onFunctionsChange: () => void;
  onSettingChange: (arg: IPageSetting) => void;
  onClose: () => void;
}

export const Editor: React.FC<IProps> = ({
  component = null,
  setting = null,
  onPropsChange,
  onFunctionsChange,
  onSettingChange,
  onClose,
}) => {
  const items: TabsProps["items"] = [
    {
      key: "props",
      label: `属性`,
      children: <PropsEditor component={component} onChange={onPropsChange} />,
    },
    {
      key: "function",
      label: `函数`,
      children: (
        <FunctionEditor
          fns={(component && component.fns) || []}
          onChange={(fns) => {
            if (!component) {
              return;
            }
            component.fns = fns;
            onFunctionsChange();
          }}
        />
      ),
    },
    {
      key: "setting",
      label: `页面设置`,
      children: <SettingEditor setting={setting} onChange={onSettingChange} />,
    },
  ];

  return (
    <div className={style.wrapper}>
      <h3>
        <span>编辑器</span>
        <CloseOutlined onClick={onClose} />
      </h3>
      <main>
        <Tabs defaultActiveKey="props" size="small" items={items}></Tabs>
      </main>
    </div>
  );
};
