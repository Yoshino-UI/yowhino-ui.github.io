(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{152:function(n,t){n.exports="import * as React from 'react';\nimport { Notification as notification, Button} from '@yoshino/components/';\n\nexport default function() {\n  const open = () => {\n    notification.open({\n      title: 'open',\n      message: '一般的通知, duration时间长，可以通过close关闭',\n      duration: 99999999,\n      key: 111,\n    });\n  };\n\n  const placement = () => {\n    notification.config({\n      placement: 'topLeft',\n    });\n  };\n\n  const close = () => {\n    notification.close(111);\n  };\n\n  return (\n    <div>\n      <Button onClick={open}>打开一个带有key的通知</Button>\n      <Button onClick={close}>关闭</Button>\n      <Button onClick={placement}>修改placement</Button>\n    </div>\n  );\n}\n"},153:function(n,t){n.exports="#### config配置\n通知`placenebr`默认`topRight`后自动关闭，可以通过`config`配置修改默认值。"},154:function(n,t){n.exports="import * as React from 'react';\nimport { Notification as notification, Button, Icon } from '@yoshino/components/';\n\nexport default function() {\n  const open = () => {\n    notification.open({\n      title: 'open',\n      message: '一般的通知',\n    });\n  };\n\n  const openIcon = () => {\n    notification.open({\n      title: '带有图标的open',\n      message: '你的项目收到一个新的通知',\n      icon: <Icon type='social-github'/>,\n    });\n  };\n\n  const success = () => {\n    notification.success({\n      title: 'success',\n      message: 'success success success!',\n    });\n  };\n\n  const info = () => {\n    notification.info({\n      title: 'info',\n      message: 'info info info!',\n    });\n  };\n\n  const warn = () => {\n    notification.warn({\n      title: 'warn',\n      message: 'warn warn warn!',\n    });\n  };\n\n  const error = () => {\n    notification.error({\n      title: 'error',\n      message: 'error error error!',\n    });\n  };\n\n  const destroy = () => {\n    notification.destroy();\n  };\n\n  return (\n    <div>\n      <Button onClick={open}>open</Button>\n      <Button onClick={openIcon}>自定义icon</Button>\n      <Button onClick={success}>success</Button>\n      <Button onClick={info}>info</Button>\n      <Button onClick={warn}>warn</Button>\n      <Button onClick={error}>error</Button>\n      <Button onClick={destroy}>点我清空所有notification</Button>\n    </div>\n  );\n}\n"},155:function(n,t){n.exports="#### 基本使用\n一般通知使用`open`，带有类别以及图标的通知为分别为`success`、`info`、`warning`、`error`，可以使用`destroy`清空所有通知，也可以使用`close`传入`key`关闭指定的通知。通知默认`5 秒`后自动关闭，可以通过`config`配置修改默认值，也可以作为参数传入。"},156:function(n,t){n.exports="提供全局配置方法，在调用前提前配置，全局一次生效。\n\n- notification.config(options)\n\n```jsx\nnotification.config({\n  placement: 'topLeft',\n  duration: 2000,\n});\n```"},157:function(n,t){n.exports="- notification.open(config)\n- notification.success(config)\n- notification.error(config)\n- notification.info(config)\n- notification.warn(config)\n- notification.close(key: String)\n- notification.destroy()\n\n`open`、`success`、`error`、`info`、`warn`都会返回一个`key`，用于`close`方法来关闭制定窗口。\n\nconfig 参数如下："},158:function(n,t){n.exports="## Notification 通知提醒框\n一般用于展示提醒信息。\n\n## 代码演示\n"},530:function(n,t,o){"use strict";o.r(t);var e=o(1),i=o(0),c=o(158),r=o(88),s=o(90),a=o(89),l=[{title:"API",intro:o(157),json:[{props:"key",intro:"当前通知唯一标志",type:"string | number",defaultValue:"-"},{props:"duration",intro:"当前通知自动关闭时间，单位`ms`",type:"number",defaultValue:"5000"},{props:"icon",intro:"自定义图标",type:"ReactNode",defaultValue:"-"},{props:"message",intro:"通知信息详情",type:"ReactNode | string",defaultValue:"-"},{props:"title",intro:"通知信息标题",type:"ReactNode | string",defaultValue:"-"},{props:"onClose",intro:"点击关闭按钮时触发的回调函数",type:"() => void",defaultValue:"-"}]},{title:"API - 全局配置",intro:o(156),json:[{props:"vertical",intro:"竖直方向距离浏览器窗口间距，等同于`top`、`bottom`，单位`px`",type:"number",defaultValue:"24"},{props:"horizontal",intro:"水平方向距离浏览器窗口间距，等同于`left`、`right`，单位`px`",type:"number",defaultValue:"24"},{props:"duration",intro:"当前通知自动关闭时间，单位`ms`",type:"number",defaultValue:"5000"},{props:"placement",intro:"通知框位置",type:"`topLeft` | `topRight` | `bottomLeft` | `bottomRight`",defaultValue:"topRight"}]}],u=o(7),f=function(){return i.createElement("div",null,i.createElement(u.g,{onClick:function(){u.v.open({title:"open",message:"一般的通知"})}},"open"),i.createElement(u.g,{onClick:function(){u.v.open({title:"带有图标的open",message:"你的项目收到一个新的通知",icon:i.createElement(u.o,{type:"social-github"})})}},"自定义icon"),i.createElement(u.g,{onClick:function(){u.v.success({title:"success",message:"success success success!"})}},"success"),i.createElement(u.g,{onClick:function(){u.v.info({title:"info",message:"info info info!"})}},"info"),i.createElement(u.g,{onClick:function(){u.v.warn({title:"warn",message:"warn warn warn!"})}},"warn"),i.createElement(u.g,{onClick:function(){u.v.error({title:"error",message:"error error error!"})}},"error"),i.createElement(u.g,{onClick:function(){u.v.destroy()}},"点我清空所有notification"))},p=o(155),m=function(){return i.createElement("div",null,i.createElement(u.g,{onClick:function(){u.v.open({title:"open",message:"一般的通知, duration时间长，可以通过close关闭",duration:99999999,key:111})}},"打开一个带有key的通知"),i.createElement(u.g,{onClick:function(){u.v.close(111)}},"关闭"),i.createElement(u.g,{onClick:function(){u.v.config({placement:"topLeft"})}},"修改placement"))},g=o(153),d=o(154),k=o(152),y=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return e.__extends(t,n),t.prototype.render=function(){return i.createElement("div",null,i.createElement(r.a,{text:c}),i.createElement(s.a,{text:p,demo:i.createElement(f,null),code:d}),i.createElement(s.a,{text:g,demo:i.createElement(m,null),code:k}),i.createElement(a.a,{api:l}))},t}(i.Component);t.default=y}}]);