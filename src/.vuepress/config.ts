import { defineUserConfig } from "vuepress"
import { viteBundler } from "@vuepress/bundler-vite"
import { getDirname, path } from "vuepress/utils"
import UnoCSS from "unocss/vite"
import theme from "./theme.js"
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "胡思乱想实验室",
  description: "胡思乱想室长的技术博客，帮助你实现你的奇思妙想。",

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
  bundler: viteBundler({
    viteOptions: {
      plugins: [UnoCSS()],
    },
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
})
