import{a as e,cw as s,ac as i,h as o,i as t,o as r,j as a,k as n,w as l}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./index.74a2ce06.js";import"./Trigger.7f13f611.js";import"./omit.1a2731ea.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.fe7e1d24.js";import"./CheckOutlined.0d8b90fc.js";import{s as p}from"./index.43870d62.js";import"./colors.85a0501b.js";import"./RightOutlined.efab7f95.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.efb78f34.js";import"./index.fb7b7fcf.js";import"./index.a172b251.js";import"./index.121aaab0.js";import"./UpOutlined.a902a507.js";import"./index.207bd9d1.js";import"./index.1ed6e71f.js";import"./index.eb12d9aa.js";import"./index.82e6b05e.js";import{a as d}from"./index.1ec384e7.js";import"./LoadingOutlined.fa8d08eb.js";import"./RightOutlined.c78ef51e.js";import"./useTimeout.92483bb5.js";import"./tsxHelper.32d36f09.js";import"./index.a793eec0.js";import"./domUtils.dd108ce8.js";import"./index.f02911a0.js";import"./animation.0e442f99.js";import"./useScrollTo.28ed3853.js";import"./useAttrs.24cb77cc.js";import"./index.7b7aac10.js";import"./index.445b644a.js";import{u as m}from"./useForm.8efc7ee5.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:p,CollapseContainer:d},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const f={class:"m-4"};u.render=function(e,s,i,o,p,d){const m=t("a-input"),c=t("BasicForm"),u=t("CollapseContainer");return r(),a("div",f,[n(u,{title:"自定义表单"},{default:l((()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:l((({model:e,field:s})=>[n(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default u;