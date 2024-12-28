import{c as S,M as C}from"./commit-title-CKphzCxX.js";import{_ as d,o as i,a as v,b as s,m as F,h as f,w as u,t as x,f as b,j as $,A as R,u as _,k as y,d as a,v as M,T as c,l as T,F as q,K as D}from"./index-HbAlBi_T.js";import{T as B}from"./TitleBox-xxUvXqr3.js";const E="/assets/map1-DJ-LXAHY.jpg",V={},j={class:"map"};function K(n,l){return i(),v("div",j,l[0]||(l[0]=[s("img",{class:"wide-img",src:E,alt:"accessmap"},null,-1)]))}const L=d(V,[["render",K],["__scopeId","data-v-06a4301c"]]),N={};function W(n,l){return F(n.$slots,"default")}const I=d(N,[["render",W],["__scopeId","data-v-371336b8"]]),X={__name:"TextBoxRight",setup(n){return(l,e)=>(i(),f(I,null,{default:u(()=>e[0]||(e[0]=[s("div",{class:"text-box"},[s("table",null,[s("caption",null,"営業時間"),s("tr",null,[s("td",null,"平日"),s("td",null,"10:22 ～ 20:22")]),s("tr",null,[s("td",null,"土日祝"),s("td",null,"9:22 ～ 22:22")]),s("tr",null,[s("td",null,"定休日"),s("td",null,"毎週火曜水曜")])]),s("div",{class:"address"},[s("p",null,"〒222-2222"),s("p",null,"東京都〇〇区〇〇町2-22-222"),s("p",null,"ねこねこビル 222階"),s("p",null,"TEL 222-2222-2222"),s("p",null,"FAX 222-2222-2223")])],-1)])),_:1}))}},z=d(X,[["__scopeId","data-v-57536d86"]]),H={class:"modal-background"},J={class:"modal-container"},U={class:"box-parent"},Y={class:"box"},G={class:"box"},O={class:"box message-box"},P={__name:"ModalWindow",props:{name:{type:String},email:{type:String},message:{type:String}},emits:["submit-message","close-modal"],setup(n,{emit:l}){const e=l;function r(){e("submit-message")}function p(){e("close-modal")}return(g,o)=>(i(),v("div",H,[s("div",J,[o[3]||(o[3]=s("p",{class:"modal-message"},"以下の内容で送信します。",-1)),s("div",U,[o[0]||(o[0]=s("div",{class:"title"},"お名前：",-1)),s("div",Y,x(n.name),1),o[1]||(o[1]=s("div",{class:"title"},"メールアドレス：",-1)),s("div",G,x(n.email),1),o[2]||(o[2]=s("div",{class:"title message-title"},[s("p",null,"メッセージ：")],-1)),s("div",O,x(n.message),1)]),s("div",{class:"buttons"},[s("button",{onClick:r},"送信する"),s("button",{onClick:p},"送信しない")]),o[4]||(o[4]=s("div",{class:"small"},"送信ボタンはダミーなので送信されません",-1))])]))}},Q=d(P,[["__scopeId","data-v-e62a9299"]]),Z={action:"#",method:"post",autocomplete:"off"},h=["value"],ss=["value"],ts={class:"modal-parent"},es={class:"toast"},ls={__name:"FormBox",setup(n){let l=b(""),e=b(""),r=b(""),p=b(!1),g=b(!1);function o(){p.value=!0}function A(){p.value=!1}function k(){l.value="",e.value="",r.value="",p.value=!1,w()}function w(){g.value=!0,setTimeout(()=>{g.value=!1},3e3)}return(xs,t)=>(i(),v(q,null,[s("form",Z,[t[3]||(t[3]=s("label",{for:"name"},"お名前：",-1)),t[4]||(t[4]=s("br",null,null,-1)),$(s("input",{"onUpdate:modelValue":t[0]||(t[0]=m=>y(l)?l.value=m:l=m),type:"text",id:"name",size:"10",name:"name",placeholder:"your_name(10文字以内"},null,512),[[R,_(l)]]),t[5]||(t[5]=s("br",null,null,-1)),t[6]||(t[6]=s("label",{for:"email"},"Eメールアドレス：",-1)),t[7]||(t[7]=s("br",null,null,-1)),s("input",{value:_(e),onInput:t[1]||(t[1]=m=>y(e)?e.value=m.target.value:e=m.target.value),type:"email",id:"email",name:"email",placeholder:"your_email"},null,40,h),t[8]||(t[8]=s("br",null,null,-1)),t[9]||(t[9]=s("label",{for:"message"},"メッセージ",-1)),t[10]||(t[10]=s("br",null,null,-1)),s("textarea",{value:_(r),onInput:t[2]||(t[2]=m=>y(r)?r.value=m.target.value:r=m.target.value),name:"message",id:"message",cols:"50",rows:"10"},null,40,ss),t[11]||(t[11]=s("br",null,null,-1)),t[12]||(t[12]=s("input",{type:"submit",name:"submit",value:"送信",disabled:""},null,-1))]),s("div",{class:"dummy-parent"},[s("button",{onClick:o,class:"dummy-button"},"送信?")]),(i(),f(T,{to:"#modal1"},[a(c,{name:"modal"},{default:u(()=>[$(s("div",ts,[a(Q,{name:_(l),email:_(e),message:_(r),onSubmitMessage:k,onCloseModal:A},null,8,["name","email","message"])],512),[[M,_(p)]])]),_:1})])),(i(),f(T,{to:"#submit-message"},[a(c,{name:"toast"},{default:u(()=>[$(s("div",es,t[13]||(t[13]=[s("p",null,"メッセージを送信しませんでした！",-1)]),512),[[M,_(g)]])]),_:1})]))],64))}},as=d(ls,[["__scopeId","data-v-d79d553e"]]),ns={class:"text-box"},os={__name:"TextBoxBottom",setup(n){return(l,e)=>(i(),f(I,null,{default:u(()=>[s("div",ns,[e[0]||(e[0]=s("p",null,"当店は存在しないため、アクセス方法はありません。",-1)),e[1]||(e[1]=s("p",{style:{display:"block","margin-bottom":"20px"}},"以下のフォームからお問い合せしないでください",-1)),(i(),f(D,null,[a(as)],1024))])]),_:1}))}},is=d(os,[["__scopeId","data-v-a10ca398"]]),us={class:"access1"},ds={__name:"Access",setup(n){return(l,e)=>(i(),v("div",us,[a(L),a(z)]))}},rs=d(ds,[["__scopeId","data-v-638d5bb6"]]),ms={class:"access2"},_s={__name:"Inquiry",setup(n){return(l,e)=>(i(),v("div",ms,[a(is)]))}},ps=d(_s,[["__scopeId","data-v-412eaa06"]]),cs={class:"main-container"},fs={class:"access-parent"},vs={class:"inquiry-parent"},bs={__name:"AccessMain",setup(n){return(l,e)=>(i(),v("div",cs,[a(c,{name:"title-fade",appear:""},{default:u(()=>[a(B,{main:"アクセス",small:"※当店は存在しません"})]),_:1}),s("div",fs,[a(c,{name:"fade",appear:""},{default:u(()=>[a(rs)]),_:1})]),a(c,{name:"title-fade",appear:""},{default:u(()=>[a(B,{main:"お問い合わせ",small:"※"})]),_:1}),s("div",vs,[a(c,{name:"fade",appear:""},{default:u(()=>[a(ps)]),_:1})])]))}},gs=d(bs,[["__scopeId","data-v-eda7d9f9"]]),Ts={__name:"AccessRoute",setup(n){return S(),(l,e)=>(i(),f(C,null,{default:u(()=>[a(gs)]),_:1}))}};export{Ts as default};