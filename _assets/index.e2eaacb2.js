import{a as e,r as l,i as r,o as s,j as t,k as o,w as n,p as i,n as c}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.efb78f34.js";import{a as u}from"./index.1ec384e7.js";import"./RightOutlined.c78ef51e.js";import"./useTimeout.92483bb5.js";import"./tsxHelper.32d36f09.js";import"./index.a793eec0.js";import"./domUtils.dd108ce8.js";import"./index.f02911a0.js";import"./animation.0e442f99.js";import"./useScrollTo.28ed3853.js";import{u as a}from"./useFullScreen.188ccb9d.js";var m=e({components:{CollapseContainer:u},setup(){const e=l(null),{enterFullscreen:r,toggleFullscreen:s,isFullscreenRef:t,exitFullscreen:o}=a(),{toggleFullscreen:n}=a(e);return{enterFullscreen:r,toggleDom:n,toggleFullscreen:s,isFullscreenRef:t,exitFullscreen:o,domRef:e}}});const d={class:"p-4"},p=i(" Enter Window Full Screen "),f=i(" Toggle Window Full Screen "),F=i(" Exit Window Full Screen "),g=i(" Enter Dom Full Screen "),j={ref:"domRef",class:"w-1/2 h-64 flex justify-center rounded-md items-center bg-white mx-auto mt-10"},x=i(" Exit Dom Full Screen ");m.render=function(e,l,u,a,m,C){const b=r("a-button"),k=r("CollapseContainer");return s(),t("div",d,[o(k,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Window Full Screen"},{default:n((()=>[o(b,{type:"primary",onClick:e.enterFullscreen,class:"mr-2"},{default:n((()=>[p])),_:1},8,["onClick"]),o(b,{color:"success",onClick:e.toggleFullscreen,class:"mr-2"},{default:n((()=>[f])),_:1},8,["onClick"]),o(b,{color:"error",onClick:e.exitFullscreen,class:"mr-2"},{default:n((()=>[F])),_:1},8,["onClick"]),i(" Current State: "+c(e.isFullscreenRef),1)])),_:1}),o(k,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Dom Full Screen"},{default:n((()=>[o(b,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:n((()=>[g])),_:1},8,["onClick"])])),_:1}),o("div",j,[o(b,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:n((()=>[x])),_:1},8,["onClick"])],512)])};export default m;