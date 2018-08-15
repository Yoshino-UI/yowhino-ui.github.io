(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{118:function(n,t){n.exports="import * as React from 'react';\nimport { Table } from '../../../../components/';\n\nexport default function() {\n  const colums = [\n    {\n      title: '名字',\n      dataIndex: 'name',\n      width: 300,\n      fixed: true,\n    },\n    {\n      title: '性别',\n      width: 150,\n      dataIndex: 'gender',\n    },\n    {\n      title: '身高',\n      width: 150,\n      dataIndex: 'height'\n    },\n    {\n      title: '体重',\n      width: 150,\n      dataIndex: 'weight',\n    },\n    {\n      title: '年龄',\n      width: 150,\n      dataIndex: 'age',\n    },\n  ];\n  const data: Array<{}> =  Array.apply(null, {length: 60});\n  data.fill({\n    name: 'shana',\n    gender: 'gril',\n    height: 146,\n    weight: '38kg',\n    age: 14,\n  }, 0, 60);\n  return (\n    <Table\n      scroll={{x: '100%', y: 200}}\n      columns={colums}\n      data={data}\n    />\n  );\n}\n"},119:function(n,t){n.exports="#### 锁头锁列的表格\n锁头锁列时如果出现数据不对齐的问题请使用`width`描述表格列的宽度。"},120:function(n,t){n.exports="import * as React from 'react';\nimport { Table } from '../../../../components/';\n\nexport default function() {\n  const colums = [\n    {\n      title: '名字',\n      dataIndex: 'name',\n    },\n    {\n      title: '性别',\n      dataIndex: 'gender',\n    },\n    {\n      title: '身高',\n      dataIndex: 'height'\n    },\n    {\n      title: '体重',\n      dataIndex: 'weight',\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n    },\n  ];\n  const data: Array<{}> =  Array.apply(null, {length: 60});\n  data.fill({\n    name: 'shana',\n    gender: 'gril',\n    height: 146,\n    weight: '38kg',\n    age: 14,\n  }, 0, 60);\n  return (\n    <Table\n      scroll={{x: '100%', y: 200}}\n      columns={colums}\n      data={data}\n      fixedTitle={false}\n    />\n  );\n}\n"},121:function(n,t){n.exports="#### 基本使用\n数据`data 为一个数组`，`colums`用来描述`data`字段对应的中文以及表头。\n"},122:function(n,t){n.exports="## Table \n\n\n## 代码演示\n"},511:function(n,t,e){"use strict";e.r(t);var a=e(1),l=e(0),i=e(122),d=e(86),r=e(88),o=e(87),u=[{title:"API",json:[{props:"data",intro:"数据源",type:"Array<{[index: string]: React.ReactNode;}>",defaultValue:"-"},{props:"columns",intro:"描述数据源和控制表格渲染，详情见下面`API - columns`",type:"Columns[]",defaultValue:"-"},{props:"fixedTitle",intro:"表格锁头",type:"boolean",defaultValue:"true"},{props:"scroll",intro:"控制表格可视区域宽高",type:"{`x`: `number` | `string`; `y`: `number`;}",defaultValue:"-"}]},{title:"API - colunms",json:[{props:"title",intro:"表格标题",type:"string",defaultValue:"-"},{props:"dataIndex",intro:"用于描述`title`对应的data中的`key`",type:"string",defaultValue:"-"},{props:"width",intro:"当锁列时建议使用width描述每列宽度，否则有可能出现列不对齐的问题",type:"number",defaultValue:"-"},{props:"fixed",intro:"是否开启锁列，请把锁列的对象置于`columns`的数组头部",type:"boolean",defaultValue:"false"}]}],s=e(8),c=function(){var n=Array.apply(null,{length:60});return n.fill({name:"shana",gender:"gril",height:146,weight:"38kg",age:14},0,60),l.createElement(s.F,{scroll:{x:"100%",y:200},columns:[{title:"名字",dataIndex:"name"},{title:"性别",dataIndex:"gender"},{title:"身高",dataIndex:"height"},{title:"体重",dataIndex:"weight"},{title:"年龄",dataIndex:"age"}],data:n,fixedTitle:!1})},p=e(121),g=function(){var n=Array.apply(null,{length:60});return n.fill({name:"shana",gender:"gril",height:146,weight:"38kg",age:14},0,60),l.createElement(s.F,{scroll:{x:"100%",y:200},columns:[{title:"名字",dataIndex:"name",width:300,fixed:!0},{title:"性别",width:150,dataIndex:"gender"},{title:"身高",width:150,dataIndex:"height"},{title:"体重",width:150,dataIndex:"weight"},{title:"年龄",width:150,dataIndex:"age"}],data:n})},h=e(119),m=e(120),x=e(118),f=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return a.__extends(t,n),t.prototype.render=function(){return l.createElement("div",null,l.createElement(d.a,{text:i}),l.createElement(r.a,{text:p,demo:l.createElement(c,null),code:m}),l.createElement(r.a,{text:h,demo:l.createElement(g,null),code:x}),l.createElement(o.a,{api:u}))},t}(l.Component);t.default=f}}]);