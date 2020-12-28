import{a as e,h as s,i,o,j as t,k as a,w as l,p as r}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./index.74a2ce06.js";import"./Trigger.7f13f611.js";import"./omit.1a2731ea.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.fe7e1d24.js";import"./CheckOutlined.0d8b90fc.js";import{s as n}from"./index.43870d62.js";import"./colors.85a0501b.js";import"./RightOutlined.efab7f95.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.efb78f34.js";import"./index.fb7b7fcf.js";import"./index.a172b251.js";import"./index.121aaab0.js";import"./UpOutlined.a902a507.js";import"./index.207bd9d1.js";import"./index.1ed6e71f.js";import"./index.eb12d9aa.js";import"./index.82e6b05e.js";import{a as c}from"./index.1ec384e7.js";import"./LoadingOutlined.fa8d08eb.js";import"./RightOutlined.c78ef51e.js";import"./useTimeout.92483bb5.js";import"./tsxHelper.32d36f09.js";import"./index.a793eec0.js";import"./domUtils.dd108ce8.js";import"./index.f02911a0.js";import"./animation.0e442f99.js";import"./useScrollTo.28ed3853.js";import"./useAttrs.24cb77cc.js";import"./index.7b7aac10.js";import"./index.445b644a.js";import{u as d}from"./useForm.8efc7ee5.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>s?"1"===s?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:c},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:t,getFieldsValue:a,setFieldsValue:l}]=d({labelWidth:120,schemas:p,actionColOptions:{span:24}});return{register:i,schemas:p,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=a();e.success("values:"+JSON.stringify(s))},setFormValues:function(){l({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const u={class:"m-4"},f={class:"mb-4"},b=r("手动校验表单"),j=r("清空校验信息"),g=r("获取表单值"),x=r("设置表单值");m.render=function(e,s,r,n,c,d){const p=i("a-button"),m=i("BasicForm"),v=i("CollapseContainer");return o(),t("div",u,[a("div",f,[a(p,{onClick:e.validateForm,class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"]),a(p,{onClick:e.resetValidate,class:"mr-2"},{default:l((()=>[j])),_:1},8,["onClick"]),a(p,{onClick:e.getFormValues,class:"mr-2"},{default:l((()=>[g])),_:1},8,["onClick"]),a(p,{onClick:e.setFormValues,class:"mr-2"},{default:l((()=>[x])),_:1},8,["onClick"])]),a(v,{title:"表单校验"},{default:l((()=>[a(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;