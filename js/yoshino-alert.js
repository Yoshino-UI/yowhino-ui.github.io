(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{159:function(e,t){e.exports="import * as React from 'react';\nimport { Alert, Icon } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Alert\n        type='success'\n        showIcon\n        title='成功提示文案'\n        closable\n        onClose={() => alert('关闭了')}\n      >\n        <span>成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案</span>\n      </Alert>\n      <Alert\n        type='info'\n        icon={<Icon type='paper-airplane'/>}\n        showIcon\n        closable\n        title='自定义文案'\n      />\n      <Alert type='info' showIcon title='消息提示文案'/>\n      <Alert type='warning' showIcon title='警告提示文案'/>\n      <Alert type='error' showIcon title='错误提示文案'/>\n    </div>\n  );\n}\n"},160:function(e,t){e.exports="#### 带图标\n可以通过`icon`设置图标，并且可以自定义`onClose`回调。\n\n"},161:function(e,t){e.exports="import * as React from 'react';\nimport { Alert } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Alert type='success' title='成功提示文案'/>\n      <Alert type='info' title='消息提示文案'/>\n      <Alert type='warning' title='警告提示文案'/>\n      <Alert type='error' title='错误提示文案'/>\n    </div>\n  );\n}\n"},162:function(e,t){e.exports="#### 基本使用\n简单的基本使用，一共四种Ttype，`success`、 `info`、`warning`、`error`。\n"},163:function(e,t){e.exports="## Alert 提示\n用于页面提示用户一些需要关注的信息。\n\n## 代码演示\n"},529:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),l=n(163),a=n(88),c=n(90),i=n(89),p=[{title:"API",json:[{props:"type",intro:"提示类型",type:"'success' | 'info' | 'warning' | 'error'",defaultValue:"-"},{props:"closable",intro:"是否支持关闭",type:"boolean",defaultValue:"false"},{props:"showIcon",intro:"是否显示图标",type:"boolean",defaultValue:"false"},{props:"icon",intro:"自定义图标",type:"ReactNode",defaultValue:"-"},{props:"title",intro:"标题",type:"ReactNode | string",defaultValue:"-"},{props:"onClose",intro:"关闭回调",type:"() => void",defaultValue:"-"}]}],s=n(7),u=function(){return r.createElement("div",null,r.createElement(s.a,{type:"success",title:"成功提示文案"}),r.createElement(s.a,{type:"info",title:"消息提示文案"}),r.createElement(s.a,{type:"warning",title:"警告提示文案"}),r.createElement(s.a,{type:"error",title:"错误提示文案"}))},f=n(162),m=function(){return r.createElement("div",null,r.createElement(s.a,{type:"success",showIcon:!0,title:"成功提示文案",closable:!0,onClose:function(){return alert("关闭了")}},r.createElement("span",null,"成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案")),r.createElement(s.a,{type:"info",icon:r.createElement(s.o,{type:"paper-airplane"}),showIcon:!0,closable:!0,title:"自定义文案"}),r.createElement(s.a,{type:"info",showIcon:!0,title:"消息提示文案"}),r.createElement(s.a,{type:"warning",showIcon:!0,title:"警告提示文案"}),r.createElement(s.a,{type:"error",showIcon:!0,title:"错误提示文案"}))},y=n(160),d=n(161),w=n(159),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement(a.a,{text:l}),r.createElement(c.a,{text:f,demo:r.createElement(u,null),code:d}),r.createElement(c.a,{text:y,demo:r.createElement(m,null),code:w}),r.createElement(i.a,{api:p}))},t}(r.Component);t.default=E}}]);