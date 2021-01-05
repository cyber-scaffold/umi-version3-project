import { name } from "./package.json";
import { defineConfig } from "umi";
import WebpackOpenBrowser from "webpack-open-browser";
import routes from "./config/routes";


// ref: https://umijs.org/config/
export default defineConfig({
  routes,
  devServer: {
    port: 7001,
    open: true,
    openPage: "/"
  },
  dva: {},
  antd: {},
  title: name,
  chainWebpack(config) {
    config
      .plugin("webpack-open-browser")
      .use(WebpackOpenBrowser, [{ url: 'http://localhost:7001' }])
  }
})
