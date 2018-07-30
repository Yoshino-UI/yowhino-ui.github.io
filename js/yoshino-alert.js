(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t){e.exports='import * as React from \'react\';\nimport { Alert, Icon } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Alert\n        type="success"\n        showIcon\n        title="成功提示文案"\n        closable\n        onClose={() => alert(\'关闭了\')}\n      >\n        <span>成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案</span>\n      </Alert>\n      <Alert\n        type="info"\n        icon={<Icon type="paper-airplane"/>}\n        showIcon\n        closable\n        title="自定义文案"\n      />\n      <Alert type="info" showIcon title="消息提示文案"/>\n      <Alert type="warning" showIcon title="警告提示文案"/>\n      <Alert type="error" showIcon title="错误提示文案"/>\n    </div>\n  )\n}\n'},101:function(e,t){e.exports="#### 带图标\n可以通过`icon`设置图标，并且可以自定义`onClose`回调。\n\n"},102:function(e,t){e.exports='import * as React from \'react\';\nimport { Alert } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Alert type="success" title="成功提示文案"/>\n      <Alert type="info" title="消息提示文案"/>\n      <Alert type="warning" title="警告提示文案"/>\n      <Alert type="error" title="错误提示文案"/>\n    </div>\n  )\n}\n'},103:function(e,t){e.exports="#### 基本使用\n简单的基本使用，一共四种Ttype，`success`、 `info`、`warning`、`error`。\n"},104:function(e,t){e.exports="## Alert 提示\n用于页面提示用户一些需要关注的信息。\n\n## 代码演示\n"},451:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(104),l=n(57),a=n(59),c=n(58),i=[{title:"API",json:[{props:"type",intro:"提示类型",type:"'success' | 'info' | 'warning' | 'error'",defaultValue:"-"},{props:"closable",intro:"是否支持关闭",type:"boolean",defaultValue:"false"},{props:"showIcon",intro:"是否显示图标",type:"boolean",defaultValue:"false"},{props:"icon",intro:"自定义图标",type:"ReactNode",defaultValue:"-"},{props:"title",intro:"标题",type:"ReactNode | string",defaultValue:"-"},{props:"onClose",intro:"关闭回调",type:"() => void",defaultValue:"-"}]}],p=n(8),s=function(){return o.createElement("div",null,o.createElement(p.a,{type:"success",title:"成功提示文案"}),o.createElement(p.a,{type:"info",title:"消息提示文案"}),o.createElement(p.a,{type:"warning",title:"警告提示文案"}),o.createElement(p.a,{type:"error",title:"错误提示文案"}))},u=n(103),f=function(){return o.createElement("div",null,o.createElement(p.a,{type:"success",showIcon:!0,title:"成功提示文案",closable:!0,onClose:()=>alert("关闭了")},o.createElement("span",null,"成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案")),o.createElement(p.a,{type:"info",icon:o.createElement(p.n,{type:"paper-airplane"}),showIcon:!0,closable:!0,title:"自定义文案"}),o.createElement(p.a,{type:"info",showIcon:!0,title:"消息提示文案"}),o.createElement(p.a,{type:"warning",showIcon:!0,title:"警告提示文案"}),o.createElement(p.a,{type:"error",showIcon:!0,title:"错误提示文案"}))},m=n(101);n.d(t,"default",function(){return w});const d=n(102),y=n(100);class w extends o.Component{render(){return o.createElement("div",null,o.createElement(l.a,{text:r}),o.createElement(a.a,{text:u,demo:o.createElement(s,null),code:d}),o.createElement(a.a,{text:m,demo:o.createElement(f,null),code:y}),o.createElement(c.a,{api:i}))}}}}]);