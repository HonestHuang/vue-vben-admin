import{a as e,i,o as t,j as o,k as d,w as s}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./useSortable.f9571e68.js";import"./index.a054df69.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./CheckOutlined.1fa89dc8.js";import{f as n}from"./index.4d75401e.js";import"./index.449c490a.js";import"./colors.757dc4a4.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./types.231a34f8.js";import"./index.b5588833.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import"./index.e2ac5270.js";import"./index.8d103225.js";import"./UpOutlined.cd1bd02a.js";import"./LeftOutlined.c7fc7fef.js";import"./index.cf36961f.js";import"./index.f9a7bb78.js";import"./index.78c9b85a.js";import"./index.c8001e10.js";import"./index.cf4bc0ce.js";import"./index.dba233bb.js";import"./zh_CN.0242bd16.js";import"./index.fb30cf7f.js";import"./index.cf867a3c.js";import"./index.e410f5b7.js";import"./CaretDownFilled.24d6d3f2.js";import"./transButton.1b860824.js";import"./index.fe9d95e6.js";import"./CheckOutlined.2f0f2ab8.js";import"./CloseOutlined.96ea54bd.js";import{s as r}from"./index.ff074fe6.js";import"./FullscreenOutlined.42f0d2f2.js";import"./index.d364dd82.js";import"./RightOutlined.e5ee841f.js";import"./SettingOutlined.8836b328.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import"./useAttrs.42205efa.js";import"./index.8cf17bff.js";import"./useWindowSizeFn.8b84c5f6.js";import"./index.267a6ea8.js";import"./uuid.40269c00.js";import"./download.3408c5a6.js";import"./useForm.045adca8.js";import"./useExpose.a2f447f4.js";import{u as a}from"./useTable.83b6c213.js";import{d as m}from"./table.cd6d42d0.js";const p=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var l=e({components:{BasicTable:r,TableAction:n},setup(){const[e]=a({title:"TableAction组件及固定列示例",api:m,columns:p,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const c={class:"p-4"};l.render=function(e,n,r,a,m,p){const l=i("TableAction"),j=i("BasicTable");return t(),o("div",c,[d(j,{onRegister:e.registerTable},{action:s((({record:i})=>[d(l,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,i)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default l;