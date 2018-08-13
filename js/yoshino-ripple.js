(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{119:function(e,t){e.exports='import * as React from \'react\';\nimport { Ripple, Icon, Button } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Ripple color="red" opacity={0.6}><Button type="primary"><Icon type="play"/>播放</Button></Ripple>\n      <Ripple color="blue"><Button type="primary"><Icon type="pause"/>暂停</Button></Ripple>\n      <Ripple color="yellow"><Button type="primary"><Icon type="skip-backward"/>上一首</Button></Ripple>\n      <Ripple color="green"><Button type="primary">下一首<Icon type="skip-forward"/></Button></Ripple>\n    </div>\n  )\n}\n'},120:function(e,t){e.exports="#### 配合其他组件使用\n推荐配合`button`使用，可以提高交互体验。\n"},121:function(e,t){e.exports="import * as React from 'react';\nimport { Ripple, Card, Icon } from '../../../../components/';\n\nexport default function () {\n  return (\n    <div>\n    <Ripple style={{width: '200px'}}color=\"red\">\n      <Card \n        title=\"标题\"\n        extra={(\n        <div><span>更多</span><Icon type=\"more\"/></div>\n        )}\n        border\n        shadow\n      >\n        <div>波纹包裹的card</div>\n      </Card>\n    </Ripple>\n  </div>\n  )\n}\n"},122:function(e,t){e.exports="#### 简单的使用\n简单的波纹特效使用\n"},123:function(e,t){e.exports="## Ripple 波纹\n用于包裹子组件，点击后有波纹特效。\n\n## 代码演示\n"},480:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(123),p=n(59),l=n(61),a=n(60),c=[{title:"API",json:[{props:"color",intro:"波纹颜色",type:"string",defaultValue:"-"},{props:"opacity",intro:"透明度",type:"number",defaultValue:"0.3"},{props:"diameter",intro:"波纹半径",type:"number",defaultValue:"10"}]}],i=n(8),m=function(){return r.createElement("div",null,r.createElement(i.z,{style:{width:"200px"},color:"red"},r.createElement(i.h,{title:"标题",extra:r.createElement("div",null,r.createElement("span",null,"更多"),r.createElement(i.n,{type:"more"})),border:!0,shadow:!0},r.createElement("div",null,"波纹包裹的card"))))},u=n(122),d=function(){return r.createElement("div",null,r.createElement(i.z,{color:"red",opacity:.6},r.createElement(i.g,{type:"primary"},r.createElement(i.n,{type:"play"}),"播放")),r.createElement(i.z,{color:"blue"},r.createElement(i.g,{type:"primary"},r.createElement(i.n,{type:"pause"}),"暂停")),r.createElement(i.z,{color:"yellow"},r.createElement(i.g,{type:"primary"},r.createElement(i.n,{type:"skip-backward"}),"上一首")),r.createElement(i.z,{color:"green"},r.createElement(i.g,{type:"primary"},"下一首",r.createElement(i.n,{type:"skip-forward"}))))},y=n(120);n.d(t,"default",function(){return f});const s=n(121),E=n(119);class f extends r.Component{render(){return r.createElement("div",null,r.createElement(p.a,{text:o}),r.createElement(l.a,{text:u,demo:r.createElement(m,null),code:s}),r.createElement(l.a,{text:y,demo:r.createElement(d,null),code:E}),r.createElement(a.a,{api:c}))}}}}]);