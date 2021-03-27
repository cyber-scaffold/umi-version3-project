import { defineConfig } from "umi";

import proxy from "./config/proxy";
import routes from "./config/routes";
import { name } from "./package.json";

// ref: https://umijs.org/config/
export default defineConfig({
  proxy,
  routes,
  hash:true,
  nodeModulesTransform:{type:"none"},
  devServer: {
    port: 7005,
    hot:false,
    hotOnly:false
  },
  dva: {},
  antd: {
    config:{
      locale:zhCN
    }
  },
  title: name,
  sass: {
    implementation: require('node-sass'),
  }
})
