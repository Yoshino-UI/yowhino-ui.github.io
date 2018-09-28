(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(e,t){e.exports="import * as React from 'react';\nimport { Tabs } from '@yoshino/components/';\n\nconst { TabPane } = Tabs;\n\nexport default function() {\n  return (\n    <div>\n      <Tabs defaultActivetKey='tab1' type='card'>\n        <TabPane name='tab1'>Content 11111</TabPane>\n        <TabPane name='tab2' disabled>Content 22222</TabPane>\n        <TabPane name='tab3'>Content 33333</TabPane>\n        <TabPane name='tab4'>Content 44444</TabPane>\n        <TabPane name='tab5'>Content 55555</TabPane>\n      </Tabs>\n    </div>\n  );\n}\n"},127:function(e,t){e.exports="#### 卡片式页签\n卡片式的页签"},128:function(e,t){e.exports="import * as React from 'react';\nimport { Tabs, Select, Switch } from '@yoshino/components/';\n\nconst { TabPane } = Tabs;\nconst {Option} = Select;\n\nexport default class App extends React.Component {\n  postion = ['top', 'left', 'bottom', 'right'];\n  size = ['default', 'small', 'large'];\n  type = ['line', 'card'];\n\n  state: {\n    position: 'top' | 'left' | 'bottom' | 'right',\n    size: 'large' | 'small' | 'default',\n    animated: boolean,\n    type: 'line' | 'card',\n  } = {\n    position: 'left',\n    size: 'default',\n    animated: true,\n    type: 'line',\n  };\n\n  render() {\n    const {position, size, animated, type} = this.state;\n    return (\n      <div>\n        <span>tabPosition:</span>\n        <Select\n          value={position}\n          style={{width: 100, marginBottom: 10, marginRight: 20}}\n          onChange={(v) => this.setState({position: v})}\n        >\n          {this.postion.map((item, index) => <Option value={item} key={index}>{item}</Option>)}\n        </Select>\n        <span>size:</span>\n        <Select\n          value={size}\n          style={{width: 100, marginBottom: 10, marginRight: 20}}\n          onChange={(v) => this.setState({size: v})}\n        >\n          {this.size.map((item, index) => <Option value={item} key={index}>{item}</Option>)}\n        </Select>\n        <span>type:</span>\n        <Select\n          value={type}\n          style={{width: 140, marginBottom: 10, marginRight: 20}}\n          onChange={(v) => this.setState({type: v})}\n        >\n          {this.type.map((item, index) => <Option value={item} key={index}>{item}</Option>)}\n        </Select>\n        <span>animated:</span>\n        <Switch checked={animated} onChange={(v) => this.setState({animated: v})}/>\n        <Tabs defaultActivetKey='tab1' tabPosition={position} size={size} animated={animated} type={type}>\n          <TabPane name='tab1'>Content 11111</TabPane>\n          <TabPane name='tab2' disabled>Content 22222</TabPane>\n          <TabPane name='tab3'>Content 33333</TabPane>\n          <TabPane name='tab4'>Content 44444</TabPane>\n          <TabPane name='tab5'>Content 55555</TabPane>\n        </Tabs>\n      </div>\n    );\n  }\n}\n"},129:function(e,t){e.exports="#### 基本使用\n可以通过`tabPosition`来设置`left`、`top`、`bottom`、`right`来设置`tab`的位置；可以通过`size`控制大小；可以通过`animated`开开关过渡动画。\n"},130:function(e,t){e.exports="## Tabs \n选项卡切换组件，一般用于平级区域大块内容的的收纳和展现。\n\n## 代码演示\n"},552:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),o=n(130),l=n(88),r=n(90),s=n(89),m=[{title:"API -Tabs",json:[{props:"activeKey",intro:"当前激活 tab 面板的 key， 对应`name`",type:"`string` | `number`",defaultValue:"-"},{props:"defaultActivetKey",intro:"当前激活 tab 面板的 key， 对应name",type:"`string` | `number`",defaultValue:"-"},{props:"onChange",intro:"面板切换回调",type:"(activeKey: `string` | `number`) => void",defaultValue:""},{props:"type",intro:"标签页样式",type:"`line` | `card`",defaultValue:"`line`"},{props:"animated",intro:"是否启用动画",type:"boolean",defaultValue:"true"},{props:"size",intro:"大小",type:"`large` | `small` | `default`",defaultValue:"`default`"},{props:"tabBarGutter",intro:"TabPane间隙",type:"number",defaultValue:"-"},{props:"onTabClick",intro:"点击tab",type:"(name: `string` | `number`) => void",defaultValue:""},{props:"tabPosition",intro:"tab位置",type:"`left` | `right` | `top` | `bottom`",defaultValue:"top"}]},{title:"API -Tabs.TabPane",json:[{props:"name",intro:"选项标题，对应Tabs 的`activeKey`",type:"`string` | `number`",defaultValue:"-"},{props:"disabled",intro:"禁用",type:"boolean",defaultValue:"false"}]}],p=n(7),u=p.H.TabPane,c=p.C.Option,b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.postion=["top","left","bottom","right"],t.size=["default","small","large"],t.type=["line","card"],t.state={position:"left",size:"default",animated:!0,type:"line"},t}return a.__extends(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.position,a=t.size,o=t.animated,l=t.type;return i.createElement("div",null,i.createElement("span",null,"tabPosition:"),i.createElement(p.C,{value:n,style:{width:100,marginBottom:10,marginRight:20},onChange:function(t){return e.setState({position:t})}},this.postion.map(function(e,t){return i.createElement(c,{value:e,key:t},e)})),i.createElement("span",null,"size:"),i.createElement(p.C,{value:a,style:{width:100,marginBottom:10,marginRight:20},onChange:function(t){return e.setState({size:t})}},this.size.map(function(e,t){return i.createElement(c,{value:e,key:t},e)})),i.createElement("span",null,"type:"),i.createElement(p.C,{value:l,style:{width:140,marginBottom:10,marginRight:20},onChange:function(t){return e.setState({type:t})}},this.type.map(function(e,t){return i.createElement(c,{value:e,key:t},e)})),i.createElement("span",null,"animated:"),i.createElement(p.F,{checked:o,onChange:function(t){return e.setState({animated:t})}}),i.createElement(p.H,{defaultActivetKey:"tab1",tabPosition:n,size:a,animated:o,type:l},i.createElement(u,{name:"tab1"},"Content 11111"),i.createElement(u,{name:"tab2",disabled:!0},"Content 22222"),i.createElement(u,{name:"tab3"},"Content 33333"),i.createElement(u,{name:"tab4"},"Content 44444"),i.createElement(u,{name:"tab5"},"Content 55555")))},t}(i.Component),d=n(129),f=p.H.TabPane,y=function(){return i.createElement("div",null,i.createElement(p.H,{defaultActivetKey:"tab1",type:"card"},i.createElement(f,{name:"tab1"},"Content 11111"),i.createElement(f,{name:"tab2",disabled:!0},"Content 22222"),i.createElement(f,{name:"tab3"},"Content 33333"),i.createElement(f,{name:"tab4"},"Content 44444"),i.createElement(f,{name:"tab5"},"Content 55555")))},h=n(127),g=n(128),v=n(126),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){return i.createElement("div",null,i.createElement(l.a,{text:o}),i.createElement(r.a,{text:d,demo:i.createElement(b,null),code:g}),i.createElement(r.a,{text:h,demo:i.createElement(y,null),code:v}),i.createElement(s.a,{api:m}))},t}(i.Component);t.default=T}}]);