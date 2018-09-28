(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t){e.exports="import * as React from 'react';\nimport { Select } from '@yoshino/components/';\n\nconst {Option} = Select;\nexport default function() {\n  return (\n    <div>\n      <Select mode='multiple' size='large' defaultValue={['灼眼的夏娜']} style={{width: 200}}>\n        <Option value='灼眼的夏娜'>灼眼的夏娜</Option>\n        <Option value='零之使魔'>零之使魔</Option>\n        <Option value='旋风管家'>旋风管家</Option>\n        <Option value='龙与虎'>龙与虎</Option>\n      </Select>\n    </div>\n  );\n}\n"},143:function(e,t){e.exports="#### 多选模式\n"},144:function(e,t){e.exports="import * as React from 'react';\nimport { Select } from '@yoshino/components/';\nimport { CSSProperties } from 'react';\n\nconst {Option, OptGroup} = Select;\nexport default function() {\n  const style: CSSProperties = {width: 200, display: 'inline-block', marginRight: 20};\n  return (\n    <div>\n      <Select mode='single' placeholder='请选择' defaultValue={''} style={style}>\n        <OptGroup label='钉宫四萌'>\n          <Option value='灼眼的夏娜'>灼眼的夏娜</Option>\n          <Option value='零之使魔'>零之使魔</Option>\n          <Option value='旋风管家'>旋风管家</Option>\n          <Option value='龙与虎'>龙与虎</Option>\n        </OptGroup>\n        <OptGroup label='约会大作战'>\n          <Option value='四系乃' disabled>四系乃</Option>\n        </OptGroup>\n      </Select>\n      <Select mode='single' placeholder='请选择' defaultValue={'灼眼的夏娜'} style={style} disabled>\n        <OptGroup label='钉宫四萌'>\n          <Option value='灼眼的夏娜'>灼眼的夏娜</Option>\n          <Option value='零之使魔'>零之使魔</Option>\n          <Option value='旋风管家'>旋风管家</Option>\n          <Option value='龙与虎'>龙与虎</Option>\n        </OptGroup>\n        <OptGroup label='约会大作战'>\n          <Option value='四系乃' disabled>四系乃</Option>\n        </OptGroup>\n      </Select>\n    </div>\n  );\n}\n"},145:function(e,t){e.exports="#### 基本使用\n简单的基本使用\n"},146:function(e,t){e.exports="## Select \n下拉选择器，可以进行单选或者多选。\n\n## 代码演示\n"},537:function(e,t,n){"use strict";n.r(t);var l=n(1),a=n(0),o=n(146),r=n(88),i=n(90),p=n(89),u=[{title:"API - Select",json:[{props:"value",intro:"受控值",type:"string | number | Array<number | string>",defaultValue:"-"},{props:"defaultValue",intro:"默认值",type:"string | number | Array<number | string>",defaultValue:"-"},{props:"disabled",intro:"是否禁用",type:"boolean",defaultValue:"false"},{props:"onChange",intro:"变化回调",type:"(value: string | number | Array<number | string>) => void;",defaultValue:"-"},{props:"size",intro:"尺寸大小",type:"'small' | 'large' | 'default'",defaultValue:"default"},{props:"mode",intro:"单选、多选",type:"'single' | 'multiple'",defaultValue:"single"},{props:"placeholder",intro:"值为空时的文案",type:"string",defaultValue:"-"}]},{title:"API - Select.OptGroup",json:[{props:"label",intro:"组名",type:"string",defaultValue:"-"},{props:"key",intro:"对应key",type:"string | number",defaultValue:"-"}]},{title:"API - Select.Option",json:[{props:"disabled",intro:"是否禁用",type:"boolean",defaultValue:"false"},{props:"value",intro:"值",type:"number | string",defaultValue:"-"},{props:"key",intro:"对应key",type:"string | number",defaultValue:"-"}]}],s=n(7),c=s.C.Option,d=s.C.OptGroup,m=function(){var e={width:200,display:"inline-block",marginRight:20};return a.createElement("div",null,a.createElement(s.C,{mode:"single",placeholder:"请选择",defaultValue:"",style:e},a.createElement(d,{label:"钉宫四萌"},a.createElement(c,{value:"灼眼的夏娜"},"灼眼的夏娜"),a.createElement(c,{value:"零之使魔"},"零之使魔"),a.createElement(c,{value:"旋风管家"},"旋风管家"),a.createElement(c,{value:"龙与虎"},"龙与虎")),a.createElement(d,{label:"约会大作战"},a.createElement(c,{value:"四系乃",disabled:!0},"四系乃"))),a.createElement(s.C,{mode:"single",placeholder:"请选择",defaultValue:"灼眼的夏娜",style:e,disabled:!0},a.createElement(d,{label:"钉宫四萌"},a.createElement(c,{value:"灼眼的夏娜"},"灼眼的夏娜"),a.createElement(c,{value:"零之使魔"},"零之使魔"),a.createElement(c,{value:"旋风管家"},"旋风管家"),a.createElement(c,{value:"龙与虎"},"龙与虎")),a.createElement(d,{label:"约会大作战"},a.createElement(c,{value:"四系乃",disabled:!0},"四系乃"))))},f=n(145),O=s.C.Option,v=function(){return a.createElement("div",null,a.createElement(s.C,{mode:"multiple",size:"large",defaultValue:["灼眼的夏娜"],style:{width:200}},a.createElement(O,{value:"灼眼的夏娜"},"灼眼的夏娜"),a.createElement(O,{value:"零之使魔"},"零之使魔"),a.createElement(O,{value:"旋风管家"},"旋风管家"),a.createElement(O,{value:"龙与虎"},"龙与虎")))},y=n(143),b=n(144),E=n(142),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l.__extends(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement(r.a,{text:o}),a.createElement(i.a,{text:f,demo:a.createElement(m,null),code:b}),a.createElement(i.a,{text:y,demo:a.createElement(v,null),code:E}),a.createElement(p.a,{api:u}))},t}(a.Component);t.default=g}}]);