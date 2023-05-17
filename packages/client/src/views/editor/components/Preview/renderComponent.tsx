import { JSX } from 'react';
import { EditorPlugins } from '../../plugins';

const compose = (App: JSX.Element, fns = []) => {
  return fns.reduce((a, fn) => fn(a), App);
};

export const renderComponent = ({ component, isEdit } : any) => {
  const { name, schema, fns = [], props } = component;
  const Component = EditorPlugins.components.get(name);

  if (!Component) {
    return null;
  }

  if (isEdit || !fns.length) {
    return <Component {...props} />;
  }

  const functions = fns
    .map((fn: { props: any; name: string; }) => {
      const props = fn.props;
      const Function = EditorPlugins.functions.get(fn.name);

      if (!Function) {
        return null;
      }

      return (children: any) => <Function {...props}>{children}</Function>;
    })
    .filter(Boolean);

  return compose(<Component {...props} />, functions);
};
