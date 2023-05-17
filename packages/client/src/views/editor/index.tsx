import { EditorPlugins } from "./plugins";
import { Editor } from "./Editor";
import { renderPage } from "./renderPage";
import { pluginsManager } from "../../plugins";

import {
  paddingCss,
  paddingCssSchema,
  marginCss,
  marginCssSchema,
  fontCss,
  fontCssSchema,
  transformStyle,
} from "./css";

export {
  // 插件
  EditorPlugins,
  // 
  pluginsManager,
  // 编辑器
  Editor,
  // css
  paddingCss,
  paddingCssSchema,
  marginCss,
  marginCssSchema,
  fontCss,
  fontCssSchema,
  transformStyle,
  // 页面渲染
  renderPage,
};

