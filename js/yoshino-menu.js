(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{229:function(e,t){e.exports="import * as React from 'react';\nimport { Menu, Icon } from '@yoshino/components/';\nconst SubMenu = Menu.SubMenu;\nconst MenuItemGroup = Menu.ItemGroup;\nexport default function() {\n  return (\n    <Menu\n      mode='horizontal'\n      defaultActiveKey='1'\n    >\n      <SubMenu keyId='sub1' title={<span><Icon type='upload'/><span>Navigation One</span></span>}>\n        <MenuItemGroup keyId='g1' title='Item 1'>\n          <Menu.Item keyId='1'>Option 1</Menu.Item>\n          <Menu.Item keyId='2'>Option 2</Menu.Item>\n        </MenuItemGroup>\n        <MenuItemGroup keyId='g2' title='Item 2'>\n          <Menu.Item keyId='3'>Option 3</Menu.Item>\n          <Menu.Item keyId='4'>Option 4</Menu.Item>\n        </MenuItemGroup>\n      </SubMenu>\n      <SubMenu keyId='sub2' title={<span><Icon type='calendar'/><span>Navigation Two</span></span>}>\n        <Menu.Item keyId='5'>Option 5</Menu.Item>\n        <Menu.Item keyId='6'>Option 6</Menu.Item>\n        <SubMenu keyId='sub3' title='Submenu'>\n          <Menu.Item keyId='7'>Option 7</Menu.Item>\n          <Menu.Item keyId='8'>Option 8</Menu.Item>\n        </SubMenu>\n      </SubMenu>\n      <Menu.Item keyId='13' disabled>Option 13</Menu.Item>\n      <Menu.Item keyId='14'>Option 14</Menu.Item>\n      <Menu.Item keyId='15'>Option 15</Menu.Item>\n    </Menu>\n  );\n}\n"},230:function(e,t){e.exports="#### 水平菜单\n使用水平菜单请不要使用受控模式，会导致`Menu`组件怪异表现。"},231:function(e,t){e.exports="import * as React from 'react';\nimport { Menu, Icon } from '@yoshino/components/';\nconst SubMenu = Menu.SubMenu;\nconst MenuItemGroup = Menu.ItemGroup;\nexport default function() {\n  return (\n    <Menu\n      style={{ width: 256 }}\n      defaultActiveKey='1'\n    >\n      <SubMenu keyId='sub1' title={<span><Icon type='upload'/><span>Navigation One</span></span>}>\n        <MenuItemGroup keyId='g1' title='Item 1'>\n          <Menu.Item keyId='1'>Option 1</Menu.Item>\n          <Menu.Item keyId='2'>Option 2</Menu.Item>\n        </MenuItemGroup>\n        <MenuItemGroup keyId='g2' title='Item 2'>\n          <Menu.Item keyId='3'>Option 3</Menu.Item>\n          <Menu.Item keyId='4'>Option 4</Menu.Item>\n        </MenuItemGroup>\n      </SubMenu>\n      <SubMenu keyId='sub2' title={<span><Icon type='calendar'/><span>Navigation Two</span></span>}>\n        <Menu.Item keyId='5'>Option 5</Menu.Item>\n        <Menu.Item keyId='6'>Option 6</Menu.Item>\n        <SubMenu keyId='sub3' title='Submenu'>\n          <Menu.Item keyId='7'>Option 7</Menu.Item>\n          <Menu.Item keyId='8'>Option 8</Menu.Item>\n        </SubMenu>\n      </SubMenu>\n      <SubMenu keyId='sub4' disabled title={<span><Icon type='paper-airplane'/><span>Navigation Three</span></span>}>\n        <Menu.Item keyId='9'>Option 9</Menu.Item>\n        <Menu.Item keyId='10'>Option 10</Menu.Item>\n        <Menu.Item keyId='11'>Option 11</Menu.Item>\n        <Menu.Item keyId='12'>Option 12</Menu.Item>\n      </SubMenu>\n      <Menu.Item keyId='13' disabled>Option 13</Menu.Item>\n    </Menu>\n  );\n}\n"},232:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},233:function(e,t){e.exports="## Menu 菜单\n提供导航功能。\n\n## 代码演示\n"},540:function(e,t,n){"use strict";n.r(t);var u=n(1),a=n(0),o=n(233),p=n(88),l=n(90),m=n(89),I=[{title:"Menu",intro:"TKey: number | string",json:[{props:"activeKey",intro:"受控 - 激活key",type:"TKey",defaultValue:"-"},{props:"defaultActiveKey",intro:"非受控 - 激活key",type:"TKey",defaultValue:"-"},{props:"openKeys",intro:"受控 - 展开key",type:"TKey[]",defaultValue:"-"},{props:"defaultOpenKeys",intro:"非受控 - 展开key",type:"TKey[]",defaultValue:"`[]`"},{props:"onSelect",intro:"item - 选中回调",type:"(activeKey: TKey) => void",defaultValue:"-"},{props:"onOpenChange",intro:"展开回调",type:"(openKeys: TKey[]) => void",defaultValue:"-"},{props:"offset",intro:"菜单子项偏移量",type:"number",defaultValue:"24"}]},{title:"Menu.SubMenu",json:[{props:"title",intro:"标题",type:"string | React.ReactNode",defaultValue:"-"},{props:"keyId",intro:"唯一标志",type:"TKey",defaultValue:"-"},{props:"disabled",intro:"禁用",type:"boolean",defaultValue:"`false`"}]},{title:"Menu.ItemGroup",json:[{props:"title",intro:"标题",type:"string | React.ReactNode",defaultValue:"-"},{props:"keyId",intro:"唯一标志",type:"TKey",defaultValue:"-"}]},{title:"Menu.Item",json:[{props:"keyId",intro:"唯一标志",type:"TKey",defaultValue:"-"},{props:"disabled",intro:"禁用",type:"boolean",defaultValue:"`false`"}]}],i=n(7),r=i.t.SubMenu,d=i.t.ItemGroup,y=function(){return a.createElement(i.t,{style:{width:256},defaultActiveKey:"1"},a.createElement(r,{keyId:"sub1",title:a.createElement("span",null,a.createElement(i.p,{type:"upload"}),a.createElement("span",null,"Navigation One"))},a.createElement(d,{keyId:"g1",title:"Item 1"},a.createElement(i.t.Item,{keyId:"1"},"Option 1"),a.createElement(i.t.Item,{keyId:"2"},"Option 2")),a.createElement(d,{keyId:"g2",title:"Item 2"},a.createElement(i.t.Item,{keyId:"3"},"Option 3"),a.createElement(i.t.Item,{keyId:"4"},"Option 4"))),a.createElement(r,{keyId:"sub2",title:a.createElement("span",null,a.createElement(i.p,{type:"calendar"}),a.createElement("span",null,"Navigation Two"))},a.createElement(i.t.Item,{keyId:"5"},"Option 5"),a.createElement(i.t.Item,{keyId:"6"},"Option 6"),a.createElement(r,{keyId:"sub3",title:"Submenu"},a.createElement(i.t.Item,{keyId:"7"},"Option 7"),a.createElement(i.t.Item,{keyId:"8"},"Option 8"))),a.createElement(r,{keyId:"sub4",disabled:!0,title:a.createElement("span",null,a.createElement(i.p,{type:"paper-airplane"}),a.createElement("span",null,"Navigation Three"))},a.createElement(i.t.Item,{keyId:"9"},"Option 9"),a.createElement(i.t.Item,{keyId:"10"},"Option 10"),a.createElement(i.t.Item,{keyId:"11"},"Option 11"),a.createElement(i.t.Item,{keyId:"12"},"Option 12")),a.createElement(i.t.Item,{keyId:"13",disabled:!0},"Option 13"))},c=n(232),s=i.t.SubMenu,M=i.t.ItemGroup,k=function(){return a.createElement(i.t,{mode:"horizontal",defaultActiveKey:"1"},a.createElement(s,{keyId:"sub1",title:a.createElement("span",null,a.createElement(i.p,{type:"upload"}),a.createElement("span",null,"Navigation One"))},a.createElement(M,{keyId:"g1",title:"Item 1"},a.createElement(i.t.Item,{keyId:"1"},"Option 1"),a.createElement(i.t.Item,{keyId:"2"},"Option 2")),a.createElement(M,{keyId:"g2",title:"Item 2"},a.createElement(i.t.Item,{keyId:"3"},"Option 3"),a.createElement(i.t.Item,{keyId:"4"},"Option 4"))),a.createElement(s,{keyId:"sub2",title:a.createElement("span",null,a.createElement(i.p,{type:"calendar"}),a.createElement("span",null,"Navigation Two"))},a.createElement(i.t.Item,{keyId:"5"},"Option 5"),a.createElement(i.t.Item,{keyId:"6"},"Option 6"),a.createElement(s,{keyId:"sub3",title:"Submenu"},a.createElement(i.t.Item,{keyId:"7"},"Option 7"),a.createElement(i.t.Item,{keyId:"8"},"Option 8"))),a.createElement(i.t.Item,{keyId:"13",disabled:!0},"Option 13"),a.createElement(i.t.Item,{keyId:"14"},"Option 14"),a.createElement(i.t.Item,{keyId:"15"},"Option 15"))},E=n(230),O=n(231),b=n(229),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u.__extends(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement(p.a,{text:o}),a.createElement(l.a,{text:c,demo:a.createElement(y,null),code:O}),a.createElement(l.a,{text:E,demo:a.createElement(k,null),code:b}),a.createElement(m.a,{api:I}))},t}(a.Component);t.default=f}}]);