(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{224:function(t,n){t.exports="import * as React from 'react';\nimport { Pagination } from '@yoshino/components/';\n\nexport default class App extends React.Component {\n  state = {\n    current: 1,\n  };\n\n  render() {\n    return (\n      <Pagination\n        current={this.state.current}\n        total={200}\n        onChange={(current) => {\n          this.setState({current});\n        }}\n        next='下一页'\n        previous='上一页'\n      />\n    );\n  }\n}\n"},225:function(t,n){t.exports="#### 受控组件\n受控组件\n"},226:function(t,n){t.exports="import * as React from 'react';\nimport { Pagination } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <Pagination total={50}/>\n  );\n}\n"},227:function(t,n){t.exports="#### 基本使用\n简单的基本使用。\n"},228:function(t,n){t.exports="## Pagination 分页\n用于分割多页内容。\n\n## 代码演示\n"},541:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(0),a=e(228),u=e(88),i=e(90),p=e(89),c=[{title:"API",json:[{props:"current",intro:"当前页数",type:"number",defaultValue:"-"},{props:"defaultCurrent",intro:"默认当前页数",type:"number",defaultValue:"1"},{props:"pageSize",intro:"每页条数",type:"number",defaultValue:"10"},{props:"total",intro:"总条数",type:"nuumber",defaultValue:"-"},{props:"max",intro:"显示页码块最多的个数",type:"number",defaultValue:"5"},{props:"next",intro:"自定义文本-下一页",type:"string | ReactNode",defaultValue:"-"},{props:"previous",intro:"自定义文本-上一页",type:"string | ReactNode",defaultValue:"-"},{props:"onChange",intro:"页码改变回调",type:"(current: number, pageSize: number) => void",defaultValue:"-"}]}],s=e(7),l=function(){return o.createElement(s.x,{total:50})},m=e(227),f=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={current:1},n}return r.__extends(n,t),n.prototype.render=function(){var t=this;return o.createElement(s.x,{current:this.state.current,total:200,onChange:function(n){t.setState({current:n})},next:"下一页",previous:"上一页"})},n}(o.Component),d=e(225),x=e(226),h=e(224),y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(n,t),n.prototype.render=function(){return o.createElement("div",null,o.createElement(u.a,{text:a}),o.createElement(i.a,{text:m,demo:o.createElement(l,null),code:x}),o.createElement(i.a,{text:d,demo:o.createElement(f,null),code:h}),o.createElement(p.a,{api:c}))},n}(o.Component);n.default=y}}]);