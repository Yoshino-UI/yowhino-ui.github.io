(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{176:function(e,t){e.exports="import * as React from 'react';\nimport { Loading } from '../../../../components/';\n\nexport default function() {\n  return (\n    <div>\n      <Loading text='自定义加载文本' size='large' type='b'/>\n      <Loading text='自定义加载文本' size='large' type='c'/>\n      <Loading text='自定义加载文本' size='large' type='d'/>\n    </div>\n  );\n}\n"},177:function(e,t){e.exports="#### 其余加载样式。\n另外三种加载样式。\n"},178:function(e,t){e.exports="import * as React from 'react';\nimport { Loading } from '../../../../components/';\n\nexport default function() {\n  return (\n    <div>\n      <Loading size='small'/>\n      <Loading text/>\n      <Loading text='自定义加载文本' size='large'/>\n    </div>\n  );\n}\n"},179:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},180:function(e,t){e.exports="## Loading 加载\n表示当前处于加载状态中。\n\n## 代码演示\n"},502:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),o=n(180),l=n(86),i=n(88),c=n(87),p=[{title:"API",json:[{props:"type",intro:"加载图标的样式",type:"'a' | 'b' | 'c' | 'd'",defaultValue:"a"},{props:"size",intro:"加载图标大小",type:"'small' | 'default' | 'large'",defaultValue:"default"},{props:"text",intro:"加载文本",type:"string | boolean",defaultValue:"-"}]}],u=n(8),s=function(){return a.createElement("div",null,a.createElement(u.r,{size:"small"}),a.createElement(u.r,{text:!0}),a.createElement(u.r,{text:"自定义加载文本",size:"large"}))},d=n(179),m=function(){return a.createElement("div",null,a.createElement(u.r,{text:"自定义加载文本",size:"large",type:"b"}),a.createElement(u.r,{text:"自定义加载文本",size:"large",type:"c"}),a.createElement(u.r,{text:"自定义加载文本",size:"large",type:"d"}))},f=n(177),x=n(178),g=n(176),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement(l.a,{text:o}),a.createElement(i.a,{text:d,demo:a.createElement(s,null),code:x}),a.createElement(i.a,{text:f,demo:a.createElement(m,null),code:g}),a.createElement(c.a,{api:p}))},t}(a.Component);t.default=E}}]);