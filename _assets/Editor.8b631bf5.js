import{a as e,M as i,h as t,i as s,o,j as r,w as a,k as d}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./index.a054df69.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./CheckOutlined.1fa89dc8.js";import{s as n}from"./index.4d75401e.js";import"./index.449c490a.js";import"./index.81a614c0.js";import"./colors.757dc4a4.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./usePageContext.5c284b04.js";import"./types.231a34f8.js";import"./index.b5588833.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import"./index.e2ac5270.js";import"./index.8d103225.js";import"./UpOutlined.cd1bd02a.js";import"./index.cf36961f.js";import"./index.f9a7bb78.js";import"./index.78c9b85a.js";import"./index.c8001e10.js";import"./index.cf4bc0ce.js";import"./index.fb30cf7f.js";import"./index.cf867a3c.js";import"./index.e410f5b7.js";import"./transButton.1b860824.js";import{a as m}from"./index.fe9d95e6.js";import"./CloseOutlined.96ea54bd.js";import"./FullscreenOutlined.42f0d2f2.js";import"./index.d364dd82.js";import"./RightOutlined.e5ee841f.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import{s as p}from"./index.812d3d59.js";import"./useAttrs.42205efa.js";import"./index.8cf17bff.js";import"./useWindowSizeFn.8b84c5f6.js";import"./index.267a6ea8.js";import"./uuid.40269c00.js";import"./download.3408c5a6.js";import{T as l}from"./index.30336bb3.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>i(l,{value:e[t],onChange:i=>{e[t]=i}})}];var j=e({components:{BasicForm:n,CollapseContainer:m,PageWrapper:p},setup(){const{createMessage:e}=t();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});j.render=function(e,i,t,n,m,p){const l=s("BasicForm"),c=s("CollapseContainer"),j=s("PageWrapper");return o(),r(j,{title:"富文本嵌入表单示例"},{default:a((()=>[d(c,{title:"富文本表单"},{default:a((()=>[d(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default j;