let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(e);import{a as t,i as o,o as a,j as i,k as s,w as n}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.fe7e1d24.js";import{A as r}from"./index.68bab8b7.js";import"./RightOutlined.efab7f95.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.efb78f34.js";import"./index.14fa0811.js";import"./UpOutlined.a902a507.js";import"./LeftOutlined.61f5ba5e.js";import"./index.42445ede.js";import{b as m,S as p}from"./index.1ec384e7.js";import"./RightOutlined.c78ef51e.js";import"./useTimeout.92483bb5.js";import"./tsxHelper.32d36f09.js";import"./index.a793eec0.js";import"./domUtils.dd108ce8.js";import"./index.f02911a0.js";import"./animation.0e442f99.js";import"./useScrollTo.28ed3853.js";import l from"./TargetContent.8ef86b6a.js";var d=t({components:{LazyContainer:m,TargetContent:l,Skeleton:p,Alert:r},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},f={class:"lazy-base-demo-wrap"},u=s("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};d.render=function(e,t,r,m,p,l){const d=o("Alert"),b=o("TargetContent"),x=o("LazyContainer");return a(),i("div",c,[s(d,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),s("div",f,[u,s("div",j,[s(x,{transitionName:"custom"},{default:n((()=>[s(b)])),_:1})])])])};export default d;