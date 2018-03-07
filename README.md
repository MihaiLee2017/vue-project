# vue-project

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目路径

├── ...
├── src  
│ ├── components
│ │ ├── platformCom // 平台通用组件
│ │ │ ├── ...
│ │ │ ├── install.js // 平台全局组件注册
│ │ ├── customCom // 项目组件
│ │ │ ├── global // 项目全局组件
│ │ │ │ ├── ...  
│ │ │ │ ├── install.js // 项目全局组件注册
│ │ │ ├── locale // 项目局部组件
│ ├── mock/ // mock 模拟
│ ├── page // 项目页面
│ │ ├── ... // 页面名称
│ │ │ ├── \*.vue
│ │ │ ├── ... // 与该页面相关的其他文件
│ ├── util  
│ │ ├── http.js // ajax 全局设置
│ │ ├── ...
│ ├── store  
│ │ ├── modules/  
│ │ ├── state.js  
│ │ ├── getter.js  
│ │ ├── mutations.js  
│ │ ├── actions.js  
│ │ ├── index.js
│ ├── router
│ │ ├── asyncRouter.js // 异步路由
│ │ ├── index.js // vue-router 路由配置
│ ├── index.html // 单页面应用根模板
│ ├── index.vue // 首页 vue
│ ├── main.js // webpack 入口文件
├── ...
