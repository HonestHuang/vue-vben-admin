import{a as e,i,o as t,j as s,k as o}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./useSortable.f9571e68.js";import"./index.a054df69.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./CheckOutlined.1fa89dc8.js";import"./index.4d75401e.js";import"./index.449c490a.js";import"./colors.757dc4a4.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./types.231a34f8.js";import"./index.b5588833.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import"./index.e2ac5270.js";import"./index.8d103225.js";import"./UpOutlined.cd1bd02a.js";import"./LeftOutlined.c7fc7fef.js";import"./index.cf36961f.js";import"./index.f9a7bb78.js";import"./index.78c9b85a.js";import"./index.c8001e10.js";import"./index.cf4bc0ce.js";import"./index.dba233bb.js";import"./zh_CN.0242bd16.js";import"./index.fb30cf7f.js";import"./index.cf867a3c.js";import"./index.e410f5b7.js";import"./CaretDownFilled.24d6d3f2.js";import"./transButton.1b860824.js";import"./index.fe9d95e6.js";import"./CheckOutlined.2f0f2ab8.js";import"./CloseOutlined.96ea54bd.js";import{s as r}from"./index.ff074fe6.js";import"./FullscreenOutlined.42f0d2f2.js";import"./index.d364dd82.js";import"./RightOutlined.e5ee841f.js";import"./SettingOutlined.8836b328.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import"./useAttrs.42205efa.js";import"./index.8cf17bff.js";import"./useWindowSizeFn.8b84c5f6.js";import"./index.267a6ea8.js";import"./uuid.40269c00.js";import"./download.3408c5a6.js";import"./useForm.045adca8.js";import"./useExpose.a2f447f4.js";import{u as d}from"./useTable.83b6c213.js";import{getBasicColumns as m}from"./tableData.2b93dff8.js";import{d as n}from"./table.cd6d42d0.js";var p=e({components:{BasicTable:r},setup(){const[e]=d({title:"表尾行合计示例",api:n,rowSelection:{type:"checkbox"},columns:m(),showSummary:!0,summaryFunc:function(e){const i=e.reduce(((e,i)=>e+=i.no),0);return[{_row:"合计",_index:"平均值",no:i},{_row:"合计",_index:"平均值",no:i}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const a={class:"p-4"};p.render=function(e,r,d,m,n,p){const j=i("BasicTable");return t(),s("div",a,[o(j,{onRegister:e.registerTable},null,8,["onRegister"])])};export default p;