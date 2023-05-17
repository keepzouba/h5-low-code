import React from 'react';
import clone from 'lodash/cloneDeep';
import { IComponent } from '../../../type';
import { renderEditorItem } from './renderEditorItem';

interface IProps {
  component: IComponent | null;
  onChange: (props: Pick<IComponent, 'props'>) => void;
}

export const PropsEditor: React.FC<IProps> = ({ component, onChange }) => {
  if (!component) {
    component = {} as IComponent;
  }

  const { schema = {}, props = {} } = component;

  const handle = (key: string | number, newValue: unknown) => {
    const newProps = clone(props);
    newProps[key] = newValue;
    onChange(newProps as Pick<IComponent, 'props'>);
  };

  return (
    <ul>
      {Object.keys(schema).map(key => {
        return (
          <li key={key}>
            {renderEditorItem(key, props[key], schema[key], handle)}
          </li>
        );
      })}
    </ul>
  );
};
