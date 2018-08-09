(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{486:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n(74),r=n(57),o=n(59),p=n(58),i=[{title:"API - Select",json:[{props:"value",intro:"受控值",type:"string | number | Array<number | string>",defaultValue:"-"},{props:"defaultValue",intro:"默认值",type:"string | number | Array<number | string>",defaultValue:"-"},{props:"disabled",intro:"是否禁用",type:"boolean",defaultValue:"false"},{props:"onChange",intro:"变化回调",type:"(value: string | number | Array<number | string>) => void;",defaultValue:"-"},{props:"size",intro:"尺寸大小",type:"'small' | 'large' | 'default'",defaultValue:"default"},{props:"mode",intro:"单选、多选",type:"'single' | 'multiple'",defaultValue:"single"},{props:"placeholder",intro:"值为空时的文案",type:"string",defaultValue:"-"}]},{title:"API - Select.OptGroup",json:[{props:"label",intro:"组名",type:"string",defaultValue:"-"},{props:"key",intro:"对应key",type:"string | number",defaultValue:"-"}]},{title:"API - Select.Option",json:[{props:"disabled",intro:"是否禁用",type:"boolean",defaultValue:"false"},{props:"value",intro:"值",type:"number | string",defaultValue:"-"},{props:"key",intro:"对应key",type:"string | number",defaultValue:"-"}]}],u=n(8);const{Option:c,OptGroup:s}=u.A;var d=function(){const e={width:200,display:"inline-block",marginRight:20};return l.createElement("div",null,l.createElement(u.A,{mode:"single",placeholder:"请选择",defaultValue:"",style:e},l.createElement(s,{label:"钉宫四萌"},l.createElement(c,{value:"灼眼的夏娜"},"灼眼的夏娜"),l.createElement(c,{value:"零之使魔"},"零之使魔"),l.createElement(c,{value:"旋风管家"},"旋风管家"),l.createElement(c,{value:"龙与虎"},"龙与虎")),l.createElement(s,{label:"约会大作战"},l.createElement(c,{value:"四系乃",disabled:!0},"四系乃"))),l.createElement(u.A,{mode:"single",placeholder:"请选择",defaultValue:"灼眼的夏娜",style:e,disabled:!0},l.createElement(s,{label:"钉宫四萌"},l.createElement(c,{value:"灼眼的夏娜"},"灼眼的夏娜"),l.createElement(c,{value:"零之使魔"},"零之使魔"),l.createElement(c,{value:"旋风管家"},"旋风管家"),l.createElement(c,{value:"龙与虎"},"龙与虎")),l.createElement(s,{label:"约会大作战"},l.createElement(c,{value:"四系乃",disabled:!0},"四系乃"))))},m=n(73);const{Option:O}=u.A;var f=function(){return l.createElement("div",null,l.createElement(u.A,{mode:"multiple",size:"large",defaultValue:["灼眼的夏娜"]},l.createElement(O,{value:"灼眼的夏娜"},"灼眼的夏娜"),l.createElement(O,{value:"零之使魔"},"零之使魔"),l.createElement(O,{value:"旋风管家"},"旋风管家"),l.createElement(O,{value:"龙与虎"},"龙与虎")))},v=n(71);n.d(t,"default",function(){return y});const b=n(72),E=n(70);class y extends l.Component{render(){return l.createElement("div",null,l.createElement(r.a,{text:a}),l.createElement(o.a,{text:m,demo:l.createElement(d,null),code:b}),l.createElement(o.a,{text:v,demo:l.createElement(f,null),code:E}),l.createElement(p.a,{api:i}))}}},70:function(e,t){e.exports="import * as React from 'react';\nimport { Select } from '../../../../components/';\n\nconst {Option} = Select;\nexport default function() {\n  return (\n    <div>\n      <Select mode='multiple' size='large' defaultValue={['灼眼的夏娜']}>\n        <Option value='灼眼的夏娜'>灼眼的夏娜</Option>\n        <Option value='零之使魔'>零之使魔</Option>\n        <Option value='旋风管家'>旋风管家</Option>\n        <Option value='龙与虎'>龙与虎</Option>\n      </Select>\n    </div>\n  );\n}\n"},71:function(e,t){e.exports="#### 多选模式\n"},72:function(e,t){e.exports="import * as React from 'react';\nimport { Select } from '../../../../components/';\nimport { CSSProperties } from 'react';\n\nconst {Option, OptGroup} = Select;\nexport default function() {\n  const style:CSSProperties = {width: 200, display: 'inline-block', marginRight: 20};\n  return (\n    <div>\n      <Select mode='single' placeholder='请选择' defaultValue={''} style={style}>\n        <OptGroup label='钉宫四萌'>\n          <Option value='灼眼的夏娜'>灼眼的夏娜</Option>\n          <Option value='零之使魔'>零之使魔</Option>\n          <Option value='旋风管家'>旋风管家</Option>\n          <Option value='龙与虎'>龙与虎</Option>\n        </OptGroup>\n        <OptGroup label='约会大作战'>\n          <Option value='四系乃' disabled>四系乃</Option>\n        </OptGroup>\n      </Select>\n      <Select mode='single' placeholder='请选择' defaultValue={'灼眼的夏娜'} style={style} disabled>\n        <OptGroup label='钉宫四萌'>\n          <Option value='灼眼的夏娜'>灼眼的夏娜</Option>\n          <Option value='零之使魔'>零之使魔</Option>\n          <Option value='旋风管家'>旋风管家</Option>\n          <Option value='龙与虎'>龙与虎</Option>\n        </OptGroup>\n        <OptGroup label='约会大作战'>\n          <Option value='四系乃' disabled>四系乃</Option>\n        </OptGroup>\n      </Select>\n    </div>\n  );\n}\n"},73:function(e,t){e.exports="#### 基本使用\n简单的基本使用\n"},74:function(e,t){e.exports="## Select \n\n\n## 代码演示\n"}}]);