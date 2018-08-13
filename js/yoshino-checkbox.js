(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{236:function(e,t){e.exports="import * as React from 'react';\nimport { Checkbox } from '../../../../components/';\n\nconst CheckboxGroup = Checkbox.Group;\n\nexport default class CheckboxDemo extends React.Component {\n  state = {\n    value: [1, 2],\n  }\n  \n  render() {\n    return (\n      <CheckboxGroup value={this.state.value} onChange={(value) => this.setState({value})}>\n        <Checkbox value={1}>番薯</Checkbox>\n        <Checkbox value={2} disabled>地瓜</Checkbox>\n        <Checkbox value={3}>铁板烧</Checkbox>\n      </CheckboxGroup>\n    );\n  }\n}\n"},237:function(e,t){e.exports="#### 受控组件"},238:function(e,t){e.exports="import * as React from 'react';\nimport { Checkbox } from '../../../../components/';\n\nconst CheckboxGroup = Checkbox.Group;\n\nexport default function() {\n  return (\n    <CheckboxGroup defaultValue={[3, 2]}>\n      <Checkbox value={1}>苹果</Checkbox>\n      <Checkbox value={2}>栗子</Checkbox>\n      <Checkbox value={3}>棒槌</Checkbox>\n    </CheckboxGroup>\n  );\n}\n"},239:function(e,t){e.exports="#### CheckboxGroup"},240:function(e,t){e.exports="import * as React from 'react';\nimport { Checkbox } from '../../../../components/';\n\nexport default class CheckboxDemo extends React.Component {\n  state = {\n    checked: false,\n  }\n  onChange = () => {\n    this.setState({checked: !this.state.checked})\n  }\n  render() {\n    return (\n      <div>\n        <Checkbox value={1} checked={this.state.checked} onChange={this.onChange}>苹果</Checkbox>\n      </div>\n    );\n  }\n}\n"},241:function(e,t){e.exports="#### 单个组件\n"},242:function(e,t){e.exports="## Checkbox 多选框\n用于从多个条件中筛选单个选项。\n\n## 代码演示\n"},491:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(242),c=n(59),r=n(61),l=n(60),u=[{title:"Checkbox.Group",json:[{props:"value",intro:"选中的值",type:"any[]",defaultValue:"-"},{props:"onChange",intro:"变化回调",type:"(values: any[]) => void;",defaultValue:"-"},{props:"defaultValue",intro:"默认选中值",type:"any[]",defaultValue:"[]"}]},{title:"Checkbox",json:[{props:"value",intro:"值",type:"any[]",defaultValue:"-"},{props:"onChange",intro:"变化回调",type:"(value: any) => void;",defaultValue:"-"},{props:"checked",intro:"是否选中",type:"boolean",defaultValue:"false"},{props:"disabled",intro:"是否禁用",type:"boolean",defaultValue:"false"}]}],s=n(8);class h extends o.Component{constructor(){super(...arguments),this.state={checked:!1},this.onChange=(()=>{this.setState({checked:!this.state.checked})})}render(){return o.createElement("div",null,o.createElement(s.i,{value:1,checked:this.state.checked,onChange:this.onChange},"苹果"))}}var p=n(241);const i=s.i.Group;var d=function(){return o.createElement(i,{defaultValue:[3,2]},o.createElement(s.i,{value:1},"苹果"),o.createElement(s.i,{value:2},"栗子"),o.createElement(s.i,{value:3},"棒槌"))},x=n(239);const C=s.i.Group;class k extends o.Component{constructor(){super(...arguments),this.state={value:[1,2]}}render(){return o.createElement(C,{value:this.state.value,onChange:e=>this.setState({value:e})},o.createElement(s.i,{value:1},"番薯"),o.createElement(s.i,{value:2,disabled:!0},"地瓜"),o.createElement(s.i,{value:3},"铁板烧"))}}var m=n(237);n.d(t,"default",function(){return E});const b=n(240),v=n(238),f=n(236);class E extends o.Component{render(){return o.createElement("div",null,o.createElement(c.a,{text:a}),o.createElement(r.a,{text:p,demo:o.createElement(h,null),code:b}),o.createElement(r.a,{text:x,demo:o.createElement(d,null),code:v}),o.createElement(r.a,{text:m,demo:o.createElement(k,null),code:f}),o.createElement(l.a,{api:u}))}}}}]);