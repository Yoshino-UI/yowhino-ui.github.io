(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{344:function(n,t){n.exports="# 快速开始\n## 安装\n```js\nnpm install yoshino\n```\n\n## 使用\n### 基本使用\n```jsx\nimport * as React from 'react';\nimport { Button } from 'yoshino';\n\nexport default function () {\n  return (\n    <div>\n      <Button type=\"primary\">Primary</Button>\n      <Button>Default</Button>\n      <Button type=\"dashed\">Dashed</Button>\n      <Button type=\"danger\">Danger</Button>\n    </div>\n  )\n}\n```\n\n### 引入公共样式\n组件库还依赖部分样式重置，不然在不同浏览器上样式可能会不一样，因此需要在入口的地方导入组件库内置的样式重置 CSS：\n```\nimport 'yoshino/es/common/reset.css';\n```\n\nor \n\n```\nimport 'yoshino/lib/common/reset.css';\n```\n\n### 引入全局样式\n```js\nimport 'yoshino/lib/index.css'; \n```\n## 按需加载\n如果你想实现按需加载，可以通过以下三种方案解决。\n\n### 手动按需引入\n```jsx\nimport Button from 'yoshino/lib/Button';\nimport 'yoshino/lib/Button/style/index.js';\n```\n\n### 通用的按需加载方案（推荐）\n在普通`js`项目中和`ts`项目中均可使用，官方推荐的使用方案\n\n需要配合[ui-component-loader](https://github.com/gwuhaolin/ui-component-loader.git)使用实现自动按需加载。\n\n首先安装`ui-component-loader`\n```jsx\nnpm install ui-component-loader --save-dev\n```\n\n在`webpack`中添加`loader`配置如下\n```jsx\n{\n  loader: 'ui-component-loader',\n  options: {\n    'lib': 'yoshino',\n    'libDir': 'lib',\n    'style': 'style/index.js',\n  },\n},\n```\n\n### 在babel中使用按需加载\n需要配合[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)使用实现自动按需加载。\n\n首先安装`babel-plugin-import`\n```jsx\nnpm install babel-plugin-import --save-dev\n```\n\n在`webpack`的`babel-loader`的`options`的`plugins`中添加配置如下\n```jsx\noptions: {\n  plugins: [[\"import\", {\n    \"libraryName\": \"yoshino\",\n    \"camel2DashComponentName\": false,\n    \"style\": (name) => `${name}/style/index.js`,\n  }]],\n},\n```\n\n\n"},568:function(n,t,o){"use strict";o.r(t);var e=o(1),i=o(0),s=o(344),r=o(88),l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return e.__extends(t,n),t.prototype.render=function(){return i.createElement("div",null,i.createElement(r.a,{text:s}))},t}(i.Component);t.default=l}}]);