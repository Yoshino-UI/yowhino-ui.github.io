(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(e,t){e.exports="import * as React from 'react';\nimport { Transitions, Switch } from '@yoshino/components/';\nimport './index.less';\n\nconst {Scale} = Transitions;\n\nexport default class App extends React.Component {\n  state = {\n    active: true,\n  };\n\n  onScale = (checked: boolean) => {\n    this.setState({\n      active: checked,\n    });\n  }\n\n  render() {\n    const height = 200;\n    const {active} = this.state;\n    const style: React.CSSProperties = {\n      height,\n      lineHeight: `${height}px`,\n    };\n    return (\n      <div style={{height: 300}}>\n        <Switch checked={active} onChange={this.onScale}>开/关</Switch>\n        <Scale\n          timeout={300}\n          active={active}\n        >\n          <div\n            className='transitions-expand-demo-box'\n            style={style}\n          >\n            放缩\n          </div>\n        </Scale>\n      </div>\n    );\n  }\n}\n"},146:function(e,t){e.exports="#### Scale 放缩"},147:function(e,t){e.exports="import * as React from 'react';\nimport { Transitions, Switch } from '@yoshino/components/';\nimport './index.less';\n\nconst {Slide} = Transitions;\n\nexport default class App extends React.Component {\n  state = {\n    active: true,\n  };\n\n  onSlide = (checked: boolean) => {\n    this.setState({\n      active: checked,\n    });\n  }\n\n  render() {\n    const {active} = this.state;\n    return (\n      <div>\n        <Switch checked={active} onChange={this.onSlide}>开/关</Switch>\n        <div className={'transitions-slide-demo-box'}>\n          <div>\n            <Slide\n              timeout={300}\n              active={active}\n              direction='top'\n            >\n              <div className={'transitions-slide-demo-top'}>top</div>\n            </Slide>\n            <Slide\n              timeout={300}\n              active={active}\n              direction='right'\n            >\n              <div className={'transitions-slide-demo-right'}>right</div>\n            </Slide>\n          </div>\n          <div>\n            <Slide\n              timeout={300}\n              active={active}\n              direction='left'\n            >\n              <div className={'transitions-slide-demo-left'}>left</div>\n            </Slide>\n            <Slide\n              timeout={300}\n              active={active}\n              direction='bottom'\n            >\n              <div className={'transitions-slide-demo-bottom'}>bottom</div>\n            </Slide>\n          </div>\n        </div>\n        <p>开启单方向滑动</p>\n        <div className={'transitions-slide-demo-box'}>\n          <div>\n            <Slide\n              single\n              timeout={300}\n              active={active}\n              direction='top'\n            >\n              <div className={'transitions-slide-demo-top'}>top</div>\n            </Slide>\n            <Slide\n              single\n              timeout={300}\n              active={active}\n              direction='right'\n            >\n              <div className={'transitions-slide-demo-right'}>right</div>\n            </Slide>\n          </div>\n          <div>\n            <Slide\n              single\n              timeout={300}\n              active={active}\n              direction='left'\n            >\n              <div className={'transitions-slide-demo-left'}>left</div>\n            </Slide>\n            <Slide\n              single\n              timeout={300}\n              active={active}\n              direction='bottom'\n            >\n              <div className={'transitions-slide-demo-bottom'}>bottom</div>\n            </Slide>\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n"},148:function(e,t){e.exports="#### Slide 划入、划出动画\n支持`left`、`right`、`top`、`bottom`四个方向。"},149:function(e,t){e.exports="import * as React from 'react';\nimport { Transitions, Button } from '@yoshino/components/';\nimport './index.less';\n\nconst {Expand} = Transitions;\n\nexport default class App extends React.Component {\n  state = {\n    active: false,\n  };\n\n  onExpand = () => {\n    const {active} = this.state;\n    this.setState({active: !active});\n  }\n\n  render() {\n    const height = 200;\n    const {active} = this.state;\n    const style: React.CSSProperties = {\n      height,\n      lineHeight: `${height}px`,\n    };\n    return (\n      <div style={{height: 300}}>\n        <Button onClick={this.onExpand}>展开折叠</Button>\n        <Expand\n          timeout={300}\n          active={active}\n        >\n          <div\n            className='transitions-expand-demo-box'\n            style={style}\n          >\n            高度是{height}px\n          </div>\n        </Expand>\n      </div>\n    );\n  }\n}\n"},150:function(e,t){e.exports="#### Expand 展开、折叠动画\n用于展开、折叠过度，让内容过度更加流畅。"},151:function(e,t){e.exports="## Transitions 过度动画\n`Transitions`是`yoshino`内部的一些通用过度动画，抽离出来供开发者使用。\n\n## 代码演示\n"},537:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(0),a=n(151),s=n(88),l=n(90),r=n(89),c=[{title:"API - Expand",intro:"Transitions.Expand",json:[{props:"timeout",intro:"动画时间",type:"number",defaultValue:"-"},{props:"active",intro:"激活状态",type:"boolean",defaultValue:"-"}]},{title:"API - Slide",intro:"Transitions.Slide",json:[{props:"appear",intro:"首次进入是否加载动画",type:"boolean",defaultValue:"true"},{props:"opacity",intro:"是否开启透明度变化",type:"boolean",defaultValue:"true"},{props:"single",intro:"是否单向进出",type:"boolean",defaultValue:"false"},{props:"timeout",intro:"动画时间",type:"number",defaultValue:"-"},{props:"active",intro:"激活状态",type:"boolean",defaultValue:"-"},{props:"direction",intro:"方向",type:"`left` | `top` | `right` | `bottom`",defaultValue:"-"}]}],d=n(7),m=(n(99),d.K.Expand),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={active:!1},t.onExpand=function(){var e=t.state.active;t.setState({active:!e})},t}return i.__extends(t,e),t.prototype.render=function(){var e=this.state.active,t={height:200,lineHeight:"200px"};return o.createElement("div",{style:{height:300}},o.createElement(d.g,{onClick:this.onExpand},"展开折叠"),o.createElement(m,{timeout:300,active:e},o.createElement("div",{className:"transitions-expand-demo-box",style:t},"高度是",200,"px")))},t}(o.Component),v=n(150),u=d.K.Slide,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={active:!0},t.onSlide=function(e){t.setState({active:e})},t}return i.__extends(t,e),t.prototype.render=function(){var e=this.state.active;return o.createElement("div",null,o.createElement(d.E,{checked:e,onChange:this.onSlide},"开/关"),o.createElement("div",{className:"transitions-slide-demo-box"},o.createElement("div",null,o.createElement(u,{timeout:300,active:e,direction:"top"},o.createElement("div",{className:"transitions-slide-demo-top"},"top")),o.createElement(u,{timeout:300,active:e,direction:"right"},o.createElement("div",{className:"transitions-slide-demo-right"},"right"))),o.createElement("div",null,o.createElement(u,{timeout:300,active:e,direction:"left"},o.createElement("div",{className:"transitions-slide-demo-left"},"left")),o.createElement(u,{timeout:300,active:e,direction:"bottom"},o.createElement("div",{className:"transitions-slide-demo-bottom"},"bottom")))),o.createElement("p",null,"开启单方向滑动"),o.createElement("div",{className:"transitions-slide-demo-box"},o.createElement("div",null,o.createElement(u,{single:!0,timeout:300,active:e,direction:"top"},o.createElement("div",{className:"transitions-slide-demo-top"},"top")),o.createElement(u,{single:!0,timeout:300,active:e,direction:"right"},o.createElement("div",{className:"transitions-slide-demo-right"},"right"))),o.createElement("div",null,o.createElement(u,{single:!0,timeout:300,active:e,direction:"left"},o.createElement("div",{className:"transitions-slide-demo-left"},"left")),o.createElement(u,{single:!0,timeout:300,active:e,direction:"bottom"},o.createElement("div",{className:"transitions-slide-demo-bottom"},"bottom")))))},t}(o.Component),x=n(148),f=d.K.Scale,g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={active:!0},t.onScale=function(e){t.setState({active:e})},t}return i.__extends(t,e),t.prototype.render=function(){var e=this.state.active,t={height:200,lineHeight:"200px"};return o.createElement("div",{style:{height:300}},o.createElement(d.E,{checked:e,onChange:this.onScale},"开/关"),o.createElement(f,{timeout:300,active:e},o.createElement("div",{className:"transitions-expand-demo-box",style:t},"放缩")))},t}(o.Component),E=n(146),S=n(149),b=n(147),y=n(145),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.render=function(){return o.createElement("div",null,o.createElement(s.a,{text:a}),o.createElement(l.a,{text:v,demo:o.createElement(p,null),code:S}),o.createElement(l.a,{text:x,demo:o.createElement(h,null),code:b}),o.createElement(l.a,{text:E,demo:o.createElement(g,null),code:y}),o.createElement(r.a,{api:c}))},t}(o.Component);t.default=N},93:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,".transitions-expand-demo-box {\n  width: 200px;\n  background: #51b26d;\n  color: white;\n  text-align: center;\n  margin-top: 10px;\n}\n.transitions-slide-demo-box {\n  height: 220px;\n}\n.transitions-slide-demo-left,\n.transitions-slide-demo-right,\n.transitions-slide-demo-top,\n.transitions-slide-demo-bottom {\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  width: 200px;\n  height: 100px;\n  background: #51b26d;\n  color: white;\n  line-height: 100px;\n  text-align: center;\n  font-size: 24px;\n}\n",""])},99:function(e,t,n){var i=n(93);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0},a=n(13)(i,o);i.locals&&(e.exports=i.locals),i.locals||e.hot.accept(93,function(t){var i;"string"==typeof(i=n(93))&&(i=[[e.i,i,""]]),a(i)}),e.hot.dispose(function(){a()});var s=n(12)(e.i,{fileMap:"{fileName}"});e.hot.dispose(s)}}]);