import{_ as w,p as f,a as h,l as k,A as c}from"./index.d16cf297.js";import{s as M,c as l,a,o as t,b as s,d as e,t as S,F as p,n as v,e as d,w as _,I as g,p as C,k as F,D as m}from"./vendor.0d325e26.js";const B={name:"Account",setup(){return M(async()=>{await f.getMyProviders(),await h.getUserAppointments(),await h.getMyProviderAppointments(),k.log(c.providers)}),{account:l(()=>c.account),myProviders:l(()=>c.myProviders),userAppointments:l(()=>c.userAppointments),myProviderAppointments:l(()=>c.myProviderAppointments)}}},i=r=>(C("data-v-6c81fda7"),r=r(),F(),r),I={class:"container-fluid"},j={class:"row"},E={class:"col-md-3"},N={class:"row border border-secondary elevation-3 p-3 m-3"},V={class:"about text-center"},D=i(()=>e("h1",null,"Welcome",-1)),G=["src"],L=i(()=>e("i",{class:"mdi mdi-pen selectable","data-bs-toggle":"modal","data-bs-target":"#Account-form"},null,-1)),T={class:"col-md-9"},U={class:"row"},W={class:"col-12"},Y={class:"row border border-secondary elevation-3 p-3 m-3"},q={key:0,class:"text-center"},z={key:1,class:"text-center"},H={class:"row justify-content-around"},J=i(()=>e("div",{class:"text-center"},[e("button",{class:"btn btn-outline-secondary me-3","data-bs-toggle":"modal","data-bs-target":"#create-provider"}," Create New Provider ")],-1)),K=m("Become a Provider"),O={class:"row justify-content-center"},Q={class:"col-12 m-3"},R=i(()=>e("div",{class:"bg-secondary text-center elevation-2 rounded p-3 mb-2"},[e("h4",null,[m(" My Client Appointments "),e("i",{title:"Expand client appointments",class:"mdi mdi-arrow-expand-all selectable","data-bs-toggle":"collapse","data-bs-target":"#clientappt"})])],-1)),X={class:"col-md-12 pb-3 collapse",id:"clientappt"},Z=i(()=>e("div",{class:"bg-secondary text-center elevation-2 rounded py-3"},[e("h4",null,[m(" My Appointments "),e("i",{title:"Expand personal appointments",class:"mdi mdi-arrow-expand-all selectable","data-bs-toggle":"collapse","data-bs-target":"#appt"})])],-1)),$={class:"col-md-12 collapse",id:"appt"},ee=m("Edit Account");function te(r,oe,se,n,ne,ae){const y=a("Provider"),b=a("ProviderForm"),u=a("Modal"),A=a("ClientAppointment"),x=a("Appointment"),P=a("AccountForm");return t(),s(p,null,[e("div",I,[e("div",j,[e("div",E,[e("div",N,[e("div",V,[D,e("img",{class:"account-picture",src:n.account.picture,alt:""},null,8,G),e("p",null,S(n.account.name),1),L])])]),e("div",T,[e("div",U,[e("div",W,[e("div",Y,[n.myProviders.length?(t(),s("h4",q,"My gigs")):(t(),s("h4",z,"You don't have any Gigs")),e("div",H,[(t(!0),s(p,null,v(n.myProviders,o=>(t(),s("div",{key:o.id,class:"col-md-4 p-0 m-2 elevation-3 grow bg-light"},[d(y,{provider:o},null,8,["provider"])]))),128))]),J,d(u,{id:"create-provider"},{header:_(()=>[K]),body:_(()=>[d(b)]),_:1})])])]),e("div",O,[e("div",Q,[R,e("div",X,[(t(!0),s(p,null,v(n.myProviderAppointments,o=>(t(),g(A,{key:o.id,appointment:o},null,8,["appointment"]))),128))]),Z,e("div",$,[(t(!0),s(p,null,v(n.userAppointments,o=>(t(),g(x,{key:o.id,appointment:o},null,8,["appointment"]))),128))])])])])])]),d(u,{id:"Account-form"},{header:_(()=>[ee]),body:_(()=>[d(P)]),_:1})],64)}var ie=w(B,[["render",te],["__scopeId","data-v-6c81fda7"]]);export{ie as default};