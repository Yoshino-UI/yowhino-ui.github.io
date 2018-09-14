(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{164:function(e,t){e.exports="import * as React from 'react';\nimport { Ripple, Icon, Button } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Ripple color='red' opacity={0.6}><Button type='primary'><Icon type='play'/>播放</Button></Ripple>\n      <Ripple color='blue'><Button type='primary'><Icon type='pause'/>暂停</Button></Ripple>\n      <Ripple color='yellow'><Button type='primary'><Icon type='skip-backward'/>上一首</Button></Ripple>\n      <Ripple color='green'><Button type='primary'>下一首<Icon type='skip-forward'/></Button></Ripple>\n    </div>\n  );\n}\n"},165:function(e,t){e.exports="#### 配合其他组件使用\n推荐配合`button`使用，可以提高交互体验。\n"},166:function(e,t){e.exports="import * as React from 'react';\nimport { Ripple, Card, Icon } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Ripple style={{width: '200px'}}color='red'>\n        <Card\n          title='标题'\n          extra={(\n          <div><span>更多</span><Icon type='more'/></div>\n          )}\n          border\n          shadow\n        >\n          <div>波纹包裹的card</div>\n        </Card>\n      </Ripple>\n    </div>\n  );\n}\n"},167:function(e,t){e.exports="#### 简单的使用\n简单的波纹特效使用\n"},168:function(e,t){e.exports="## Ripple 波纹\n用于包裹子组件，点击后有波纹特效。\n\n## 代码演示\n"},528:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),p=n(168),l=n(88),a=n(90),c=n(89),i=[{title:"API",json:[{props:"color",intro:"波纹颜色",type:"string",defaultValue:"-"},{props:"opacity",intro:"透明度",type:"number",defaultValue:"0.3"}]}],u=n(7),m=function(){return o.createElement("div",null,o.createElement(u.A,{style:{width:"200px"},color:"red"},o.createElement(u.h,{title:"标题",extra:o.createElement("div",null,o.createElement("span",null,"更多"),o.createElement(u.o,{type:"more"})),border:!0,shadow:!0},o.createElement("div",null,"波纹包裹的card"))))},d=n(167),y=function(){return o.createElement("div",null,o.createElement(u.A,{color:"red",opacity:.6},o.createElement(u.g,{type:"primary"},o.createElement(u.o,{type:"play"}),"播放")),o.createElement(u.A,{color:"blue"},o.createElement(u.g,{type:"primary"},o.createElement(u.o,{type:"pause"}),"暂停")),o.createElement(u.A,{color:"yellow"},o.createElement(u.g,{type:"primary"},o.createElement(u.o,{type:"skip-backward"}),"上一首")),o.createElement(u.A,{color:"green"},o.createElement(u.g,{type:"primary"},"下一首",o.createElement(u.o,{type:"skip-forward"}))))},s=n(165),E=n(166),f=n(164),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return o.createElement("div",null,o.createElement(l.a,{text:p}),o.createElement(a.a,{text:d,demo:o.createElement(m,null),code:E}),o.createElement(a.a,{text:s,demo:o.createElement(y,null),code:f}),o.createElement(c.a,{api:i}))},t}(o.Component);t.default=w}}]);