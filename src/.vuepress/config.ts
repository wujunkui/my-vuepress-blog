import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "胡思乱想实验室",
  description: "胡思乱想室长的技术博客，帮助你实现你的奇思妙想。",

  theme,
  plugins: []

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
