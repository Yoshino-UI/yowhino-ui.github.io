(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{187:function(e,t){e.exports="import * as React from 'react';\nimport { Loading, Switch, Alert } from '@yoshino/components/';\n\nexport default class App extends React.Component {\n  state = {\n    value: false,\n  };\n\n  render() {\n     return (\n      <div>\n        <Loading text='自定义加载文本' size='small' loading={this.state.value}>\n          <Alert type='info' showIcon title='消息提示文案'/>\n        </Loading>\n        <div>\n          <Switch checked={this.state.value} onChange={(v) => this.setState({value: v})} />\n        </div>\n      </div>\n    );\n  }\n}\n"},188:function(e,t){e.exports="#### 包裹需要加载的页面"},189:function(e,t){e.exports="import * as React from 'react';\nimport { Loading, Icon } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Loading text='自定义加载文本' size='large' type='a'/>\n      <Loading text='自定义加载文本' size='large' type='b'/>\n      <Loading text='自定义加载文本' size='large' type='c'/>\n      <Loading text='自定义icon颜色' size='large' type='d' color='red'/>\n      <Loading text='自定义icon图标' size='large' icon={<Icon type='ios-refresh'/>}/>\n    </div>\n  );\n}\n"},190:function(e,t){e.exports="#### 其余加载样式。\n\n"},191:function(e,t){e.exports="import * as React from 'react';\nimport { Loading } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Loading size='small'/>\n      <Loading text/>\n      <Loading text='自定义加载文本' size='large'/>\n    </div>\n  );\n}\n"},192:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},193:function(e,t){e.exports="## Loading 加载\n表示当前处于加载状态中。\n\n## 代码演示\n"},539:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),a=n(193),i=n(88),l=n(90),c=n(89),s=[{title:"API",json:[{props:"type",intro:"加载图标的样式",type:"'a' | 'b' | 'c' | 'd'",defaultValue:"a"},{props:"size",intro:"加载图标大小",type:"'small' | 'default' | 'large'",defaultValue:"default"},{props:"text",intro:"加载文本",type:"string | boolean",defaultValue:"-"},{props:"icon",intro:"自定义icon",type:"ReactNode",defaultValue:"-"},{props:"loading",intro:"加载状态",type:"boolean",defaultValue:"true"},{props:"color",intro:"图标颜色, 仅适用loading自带图标时候有效，自定义时请自行设置",type:"string",defaultValue:"-"}]}],u=n(7),p=function(){return r.createElement("div",null,r.createElement(u.r,{size:"small"}),r.createElement(u.r,{text:!0}),r.createElement(u.r,{text:"自定义加载文本",size:"large"}))},d=n(192),m=function(){return r.createElement("div",null,r.createElement(u.r,{text:"自定义加载文本",size:"large",type:"a"}),r.createElement(u.r,{text:"自定义加载文本",size:"large",type:"b"}),r.createElement(u.r,{text:"自定义加载文本",size:"large",type:"c"}),r.createElement(u.r,{text:"自定义icon颜色",size:"large",type:"d",color:"red"}),r.createElement(u.r,{text:"自定义icon图标",size:"large",icon:r.createElement(u.o,{type:"ios-refresh"})}))},f=n(190),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={value:!1},t}return o.__extends(t,e),t.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement(u.r,{text:"自定义加载文本",size:"small",loading:this.state.value},r.createElement(u.a,{type:"info",showIcon:!0,title:"消息提示文案"})),r.createElement("div",null,r.createElement(u.E,{checked:this.state.value,onChange:function(t){return e.setState({value:t})}})))},t}(r.Component),x=n(188),v=n(191),y=n(189),E=n(187),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement(i.a,{text:a}),r.createElement(l.a,{text:d,demo:r.createElement(p,null),code:v}),r.createElement(l.a,{text:f,demo:r.createElement(m,null),code:y}),r.createElement(l.a,{text:x,demo:r.createElement(g,null),code:E}),r.createElement(c.a,{api:s}))},t}(r.Component);t.default=h}}]);