import{a as e,aU as o,u as t,i,o as s,j as r,k as a,w as n}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import{T as l}from"./index.e2ac5270.js";import"./index.fe9d95e6.js";import"./CloseOutlined.96ea54bd.js";import"./FullscreenOutlined.42f0d2f2.js";import{L as m}from"./LockOutlined.2605328a.js";import"./RightOutlined.e5ee841f.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import"./useAttrs.42205efa.js";import{a as d}from"./index.8cf17bff.js";import"./useWindowSizeFn.8b84c5f6.js";var p=e({name:"FullScreen",components:{LockOutlined:m,Tooltip:l,LockAction:o((()=>import("./LockModal.62d00040.js")))},setup(){const{t:e}=t(),[o,{openModal:i}]=d();return{t:e,register:o,handleLock:function(){i(!0)}}}});p.render=function(e,o,t,l,m,d){const p=i("LockOutlined"),c=i("Tooltip"),u=i("LockAction");return s(),r("span",{onClick:o[1]||(o[1]=(...o)=>e.handleLock&&e.handleLock(...o))},[a(c,{title:e.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:n((()=>[a(p)])),_:1},8,["title","mouseEnterDelay"]),a(u,{onRegister:e.register},null,8,["onRegister"])])};export default p;