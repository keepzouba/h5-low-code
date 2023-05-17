import {
  createContext,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useReducer,
} from "react";

const AppContext = createContext({});
AppContext.displayName = "fmlowcode_Context";

function AppProvider(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
}) {
  const initialState = {
    isLogin: false,
  };
  const reducer = (state: any, action: { type: any; payload: any }) => {
    const { type, payload } = action;
    switch (type) {
      case "UPDATE_ISLOGIN":
        return { ...state, isLogin: payload };
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

const AppConsumer = (Component: any) => {
  const FnComponent = () => (
    <AppContext.Consumer>
      {(value) => <Component {...value}></Component>}
    </AppContext.Consumer>
  );
  return FnComponent;
};

export { AppConsumer, AppContext, AppProvider };

export default AppConsumer;
