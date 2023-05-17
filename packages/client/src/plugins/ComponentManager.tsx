import { EditorPlugins } from "../views/editor/plugins";
// import { Carousel } from "./components/Carousel";
// import { Cover } from "./components/Cover";
// import { Button } from "./components/Button";
// import { Paragraph } from "./components/Paragraph";
// import { BaseTitle, LeftBorderTitle } from "./components/Title";
// import { ImgTextTab } from "./components/Tab";
// import { Footer } from "./components/Footer";
// import { ImgTextList } from "./components/List";

class ComponentManager {
  constructor() {}

  register(name: string, component: any, groupName: string) {
    EditorPlugins.components.register(name, component, groupName);
  }

  addToGroup(groupName: string) {
    EditorPlugins.components.addToGroup(groupName);
  }
}

export const componentManager = new ComponentManager();
