(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{497:function(n,o,e){"use strict";e.r(o),e.d(o,"default",function(){return l});var s=e(0),t=e(77),i=e(59);class l extends s.Component{render(){return s.createElement("div",{className:""},s.createElement(i.a,{text:t}))}}},77:function(n,o){n.exports="### 定制主题\n`yoshino`默认提供了一套`UI`主题，由于利用`less`编写的`css`，并且将一些通用变量抽离出来，可以实现样式自定义化，包括但不限于主色、圆角、提示色、组件尺寸等配置。如果需要定制主题则需要在引入样式的文件的时候使用`.less`，组件`less`文件位于`yoshino/components/${componentName}/styles/`，通用位于`yoshino/components/styles`。\n\n### 样式变量\n如果你的项目使用了`webpack`，那么可以通过变量覆盖的方式来实现主题定制化。\n```less\n@import '~yoshino/components/styles/index.less';\n\n@primary-color: red;\n```\n\n如果你只需要简单的修改主色调，那么你也可以使用`less-loader`。\n```js\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'primary-color': 'red',\n  },\n}\n```\n\n#### 按需加载配置路径需变更\n##### 手动按需引入\n```jsx\nimport Button from 'yoshino/lib/Button';\nimport 'yoshino/components/Button/style/index.less';\n```\n\n###### 通用的按需加载方案（推荐）\n在普通`js`项目中和`ts`项目中均可使用，官方推荐的使用方案\n\n需要配合[ui-component-loader](https://github.com/gwuhaolin/ui-component-loader.git)使用实现自动按需加载。\n\n首先安装`ui-component-loader`\n```jsx\nnpm install ui-component-loader --save-dev\n```\n\n在`webpack`中添加`loader`配置如下\n```jsx\n{\n  loader: 'ui-component-loader',\n  options: {\n    'lib': 'yoshino',\n    'libDir': 'components',\n    'style': 'style/index.less',\n  },\n},\n```\n\n##### 在babel中使用按需加载\n需要配合[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)使用实现自动按需加载。\n\n首先安装`babel-plugin-import`\n```jsx\nnpm install babel-plugin-import --save-dev\n```\n\n在`webpack`的`babel-loader`的`options`的`plugins`中添加配置如下\n```jsx\noptions: {\n  plugins: [[\"import\", {\n    \"libraryName\": \"yoshino\",\n    \"camel2DashComponentName\": false,\n    \"style\": (name) => `components/${name}/style/index.less`,\n  }]],\n},\n```\n\n### 更灵活的自定义方式 - `yoshino-cli`\n通过[yoshino-cli](https://github.com/Yoshino-UI/yoshino-cli)根据项目进行定制化开发。"}}]);