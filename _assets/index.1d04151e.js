import{a as s,i,o as t,j as e,k as a,ad as o,aH as n,w as l,p as c}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import{A as r}from"./index.68bab8b7.js";import"./CloseOutlined.5e877561.js";import{c as m}from"./functional.371050ee.js";import"./LoadingOutlined.fa8d08eb.js";import"./RightOutlined.c78ef51e.js";const p=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var d=s({components:{Alert:r},setup:()=>({imgList:p,handleClick:function(s){m({imageList:[s]})},handlePreview:function(){m({imageList:p})}})});const u={class:"p-4"},f={class:"flex justify-center mt-4"},h=c("预览图片");d.render=function(s,c,r,m,p,d){const g=i("Alert"),j=i("a-button");return t(),e("div",u,[a(g,{message:"有预览图",type:"info"}),a("div",f,[(t(!0),e(o,null,n(s.imgList,(i=>(t(),e("img",{src:i,key:i,class:"mr-2",onClick:t=>s.handleClick(i)},null,8,["src","onClick"])))),128))]),a(g,{message:"无预览图",type:"info"}),a(j,{onClick:s.handlePreview,type:"primary",class:"mt-4"},{default:l((()=>[h])),_:1},8,["onClick"])])};export default d;