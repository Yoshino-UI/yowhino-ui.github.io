(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{465:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(90),r=n(59),c=n(61),o=n(60),l=[{title:"API - ClickOutside",intro:"Helpers.ClickOutside",json:[{props:"clickOutside",intro:"点击外部回调",type:"() => void",defaultValue:"-"},{props:"clickInside",intro:"点击内部回调",type:"() => void",defaultValue:"-"}]}],a=n(8);n(89);const{ClickOutside:d}=a.m;class u extends i.Component{constructor(){super(...arguments),this.state={in:!1}}render(){return i.createElement("div",null,i.createElement(d,{clickOutside:()=>{this.setState({in:!1})},clickInside:()=>{this.setState({in:!0})}},i.createElement("div",{className:"helpers-click-outside-demo-box"},this.state.in?"点击了内部":"点击了外部")))}}var p=n(87);n.d(t,"default",function(){return h});const m=n(86);class h extends i.Component{render(){return i.createElement("div",null,i.createElement(r.a,{text:s}),i.createElement(c.a,{text:p,demo:i.createElement(u,null),code:m}),i.createElement(o.a,{api:l}))}}},86:function(e,t){e.exports="import * as React from 'react';\nimport { Helpers } from '../../../../components/';\nimport './index.less';\n\nconst {ClickOutside} = Helpers;\n\nexport default class App extends React.Component {\n  state = {\n    in: false,\n  }\n  render() {\n    return (\n      <div>\n        <ClickOutside \n          clickOutside={() => {\n            this.setState({\n              in: false,\n            });\n          }}\n          clickInside={() => {\n            this.setState({\n              in: true,\n            })\n          }}\n        >\n          <div className={'helpers-click-outside-demo-box'}>{this.state.in ? '点击了内部' : '点击了外部'}</div>\n        </ClickOutside>\n      </div>\n    )\n  }\n}\n"},87:function(e,t){e.exports="#### ClickOutside\n"},88:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,".helpers-click-outside-demo-box {\n  width: 12.5rem;\n  background: #51b26d;\n  color: white;\n  text-align: center;\n  margin-top: 0.625rem;\n  height: 12.5rem;\n  line-height: 12.5rem;\n}",""])},89:function(e,t,n){var i=n(88);"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0};n(15)(i,s);i.locals&&(e.exports=i.locals)},90:function(e,t){e.exports="## Helpers \n\n\n## 代码演示\n"}}]);