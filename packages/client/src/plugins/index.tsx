import { componentManager } from "./ComponentManager";
import { groupMaps } from "./GroupMap";
import { componentMaps, componentMap } from "./ComponentMap";

class plugins {
  groupMaps: Array<string>;
  componentMaps: componentMap[];
  constructor() {
    this.groupMaps = groupMaps;
    this.componentMaps = componentMaps;

    this.init();
  }

  init() {
    //
    console.log("初始化组件编辑器");

    this.registerGroup();
    this.registerComponent();
  }

  // 注册组件组
  registerGroup() {
    this.groupMaps.forEach((group) => {
      componentManager.addToGroup(group);
    });
  }

  // 注册组件
  registerComponent() {
    this.componentMaps.forEach((componentMap) => {
      componentManager.register(
        componentMap.componentName,
        componentMap.component,
        componentMap.groupName
      );
    });
  }
}

export const pluginsManager = new plugins();
