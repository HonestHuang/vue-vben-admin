let e=document.createElement("style");e.innerHTML=".demo[data-v-6ff3f06c]{background:#fff}",document.head.appendChild(e);import{a as s,b3 as a,bC as o,dA as t,dB as r,d9 as i,da as d,i as n,bs as c,o as m,j as l,bo as u,k as f,n as p,m as x,aq as _,p as j}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import{A as y}from"./index.449c490a.js";import"./index.81a614c0.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./usePageContext.5c284b04.js";import"./types.231a34f8.js";import"./index.e2ac5270.js";import{D as P}from"./index.78c9b85a.js";import"./transButton.1b860824.js";import"./tsxHelper.265b5a74.js";import{s as h}from"./index.812d3d59.js";import b from"./CurrentPermissionMode.b3ee51d8.js";import{s as g}from"./index.234c1d51.js";var C=s({components:{Alert:y,PageWrapper:h,CurrentPermissionMode:b,Divider:P,Authority:g},setup(){const{hasPermission:e}=t();async function s(e){const s=await r({userId:e});a.commitPermCodeListState(s)}return s("1"),{hasPermission:e,permissionStore:a,changePermissionCode:s,PermissionModeEnum:o}}});const v=u("data-v-6ff3f06c");i("data-v-6ff3f06c");const k=j(" 当前拥有的code列表: "),A=j(" 点击切换按钮权限(用户id为2) "),M=j(" 点击切换按钮权限(用户id为1,默认) "),S=j("组件方式判断权限"),w=j("拥有code ['1000']权限可见"),D=j("拥有code ['2000']权限可见"),B=j("拥有code ['1000','2000']角色权限可见"),L=j("函数方式方式判断权限"),E=j(" 拥有code ['1000']权限可见 "),H=j(" 拥有code ['2000']权限可见 "),I=j(" 拥有code ['1000','2000']角色权限可见 "),O=j("指令方式方式判断权限(该方式不能动态修改权限.)"),T=j(" 拥有code ['1000']权限可见 "),W=j(" 拥有code ['2000']权限可见 "),q=j(" 拥有code ['1000','2000']角色权限可见 ");d();const R=v(((e,s,a,o,t,r)=>{const i=n("Alert"),d=n("CurrentPermissionMode"),u=n("Divider"),j=n("a-button"),y=n("Authority"),P=n("PageWrapper"),h=c("auth");return m(),l(P,{contentBackgrond:"",title:"按钮权限控制",contentClass:"p-4"},{default:v((()=>[f(i,{message:"刷新后会还原","show-icon":""}),f(d),f("p",null,[k,f("a",null,p(e.permissionStore.getPermCodeListState),1)]),f(u),f(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),f(u),f(j,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:v((()=>[A])),_:1}),f(j,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:v((()=>[M])),_:1}),f(u,null,{default:v((()=>[S])),_:1}),f(y,{value:"1000"},{default:v((()=>[f(j,{type:"primary",class:"mx-4"},{default:v((()=>[w])),_:1})])),_:1}),f(y,{value:"2000"},{default:v((()=>[f(j,{color:"success",class:"mx-4"},{default:v((()=>[D])),_:1})])),_:1}),f(y,{value:["1000","2000"]},{default:v((()=>[f(j,{color:"error",class:"mx-4"},{default:v((()=>[B])),_:1})])),_:1}),f(u,null,{default:v((()=>[L])),_:1}),e.hasPermission("1000")?(m(),l(j,{key:0,type:"primary",class:"mx-4"},{default:v((()=>[E])),_:1})):x("v-if",!0),e.hasPermission("2000")?(m(),l(j,{key:1,color:"success",class:"mx-4"},{default:v((()=>[H])),_:1})):x("v-if",!0),e.hasPermission(["1000","2000"])?(m(),l(j,{key:2,color:"error",class:"mx-4"},{default:v((()=>[I])),_:1})):x("v-if",!0),f(u,null,{default:v((()=>[O])),_:1}),_(f(j,{type:"primary",class:"mx-4"},{default:v((()=>[T])),_:1},512),[[h,"1000"]]),_(f(j,{color:"success",class:"mx-4"},{default:v((()=>[W])),_:1},512),[[h,"2000"]]),_(f(j,{color:"error",class:"mx-4"},{default:v((()=>[q])),_:1},512),[[h,["1000","2000"]]])])),_:1})}));C.render=R,C.__scopeId="data-v-6ff3f06c";export default C;