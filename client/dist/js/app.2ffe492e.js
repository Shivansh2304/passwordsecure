(()=>{"use strict";var t={2138:(t,n,e)=>{e(6992),e(8674),e(9601),e(7727);var o=e(5405),r=(e(4916),e(3123),e(3210),e(678)),a=e(3396),i=function(t){return(0,a.dD)("data-v-0cb4cda1"),t=t(),(0,a.Cn)(),t},s={class:"ind"},l=i((function(){return(0,a._)("div",{class:"d-flex justify-content-center"},[(0,a._)("div",{class:"alert alert-primary border-primary p-2 m-0",role:"alert"},[(0,a._)("h3",{class:"alert-heading text-center"},"Secure Notes"),(0,a._)("hr",{class:"m-2"})])],-1)})),u=i((function(){return(0,a._)("br",null,null,-1)})),c={class:"row justify-content-center"},d={class:"col-md-6"},p={class:"form-group"},m=i((function(){return(0,a._)("label",null,[(0,a.Uk)(" Type Of Password:"),(0,a._)("br")],-1)})),f={class:"row justify-content-center"},h={class:"col-md-6"},b={class:"form-group"},g=i((function(){return(0,a._)("label",null,"Write your Password here:",-1)})),_={class:"row justify-content-center"},v={class:"form-group"},y={class:"col-md-6 d-flex"},w=["disabled"],k=["disabled"];function x(t,n,e,r,i,x){return(0,a.wg)(),(0,a.iD)("div",s,[l,u,(0,a._)("form",{onSubmit:n[5]||(n[5]=(0,o.iM)((function(){return x.addNote&&x.addNote.apply(x,arguments)}),["prevent"]))},[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("div",p,[m,(0,a.wy)((0,a._)("input",{id:"title",type:"option",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=function(t){return i.note.title=t}),minlength:"4",maxlength:"23",placeholder:"type of password"},null,512),[[o.nr,i.note.title]])])])]),(0,a._)("div",f,[(0,a._)("div",h,[(0,a._)("div",b,[g,(0,a.wy)((0,a._)("textarea",{id:"body",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=function(t){return i.note.body=t}),onKeyup:n[2]||(n[2]=function(){return x.countdown&&x.countdown.apply(x,arguments)}),minlength:"4",maxlength:"280",rows:"9",placeholder:"Enter at least 4 characters"},null,544),[[o.nr,i.note.body]])])])]),(0,a._)("div",_,[(0,a._)("div",v,[(0,a._)("div",y,[(0,a._)("button",{class:"btn btn-primary mr-4",disabled:i.isDisabled}," Create ",8,w),(0,a._)("button",{type:"button",class:"btn btn-warning mr-4",disabled:!i.note.title&&!i.note.body,onClick:n[3]||(n[3]=(0,o.iM)((function(t){return x.clearInputs()}),["prevent"]))}," Clear ",8,k),(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:n[4]||(n[4]=(0,o.iM)((function(t){return x.backToNotes()}),["prevent"]))}," Cancel ")])])])],32)])}const C={data:function(){return{note:{email:localStorage.getItem("email")},maxCount:280,remainingCount:280,title:"",body:"",email:"",hasError:!1,isDisabled:!0}},methods:{addNote:function(){var t=this,n="/notes/add";this.axios.post(n,this.note).then((function(){t.$router.push({name:"notes"})}))},clearInputs:function(){this.note={},this.isDisabled=!0,this.remainingCount=280},backToNotes:function(){this.$router.push("/")},countdown:function(){this.remainingCount=this.maxCount-this.note.body.length,this.hasError=this.remainingCount<5,this.isDisabled=this.note.title.length<4||this.note.body.length<4}}};var D=e(89);const U=(0,D.Z)(C,[["render",x],["__scopeId","data-v-0cb4cda1"]]),N=U;var E=e(7139);const T=e.p+"img/add-24px.3e92d10b.svg",j=e.p+"img/info-24px.63594185.svg",I=e.p+"img/pencil-24px.a8a99d11.svg",S=e.p+"img/trash.92217b40.svg";var M=function(t){return(0,a.dD)("data-v-d6bdd168"),t=t(),(0,a.Cn)(),t},P={class:"ind"},V={key:0},O={key:1},$={class:"logbut"},L={key:2},A=M((function(){return(0,a._)("br",null,null,-1)})),Z={class:"d-flex justify-content-center"},W={class:"bbb"},z={class:"alert alert-primary border-primary p-2 m-0",role:"alert"},B={class:"d-flex justify-content-between"},K={class:"alert-heading text-center"},R=M((function(){return(0,a._)("img",{src:T},null,-1)})),H=[R],Y=M((function(){return(0,a._)("img",{src:j},null,-1)})),q=[Y],F=M((function(){return(0,a._)("hr",{class:"m-2"},null,-1)})),G={key:0,class:"mb-0 text-center"},J={class:"badge badge-pill badge-light",style:{"font-size":"18px"}},Q={class:"container-fluid mt-3"},X={class:"row justify-content-center"},tt={class:"card border-primary",style:{width:"16rem"}},nt={class:"card-body text-white bg-secondary p-2"},et={class:"card-title"},ot={class:"card-text"},rt={class:"card-footer p-2"},at={class:"text-muted d-flex justify-content-between"},it=M((function(){return(0,a._)("div",{class:"d-flex align-items-center"},null,-1)})),st=M((function(){return(0,a._)("img",{src:I,alt:"button to edit note"},null,-1)})),lt=["onClick"],ut=M((function(){return(0,a._)("img",{src:S,alt:"button to delete note"},null,-1)})),ct=[ut];function dt(t,n,e,r,i,s){var l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",P,[i.isloggedin?((0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("button",$,[(0,a.Wm)(l,{to:"/logout"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Logout")]})),_:1})])])):((0,a.wg)(),(0,a.iD)("div",V,[(0,a.Wm)(l,{to:"/login"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Login")]})),_:1}),(0,a.Wm)(l,{to:"/signup"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Signup")]})),_:1})])),i.email?((0,a.wg)(),(0,a.iD)("h3",L,[(0,a.Uk)(" Welcome "+(0,E.zw)(i.email)+" ",1),A])):(0,a.kq)("",!0),(0,a._)("div",null,[(0,a._)("div",Z,[(0,a._)("div",W,[(0,a._)("div",z,[(0,a._)("div",B,[(0,a._)("h4",K,[(0,a.Uk)(" Save Password "),(0,a._)("button",{type:"button",class:"btn btn-outline-light btn-sm",onClick:n[0]||(n[0]=(0,o.iM)((function(t){return s.showNoteAdd()}),["prevent"]))},H),(0,a._)("button",{type:"button",class:"btn btn-outline-light btn-sm ml-2",onClick:n[1]||(n[1]=(0,o.iM)((function(t){return s.showInfo()}),["prevent"]))},q)])]),F,this.noteNumber?((0,a.wg)(),(0,a.iD)("p",G,[(0,a.Uk)(" You have "),(0,a._)("span",J,(0,E.zw)(this.noteNumber),1),(0,a.Uk)(" "+(0,E.zw)(i.notePlural),1)])):(0,a.kq)("",!0)])])]),(0,a._)("div",Q,[(0,a._)("div",X,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.notes,(function(t){return(0,a.wg)(),(0,a.iD)("div",{class:"col-auto mb-3 pl-2 pr-2 justify-content-center d-flex align-items-stretch",key:t._id},[(0,a._)("div",tt,[(0,a._)("div",nt,[(0,a._)("h5",et,(0,E.zw)(t.title),1),(0,a._)("p",ot,(0,E.zw)(t.body),1)]),(0,a._)("div",rt,[(0,a._)("small",at,[it,(0,a.Wm)(l,{to:{name:"edit",params:{id:t._id}},class:"btn btn-outline-primary btn-sm ml-2 mr-2"},{default:(0,a.w5)((function(){return[st]})),_:2},1032,["to"]),(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:(0,o.iM)((function(n){return s.deleteNote(t._id)}),["prevent"])},ct,8,lt)])])])])})),128))])])])])}const pt={data:function(){return{notes:[],noteNumber:0,notePlural:"",isloggedin:!!localStorage.getItem("email"),email:localStorage.getItem("email")}},created:function(){this.fetchTodos()},methods:{fetchTodos:function(){var t=this,n="/notes";this.axios.post(n,{email:localStorage.getItem("email")}).then((function(n){t.notes=n.data,t.noteNumber=t.notes.length,t.notePlural=1===t.noteNumber?"note":"notes"}))},deleteNote:function(t){var n=this,e="/notes/delete/".concat(t);this.axios["delete"](e).then((function(t){n.fetchTodos()}))},showNoteAdd:function(){this.$router.push("create")},showInfo:function(){this.$router.push("info")}}},mt=(0,D.Z)(pt,[["render",dt],["__scopeId","data-v-d6bdd168"]]),ft=mt;var ht=function(t){return(0,a.dD)("data-v-614df289"),t=t(),(0,a.Cn)(),t},bt={class:"body"},gt=ht((function(){return(0,a._)("div",{class:"head"},[(0,a._)("br"),(0,a.Uk)(),(0,a._)("br"),(0,a._)("br"),(0,a.Uk)(),(0,a._)("h3",null,"LOGIN")],-1)})),_t=ht((function(){return(0,a._)("br",null,null,-1)})),vt={class:"content"},yt=ht((function(){return(0,a._)("label",null,[(0,a.Uk)("Enter Email id:"),(0,a._)("br")],-1)})),wt=ht((function(){return(0,a._)("br",null,null,-1)})),kt=ht((function(){return(0,a._)("label",null,"Enter Password:",-1)})),xt=ht((function(){return(0,a._)("br",null,null,-1)})),Ct=["disabled"],Dt={class:"btn btn-success"};function Ut(t,n,e,r,i,s){var l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",bt,[gt,_t,(0,a._)("div",null,(0,E.zw)(),1),(0,a._)("form",{class:"form",onSubmit:n[3]||(n[3]=(0,o.iM)((function(){return s.login&&s.login.apply(s,arguments)}),["prevent"]))},[(0,a._)("div",vt,[yt,(0,a.wy)((0,a._)("input",{id:"title",type:"email",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=function(t){return i.note.email=t}),placeholder:"enter email id"},null,512),[[o.nr,i.note.email]]),wt,kt,(0,a.wy)((0,a._)("input",{type:"password",id:"body",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=function(t){return i.note.password=t}),onKeyup:n[2]||(n[2]=function(){return t.countdown&&t.countdown.apply(t,arguments)}),placeholder:"Enter password"},null,544),[[o.nr,i.note.password]]),xt,(0,a._)("button",{class:"btn btn-primary mr-4",disabled:i.isDisabled}," Login ",8,Ct),(0,a.Uk)("       "),(0,a._)("button",Dt,[(0,a.Wm)(l,{to:"/signup",class:"link"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Signup")]})),_:1})])])],32)])}const Nt={data:function(){return{note:{},maxCount:280,remainingCount:280,password:"",email:"",hasError:!1,isDisabled:!1,error:""}},methods:{login:function(){var t=this,n="/notes/login";this.axios.post(n,this.note).then((function(n){console.log(n),t.$router.push({name:"notes"})}))["catch"]((function(t){alert("Something went wrong "),console.log(t)}))},clearInputs:function(){this.note={},this.isDisabled=!0,this.remainingCount=280},backToNotes:function(){this.$router.push("/")}}},Et=(0,D.Z)(Nt,[["render",Ut],["__scopeId","data-v-614df289"]]),Tt=Et;var jt=function(t){return(0,a.dD)("data-v-7999755e"),t=t(),(0,a.Cn)(),t},It={class:"ind"},St=jt((function(){return(0,a._)("div",{class:"d-flex justify-content-center"},[(0,a._)("div",{class:"alert alert-primary border-primary p-2 m-0",role:"alert"},[(0,a._)("h3",{class:"alert-heading text-center"},"Edit Password"),(0,a._)("hr",{class:"m-2"})])],-1)})),Mt=jt((function(){return(0,a._)("br",null,null,-1)})),Pt={class:"row justify-content-center"},Vt={class:"col-md-6"},Ot={class:"form-group"},$t=jt((function(){return(0,a._)("label",null,"Edit Selected Type Of Password :",-1)})),Lt={class:"row justify-content-center"},At={class:"col-md-6"},Zt={class:"form-group"},Wt=jt((function(){return(0,a._)("label",null,"Edit Your Password:",-1)})),zt=jt((function(){return(0,a._)("br",null,null,-1)})),Bt={class:"row justify-content-center"},Kt={class:"form-group"},Rt={class:"col-md-6 d-flex"},Ht=["disabled"],Yt=["disabled"];function qt(t,n,e,r,i,s){return(0,a.wg)(),(0,a.iD)("div",It,[St,Mt,(0,a._)("form",{onSubmit:n[5]||(n[5]=(0,o.iM)((function(){return s.updateNote&&s.updateNote.apply(s,arguments)}),["prevent"]))},[(0,a._)("div",Pt,[(0,a._)("div",Vt,[(0,a._)("div",Ot,[$t,(0,a.wy)((0,a._)("input",{id:"title",type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=function(t){return i.note.title=t}),minlength:"4",maxlength:"23",placeholder:"Enter at least 4 characters"},null,512),[[o.nr,i.note.title]])])])]),(0,a._)("div",Lt,[(0,a._)("div",At,[(0,a._)("div",Zt,[Wt,(0,a.wy)((0,a._)("textarea",{id:"body",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=function(t){return i.note.body=t}),onKeyup:n[2]||(n[2]=function(){return s.countdown&&s.countdown.apply(s,arguments)}),minlength:"4",maxlength:"280",rows:"9",placeholder:"Enter at least 4 characters"},null,544),[[o.nr,i.note.body]])])])]),zt,(0,a._)("div",Bt,[(0,a._)("div",Kt,[(0,a._)("div",Rt,[(0,a._)("button",{class:"btn btn-primary mr-4",disabled:i.isDisabled}," Update ",8,Ht),(0,a._)("button",{type:"button",class:"btn btn-warning mr-4",disabled:!i.note.title&&!i.note.body,onClick:n[3]||(n[3]=(0,o.iM)((function(t){return s.clearInputs()}),["prevent"]))}," Clear ",8,Yt),(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:n[4]||(n[4]=(0,o.iM)((function(t){return s.backToNotes()}),["prevent"]))}," Cancel ")])])])],32)])}var Ft=e(124),Gt=e(8534);const Jt={data:function(){return{note:{email:localStorage.getItem("email")},maxCount:280,remainingCount:280,title:"",body:"",email:"",hasError:!1,isDisabled:!1,initialBodyLength:0}},created:function(){var t=this,n="/notes/edit/".concat(this.$route.params.id);this.axios.get(n).then((function(n){t.note=n.data,t.initialBodyLength=t.note.body.length,t.remainingCount=280-t.initialBodyLength,t.calcRemaining()}))},methods:{updateNote:function(){var t=this,n="/notes/update/".concat(this.$route.params.id);this.axios.post(n,this.note).then((function(){t.$router.push({name:"notes"})}))},clearInputs:function(){this.note={},this.isDisabled=!0,this.remainingCount=280},backToNotes:function(){this.$router.push("/")},countdown:function(){this.calcRemaining(),this.hasError=this.remainingCount<5,this.isDisabled=this.note.title.length<4||this.note.body.length<4},calcRemaining:function(){var t=this;return(0,Gt.Z)((0,Ft.Z)().mark((function n(){return(0,Ft.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.remainingCount=null==t.note.body.length|0?t.maxCount:t.maxCount-t.note.body.length;case 1:case"end":return n.stop()}}),n)})))()}}},Qt=(0,D.Z)(Jt,[["render",qt],["__scopeId","data-v-7999755e"]]),Xt=Qt;e(8309);var tn=function(t){return(0,a.dD)("data-v-5762dffa"),t=t(),(0,a.Cn)(),t},nn={class:"body"},en=tn((function(){return(0,a._)("br",null,null,-1)})),on=tn((function(){return(0,a._)("br",null,null,-1)})),rn=tn((function(){return(0,a._)("br",null,null,-1)})),an=tn((function(){return(0,a._)("h3",null,"SignUp",-1)})),sn={class:"content"},ln=tn((function(){return(0,a._)("label",null,[(0,a.Uk)("Enter Name :"),(0,a._)("br")],-1)})),un=tn((function(){return(0,a._)("label",null,[(0,a.Uk)("Enter Email Id :"),(0,a._)("br")],-1)})),cn=tn((function(){return(0,a._)("label",null,"Enter Password:",-1)})),dn=tn((function(){return(0,a._)("label",null,"Confirm Password:",-1)})),pn=tn((function(){return(0,a._)("br",null,null,-1)})),mn=["disabled"],fn={class:"btn btn-warning mr-4"};function hn(t,n,e,r,i,s){var l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",nn,[en,on,rn,an,(0,a._)("form",{class:"form",onSubmit:n[7]||(n[7]=(0,o.iM)((function(){return s.signup&&s.signup.apply(s,arguments)}),["prevent"]))},[(0,a._)("div",sn,[ln,(0,a.wy)((0,a._)("input",{id:"name",type:"option",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=function(t){return i.note.name=t}),placeholder:"enter name"},null,512),[[o.nr,i.note.name]]),un,(0,a.wy)((0,a._)("input",{id:"email",type:"email",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=function(t){return i.note.email=t}),placeholder:"enter email id"},null,512),[[o.nr,i.note.email]]),cn,(0,a.wy)((0,a._)("input",{type:"password",id:"password",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=function(t){return i.note.password=t}),onKeyup:n[3]||(n[3]=function(){return t.countdown&&t.countdown.apply(t,arguments)}),placeholder:"Enter password"},null,544),[[o.nr,i.note.password]]),dn,(0,a.wy)((0,a._)("input",{type:"password",id:"confirmpassword",class:"form-control","onUpdate:modelValue":n[4]||(n[4]=function(t){return i.note.confirm_password=t}),onKeyup:n[5]||(n[5]=function(){return t.countdown&&t.countdown.apply(t,arguments)}),placeholder:"Enter confirm password"},null,544),[[o.nr,i.note.confirm_password]]),pn,(0,a._)("button",{class:"btn btn-primary mr-4",disabled:i.isDisabled}," Signup ",8,mn),(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:n[6]||(n[6]=(0,o.iM)((function(t){return s.backToNotes()}),["prevent"]))}," Cancel "),(0,a.Uk)("       "),(0,a._)("button",fn,[(0,a.Wm)(l,{to:"/login",class:"lin"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Login")]})),_:1})])])],32)])}const bn={data:function(){return{note:{},maxCount:280,remainingCount:280,password:"",confirm_password:"",email:"",name:"",hasError:!1,isDisabled:!1}},methods:{signup:function(){var t=this,n="/notes/signup";this.axios.post(n,this.note).then((function(){t.$router.push({name:"notes"})}))},clearInputs:function(){this.note={},this.isDisabled=!0,this.remainingCount=280},backToNotes:function(){this.$router.push("/")}}},gn=(0,D.Z)(bn,[["render",hn],["__scopeId","data-v-5762dffa"]]),_n=gn,vn=e.p+"img/arrow_back-24px.6eff611d.svg";var yn={class:"d-flex justify-content-center"},wn={class:"card border-primary",style:{"max-width":"700px"}},kn=(0,a.uE)('<div class="card-header" style="background-color:#cce5ff;"><h5 class="card-title text-center mb-0">About App</h5></div><div class="card-body text-white bg-secondary p-2"><p class="card-text">This app displays simple text notes in a responsive grid of Bootstrap cards. It uses the MongoDB, Express, Vue &amp; Node.js (MEVN) stack to allow the user to perform Create, Read, Update and Delete (CRUD) operations.</p><p class="card-text">The &#39;Notes Hub&#39; tells the user how many notes there are using the notes array.length property.</p><p class="card-text">Once a note is added then the grid of notes is reloaded from the backend database. This was preferred to using an array.splice operation on the front-end data.</p><p class="card-text">Axios, a promise-based HTTP client, is used to send/receive data asynchronously from the MongoDB backend.</p><p class="card-text">The note create page includes a character countdown display to show the user how many characters are left from the 280 character maximum (same max. length as a Twitter tweet). There are buttons to Create (save to the database), Clear both input fields and Cancel to return to the Notes List page. The note edit page is very similar and also calculates the note body characters left.</p></div>',2),xn={class:"card-footer p-2",style:{"background-color":"#cce5ff"}},Cn={class:"text-muted d-flex justify-content-center"},Dn=(0,a._)("img",{src:vn,alt:"button to navigate back to list of notes"},null,-1),Un=[Dn];function Nn(t,n,e,r,i,s){return(0,a.wg)(),(0,a.iD)("div",yn,[(0,a._)("div",wn,[kn,(0,a._)("div",xn,[(0,a._)("div",Cn,[(0,a._)("button",{type:"button",class:"btn btn-outline-dark",onClick:n[0]||(n[0]=(0,o.iM)((function(t){return s.backToNotes()}),["prevent"]))},Un)])])])])}const En={data:function(){return{}},created:function(){},methods:{backToNotes:function(){this.$router.push("/")}}},Tn=(0,D.Z)(En,[["render",Nn]]),jn=Tn;var In=e(1598),Sn=function(t){var n,e,o=document.cookie.split(t+"=");return console.log(o),2===o.length&&o[1]?(n=o[1].split(";")[0],e=!0):e=!1,{cookieExists:e,cookieValue:n||void 0}},Mn=function(t){t=t.trim(),document.cookie="".concat(t,"=;Path=/;Expires=Thu, 01 Jan 1970 00:00:00 UTC")},Pn=function(){var t=Sn("jwt");if(console.log(t),t.cookieValue){var n=(0,In.Z)(t.cookieValue);console.log(n),localStorage.setItem("email",n.email)}return t.cookieExists&&void 0!==t.cookieValue&&null!==t.cookieValue},Vn=function(){Mn("jwt"),localStorage.removeItem("email")},On=[{path:"/",name:"notes",component:ft,meta:{chekAuto:!0}},{path:"/create",name:"create",component:N,meta:{chekAuto:!0}},{path:"/login",name:"Login",component:Tt},{path:"/logout",name:"logout",meta:{logout:!0}},{path:"/signup",name:"signup",component:_n},{path:"/edit/:id",name:"edit",component:Xt,meta:{chekAuto:!0}},{path:"/info",name:"info",component:jn,meta:{chekAuto:!0}}],$n=(0,r.p7)({history:(0,r.PO)("/"),routes:On});$n.beforeEach((function(t,n,e){t.meta.chekAuto?Pn()?e():e("/login"):t.meta.logout?(Vn(),e("/login")):e()}));const Ln=$n;var An={class:"container"},Zn=(0,a._)("br",null,null,-1);function Wn(t,n,e,r,i,s){var l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",An,[Zn,(0,a.Wm)(l,null,{default:(0,a.w5)((function(t){var n=t.Component;return[(0,a.Wm)(o.uT,{name:"page"},{default:(0,a.w5)((function(){return[((0,a.wg)(),(0,a.j4)((0,a.LL)(n)))]})),_:2},1024)]})),_:1})])}const zn={name:"App"},Bn=(0,D.Z)(zn,[["render",Wn]]),Kn=Bn;var Rn=e(1663),Hn=e.n(Rn),Yn=e(6265),qn=e.n(Yn);(0,o.ri)(Kn).use(Ln).use(Hn(),qn()).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,(()=>{var t=[];e.O=(n,o,r,a)=>{if(!o){var i=1/0;for(c=0;c<t.length;c++){for(var[o,r,a]=t[c],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(e.O).every((t=>e.O[t](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){t.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[o,r,a]}})(),(()=>{e.n=t=>{var n=t&&t.__esModule?()=>t["default"]:()=>t;return e.d(n,{a:n}),n}})(),(()=>{e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}})(),(()=>{e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n)})(),(()=>{e.p="/"})(),(()=>{var t={143:0};e.O.j=n=>0===t[n];var n=(n,o)=>{var r,a,[i,s,l]=o,u=0;if(i.some((n=>0!==t[n]))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(l)var c=l(e)}for(n&&n(o);u<i.length;u++)a=i[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(c)},o=self["webpackChunksecure_notes"]=self["webpackChunksecure_notes"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var o=e.O(void 0,[998],(()=>e(2138)));o=e.O(o)})();
//# sourceMappingURL=app.2ffe492e.js.map