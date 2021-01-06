let e=document.createElement("style");e.innerHTML=".vben-setting-button{position:absolute;top:45%;right:0;z-index:10;display:flex;padding:10px;color:#fff;cursor:pointer;background:#018ffb;border-radius:6px 0 0 6px;justify-content:center;align-items:center}.vben-setting-button svg{width:1em;height:1em}",document.head.appendChild(e);import{aU as t,u as n,dN as i,dO as a,dP as o,aR as l,aS as s,dQ as E,bn as r,bB as _,dR as u,dS as d,dT as g,dU as S,a as O,I as T,az as N,aM as A,f as M,b8 as R,bk as I,aZ as c,bd as D,aV as m,i as C,o as H,j as f,k as b}from"./index.82957b1b.js";import{D as p}from"./index.78c9b85a.js";import{s as U,u as L}from"./index.57afd88d.js";import{S as y}from"./SettingOutlined.8836b328.js";import{d as B}from"./useHeaderSetting.be29d403.js";const v=t((()=>import("./TypePicker.f9abcf56.js"))),W=t((()=>import("./ThemePicker.2b46d9fa.js"))),h=t((()=>import("./SettingFooter.8673e155.js"))),G=t((()=>import("./SwitchItem.f09c7076.js"))),F=t((()=>import("./SelectItem.ea903e45.js"))),P=t((()=>import("./InputNumberItem.4b8bbe0b.js"))),{t:w}=n();var x,X;(X=x||(x={}))[X.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",X[X.MENU_HAS_DRAG=1]="MENU_HAS_DRAG",X[X.MENU_ACCORDION=2]="MENU_ACCORDION",X[X.MENU_TRIGGER=3]="MENU_TRIGGER",X[X.MENU_TOP_ALIGN=4]="MENU_TOP_ALIGN",X[X.MENU_COLLAPSED=5]="MENU_COLLAPSED",X[X.MENU_COLLAPSED_SHOW_TITLE=6]="MENU_COLLAPSED_SHOW_TITLE",X[X.MENU_WIDTH=7]="MENU_WIDTH",X[X.MENU_SHOW_SIDEBAR=8]="MENU_SHOW_SIDEBAR",X[X.MENU_THEME=9]="MENU_THEME",X[X.MENU_SPLIT=10]="MENU_SPLIT",X[X.MENU_FIXED=11]="MENU_FIXED",X[X.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=12]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",X[X.MENU_TRIGGER_MIX_SIDEBAR=13]="MENU_TRIGGER_MIX_SIDEBAR",X[X.MENU_FIXED_MIX_SIDEBAR=14]="MENU_FIXED_MIX_SIDEBAR",X[X.HEADER_SHOW=15]="HEADER_SHOW",X[X.HEADER_THEME=16]="HEADER_THEME",X[X.HEADER_FIXED=17]="HEADER_FIXED",X[X.HEADER_SEARCH=18]="HEADER_SEARCH",X[X.TABS_SHOW_QUICK=19]="TABS_SHOW_QUICK",X[X.TABS_SHOW_REDO=20]="TABS_SHOW_REDO",X[X.TABS_SHOW=21]="TABS_SHOW",X[X.TABS_SHOW_FOLD=22]="TABS_SHOW_FOLD",X[X.LOCK_TIME=23]="LOCK_TIME",X[X.FULL_CONTENT=24]="FULL_CONTENT",X[X.CONTENT_MODE=25]="CONTENT_MODE",X[X.SHOW_BREADCRUMB=26]="SHOW_BREADCRUMB",X[X.SHOW_BREADCRUMB_ICON=27]="SHOW_BREADCRUMB_ICON",X[X.GRAY_MODE=28]="GRAY_MODE",X[X.COLOR_WEAK=29]="COLOR_WEAK",X[X.SHOW_LOGO=30]="SHOW_LOGO",X[X.SHOW_FOOTER=31]="SHOW_FOOTER",X[X.ROUTER_TRANSITION=32]="ROUTER_TRANSITION",X[X.OPEN_PROGRESS=33]="OPEN_PROGRESS",X[X.OPEN_PAGE_LOADING=34]="OPEN_PAGE_LOADING",X[X.OPEN_ROUTE_TRANSITION=35]="OPEN_ROUTE_TRANSITION";const k=[{value:i.FULL,label:w("layout.setting.contentModeFull")},{value:i.FIXED,label:w("layout.setting.contentModeFixed")}],j=[{value:a.CENTER,label:w("layout.setting.topMenuAlignRight")},{value:a.START,label:w("layout.setting.topMenuAlignLeft")},{value:a.END,label:w("layout.setting.topMenuAlignCenter")}],K=[o.ZOOM_FADE,o.FADE,o.ZOOM_OUT,o.FADE_SIDE,o.FADE_BOTTOM,o.FADE_SCALE].map((e=>({label:e,value:e}))),Q=[{title:w("layout.setting.menuTypeSidebar"),mode:l.INLINE,type:s.SIDEBAR},{title:w("layout.setting.menuTypeMix"),mode:l.INLINE,type:s.MIX},{title:w("layout.setting.menuTypeTopMenu"),mode:l.HORIZONTAL,type:s.TOP_MENU},{title:w("layout.setting.menuTypeMixSidebar"),mode:l.INLINE,type:s.MIX_SIDEBAR}],Y=[{value:E.HOVER,label:w("layout.setting.triggerHover")},{value:E.CLICK,label:w("layout.setting.triggerClick")}];function z(e,t){const n=function(e,t){switch(e){case x.CHANGE_LAYOUT:const{mode:e,type:n,split:i}=t;return{menuSetting:{mode:e,type:n,collapsed:!1,show:!0,hidden:!1,...void 0===i?{split:i}:{}}};case x.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case x.MENU_ACCORDION:return{menuSetting:{accordion:t}};case x.MENU_TRIGGER:return{menuSetting:{trigger:t}};case x.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case x.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case x.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case x.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case x.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case x.MENU_THEME:return S(t),{menuSetting:{bgColor:t}};case x.MENU_SPLIT:return{menuSetting:{split:t}};case x.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case x.MENU_FIXED:return{menuSetting:{fixed:t}};case x.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case x.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case x.OPEN_PAGE_LOADING:return _.commitPageLoadingState(!1),{transitionSetting:{openPageLoading:t}};case x.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case x.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case x.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case x.LOCK_TIME:return{lockTime:t};case x.FULL_CONTENT:return{fullContent:t};case x.CONTENT_MODE:return{contentMode:t};case x.SHOW_BREADCRUMB:return{showBreadCrumb:t};case x.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case x.GRAY_MODE:return g(t),{grayMode:t};case x.SHOW_FOOTER:return{showFooter:t};case x.COLOR_WEAK:return d(t),{colorWeak:t};case x.SHOW_LOGO:return{showLogo:t};case x.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case x.TABS_SHOW:return{multiTabsSetting:{show:t}};case x.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case x.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case x.HEADER_THEME:return u(t),{headerSetting:{bgColor:t}};case x.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case x.HEADER_FIXED:return{headerSetting:{fixed:t}};case x.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);_.commitProjectConfigState(n)}const V=["#ffffff","#009688","#5172DC","#1E9FFF","#018ffb","#409eff","#4e73df","#e74c3c","#24292e","#394664","#001529","#383f45"],Z=["#273352","#ffffff","#191b24","#191a23","#001529","#304156","#001628","#28333E","#344058","#383f45"],{t:$}=n();var q=O({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:i,getShowBreadCrumb:a,getShowBreadCrumbIcon:o,getShowLogo:l,getFullContent:E,getColorWeak:_,getGrayMode:u,getLockTime:d}=R(),{getOpenPageLoading:g,getBasicTransition:S,getEnableTransition:O,getOpenNProgress:m}=I(),{getIsHorizontal:C,getShowMenu:H,getMenuType:f,getTrigger:b,getCollapsedShowTitle:L,getMenuFixed:y,getCollapsed:X,getCanDrag:q,getTopMenuAlign:J,getAccordion:ee,getMenuWidth:te,getMenuBgColor:ne,getIsTopMenu:ie,getSplit:ae,getIsMixSidebar:oe,getCloseMixSidebarOnChange:le,getMixSideTrigger:se,getMixSideFixed:Ee}=c(),{getShowHeader:re,getFixed:_e,getHeaderBgColor:ue,getShowSearch:de}=B(),{getShowMultipleTab:ge,getShowQuick:Se,getShowRedo:Oe,getShowFold:Te}=D(),Ne=T((()=>M(H)&&!M(C)));function Ae(){let e=M(b);const t=(i=M(ae),[{value:r.NONE,label:w("layout.setting.menuTriggerNone")},{value:r.FOOTER,label:w("layout.setting.menuTriggerBottom")},...i?[]:[{value:r.HEADER,label:w("layout.setting.menuTriggerTop")}]]);var i;return t.some((t=>t.value===e))||(e=r.FOOTER),N(A,null,N(G,{title:$("layout.setting.splitMenu"),event:x.MENU_SPLIT,def:M(ae),disabled:!M(Ne)||M(f)!==s.MIX}),N(G,{title:$("layout.setting.mixSidebarFixed"),event:x.MENU_FIXED_MIX_SIDEBAR,def:M(Ee),disabled:!M(oe)}),N(G,{title:$("layout.setting.closeMixSidebarOnChange"),event:x.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:M(le),disabled:!M(oe)}),N(G,{title:$("layout.setting.menuCollapse"),event:x.MENU_COLLAPSED,def:M(X),disabled:!M(Ne)}),N(G,{title:$("layout.setting.menuDrag"),event:x.MENU_HAS_DRAG,def:M(q),disabled:!M(Ne)}),N(G,{title:$("layout.setting.menuSearch"),event:x.HEADER_SEARCH,def:M(de),disabled:!M(re)}),N(G,{title:$("layout.setting.menuAccordion"),event:x.MENU_ACCORDION,def:M(ee),disabled:!M(Ne)}),N(G,{title:$("layout.setting.collapseMenuDisplayName"),event:x.MENU_COLLAPSED_SHOW_TITLE,def:M(L),disabled:!M(Ne)||!M(X)||M(oe)}),N(G,{title:$("layout.setting.fixedHeader"),event:x.HEADER_FIXED,def:M(_e),disabled:!M(re)}),N(G,{title:$("layout.setting.fixedSideBar"),event:x.MENU_FIXED,def:M(y),disabled:!M(Ne)||M(oe)}),N(F,{title:$("layout.setting.mixSidebarTrigger"),event:x.MENU_TRIGGER_MIX_SIDEBAR,def:M(se),options:Y,disabled:!M(oe)}),N(F,{title:$("layout.setting.topMenuLayout"),event:x.MENU_TOP_ALIGN,def:M(J),options:j,disabled:!M(re)||M(ae)||!M(ie)&&!M(ae)||M(oe)}),N(F,{title:$("layout.setting.menuCollapseButton"),event:x.MENU_TRIGGER,def:e,options:t,disabled:!M(Ne)||M(oe)}),N(F,{title:$("layout.setting.contentMode"),event:x.CONTENT_MODE,def:M(n),options:k}),N(P,{title:$("layout.setting.autoScreenLock"),min:0,event:x.LOCK_TIME,defaultValue:M(d),formatter:e=>0===parseInt(e)?`0(${$("layout.setting.notAutoScreenLock")})`:`${e}${$("layout.setting.minute")}`}),N(P,{title:$("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:x.MENU_WIDTH,disabled:!M(Ne),defaultValue:M(te),formatter:e=>`${parseInt(e)}px`}))}return()=>N(U,{...t,title:$("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"},{default:()=>N(A,null,N(p,null,(()=>$("layout.setting.navMode"))),N(A,null,N(v,{menuTypeList:Q,handler:e=>{z(x.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!M(C)&&void 0})},def:M(f)})),N(p,null,(()=>$("layout.setting.headerTheme"))),N(W,{colorList:V,def:M(ue),event:x.HEADER_THEME}),N(p,null,(()=>$("layout.setting.sidebarTheme"))),N(W,{colorList:Z,def:M(ne),event:x.MENU_THEME}),N(p,null,(()=>$("layout.setting.interfaceFunction"))),Ae(),N(p,null,(()=>$("layout.setting.interfaceDisplay"))),N(A,null,N(G,{title:$("layout.setting.breadcrumb"),event:x.SHOW_BREADCRUMB,def:M(a),disabled:!M(re)}),N(G,{title:$("layout.setting.breadcrumbIcon"),event:x.SHOW_BREADCRUMB_ICON,def:M(o),disabled:!M(re)}),N(G,{title:$("layout.setting.tabs"),event:x.TABS_SHOW,def:M(ge)}),N(G,{title:$("layout.setting.tabsRedoBtn"),event:x.TABS_SHOW_REDO,def:M(Oe),disabled:!M(ge)}),N(G,{title:$("layout.setting.tabsQuickBtn"),event:x.TABS_SHOW_QUICK,def:M(Se),disabled:!M(ge)}),N(G,{title:$("layout.setting.tabsFoldBtn"),event:x.TABS_SHOW_FOLD,def:M(Te),disabled:!M(ge)}),N(G,{title:$("layout.setting.sidebar"),event:x.MENU_SHOW_SIDEBAR,def:M(H),disabled:M(C)}),N(G,{title:$("layout.setting.header"),event:x.HEADER_SHOW,def:M(re)}),N(G,{title:"Logo",event:x.SHOW_LOGO,def:M(l),disabled:M(oe)}),N(G,{title:$("layout.setting.footer"),event:x.SHOW_FOOTER,def:M(i)}),N(G,{title:$("layout.setting.fullContent"),event:x.FULL_CONTENT,def:M(E)}),N(G,{title:$("layout.setting.grayMode"),event:x.GRAY_MODE,def:M(u)}),N(G,{title:$("layout.setting.colorWeak"),event:x.COLOR_WEAK,def:M(_)})),N(p,null,(()=>$("layout.setting.animation"))),N(A,null,N(G,{title:$("layout.setting.progress"),event:x.OPEN_PROGRESS,def:M(m)}),N(G,{title:$("layout.setting.switchLoading"),event:x.OPEN_PAGE_LOADING,def:M(g)}),N(G,{title:$("layout.setting.switchAnimation"),event:x.OPEN_ROUTE_TRANSITION,def:M(O)}),N(F,{title:$("layout.setting.animationType"),event:x.ROUTER_TRANSITION,def:M(S),options:K,disabled:!M(O)})),N(p,null),N(h,null))})}}),J=O({name:"SettingButton",components:{SettingOutlined:y,SettingDrawer:q},setup(){const[e,{openDrawer:t}]=L(),{prefixCls:n}=m("setting-button");return{prefixCls:n,register:e,openDrawer:t}}});J.render=function(e,t,n,i,a,o){const l=C("SettingOutlined"),s=C("SettingDrawer");return H(),f("div",{onClick:t[1]||(t[1]=(...t)=>e.openDrawer&&e.openDrawer(...t)),class:e.prefixCls},[b(l),b(s,{onRegister:e.register},null,8,["onRegister"])],2)};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{z as b,ee as i};