(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{258:function(e,t){e.exports="import * as React from 'react';\nimport { Collapse } from '@yoshino/components/';\n\nconst Panel = Collapse.Panel;\nexport default function() {\n  return (\n    <div>\n      <Collapse accordion>\n        <Panel title='this is title' key='1'>1111</Panel>\n        <Panel title='this is title' key='2'>1111</Panel>\n        <Panel title='this is title' key='3' disabled>1111</Panel>\n      </Collapse>\n    </div>\n  );\n}\n"},259:function(e,t){e.exports="#### 手风琴模式\n设置`accordion`，同时只能展开一个。\n"},260:function(e,t){e.exports="import * as React from 'react';\nimport { Collapse } from '@yoshino/components/';\n\nconst Panel = Collapse.Panel;\nexport default function() {\n  return (\n    <div>\n      <Collapse defaultActiveKeys={['3']}>\n        <Panel title='this is title' key='1'>1111</Panel>\n        <Panel title='this is title' key='2'>1111</Panel>\n        <Panel title='this is title' key='3'>1111</Panel>\n      </Collapse>\n    </div>\n  );\n}\n"},261:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},262:function(e,t){e.exports="## Collapse 折叠板\n可以放缩需要展示的内容区域。\n\n## 代码演示\n"},534:function(e,t,n){"use strict";n.r(t);var l=n(1),i=n(0),a=n(262),o=n(88),s=n(90),r=n(89),c=[{title:"Collapse",intro:"TKey: string",json:[{props:"activeKeys",intro:"受控 - 激活key",type:"TKey[]",defaultValue:"-"},{props:"defaultActiveKeys",intro:"非受控 - 激活key",type:"TKey[]",defaultValue:"[]"},{props:"accordion",intro:"手风琴模式，同时只能展开一个",type:"boolean",defaultValue:"false"},{props:"onChange",intro:"变化回调",type:"(activeKeys: TKey[]) => void",defaultValue:"-"}]},{title:"Collapse.Panel",json:[{props:"key",intro:"标记，对应activekey",type:"TKey",defaultValue:""},{props:"title",intro:"折叠板标题",type:"string | ReactNode",defaultValue:"-"},{props:"disabled",intro:"禁用",type:"boolean",defaultValue:"false"}]}],p=n(7),u=p.k.Panel,d=function(){return i.createElement("div",null,i.createElement(p.k,{defaultActiveKeys:["3"]},i.createElement(u,{title:"this is title",key:"1"},"1111"),i.createElement(u,{title:"this is title",key:"2"},"1111"),i.createElement(u,{title:"this is title",key:"3"},"1111")))},y=n(261),f=p.k.Panel,m=function(){return i.createElement("div",null,i.createElement(p.k,{accordion:!0},i.createElement(f,{title:"this is title",key:"1"},"1111"),i.createElement(f,{title:"this is title",key:"2"},"1111"),i.createElement(f,{title:"this is title",key:"3",disabled:!0},"1111")))},k=n(259),P=n(260),h=n(258),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l.__extends(t,e),t.prototype.render=function(){return i.createElement("div",null,i.createElement(o.a,{text:a}),i.createElement(s.a,{text:y,demo:i.createElement(d,null),code:P}),i.createElement(s.a,{text:k,demo:i.createElement(m,null),code:h}),i.createElement(r.a,{api:c}))},t}(i.Component);t.default=E}}]);