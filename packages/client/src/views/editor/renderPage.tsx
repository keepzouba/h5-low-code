import { renderComponent } from "./components/Preview/renderComponent";
import { IPageSetting } from "./type";

export const transformPageStyle = ({
  setting = null,
}: {
  setting: IPageSetting | null;
}) => {
  const style: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: setting ? setting.bgcolor : "transparent",
  };

  if (setting?.bgimg) {
    style.backgroundImage = `url(${setting.bgimg})`;
    style.backgroundSize = `contain`;
    style.backgroundRepeat = `no-repeat`;
  }

  return style;
};

export const renderPageComponents = ({ components = [] }) => {
  return (
    <div>
      {components.map((component) => {
        return renderComponent({ component, isEdit: false });
      })}
    </div>
  );
};

export const renderPage = ({ setting, components }: any) => {
  const { name = "", js = null } = setting;

  return (
    <div style={transformPageStyle({ setting })}>
      {renderPageComponents({ components })}
      {js && /^http|^\/\//.test(js) ? (
        <script src={js} async />
      ) : (
        <script dangerouslySetInnerHTML={{ __html: js }} />
      )}
    </div>
  );
};
