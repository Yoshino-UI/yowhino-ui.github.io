(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{179:function(e,n){e.exports="import * as React from 'react';\nimport { Progress } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <div>\n        <Progress percent={10} style={{margin: '10px 0'}}/>\n        <Progress percent={80} bgColor='#ccc' barColor='red'/>\n      </div>\n    </div>\n  );\n}\n"},180:function(e,n){e.exports="#### 基本使用\n简单的基本使用。"},181:function(e,n){e.exports="## Progress 进度条\n展示当前操作流程进度。\n\n## 代码演示\n"},506:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0),l=t(181),c=t(87),p=t(89),a=t(88),i=[{title:"API",json:[{props:"percent",intro:"当前百分比",type:"number",defaultValue:"-"},{props:"bgColor",intro:"进度条背景色",type:"string",defaultValue:"-"},{props:"barColor",intro:"进度条颜色",type:"string",defaultValue:"-"}]}],s=t(8),u=function(){return o.createElement("div",null,o.createElement("div",null,o.createElement(s.x,{percent:10,style:{margin:"10px 0"}}),o.createElement(s.x,{percent:80,bgColor:"#ccc",barColor:"red"})))},d=t(180),m=t(179),f=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(n,e),n.prototype.render=function(){return o.createElement("div",null,o.createElement(c.a,{text:l}),o.createElement(p.a,{text:d,demo:o.createElement(u,null),code:m}),o.createElement(a.a,{api:i}))},n}(o.Component);n.default=f}}]);