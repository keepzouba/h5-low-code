import { Carousel } from "./components/Carousel";
import { Cover } from "./components/Cover";
import { Button } from "./components/Button";
import { Paragraph } from "./components/Paragraph";
import { BaseTitle, LeftBorderTitle } from "./components/Title";
import { ImgTextTab } from "./components/Tab";
import { Footer } from "./components/Footer";
import { ImgTextList } from "./components/List";
import { groupMaps } from "./GroupMap";
import { ReactNode } from "react";

export interface componentMap {
  componentName: string;
  component: Function | ReactNode;
  groupName: (typeof groupMaps)[number];
}

export const componentMaps: Array<componentMap> = [
  {
    componentName: "BaseTitle",
    component: BaseTitle,
    groupName: "标题",
  },
  // {
  //   componentName: "LeftBorderTitle",
  //   component: LeftBorderTitle,
  //   groupName: "标题",
  // },
  // {
  //   componentName: "Cover",
  //   component: Cover,
  //   groupName: "配图",
  // },
  // {
  //   componentName: "Carousel",
  //   component: Carousel,
  //   groupName: "轮播图",
  // },
  // {
  //   componentName: "Paragraph",
  //   component: Paragraph,
  //   groupName: "段落",
  // },
  // {
  //   componentName: "Button",
  //   component: Button,
  //   groupName: "按钮",
  // },
  // {
  //   componentName: "ImgTextTab",
  //   component: ImgTextTab,
  //   groupName: "TAB",
  // },
  // {
  //   componentName: "ImgTextList",
  //   component: ImgTextList,
  //   groupName: "列表",
  // },
  // {
  //   componentName: "Footer",
  //   component: Footer,
  //   groupName: "页脚",
  // },
];
