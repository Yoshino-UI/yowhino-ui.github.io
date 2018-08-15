(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{239:function(e,t){e.exports="import * as React from 'react';\nimport { Avatar } from '../../../../components/';\n\nexport default function() {\n  return (\n    <div>\n      <div style={{display: 'flex', alignItems: 'center'}}>\n        <Avatar size='large' src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg'/>\n        <Avatar src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg'/>\n        <Avatar size='small' src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg'/>\n      </div>\n      <div style={{display: 'flex', alignItems: 'center'}}>\n        <Avatar shape='square' size='large' src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg'/>\n        <Avatar shape='square' src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg'/>\n        <Avatar shape='square' size='small' src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg'/>\n      </div>\n    </div>\n  );\n}\n"},240:function(e,t){e.exports="#### 自定义\n可以通过`src`自定义图片资源。"},241:function(e,t){e.exports="import * as React from 'react';\nimport { Avatar, Icon } from '../../../../components/';\n\nexport default function() {\n  return (\n    <div>\n      <div style={{display: 'flex', alignItems: 'center'}}>\n        <Avatar size='large'/>\n        <Avatar/>\n        <Avatar size='small'/>\n      </div>\n      <div style={{display: 'flex', alignItems: 'center'}}>\n        <Avatar size='large' icon={<Icon type='social-reddit'/>} shape='square' style={{backgroundColor: '#f06292', color: '#ffebee'}}/>\n        <Avatar shape='square' icon={<Icon type='social-reddit'/>}/>\n        <Avatar size='small' shape='square' icon={<Icon type='social-reddit'/>}/>\n      </div>\n    </div>\n  );\n}\n"},242:function(e,t){e.exports="#### 基本使用\n简单的基本使用。"},243:function(e,t){e.exports="## Avatar 头像\n用于表示用户头像信息。\n\n## 代码演示\n"},513:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n(243),r=n(86),l=n(88),i=n(87),p=[{title:"API",json:[{props:"size",intro:"头像尺寸",type:"'small' | 'default' | 'large'",defaultValue:"default"},{props:"shape",intro:"形状",type:"'circle' | 'square'",defaultValue:"circle"},{props:"icon",intro:"头像内容，也可以是文字",type:"ReactNode",defaultValue:"person"},{props:"src",intro:"图片资源",type:"string",defaultValue:"-"}]}],o=n(8),m=function(){return a.createElement("div",null,a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.createElement(o.c,{size:"large"}),a.createElement(o.c,null),a.createElement(o.c,{size:"small"})),a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.createElement(o.c,{size:"large",icon:a.createElement(o.o,{type:"social-reddit"}),shape:"square",style:{backgroundColor:"#f06292",color:"#ffebee"}}),a.createElement(o.c,{shape:"square",icon:a.createElement(o.o,{type:"social-reddit"})}),a.createElement(o.c,{size:"small",shape:"square",icon:a.createElement(o.o,{type:"social-reddit"})})))},d=n(242),u=function(){return a.createElement("div",null,a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.createElement(o.c,{size:"large",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"}),a.createElement(o.c,{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"}),a.createElement(o.c,{size:"small",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"})),a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.createElement(o.c,{shape:"square",size:"large",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"}),a.createElement(o.c,{shape:"square",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"}),a.createElement(o.c,{shape:"square",size:"small",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"})))},h=n(240),f=n(241),v=n(239),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement(r.a,{text:c}),a.createElement(l.a,{text:d,demo:a.createElement(m,null),code:f}),a.createElement(l.a,{text:h,demo:a.createElement(u,null),code:v}),a.createElement(i.a,{api:p}))},t}(a.Component);t.default=g}}]);