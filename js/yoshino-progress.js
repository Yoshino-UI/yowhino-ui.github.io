(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{128:function(e,n){e.exports="import * as React from 'react';\nimport { Progress } from '../../../../components/';\n\nexport default function () {\n  return (\n    <div>\n      <div>\n        <Progress percent={10} style={{margin: '10px 0'}}/>\n        <Progress percent={80} bgColor=\"#ccc\" barColor=\"red\"/>\n      </div>\n    </div>\n  )\n}\n"},129:function(e,n){e.exports="#### 基本使用\n简单的基本使用。"},130:function(e,n){e.exports="## Progress 进度条\n展示当前操作流程进度。\n\n## 代码演示\n"},459:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(130),c=t(57),l=t(59),a=t(58),p=[{title:"API",json:[{props:"percent",intro:"当前百分比",type:"number",defaultValue:"-"},{props:"bgColor",intro:"进度条背景色",type:"string",defaultValue:"-"},{props:"barColor",intro:"进度条颜色",type:"string",defaultValue:"-"}]}],s=t(8),i=function(){return r.createElement("div",null,r.createElement("div",null,r.createElement(s.v,{percent:10,style:{margin:"10px 0"}}),r.createElement(s.v,{percent:80,bgColor:"#ccc",barColor:"red"})))},u=t(129);t.d(n,"default",function(){return m});const d=t(128);class m extends r.Component{render(){return r.createElement("div",null,r.createElement(c.a,{text:o}),r.createElement(l.a,{text:u,demo:r.createElement(i,null),code:d}),r.createElement(a.a,{api:p}))}}}}]);