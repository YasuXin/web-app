import{c as N,M as k}from"./commit-title-CKphzCxX.js";/* empty css                                                                */import{T as x}from"./TitleBox-xxUvXqr3.js";/* empty css                                                                 */import{s as y}from"./news-data-CrvEVKo4.js";import{_ as d,c as m,o as s,a as c,b as e,t as p,d as o,w as i,e as g,r as w,f as $,F as D,g as T,h as _,T as f,u as v,n as q,p as B,q as b}from"./index-HbAlBi_T.js";/* empty css                                                                    */const C={class:"articles-parent"},L={class:"article-date"},M=["datetime"],S={class:"article-title"},V={__name:"NewsList",props:{id:{type:Number,required:!0},datetime:{type:String,required:!0},date:{type:Date,required:!0},title:{type:String,required:!0}},setup(r){const t=r,l=m(()=>"/news/"+t.id),n=m(()=>t.date.toLocaleDateString());return(a,u)=>{const h=w("router-link");return s(),c("article",C,[e("div",L,[e("p",null,[e("time",{datetime:r.datetime},p(n.value),9,M)])]),e("div",S,[e("div",null,[e("p",null,[o(h,{to:l.value},{default:i(()=>[g(p(r.title),1)]),_:1},8,["to"])])])])])}}},I=d(V,[["__scopeId","data-v-c1e528c1"]]),F={class:"news-box"},R={__name:"News",setup(r){const t=$(y());return(l,n)=>(s(),c("section",F,[(s(!0),c(D,null,T(t.value,a=>(s(),_(I,{key:a.id,id:a.id,datetime:a.datetime,date:a.date,title:a.title},null,8,["id","datetime","date","title"]))),128))]))}},A=d(R,[["__scopeId","data-v-1f11404b"]]),E={class:"main-container"},j={class:"news-parent"},z={key:0,class:"please-click"},G={__name:"NewsMain",setup(r){const t=q();return(l,n)=>{const a=w("router-view");return s(),c("div",E,[o(f,{name:"title-fade",appear:""},{default:i(()=>[o(x,{main:"ニュース",small:"※すべて架空のものです"})]),_:1}),e("div",j,[o(a,null,{default:i(({Component:u})=>[o(f,{name:"slide-fade",mode:"out-in",appear:""},{default:i(()=>[(s(),_(B(u),{key:v(t).path}))]),_:2},1024)]),_:1}),v(t).params.id?b("",!0):(s(),c("section",z,n[0]||(n[0]=[e("article",null,[e("div",{class:"cat-image"}),e("h2",null,"一覧のタイトルをクリックしてください")],-1)]))),o(A)])])}}},H=d(G,[["__scopeId","data-v-821ce4d1"]]),X={__name:"NewsRoute",setup(r){return N(),(t,l)=>(s(),_(k,null,{default:i(()=>[o(H)]),_:1}))}};export{X as default};