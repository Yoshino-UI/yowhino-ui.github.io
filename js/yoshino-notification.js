(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{175:function(n,t){n.exports="import * as React from 'react';\nimport { Notification as notification, Button} from '@yoshino/components/';\n\nexport default function() {\n  const open = () => {\n    notification.open({\n      title: 'open',\n      message: '一般的通知, duration时间长，可以通过close关闭',\n      duration: 99999999,\n      key: 111,\n    });\n  };\n\n  const placement = () => {\n    notification.config({\n      placement: 'topLeft',\n    });\n  };\n\n  const close = () => {\n    notification.close(111);\n  };\n\n  return (\n    <div>\n      <Button onClick={open}>打开一个带有key的通知</Button>\n      <Button onClick={close}>关闭</Button>\n      <Button onClick={placement}>修改placement</Button>\n    </div>\n  );\n}\n"},176:function(n,t){n.exports="#### config配置\n通知`placenebr`默认`topRight`后自动关闭，可以通过`config`配置修改默认值。"},177:function(n,t){n.exports="import * as React from 'react';\nimport { Notification as notification, Button, Icon } from '@yoshino/components/';\n\nexport default function() {\n  const open = () => {\n    notification.open({\n      title: 'open',\n      message: '一般的通知',\n    });\n  };\n\n  const openIcon = () => {\n    notification.open({\n      title: '带有图标的open',\n      message: '你的项目收到一个新的通知',\n      icon: <Icon type='social-github'/>,\n    });\n  };\n\n  const success = () => {\n    notification.success({\n      title: 'success',\n      message: 'success success success!',\n    });\n  };\n\n  const info = () => {\n    notification.info({\n      title: 'info',\n      message: 'info info info!',\n    });\n  };\n\n  const warn = () => {\n    notification.warn({\n      title: 'warn',\n      message: 'warn warn warn!',\n    });\n  };\n\n  const error = () => {\n    notification.error({\n      title: 'error',\n      message: 'error error error!',\n    });\n  };\n\n  const destroy = () => {\n    notification.destroy();\n  };\n\n  return (\n    <div>\n      <Button onClick={open}>open</Button>\n      <Button onClick={openIcon}>自定义icon</Button>\n      <Button onClick={success}>success</Button>\n      <Button onClick={info}>info</Button>\n      <Button onClick={warn}>warn</Button>\n      <Button onClick={error}>error</Button>\n      <Button onClick={destroy}>点我清空所有notification</Button>\n    </div>\n  );\n}\n"},178:function(n,t){n.exports="#### 基本使用\n一般通知使用`open`，带有类别以及图标的通知为分别为`success`、`info`、`warning`、`error`，可以使用`destroy`清空所有通知，也可以使用`close`传入`key`关闭指定的通知。通知默认`5 秒`后自动关闭，可以通过`config`配置修改默认值，也可以作为参数传入。"},179:function(n,t){n.exports="提供全局配置方法，在调用前提前配置，全局一次生效。\n\n- notification.config(options)\n\n```jsx\nnotification.config({\n  placement: 'topLeft',\n  duration: 2000,\n});\n```"},180:function(n,t){n.exports="- notification.open(config)\n- notification.success(config)\n- notification.error(config)\n- notification.info(config)\n- notification.warn(config)\n- notification.close(key: String)\n- notification.destroy()\n\n`open`、`success`、`error`、`info`、`warn`都会返回一个`key`，用于`close`方法来关闭制定窗口。\n\nconfig 参数如下："},181:function(n,t){n.exports="## Notification 通知提醒框\n一般用于展示提醒信息。\n\n## 代码演示\n"},550:function(n,t,e){"use strict";e.r(t);var o=e(1),i=e(0),c=e(181),r=e(88),s=e(90),a=e(89),l=[{title:"API",intro:e(180),json:[{props:"key",intro:"当前通知唯一标志",type:"string | number",defaultValue:"-"},{props:"duration",intro:"当前通知自动关闭时间，单位`ms`",type:"number",defaultValue:"5000"},{props:"icon",intro:"自定义图标",type:"ReactNode",defaultValue:"-"},{props:"message",intro:"通知信息详情",type:"ReactNode | string",defaultValue:"-"},{props:"title",intro:"通知信息标题",type:"ReactNode | string",defaultValue:"-"},{props:"onClose",intro:"点击关闭按钮时触发的回调函数",type:"() => void",defaultValue:"-"}]},{title:"API - 全局配置",intro:e(179),json:[{props:"vertical",intro:"竖直方向距离浏览器窗口间距，等同于`top`、`bottom`，单位`px`",type:"number",defaultValue:"24"},{props:"horizontal",intro:"水平方向距离浏览器窗口间距，等同于`left`、`right`，单位`px`",type:"number",defaultValue:"24"},{props:"duration",intro:"当前通知自动关闭时间，单位`ms`",type:"number",defaultValue:"5000"},{props:"placement",intro:"通知框位置",type:"`topLeft` | `topRight` | `bottomLeft` | `bottomRight`",defaultValue:"topRight"}]}],u=e(7),f=function(){return i.createElement("div",null,i.createElement(u.g,{onClick:function(){u.w.open({title:"open",message:"一般的通知"})}},"open"),i.createElement(u.g,{onClick:function(){u.w.open({title:"带有图标的open",message:"你的项目收到一个新的通知",icon:i.createElement(u.p,{type:"social-github"})})}},"自定义icon"),i.createElement(u.g,{onClick:function(){u.w.success({title:"success",message:"success success success!"})}},"success"),i.createElement(u.g,{onClick:function(){u.w.info({title:"info",message:"info info info!"})}},"info"),i.createElement(u.g,{onClick:function(){u.w.warn({title:"warn",message:"warn warn warn!"})}},"warn"),i.createElement(u.g,{onClick:function(){u.w.error({title:"error",message:"error error error!"})}},"error"),i.createElement(u.g,{onClick:function(){u.w.destroy()}},"点我清空所有notification"))},p=e(178),m=function(){return i.createElement("div",null,i.createElement(u.g,{onClick:function(){u.w.open({title:"open",message:"一般的通知, duration时间长，可以通过close关闭",duration:99999999,key:111})}},"打开一个带有key的通知"),i.createElement(u.g,{onClick:function(){u.w.close(111)}},"关闭"),i.createElement(u.g,{onClick:function(){u.w.config({placement:"topLeft"})}},"修改placement"))},g=e(176),d=e(177),w=e(175),k=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return o.__extends(t,n),t.prototype.render=function(){return i.createElement("div",null,i.createElement(r.a,{text:c}),i.createElement(s.a,{text:p,demo:i.createElement(f,null),code:d}),i.createElement(s.a,{text:g,demo:i.createElement(m,null),code:w}),i.createElement(a.a,{api:l}))},t}(i.Component);t.default=k}}]);