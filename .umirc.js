import { name } from "./package.json";
import { defineConfig } from "umi";
import routes from "./config/routes";


// ref: https://umijs.org/config/
export default defineConfig({
  routes,
  nodeModulesTransform:{type:"none"},
  devServer: {
    port: 7005
  },
  dva: {},
  antd: {},
  title: name,
  sass: {
    implementation: require('node-sass'),
  },
})
