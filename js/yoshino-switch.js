(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{189:function(e,t){e.exports="import * as React from 'react';\nimport { Switch } from '../../../../components/';\n\nexport default function () {\n  return (\n    <Switch checked disabled/>\n  )\n}\n"},190:function(e,t){e.exports="#### 组件禁用\n设置`disabled`将组件状态设为不可选。\n"},191:function(e,t){e.exports="import * as React from 'react';\nimport { Switch } from '../../../../components/';\n\nexport default function () {\n  return (\n    <div>\n      <Switch onChange={(checked) => alert(`按钮状态：${checked ? '开' : '关'}`)}/>\n      <Switch size=\"small\"/>\n    </div>\n  )\n}\n"},192:function(e,t){e.exports="#### 基本使用\n`default`、`small`两种`size`。"},193:function(e,t){e.exports="## Switch 开关选择器\n切换开关状态。\n\n## 代码演示\n"},469:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(193),l=n(57),r=n(59),c=n(58),i=[{title:"API",json:[{props:"size",intro:"组件大小",type:"'default' | 'small'",defaultValue:"default"},{props:"onChange",intro:"变化回调",type:"(checked: boolean) => void",defaultValue:"-"},{props:"checked",intro:"当前是否选中",type:"boolean",defaultValue:"-"},{props:"defaultChecked",intro:"初始值是否选中",type:"boolean",defaultValue:"false"},{props:"disabled",intro:"是否禁用",type:"boolean",defaultValue:"false"}]}],d=n(8),u=function(){return o.createElement("div",null,o.createElement(d.B,{onChange:e=>alert(`按钮状态：${e?"开":"关"}`)}),o.createElement(d.B,{size:"small"}))},s=n(192),p=function(){return o.createElement(d.B,{checked:!0,disabled:!0})},f=n(190);n.d(t,"default",function(){return w});const m=n(191),h=n(189);class w extends o.Component{render(){return o.createElement("div",null,o.createElement(l.a,{text:a}),o.createElement(r.a,{text:s,demo:o.createElement(u,null),code:m}),o.createElement(r.a,{text:f,demo:o.createElement(p,null),code:h}),o.createElement(c.a,{api:i}))}}}}]);