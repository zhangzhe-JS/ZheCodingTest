const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "", //用于嵌套静态资源的目录 使之放在dist下
  filenameHashing: true, //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  lintOnSave: "warning", //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
  transpileDependencies: false, //babel转译 node_modules中的JS文件 boolean | Array<string | RegExp>
  productionSourceMap: false,
  crossorigin: undefined, //script 或者 link允许跨域请求
  runtimeCompiler: true, //支持组件template 语法
  configureWebpack: {},
  chainWebpack: (config) => {
    config;
  },
  css: {
    sourceMap: false,
  },
  devServer: {
    proxy: {},
  },
  pluginOptions: {},
});
