(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{236:function(e,n){e.exports="import * as React from 'react';\nimport { Card } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div style={{background: '#ccc', height: '200', padding: '20px'}}>\n      <Card title='标题' style={{width: '200px'}} border={false}>\n        <div>11111</div>\n      </Card>\n    </div>\n  );\n}\n"},237:function(e,n){e.exports="#### 无边框\n在非白色北京下可设置`border`抹去边框。\n"},238:function(e,n){e.exports="import * as React from 'react';\nimport { Card, Icon } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <Card\n      style={{width: 300, margin: 10}}\n      title='标题'\n      extra={(\n      <div><span>更多</span><Icon type='more'/></div>\n      )}\n      border\n      shadow\n    >\n      <div>2342342343</div>\n    </Card>\n  );\n}\n"},239:function(e,n){e.exports="#### 带阴影的卡片\n设置`shadow`可以使卡片更具有立体感。\n"},240:function(e,n){e.exports="import * as React from 'react';\nimport { Card } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <Card title='标题'>\n      <div>11111</div>\n    </Card>\n  );\n}\n"},241:function(e,n){e.exports="#### 基本使用\n简单的基本使用。\n"},242:function(e,n){e.exports="## Card 卡片\n用于集中展示一些块状信息。\n\n## 代码演示\n"},533:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0),a=t(242),i=t(88),l=t(90),d=t(89),c=[{title:"API",json:[{props:"title",intro:"标题",type:"string",defaultValue:""},{props:"extra",intro:"更多",type:"ReactNode",defaultValue:""},{props:"border",intro:"边框",type:"boolean",defaultValue:"true"},{props:"boxshadow",intro:"阴影",type:"boolean",defaultValue:"false"}]}],p=t(7),u=function(){return o.createElement(p.h,{title:"标题"},o.createElement("div",null,"11111"))},s=t(241),m=function(){return o.createElement(p.h,{style:{width:300,margin:10},title:"标题",extra:o.createElement("div",null,o.createElement("span",null,"更多"),o.createElement(p.o,{type:"more"})),border:!0,shadow:!0},o.createElement("div",null,"2342342343"))},f=t(239),x=function(){return o.createElement("div",{style:{background:"#ccc",height:"200",padding:"20px"}},o.createElement(p.h,{title:"标题",style:{width:"200px"},border:!1},o.createElement("div",null,"11111")))},h=t(237),E=t(240),v=t(238),y=t(236),w=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(n,e),n.prototype.render=function(){return o.createElement("div",null,o.createElement(i.a,{text:a}),o.createElement(l.a,{text:s,demo:o.createElement(u,null),code:E}),o.createElement(l.a,{text:h,demo:o.createElement(x,null),code:y}),o.createElement(l.a,{text:f,demo:o.createElement(m,null),code:v}),o.createElement(d.a,{api:c}))},n}(o.Component);n.default=w}}]);