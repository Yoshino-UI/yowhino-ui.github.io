(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{170:function(t,e){t.exports='import * as React from \'react\';\nimport { Tooltip, Button } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Tooltip title="受控" placement="top" trigger="click"><Button>点击展示</Button></Tooltip>\n      <Tooltip title="受控" placement="top" trigger="focus"><Button>聚焦展示</Button></Tooltip>\n    </div>\n  )\n}\n'},171:function(t,e){t.exports="#### 触发行为\n通过`trigger`设置触发行为。\n"},172:function(t,e){t.exports="import * as React from 'react';\nimport { Tooltip, Switch, Button } from '../../../../components/';\n\nexport default class App extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  render() {\n    return (\n      <div>\n        <Tooltip title=\"受控\" placement=\"top\" visible={this.state.visible}>\n          <Button>受控</Button>\n        </Tooltip>\n        <Switch\n          checked={this.state.visible}\n          onChange={() => this.setState({visible: !this.state.visible})}\n        />\n    </div>\n    )\n  }\n}\n"},173:function(t,e){t.exports="#### 受控显示\n通过`value`控制`Tooltip`的显示。\n"},174:function(t,e){t.exports='import * as React from \'react\';\nimport { Tooltip, Button } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div style={{padding: \'30px 100px\'}}>\n      <div style={{display: \'flex\', justifyContent: \'center\'}}>\n        <Tooltip title="提示" placement="topLeft"><Button>topLeft</Button></Tooltip>\n        <Tooltip title="提示" placement="top"><Button>top</Button></Tooltip>\n        <Tooltip title="提示" placement="topRight"><Button>topRight</Button></Tooltip>\n      </div>\n      <div style={{display: \'flex\', justifyContent: \'space-between\'}}>\n        <Tooltip title="提示" placement="leftTop"><Button>leftTop</Button></Tooltip>\n        <Tooltip title="提示" placement="rightTop"><Button>rightTop</Button></Tooltip>\n      </div>\n      <div style={{display: \'flex\', justifyContent: \'space-between\'}}>\n        <Tooltip title="提示" placement="left"><Button>left</Button></Tooltip>\n        <Tooltip title="提示" placement="right"><Button>right</Button></Tooltip>\n      </div>\n      <div style={{display: \'flex\', justifyContent: \'space-between\'}}>\n        <Tooltip title="提示" placement="leftBottom"><Button>leftBottom</Button></Tooltip>\n        <Tooltip title="提示" placement="rightBottom"><Button>rightBottom</Button></Tooltip>\n      </div>\n      <div style={{display: \'flex\', justifyContent: \'center\'}}>\n        <Tooltip title="提示" placement="bottomLeft"><Button>bottomLeft</Button></Tooltip>\n        <Tooltip title="提示" placement="bottom"><Button>bottom</Button></Tooltip>\n        <Tooltip title="提示提示提示提示" placement="bottomRight"><Button>bottomRight</Button></Tooltip>\n      </div>\n    </div>\n  )\n}\n'},175:function(t,e){t.exports="#### 位置显示控制\n通过设置`placement`控制气泡显示的位置。\n"},176:function(t,e){t.exports="import * as React from 'react';\nimport { Tooltip } from '../../../../components/';\n\nexport default function () {\n  return (\n    <Tooltip title=\"提示\"><span>hover显示</span></Tooltip>\n  )\n}\n"},177:function(t,e){t.exports="#### 基本使用\n简单的基本使用。\n"},178:function(t,e){t.exports="## Tooltip 文字提示\n文字提示气泡框。\n\n## 代码演示\n"},494:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n(178),i=n(59),p=n(61),a=n(60),r=[{title:"API",json:[{props:"placement",intro:"气泡框位置",type:"'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' |'leftBottom' | 'rightTop' | 'rightBottom'",defaultValue:"top"},{props:"mouseEnterDelay",intro:"鼠标移入后延时多少才显示 Tooltip， 单位: ms",type:"number",defaultValue:"0"},{props:"mouseLeaveDelay",intro:"鼠标移出后延时多少才隐藏 Tooltip，单位：ms",type:"number",defaultValue:"100"},{props:"overlayClassName",intro:"卡片类名",type:"string",defaultValue:"-"},{props:"overlayStyle",intro:"卡片样式",type:"React.CSSProperties",defaultValue:"-"},{props:"trigger",intro:"触发行为",type:"'hover' | 'focus' | 'click'",defaultValue:"hover"},{props:"title",intro:"提示内容",type:"string",defaultValue:"-"},{props:"visible",intro:"受控-是否可见",type:"boolean",defaultValue:"-"},{props:"defaultVisible",intro:"初始值",type:"boolean",defaultValue:"false"},{props:"onChange",intro:"变化回调",type:"(visible: boolean) => void",defaultValue:"-"},{props:"mountOnEnter",intro:"进入时才渲染",type:"boolean",defaultValue:"false"}]}],c=n(8),m=function(){return o.createElement(c.H,{title:"提示"},o.createElement("span",null,"hover显示"))},s=n(177),u=function(){return o.createElement("div",{style:{padding:"30px 100px"}},o.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.createElement(c.H,{title:"提示",placement:"topLeft"},o.createElement(c.g,null,"topLeft")),o.createElement(c.H,{title:"提示",placement:"top"},o.createElement(c.g,null,"top")),o.createElement(c.H,{title:"提示",placement:"topRight"},o.createElement(c.g,null,"topRight"))),o.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.createElement(c.H,{title:"提示",placement:"leftTop"},o.createElement(c.g,null,"leftTop")),o.createElement(c.H,{title:"提示",placement:"rightTop"},o.createElement(c.g,null,"rightTop"))),o.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.createElement(c.H,{title:"提示",placement:"left"},o.createElement(c.g,null,"left")),o.createElement(c.H,{title:"提示",placement:"right"},o.createElement(c.g,null,"right"))),o.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.createElement(c.H,{title:"提示",placement:"leftBottom"},o.createElement(c.g,null,"leftBottom")),o.createElement(c.H,{title:"提示",placement:"rightBottom"},o.createElement(c.g,null,"rightBottom"))),o.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.createElement(c.H,{title:"提示",placement:"bottomLeft"},o.createElement(c.g,null,"bottomLeft")),o.createElement(c.H,{title:"提示",placement:"bottom"},o.createElement(c.g,null,"bottom")),o.createElement(c.H,{title:"提示提示提示提示",placement:"bottomRight"},o.createElement(c.g,null,"bottomRight"))))},f=n(175);class d extends o.Component{constructor(){super(...arguments),this.state={visible:!1}}render(){return o.createElement("div",null,o.createElement(c.H,{title:"受控",placement:"top",visible:this.state.visible},o.createElement(c.g,null,"受控")),o.createElement(c.D,{checked:this.state.visible,onChange:()=>this.setState({visible:!this.state.visible})}))}}var g=n(173),E=function(){return o.createElement("div",null,o.createElement(c.H,{title:"受控",placement:"top",trigger:"click"},o.createElement(c.g,null,"点击展示")),o.createElement(c.H,{title:"受控",placement:"top",trigger:"focus"},o.createElement(c.g,null,"聚焦展示")))},v=n(171);n.d(e,"default",function(){return B});const T=n(176),y=n(174),h=n(172),b=n(170);class B extends o.Component{render(){return o.createElement("div",null,o.createElement(i.a,{text:l}),o.createElement(p.a,{text:s,demo:o.createElement(m,null),code:T}),o.createElement(p.a,{text:f,demo:o.createElement(u,null),code:y}),o.createElement(p.a,{text:g,demo:o.createElement(d,null),code:h}),o.createElement(p.a,{text:v,demo:o.createElement(E,null),code:b}),o.createElement(a.a,{api:r}))}}}}]);