import{B,_ as l,o as s,a,d as i,w as u,b as t,t as b,C as y,u as m,r as g,f as k,F as f,g as w,h,T as _,i as L,j as C,v as I,l as S,m as H,n as q}from"./index-HbAlBi_T.js";const v=B("currentPage",{state:()=>({page:"default"})}),F={class:"f-button"},E={class:"f-button-text"},M={__name:"Button",props:{text:{type:String,required:!0},name:{type:String,required:!0},link:{type:String,required:!0}},setup(n){const o=v().page;return(c,r)=>{const d=g("router-link");return s(),a("div",F,[i(d,{to:n.link,class:y(["nav-link",[n.name===m(o)?"current":""]])},{default:u(()=>[t("span",E,b(n.text),1)]),_:1},8,["to","class"])])}}},T=l(M,[["__scopeId","data-v-0839f907"]]),$=[{id:1,text:"Home",name:"home",link:"/"},{id:2,text:"News",name:"news",link:"/news"},{id:3,text:"Cats",name:"cats",link:"/cats"},{id:4,text:"Using",name:"using",link:"/using"},{id:5,text:"Access",name:"access",link:"/access"}],W={class:"f-box-parent"},U={class:"f-box"},K={class:"f-buttons-box"},N={__name:"Footer",setup(n){const e=k($);return(o,c)=>(s(),a("div",W,[t("div",U,[t("div",K,[(s(!0),a(f,null,w(e.value,r=>(s(),h(T,{key:r.id,text:r.text,name:r.name,link:r.link},null,8,["text","name","link"]))),128))]),c[0]||(c[0]=t("div",null,[t("p",{class:"f-small"},[t("small",null,"© 2024 KAKUU CATCAFE Company, Inc")])],-1))])]))}},R=l(N,[["__scopeId","data-v-db2aa798"]]),D={class:"h-button"},z={class:"button-txt"},V={__name:"Button",props:{text:{type:String,required:!0},name:{type:String,required:!0},link:{type:String,required:!0}},setup(n){const o=v().page;return(c,r)=>{const d=g("router-link");return s(),a("div",D,[i(d,{class:y(["nav-link",[n.name===m(o)?"current":""]]),to:n.link},{default:u(()=>[t("span",z,b(n.text),1)]),_:1},8,["to","class"])])}}},Z=l(V,[["__scopeId","data-v-2621cc74"]]),j={class:"h-buttons-box"},P={__name:"ButtonsBox",setup(n){const e=k($);return(o,c)=>(s(),a("div",j,[(s(!0),a(f,null,w(e.value,r=>(s(),h(Z,{key:r.id,text:r.text,name:r.name,link:r.link},null,8,["text","name","link"]))),128))]))}},x=l(P,[["__scopeId","data-v-0cdf43cb"]]),Y="/img/cat_icon2.png",G={};function J(n,e){const o=g("router-link");return s(),h(o,{class:"h-icon-link",to:"/"},{default:u(()=>e[0]||(e[0]=[t("div",{class:"h-icon-box"},[t("div",{class:"h-icon"},[t("img",{src:Y,alt:"logo",width:"48",class:"img-w"})]),t("div",{class:"h-icon-txt"},[t("span",{class:"logo-txt"},"KAKUU CAT CAFE")])],-1)])),_:1})}const O=l(G,[["render",J],["__scopeId","data-v-c36be4eb"]]),Q="/img/bars_24_2.png",X={class:"ham-button-box"},tt={key:0,class:"ham-img ham-cross"},et={key:1,class:"ham-img"},st={__name:"HamburgerIcon",props:{toggle:{type:Boolean,required:!0}},emits:["child-event"],setup(n,{emit:e}){const o=e,c=()=>{o("child-event")};return(r,d)=>(s(),a("div",X,[t("button",{class:"ham-button",onClick:c},[i(_,{name:"ham-icon"},{default:u(()=>[n.toggle?(s(),a("span",tt," × ")):(s(),a("span",et,d[0]||(d[0]=[t("img",{src:Q,alt:"hamburger",width:"36",height:"36"},null,-1)])))]),_:1})])]))}},nt=l(st,[["__scopeId","data-v-ba90d538"]]),A="/img/nikukyu.png",ot={class:"ham-fukidasi"},it={key:0,class:"ham-fukidasi-close"},at={xmlns:"http://www.w3.org/2000/svg",height:"66",width:"220",viewBox:"0 0 200 60",style:{fill:"#cfcfcf",stroke:"#000000"}},ct={key:1,class:"ham-fukidasi-open"},rt={xmlns:"http://www.w3.org/2000/svg",height:"66",width:"220",viewBox:"0 0 200 60",style:{fill:"#cfcfcf",stroke:"#000000"}},lt={__name:"HamburgerFukidasi",props:{toggle:{type:Boolean,required:!0}},emits:["child-event"],setup(n,{emit:e}){return(o,c)=>(s(),a("div",ot,[c[2]||(c[2]=t("div",{class:"nikukyu-fukidasi"},[t("img",{src:A,alt:"nikukyu",width:"50",height:"50"})],-1)),n.toggle?(s(),a("div",it,[(s(),a("svg",at,c[0]||(c[0]=[t("path",{d:"M1,6 A6,6 0 0 1 6,1 L154,1 A6,6 0 0 1 160,6 L160,16 L175,24 L160,32 L160,42 A6,6 0 0 1 154,48 L6,48 A6,6 0 0 1 1,42  Z"},null,-1),t("text",{x:"80",y:"30","text-anchor":"middle",class:"fukidasi-close"},"メニューを閉じる",-1)])))])):(s(),a("div",ct,[(s(),a("svg",rt,c[1]||(c[1]=[t("path",{d:"M1,6 A6,6 0 0 1 6,1 L154,1 A6,6 0 0 1 160,6 L160,16 L175,24 L160,32 L160,42 A6,6 0 0 1 154,48 L6,48 A6,6 0 0 1 1,42  Z"},null,-1),t("text",{x:"80",y:"30","text-anchor":"middle",class:"fukidasi-open"},"メニューを開く",-1)])))]))]))}},ut=l(lt,[["__scopeId","data-v-f6691319"]]),dt=["width","height"],p={__name:"Nikukyu",props:{imgWidth:{type:String,required:!0},imgHeight:{type:String,required:!0}},setup(n){return(e,o)=>(s(),a("img",{src:A,alt:"nikukyu",width:n.imgWidth,height:n.imgHeight},null,8,dt))}},_t={class:"header-box"},mt={class:"h-icon-box-parent"},ht={class:"h-buttons-box-parent"},pt={class:"nikukyu-parent"},gt={class:"nikukyu1"},kt={class:"nikukyu2"},ft={class:"nikukyu3"},vt={class:"ham-fukidasi-parent"},xt={class:"ham-button-box-parent"},bt={class:"ham-menu-box-parent"},yt={__name:"Header",setup(n){let e=k(!1);function o(){e.value=!e.value}return L(()=>{window.addEventListener("resize",()=>{window.innerWidth>=768&&(e.value=!1)})}),window.addEventListener("scroll",()=>{window.scrollY>=80&&(e.value=!1)}),(c,r)=>(s(),a(f,null,[t("nav",_t,[t("div",mt,[i(O)]),t("div",ht,[i(x)]),t("div",pt,[i(_,{name:"a-nikukyu1",appear:""},{default:u(()=>[t("div",gt,[i(p,{imgWidth:"70",imgHeight:"70"})])]),_:1}),i(_,{name:"a-nikukyu2",appear:""},{default:u(()=>[t("div",kt,[i(p,{imgWidth:"40",imgHeight:"40"})])]),_:1}),i(_,{name:"a-nikukyu3",appear:""},{default:u(()=>[t("div",ft,[i(p,{imgWidth:"30",imgHeight:"30"})])]),_:1})]),t("div",vt,[i(ut,{onChildEvent:o,toggle:m(e)},null,8,["toggle"])]),t("div",xt,[i(nt,{onChildEvent:o,toggle:m(e)},null,8,["toggle"])])]),(s(),h(S,{to:"#ham-menu"},[i(_,{name:"ham-menu"},{default:u(()=>[C(t("div",bt,[i(x)],512),[[I,m(e)]])]),_:1})]))],64))}},wt=l(yt,[["__scopeId","data-v-05075a12"]]),$t={class:"back-image"},At={class:"main-container-parent"},Bt={__name:"MainComponent",setup(n){return(e,o)=>(s(),a("div",$t,[t("header",null,[i(wt)]),t("main",null,[t("div",At,[H(e.$slots,"default",{},void 0,!0)])]),t("footer",null,[i(R)])]))}},Ct=l(Bt,[["__scopeId","data-v-1f2ec4bb"]]);function It(){const e=q().meta.title,o=v();o.page=e}export{Ct as M,It as c};
