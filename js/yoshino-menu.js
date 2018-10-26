(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{229:function(e,t){e.exports="import * as React from 'react';\nimport { Menu, Icon } from '@yoshino/components/';\nconst SubMenu = Menu.SubMenu;\nconst MenuItemGroup = Menu.ItemGroup;\nexport default function() {\n  return (\n    <Menu\n      mode='horizontal'\n      defaultActiveKey='1'\n    >\n      <SubMenu key='sub1' title={<span><Icon type='upload'/><span>Navigation One</span></span>}>\n        <MenuItemGroup key='g1' title='Item 1'>\n          <Menu.Item key='1'>Option 1</Menu.Item>\n          <Menu.Item key='2'>Option 2</Menu.Item>\n        </MenuItemGroup>\n        <MenuItemGroup key='g2' title='Item 2'>\n          <Menu.Item key='3'>Option 3</Menu.Item>\n          <Menu.Item key='4'>Option 4</Menu.Item>\n        </MenuItemGroup>\n      </SubMenu>\n      <SubMenu key='sub2' title={<span><Icon type='calendar'/><span>Navigation Two</span></span>}>\n        <Menu.Item key='5'>Option 5</Menu.Item>\n        <Menu.Item key='6'>Option 6</Menu.Item>\n        <SubMenu key='sub3' title='Submenu'>\n          <Menu.Item key='7'>Option 7</Menu.Item>\n          <Menu.Item key='8'>Option 8</Menu.Item>\n        </SubMenu>\n      </SubMenu>\n      <Menu.Item key='13' disabled>Option 13</Menu.Item>\n      <Menu.Item key='14'>Option 14</Menu.Item>\n      <Menu.Item key='15'>Option 15</Menu.Item>\n    </Menu>\n  );\n}\n"},230:function(e,t){e.exports="#### 水平菜单\n使用水平菜单请不要使用受控模式，会导致`Menu`组件怪异表现。"},231:function(e,t){e.exports="import * as React from 'react';\nimport { Menu, Icon } from '@yoshino/components/';\nconst SubMenu = Menu.SubMenu;\nconst MenuItemGroup = Menu.ItemGroup;\nexport default function() {\n  return (\n    <Menu\n      style={{ width: 256 }}\n      defaultActiveKey='1'\n    >\n      <SubMenu key='sub1' title={<span><Icon type='upload'/><span>Navigation One</span></span>}>\n        <MenuItemGroup key='g1' title='Item 1'>\n          <Menu.Item key='1'>Option 1</Menu.Item>\n          <Menu.Item key='2'>Option 2</Menu.Item>\n        </MenuItemGroup>\n        <MenuItemGroup key='g2' title='Item 2'>\n          <Menu.Item key='3'>Option 3</Menu.Item>\n          <Menu.Item key='4'>Option 4</Menu.Item>\n        </MenuItemGroup>\n      </SubMenu>\n      <SubMenu key='sub2' title={<span><Icon type='calendar'/><span>Navigation Two</span></span>}>\n        <Menu.Item key='5'>Option 5</Menu.Item>\n        <Menu.Item key='6'>Option 6</Menu.Item>\n        <SubMenu key='sub3' title='Submenu'>\n          <Menu.Item key='7'>Option 7</Menu.Item>\n          <Menu.Item key='8'>Option 8</Menu.Item>\n        </SubMenu>\n      </SubMenu>\n      <SubMenu key='sub4' disabled title={<span><Icon type='paper-airplane'/><span>Navigation Three</span></span>}>\n        <Menu.Item key='9'>Option 9</Menu.Item>\n        <Menu.Item key='10'>Option 10</Menu.Item>\n        <Menu.Item key='11'>Option 11</Menu.Item>\n        <Menu.Item key='12'>Option 12</Menu.Item>\n      </SubMenu>\n      <Menu.Item key='13' disabled>Option 13</Menu.Item>\n    </Menu>\n  );\n}\n"},232:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},233:function(e,t){e.exports="## Menu 菜单\n提供导航功能。\n\n## 代码演示\n"},540:function(e,t,n){"use strict";n.r(t);var u=n(1),a=n(0),o=n(233),p=n(88),l=n(90),m=n(89),i=[{title:"Menu",intro:"TKey: number | string",json:[{props:"activeKey",intro:"受控 - 激活key",type:"TKey",defaultValue:"-"},{props:"defaultActiveKey",intro:"非受控 - 激活key",type:"TKey",defaultValue:"-"},{props:"openKeys",intro:"受控 - 展开key",type:"TKey[]",defaultValue:"-"},{props:"defaultOpenKeys",intro:"非受控 - 展开key",type:"TKey[]",defaultValue:"`[]`"},{props:"onSelect",intro:"item - 选中回调",type:"(activeKey: TKey) => void",defaultValue:"-"},{props:"onOpenChange",intro:"展开回调",type:"(openKeys: TKey[]) => void",defaultValue:"-"},{props:"offset",intro:"菜单子项偏移量",type:"number",defaultValue:"24"}]},{title:"Menu.SubMenu",json:[{props:"title",intro:"标题",type:"string | React.ReactNode",defaultValue:"-"},{props:"key",intro:"唯一标志",type:"TKey",defaultValue:"-"},{props:"disabled",intro:"禁用",type:"boolean",defaultValue:"`false`"}]},{title:"Menu.ItemGroup",json:[{props:"title",intro:"标题",type:"string | React.ReactNode",defaultValue:"-"},{props:"key",intro:"唯一标志",type:"TKey",defaultValue:"-"}]},{title:"Menu.Item",json:[{props:"key",intro:"唯一标志",type:"TKey",defaultValue:"-"},{props:"disabled",intro:"禁用",type:"boolean",defaultValue:"`false`"}]}],r=n(7),y=r.t.SubMenu,c=r.t.ItemGroup,s=function(){return a.createElement(r.t,{style:{width:256},defaultActiveKey:"1"},a.createElement(y,{key:"sub1",title:a.createElement("span",null,a.createElement(r.p,{type:"upload"}),a.createElement("span",null,"Navigation One"))},a.createElement(c,{key:"g1",title:"Item 1"},a.createElement(r.t.Item,{key:"1"},"Option 1"),a.createElement(r.t.Item,{key:"2"},"Option 2")),a.createElement(c,{key:"g2",title:"Item 2"},a.createElement(r.t.Item,{key:"3"},"Option 3"),a.createElement(r.t.Item,{key:"4"},"Option 4"))),a.createElement(y,{key:"sub2",title:a.createElement("span",null,a.createElement(r.p,{type:"calendar"}),a.createElement("span",null,"Navigation Two"))},a.createElement(r.t.Item,{key:"5"},"Option 5"),a.createElement(r.t.Item,{key:"6"},"Option 6"),a.createElement(y,{key:"sub3",title:"Submenu"},a.createElement(r.t.Item,{key:"7"},"Option 7"),a.createElement(r.t.Item,{key:"8"},"Option 8"))),a.createElement(y,{key:"sub4",disabled:!0,title:a.createElement("span",null,a.createElement(r.p,{type:"paper-airplane"}),a.createElement("span",null,"Navigation Three"))},a.createElement(r.t.Item,{key:"9"},"Option 9"),a.createElement(r.t.Item,{key:"10"},"Option 10"),a.createElement(r.t.Item,{key:"11"},"Option 11"),a.createElement(r.t.Item,{key:"12"},"Option 12")),a.createElement(r.t.Item,{key:"13",disabled:!0},"Option 13"))},I=n(232),M=r.t.SubMenu,k=r.t.ItemGroup,d=function(){return a.createElement(r.t,{mode:"horizontal",defaultActiveKey:"1"},a.createElement(M,{key:"sub1",title:a.createElement("span",null,a.createElement(r.p,{type:"upload"}),a.createElement("span",null,"Navigation One"))},a.createElement(k,{key:"g1",title:"Item 1"},a.createElement(r.t.Item,{key:"1"},"Option 1"),a.createElement(r.t.Item,{key:"2"},"Option 2")),a.createElement(k,{key:"g2",title:"Item 2"},a.createElement(r.t.Item,{key:"3"},"Option 3"),a.createElement(r.t.Item,{key:"4"},"Option 4"))),a.createElement(M,{key:"sub2",title:a.createElement("span",null,a.createElement(r.p,{type:"calendar"}),a.createElement("span",null,"Navigation Two"))},a.createElement(r.t.Item,{key:"5"},"Option 5"),a.createElement(r.t.Item,{key:"6"},"Option 6"),a.createElement(M,{key:"sub3",title:"Submenu"},a.createElement(r.t.Item,{key:"7"},"Option 7"),a.createElement(r.t.Item,{key:"8"},"Option 8"))),a.createElement(r.t.Item,{key:"13",disabled:!0},"Option 13"),a.createElement(r.t.Item,{key:"14"},"Option 14"),a.createElement(r.t.Item,{key:"15"},"Option 15"))},E=n(230),O=n(231),b=n(229),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u.__extends(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement(p.a,{text:o}),a.createElement(l.a,{text:I,demo:a.createElement(s,null),code:O}),a.createElement(l.a,{text:E,demo:a.createElement(d,null),code:b}),a.createElement(m.a,{api:i}))},t}(a.Component);t.default=f}}]);