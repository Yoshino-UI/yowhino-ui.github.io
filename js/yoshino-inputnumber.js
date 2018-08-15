(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{266:function(e,t){e.exports="import * as React from 'react';\nimport { InputNumber } from '../../../../components/';\n\nexport default function() {\n  return (\n    <div>\n      <InputNumber size='small' step={4}/>\n      <InputNumber value={-10} step={25} min={-100} max={100}/>\n      <InputNumber size='large'/>\n    </div>\n  );\n}\n"},267:function(e,t){e.exports="#### 简单实用\n`InputNumber`的大小共有`small`、`default`、`large`，同时你可以根据`min`、`max`、`step`来自定义属性。\n"},268:function(e,t){e.exports="## InputNumber 数字输入框\n仅用于数字输入。该组件为了保证输入值为纯数字，state放在内部维护，value只是一个初始值，要获得最新值请通过onChange，在外部改变value不会影响视图刷新。\n\n## 代码演示\n"},498:function(e,t,n){"use strict";n.r(t);var r=n(1),u=n(0),a=n(268),l=n(86),p=n(88),o=n(87),m=[{title:"API",json:[{props:"value",intro:"输入框的值",type:"number",defaultValue:"0"},{props:"size",intro:"组件大小",type:"'small' | 'default' | 'large'",defaultValue:"default"},{props:"onChange",intro:"变化回调事件",type:"(value: number) => void",defaultValue:"-"},{props:"min",intro:"最小值",type:"number",defaultValue:"0"},{props:"max",intro:"最大值",type:"number",defaultValue:"10"},{props:"step",intro:"步长",type:"number",defaultValue:"1"}]}],i=n(8),s=function(){return u.createElement("div",null,u.createElement(i.q,{size:"small",step:4}),u.createElement(i.q,{value:-10,step:25,min:-100,max:100}),u.createElement(i.q,{size:"large"}))},c=n(267),d=n(266),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return u.createElement("div",null,u.createElement(l.a,{text:a}),u.createElement(p.a,{text:c,demo:u.createElement(s,null),code:d}),u.createElement(o.a,{api:m}))},t}(u.Component);t.default=f}}]);