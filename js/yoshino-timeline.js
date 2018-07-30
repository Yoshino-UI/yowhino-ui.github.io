(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{148:function(e,n){e.exports='import * as React from \'react\';\nimport { Timeline, Icon } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <Timeline lineColor="black" lineType="dashed">\n      <Timeline.Item iconColor="red" iconType="dotted">\n        <span>发布1.0版本</span>\n      </Timeline.Item>\n      <Timeline.Item lineType="solid">\n        <span>发布1.1版本</span>\n      </Timeline.Item>\n      <Timeline.Item icon={<Icon type="social-twitter-outline"/>}>\n        <span>自定义图标</span>\n      </Timeline.Item>\n      <Timeline.Item lineColor="#3476db">\n        <span>发布2.0版本</span>\n      </Timeline.Item>\n      <Timeline.Item iconColor="blue">\n        <span>发布2.1版本</span>\n      </Timeline.Item>\n      <Timeline.Item iconLine="5">\n        <span>发布2.2版本</span>\n      </Timeline.Item>\n    </Timeline>\n  )\n}\n'},149:function(e,n){e.exports="#### 自定义\n你可以自定义每个子项不同的表现形式。\n"},150:function(e,n){e.exports='import * as React from \'react\';\nimport { Timeline } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <Timeline>\n      <Timeline.Item time="2017年 4月 4日">\n        <span>清明节</span>\n      </Timeline.Item>\n      <Timeline.Item time="2017年 5月 1日">\n        <span>劳动节</span>\n      </Timeline.Item>\n      <Timeline.Item time="2017年 6月 1日">\n        <span>儿童节</span>\n      </Timeline.Item>\n      <Timeline.Item time="2017年 8月 1日">\n        <span>建军节</span>\n      </Timeline.Item>\n      <Timeline.Item time="2017年 10月 1日">\n        <span>国庆节</span>\n      </Timeline.Item>\n      <Timeline.Item time="2017年 11月 11日">\n        <span>光棍节</span>\n      </Timeline.Item>\n      <Timeline.Item>\n        <span>更多</span>\n      </Timeline.Item>\n    </Timeline>\n  )\n}\n'},151:function(e,n){e.exports="#### 基本使用\n简单的基本使用。\n"},152:function(e,n){e.exports="## Timeline 时间轴\n用于展示不同时间节点上的信息。\n\n`Timeline`组件用于按时间顺序展示信息\n\n`Timeline`必须和`Timeline.Item`一起使用!\n\n如果不为`Timeline.Item`设定属性，那么`Timeline.Item`对应的属性将从`Timeline`处继承。\n\n## 代码演示\n"},464:function(e,n,t){"use strict";t.r(n);var i=t(0),l=t(152),o=t(57),m=t(59),a=t(58),r=[{title:"Timeline",json:[{props:"iconWidth",intro:"图标宽度",type:"number",defaultValue:"15"},{props:"iconColor",intro:"图标颜色",type:"string",defaultValue:"-"},{props:"iconType",intro:"图标类型",type:"'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'",defaultValue:"solid"},{props:"iconLine",intro:"图标线",type:"string",defaultValue:"2"},{props:"lineColor",intro:"线条颜色",type:"string",defaultValue:"-"},{props:"lineType",intro:"线条类型",type:"'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'",defaultValue:"solid"},{props:"lineWidth",intro:"线条宽度",type:"number",defaultValue:"2"}]},{title:"Timeline.Item",json:[{props:"iconColor",intro:"图标颜色",type:"string",defaultValue:"-"},{props:"iconType",intro:"图标类型",type:"'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'",defaultValue:"-"},{props:"iconLine",intro:"图标线",type:"string",defaultValue:"-"},{props:"lineColor",intro:"线条颜色",type:"string",defaultValue:"-"},{props:"lineType",intro:"线条类型",type:"'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'",defaultValue:"-"},{props:"time",intro:"时间",type:"string",defaultValue:"-"},{props:"icon",intro:"自定义图标",type:"ReactNode",defaultValue:"-"}]}],p=t(8),s=function(){return i.createElement(p.E,null,i.createElement(p.E.Item,{time:"2017年 4月 4日"},i.createElement("span",null,"清明节")),i.createElement(p.E.Item,{time:"2017年 5月 1日"},i.createElement("span",null,"劳动节")),i.createElement(p.E.Item,{time:"2017年 6月 1日"},i.createElement("span",null,"儿童节")),i.createElement(p.E.Item,{time:"2017年 8月 1日"},i.createElement("span",null,"建军节")),i.createElement(p.E.Item,{time:"2017年 10月 1日"},i.createElement("span",null,"国庆节")),i.createElement(p.E.Item,{time:"2017年 11月 11日"},i.createElement("span",null,"光棍节")),i.createElement(p.E.Item,null,i.createElement("span",null,"更多")))},c=t(151),u=function(){return i.createElement(p.E,{lineColor:"black",lineType:"dashed"},i.createElement(p.E.Item,{iconColor:"red",iconType:"dotted"},i.createElement("span",null,"发布1.0版本")),i.createElement(p.E.Item,{lineType:"solid"},i.createElement("span",null,"发布1.1版本")),i.createElement(p.E.Item,{icon:i.createElement(p.n,{type:"social-twitter-outline"})},i.createElement("span",null,"自定义图标")),i.createElement(p.E.Item,{lineColor:"#3476db"},i.createElement("span",null,"发布2.0版本")),i.createElement(p.E.Item,{iconColor:"blue"},i.createElement("span",null,"发布2.1版本")),i.createElement(p.E.Item,{iconLine:"5"},i.createElement("span",null,"发布2.2版本")))},d=t(149);t.d(n,"default",function(){return I});const E=t(150),T=t(148);class I extends i.Component{render(){return i.createElement("div",null,i.createElement(o.a,{text:l}),i.createElement(m.a,{text:c,demo:i.createElement(s,null),code:E}),i.createElement(m.a,{text:d,demo:i.createElement(u,null),code:T}),i.createElement(a.a,{api:r}))}}}}]);