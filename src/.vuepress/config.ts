import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "笔记、生活",
  description: "savior 的生活日记",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
