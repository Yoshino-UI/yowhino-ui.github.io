(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{173:function(e,n){e.exports="import * as React from 'react';\nimport { Progress } from '../../../../components/';\n\nexport default function() {\n  return (\n    <div>\n      <div>\n        <Progress percent={10} style={{margin: '10px 0'}}/>\n        <Progress percent={80} bgColor='#ccc' barColor='red'/>\n      </div>\n    </div>\n  );\n}\n"},174:function(e,n){e.exports="#### 基本使用\n简单的基本使用。"},175:function(e,n){e.exports="## Progress 进度条\n展示当前操作流程进度。\n\n## 代码演示\n"},500:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0),l=t(175),c=t(86),p=t(88),a=t(87),i=[{title:"API",json:[{props:"percent",intro:"当前百分比",type:"number",defaultValue:"-"},{props:"bgColor",intro:"进度条背景色",type:"string",defaultValue:"-"},{props:"barColor",intro:"进度条颜色",type:"string",defaultValue:"-"}]}],u=t(8),s=function(){return o.createElement("div",null,o.createElement("div",null,o.createElement(u.x,{percent:10,style:{margin:"10px 0"}}),o.createElement(u.x,{percent:80,bgColor:"#ccc",barColor:"red"})))},d=t(174),m=t(173),f=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(n,e),n.prototype.render=function(){return o.createElement("div",null,o.createElement(c.a,{text:l}),o.createElement(p.a,{text:d,demo:o.createElement(s,null),code:m}),o.createElement(a.a,{api:i}))},n}(o.Component);n.default=f}}]);