let a=document.createElement("style");a.innerHTML=".account-center-application__card{width:100%;margin-bottom:-12px}.account-center-application__card .ant-card-body{padding:16px}.account-center-application__card-title{margin-bottom:5px;font-size:16px;font-weight:500;color:rgba(0,0,0,.85)}.account-center-application__card-title .icon{margin-top:-5px;font-size:22px}.account-center-application__card-num{margin-left:24px;line-height:36px;color:#7d7a7a}.account-center-application__card-num span{margin-left:5px;font-size:18px;color:#000}.account-center-application__card-download{float:right;font-size:20px!important;color:#1890ff}",document.head.appendChild(a);import{a as t,i,o as e,j as o,w as n,k as c,ad as r,aH as s,m as l,p,n as d}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./index.74a2ce06.js";import"./Trigger.7f13f611.js";import"./omit.1a2731ea.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.fe7e1d24.js";import"./CheckOutlined.0d8b90fc.js";import"./RightOutlined.efab7f95.js";import"./index.14fa0811.js";import"./UpOutlined.a902a507.js";import"./LeftOutlined.61f5ba5e.js";import{C as m}from"./index.42445ede.js";import"./index.da5dce07.js";import"./zh_CN.0242bd16.js";import{L as f}from"./index.5edeab46.js";import{s as u}from"./index.7b7aac10.js";import{applicationList as _}from"./data.652d53ae.js";var x=t({components:{List:f,ListItem:f.Item,Card:m,Icon:u},setup:()=>({prefixCls:"account-center-application",list:_})});const j=p(" 活跃用户："),b=p(" 万 "),g=p(" 新增用户：");x.render=function(a,t,m,f,u,_){const x=i("Icon"),C=i("Card"),h=i("ListItem"),w=i("a-col"),v=i("a-row"),L=i("List");return e(),o(L,{class:a.prefixCls},{default:n((()=>[c(v,{gutter:16},{default:n((()=>[(e(!0),o(r,null,s(a.list,((t,i)=>(e(),o(w,{key:i,span:6},{default:n((()=>[c(h,null,{default:n((()=>[c(C,{hoverable:!0,class:`${a.prefixCls}__card`},{default:n((()=>[c("div",{class:`${a.prefixCls}__card-title`},[t.icon?(e(),o(x,{key:0,class:"icon",icon:t.icon,color:t.color},null,8,["icon","color"])):l("v-if",!0),p(" "+d(t.title),1)],2),c("div",{class:`${a.prefixCls}__card-num`},[j,c("span",null,d(t.active),1),b],2),c("div",{class:`${a.prefixCls}__card-num`},[g,c("span",null,d(t.new),1)],2),t.download?(e(),o(x,{key:0,class:`${a.prefixCls}__card-download`,icon:t.download},null,8,["class","icon"])):l("v-if",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default x;