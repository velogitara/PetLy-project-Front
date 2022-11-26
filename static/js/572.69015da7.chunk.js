"use strict";(self.webpackChunkpetly_project_front=self.webpackChunkpetly_project_front||[]).push([[572],{4200:function(n,e,t){t.d(e,{Z:function(){return m}});t(2791);var r,i,o,a=t(168),c=t(9202),s=c.Z.form(r||(r=(0,a.Z)(["\n  position: relative;\n"]))),l=c.Z.input(i||(i=(0,a.Z)(["\n  border-radius: 20px;\n  border: none;\n  outline: none;\n  box-shadow: ",";\n  width: 280px;\n  padding: 9px 40px 9px 12px;\n  font-family: ",";\n  font-size: 16px;\n  line-height: 1.4;\n  letter-spacing: 0.04em;\n  @media screen and (min-width: ",") {\n    border-radius: 40px;\n    width: 608px;\n    font-size: 20px;\n    padding: 8px 20px;\n  }\n"])),(function(n){return n.theme.shadows.primary}),(function(n){return n.theme.fonts.primary}),(function(n){return n.theme.screens.tablet})),d=c.Z.button(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 25px;\n  height: 25px;\n  background: ",";\n  border: none;\n  cursor: pointer;\n  transition: ",";\n  &:hover svg {\n    fill: ",";\n  }\n  @media screen and (min-width: ",") {\n    top: 12px;\n  }\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.screens.tablet})),u=t(4094),h=t(3329),m=function(n){var e=n.onSubmit;return(0,h.jsxs)(s,{id:"searchForm",children:[(0,h.jsx)(l,{placeholder:"Search",type:"text",name:"search"}),(0,h.jsx)(d,{onClick:function(n){return e(n)},children:(0,h.jsx)("svg",{width:17.5,height:17.5,children:(0,h.jsx)("use",{href:"".concat(u.Z,"#icon-search")})})})]})}},5843:function(n,e,t){t.d(e,{Z:function(){return b}});var r,i,o,a,c=t(2982),s=t(885),l=t(2791),d=t(168),u=t(9202),h=t(5017),m=u.Z.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 40px;\n  /* padding: 6px; */\n\n  /* border: 2px solid ","; */\n  /* border-radius: 40px; */\n\n  @media screen and (min-width: ",") {\n    margin-top: 60px;\n    /* padding: 12px; */\n  }\n"])),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.screens.tablet})),p=u.Z.button(i||(i=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  width: ",";\n  height: ",";\n\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.375;\n\n  color: ",";\n  background-color: ",";\n\n  border: 2px solid ",";\n  border-radius: 50%;\n\n  &:not(:last-of-type) {\n    margin-right: 4px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: ",";\n    height: ",";\n\n    font-size: 16px;\n\n    &:not(:last-of-type) {\n      margin-right: 12px;\n    }\n  }\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.secondary?"20px":"22px"}),(function(n){return n.secondary?"20px":"22px"}),(function(n){var e=n.theme;return n.current?e.palette.triadic:e.palette.accent}),(function(n){var e=n.theme;return n.current?e.palette.accent:e.palette.triadic}),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.screens.tablet}),(function(n){return n.secondary?"36px":"44px"}),(function(n){return n.secondary?"36px":"44px"}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.animations.transform})),x=u.Z.span(o||(o=(0,d.Z)(["\n  display: flex;\n  align-self: flex-start;\n\n  font-size: 14px;\n  line-height: 0.7;\n\n  @media screen and (min-width: ",") {\n    font-size: 20px;\n    line-height: 1.1;\n  }\n"])),(function(n){return n.theme.screens.tablet})),f=u.Z.span(a||(a=(0,d.Z)(["\n  min-width: 12px;\n  min-height: 12px;\n\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  @media screen and (min-width: ",") {\n    min-width: 16px;\n    min-height: 16px;\n\n    font-size: 16px;\n  }\n\n  transform: ",";\n\n  button:hover & {\n    filter: grayscale(100%) brightness(200%);\n  }\n"])),h.Z,(function(n){return n.theme.screens.tablet}),(function(n){return n.next?"rotateZ(90deg)":"rotateZ(-90deg)"})),g=t(3329),b=function(n){var e=n.totalPages,t=void 0===e?1:e,r=n.viewedPages,i=void 0===r?5:r,o=n.onPageSelect,a=n.startPage,d=void 0===a?1:a,u=(0,l.useState)(d),h=(0,s.Z)(u,2),b=h[0],j=h[1],v=(0,l.useState)(t>1),w=(0,s.Z)(v,2),Z=w[0],y=w[1],k=(0,l.useState)(b>1),z=(0,s.Z)(k,2),C=z[0],S=z[1],A=(0,l.useState)(!1),_=(0,s.Z)(A,2),T=_[0],I=_[1],P=(0,l.useState)(!1),N=(0,s.Z)(P,2),B=N[0],R=N[1],F=t-i;if((0,l.useEffect)((function(){1===b?S(!1):t>1&&S(!0),b===t?y(!1):t>1&&y(!0),o({currentPage:b})}),[b,t,o]),(0,l.useEffect)((function(){R(F>2&&b>2)}),[B,F,b]),(0,l.useEffect)((function(){I(F>2&&b<t-1)}),[T,F,b,t]),console.log(t),t<=1)return null;var L,M=i;F<0?M=i-2+F:0===F?M=i-2:1===F&&(M=i-1),L=1===b||F<=0?2:F>0&&b>=F?1===F?F+1:F:b;var E=b>i?i:Math.floor(b/2),J=b<t-i?i:Math.floor((t-b+1)/2),D=(0,c.Z)(Array(M).fill().map((function(n,e){return e+L}))),U=function(n){j((function(e){return e+n}))},O=function(n){j(n)};return(0,g.jsxs)(m,{children:[C&&(0,g.jsx)(p,{title:"Previous page",onClick:function(){return U(-1)},secondary:!0,children:(0,g.jsx)(f,{})}),(0,g.jsx)(p,{title:"First page",onClick:function(){return O(1)},current:1===b,children:1}),B&&(0,g.jsx)(p,{title:"".concat(E," pages backward"),onClick:function(){return U(-1*E)},secondary:!0,children:(0,g.jsx)(x,{children:"..."})}),D.map((function(n){return(0,g.jsx)(p,{title:n===b?"Current page":"Page ".concat(n),onClick:function(){return O(n)},current:n===b,children:n},n)})),T&&(0,g.jsx)(p,{title:"".concat(J," pages forward"),onClick:function(){return U(J)},secondary:!0,children:(0,g.jsx)(x,{children:"..."})}),(0,g.jsx)(p,{title:"Last page",onClick:function(){return O(t)},current:b===t,children:t}),Z&&(0,g.jsx)(p,{title:"Next page",onClick:function(){return U(1)},secondary:!0,children:(0,g.jsx)(f,{next:!0})})]})}},2756:function(n,e,t){t.d(e,{Z:function(){return c}});t(2791);var r,i=t(168),o=t(9202).Z.h2(r||(r=(0,i.Z)(["\n  font-family: ",";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1.375;\n  text-align: center;\n  color: ",";\n  margin: 54px auto 28px auto;\n\n  @media screen and (min-width: ",") {\n    font-size: 48px;\n    margin: 94px auto 40px auto;\n  }\n\n  @media screen and (min-width: ",") {\n    margin: 61px auto 40px auto;\n  }\n"])),(function(n){return n.theme.fonts.primary}),(function(n){return n.theme.palette.primary}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),a=t(3329),c=function(n){var e=n.title;return(0,a.jsx)(o,{children:e})}},1572:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ie}});var r=t(885),i=t(5048),o=t(2791),a=t(1472),c=t(7689),s=t(3562),l=t(4164),d=t(2184),u=t(4165),h=t(4925),m=t(5861),p=t(5705),x=t(433),f=t(7103),g=["image/jpg","image/jpeg","image/png"],b=f.Ry().shape({title:f.Z_().min(2,"Must be 2 or more letter").max(48,"Must be 48 or less letter").matches(/^[\u0430-\u044f\u0410-\u042f\u0451\u0401a-zA-Z`\s]+$/,"Only letters"),name:f.Z_().min(2,"Must be 2 or more letter").max(16,"Must be 16 or less letter").matches(/^[A-Za-z\u0410`\s]+$/,"Only letters"),birthday:f.hT().nullable(),breed:f.Z_().min(2,"Must be 2 or more letter").max(24,"Must be 24 or less letter").matches(/^[A-Za-z\u0410`\s]+$/,"Only letters"),comments:f.Z_().min(8,"Must be 8 or more characters").max(120,"Must be 120 or less characters").matches(/^[A-Za-z\u0410\s]+$/).required("Required"),price:f.Rx("Price must be a number").positive("Price must be a positive number").integer("Price must be an integer"),image:f.nK().test("FILE_SIZE","Uploaded file is too big",(function(n){return!n||n&&n.size<=5242880})).test("FILE_FORMAT","Uploaded file unsupported format",(function(n){return!n||n&&g.includes(null===n||void 0===n?void 0:n.type)}))}),j=t(7756),v=t(7359),w=t(8451),Z=t(3979),y=t(3329),k=[{name:"lost",value:"lost",id:"1"},{name:"found",value:"found",id:"2"},{name:"In good hands",value:"for-free",id:"3"},{name:"sell",value:"sell",id:"4"}],z=function(n){var e=n.values,t=n.handleChange,i=n.handleBlur,a=n.handleSubmit,c=n.onClose,s=n.setActiveStepIndex,l=n.setFieldValue,d=(0,o.useState)(null),u=(0,r.Z)(d,2),h=u[0],m=u[1];return(0,y.jsxs)(j.l0,{onSubmit:a,children:[(0,y.jsx)(w.Dx,{children:"Add pet"}),(0,y.jsx)(j.w0,{children:k.map((function(n){return(0,y.jsx)(j.PM,{children:(0,y.jsxs)(j.A$,{className:e.category===n.value?"active":"",children:[n.name,(0,y.jsx)(j.Y8,{type:"radio",name:"category",value:n.value})]})},n.id)}))}),(0,y.jsxs)(j.Wz,{children:[(0,y.jsxs)(j.__,{children:[(0,y.jsxs)(j.z4,{children:["Tittle of ad",(0,y.jsx)(j.Dr,{children:"*"})]}),(0,y.jsx)(Z.Z,{styled:"inputAdd",name:"title",type:"text",placeholder:"Type name",value:e.title,onChange:t,onBlur:i})]}),(0,y.jsx)(p.Bc,{name:"title",component:j.ew}),!e.title&&(0,y.jsx)(j.ew,{children:h})]}),(0,y.jsxs)(j.Wz,{children:[(0,y.jsxs)(j.__,{children:[(0,y.jsx)(j.z4,{children:"Name pet"}),(0,y.jsx)(Z.Z,{styled:"inputAdd",name:"name",type:"text",placeholder:"Type name pet",value:e.name,onChange:t,onBlur:i})]}),(0,y.jsx)(p.Bc,{name:"name",component:j.ew})]}),(0,y.jsxs)(j.Wz,{children:[(0,y.jsx)(j.z4,{children:"Date of birth"}),(0,y.jsx)(v.Z,{onChange:l,name:"birthday",value:e.birthday})]}),(0,y.jsxs)(j.Wz,{className:"label",children:[(0,y.jsxs)(j.__,{children:[(0,y.jsx)(j.z4,{children:"Breed"}),(0,y.jsx)(Z.Z,{styled:"inputAdd",name:"breed",type:"text",placeholder:"Type breed",value:e.breed,onChange:t,onBlur:i})]}),(0,y.jsx)(p.Bc,{name:"breed",component:j.ew})]}),(0,y.jsxs)(j.KN,{children:[(0,y.jsx)(j.zx,{className:"activeNext",type:"button",onClick:function(){!function(n){n.title?(s(1),m(null)):m("Required")}(e)},children:"Next"}),(0,y.jsx)(j.zx,{className:"formAddPet",type:"button",onClick:function(){c()},children:"Cancel"})]})]})},C=t(4094),S=t(5708),A=function(n){var e=n.values,t=n.handleChange,r=n.handleBlur,i=n.handleSubmit,o=n.setActiveStepIndex,a=n.setFieldValue;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(j.l0,{onSubmit:i,children:[(0,y.jsx)(w.Dx,{className:"title",children:"Add pet"}),(0,y.jsxs)(j.__,{className:"second-step-margin-title",children:["The sex",(0,y.jsx)(j.Dr,{children:"*"}),":"]}),(0,y.jsxs)(j.lj,{children:[(0,y.jsxs)(j.vT,{className:"male"===e.sex?"active":"",children:[(0,y.jsx)(j.Y8,{type:"radio",name:"sex",value:"male"}),(0,y.jsx)(j.zb,{children:(0,y.jsx)(j.m5,{children:(0,y.jsx)("use",{href:C.Z+"#icon-sex-male"})})}),(0,y.jsx)("span",{children:"Male"})]}),(0,y.jsxs)(j.vT,{className:"female"===e.sex?"active":"",children:[(0,y.jsx)(j.Y8,{type:"radio",name:"sex",value:"female"}),(0,y.jsx)(j.zb,{children:(0,y.jsx)(j.pA,{children:(0,y.jsx)("use",{className:"box",href:C.Z+"#icon-sex-female"})})}),(0,y.jsx)("span",{children:"Female"})]})]}),(0,y.jsx)(j.Wz,{children:(0,y.jsxs)(j.__,{children:[(0,y.jsxs)(j.z4,{children:["Location",(0,y.jsx)(j.Dr,{children:"*"}),":"]}),(0,y.jsx)(Z.Z,{styled:"inputAdd",name:"location",type:"text",placeholder:"City, Region",value:e.location,onChange:t,onBlur:r})]})}),"sell"===e.category&&(0,y.jsxs)(j.Wz,{children:[(0,y.jsxs)(j.__,{children:[(0,y.jsxs)(j.z4,{children:["Price",(0,y.jsx)(j.Dr,{children:"*"}),":"]}),(0,y.jsx)(Z.Z,{styled:"inputAdd",name:"price",type:"text",placeholder:"Type price",onChange:t,onBlur:r})]}),(0,y.jsx)(p.Bc,{name:"price",component:j.ew})]}),(0,y.jsxs)(j.Wz,{className:"file",children:[(0,y.jsx)(j.z4,{children:"Load the pet\u2019s image:"}),(0,y.jsxs)(j.__,{children:[(0,y.jsx)(j.ht,{type:"file",name:"image",onChange:function(n){var e=n.currentTarget.files[0];a("image",e,e.name)}}),(0,y.jsxs)(j.IF,{children:[(0,y.jsx)(j.Bc,{children:(0,y.jsx)(j.Xh,{children:(0,y.jsx)("use",{href:C.Z+"#icon-plus-big"})})}),e.image&&(0,y.jsx)(S.Z,{image:e.image})]})]}),(0,y.jsx)(p.Bc,{name:"image",component:j.ew})]}),(0,y.jsxs)(j.__,{children:[(0,y.jsx)(j.z4,{children:"Comments"}),(0,y.jsx)(j.gx,{type:"text",name:"comments",placeholder:"Type comment",defaultValue:e.comments,onChange:t,onBlur:r})]}),(0,y.jsx)(p.Bc,{name:"comments",component:j.ew}),(0,y.jsxs)(j.KN,{children:[(0,y.jsx)(j.zx,{className:"activeDone",type:"submit",children:"Done"}),(0,y.jsx)(j.zx,{className:"formAddPet",type:"button",onClick:function(){o(0)},children:"Back"})]})]})})},_=t(9085),T=["image"];var I=function(n){var e=n.onClose,t=(0,o.useState)(0),i=(0,r.Z)(t,2),a=i[0],c=i[1],s=(0,x.m$)(),l=(0,r.Z)(s,1)[0],d=function(){var n=(0,m.Z)((0,u.Z)().mark((function n(t){var r,i,o;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.image,(i=(0,h.Z)(t,T)).birthday&&(i.birthday=i.birthday.toISOString()),i.name||(i.name="No name"),i.birthday||(i.birthday="0000"),i.breed||(i.breed="outbreed"),i.price||(i.price=0),(o=new FormData).append("image",r),o.append("data",JSON.stringify(i)),console.log(t),e(),n.prev=11,n.next=14,l({payload:o}).then((function(n){var e,t;(n.error&&_.Am.error(n.error.data.message),n.data)&&_.Am.success(null!==(e=null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)&&void 0!==e?e:"Success")}));case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(11),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[11,16]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsx)(p.J9,{initialValues:{title:"",name:"",birthday:null,breed:"",category:"",sex:"",location:"",image:null,price:"",comments:""},validationSchema:b,onSubmit:function(n){return d(n)},children:function(n){var t=n.values,r=n.handleChange,i=n.handleBlur,o=n.handleSubmit,s=n.setFieldValue;return(0,y.jsxs)(y.Fragment,{children:[0===a&&(0,y.jsx)(z,{values:t,handleChange:r,handleBlur:i,handleSubmit:o,onClose:e,setActiveStepIndex:c,setFieldValue:s}),1===a&&(0,y.jsx)(A,{values:t,handleChange:r,handleBlur:i,handleSubmit:o,onClose:e,setActiveStepIndex:c,setFieldValue:s})]})}})},P=document.querySelector("#modal-root");var N,B,R,F,L,M,E,J,D,U,O,V,W,$,q,K,Y,X,H,G,Q,nn,en,tn,rn,on,an,cn,sn,ln,dn,un,hn,mn,pn,xn,fn=function(n){var e=n.onClose;return(0,o.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]),(0,l.createPortal)((0,y.jsx)(w.aV,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,y.jsxs)(w.u_,{children:[(0,y.jsx)(d.Z,{styled:"big",onClose:e}),(0,y.jsx)(I,{onClose:e})]})}),P)},gn=t(9982),bn=t(168),jn=t(9202),vn=t(1087),wn=jn.Z.div(N||(N=(0,bn.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (min-width: ",") {\n    position: static;\n    margin-top: 40px;\n    margin-bottom: 60px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),Zn=jn.Z.div(B||(B=(0,bn.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: -12px;\n"]))),yn=jn.Z.div(R||(R=(0,bn.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),kn=(0,jn.Z)(vn.OL)(F||(F=(0,bn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 28px;\n  margin-bottom: 12px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.357;\n  color: ",";\n\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: 40px;\n\n  transition: ",";\n\n  &:not(:last-of-type) {\n    margin-right: 12px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 20px;\n    line-height: 1.35;\n  }\n\n  @media screen and (min-width: ",") {\n    &:last-of-type {\n      order: -1;\n      margin-right: 12px;\n    }\n  }\n\n  &.active,\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n\n  &:hover,\n  &:focus {\n    transform: ",";\n  }\n"])),(function(n){return n.theme.palette.primary}),(function(n){return n.theme.backgrounds.secondary}),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop}),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.animations.transform})),zn=gn._.categories,Cn=zn.publicCategories,Sn=zn.privateCategories,An=function(){var n=(0,c.UO)().categoryName,e=(0,o.useState)(!1),t=(0,r.Z)(e,2),l=t[0],d=t[1],u=(0,i.v9)(a.sR);return(0,y.jsxs)(wn,{children:[(0,y.jsxs)(Zn,{children:[Cn.map((function(e,t){var i=(0,r.Z)(e,2),o=i[0],a=i[1];return(0,y.jsx)(kn,{className:n===o?"active":"",to:"/notices/".concat(o),children:a},a+t)})),u&&(0,y.jsx)(yn,{children:Sn.map((function(e,t){var i=(0,r.Z)(e,2),o=i[0],a=i[1];return(0,y.jsx)(kn,{className:n===o?"active":"",to:"/notices/".concat(o),children:a},a+t)}))})]}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(fn,{onClose:function(){return d(!l)}})})]})},_n=t(7275),Tn=t(5521),In=t(4175),Pn=jn.Z.div(L||(L=(0,bn.Z)(["\n  position: relative;\n  ","\n\n  @media screen and (min-width: ",") {\n    ","\n  }\n"])),(function(n){return n.modal?"display: flex; justify-content: center; align-items: center; width: 100%;":""}),(function(n){return n.theme.screens.tablet}),(function(n){return n.modal?"margin-right: 12px; width: 160px; ":""})),Nn=jn.Z.button(M||(M=(0,bn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ",";\n  width: ",";\n  height: ",";\n  margin-bottom: ",";\n\n  color: ",";\n  background-color: ",";\n  backdrop-filter: ",";\n  border: ",";\n  border-radius: ",";\n  cursor: pointer;\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    ","\n    transform: ",";\n    & svg {\n      stroke: ",";\n    }\n  }\n"])),(function(n){return n.modal?"9px":"0"}),(function(n){return n.modal?"100%;":"44px;"}),(function(n){return n.modal?"40px;":"44px"}),(function(n){return n.modal?"0; ":"12px"}),(function(n){var e=n.favorite,t=n.theme;return e?t.palette.accent:t.backgrounds.whiteTranslucent}),(function(n){var e=n.theme;return n.modal?e.backgrounds.secondary:e.backgrounds.whiteTranslucent}),(function(n){return n.modal?"none;":"blur(2px);"}),(function(n){var e=n.modal,t=n.theme;return e?"2px solid ".concat(t.palette.accent,";"):"none;"}),(function(n){return n.modal?"40px;":"50%;"}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){var e=n.modal,t=n.theme;return e?"border-color: ".concat(t.palette.hoverAccent,";"):""}),(function(n){return n.theme.animations.transform}),(function(n){return n.theme.palette.hoverAccent})),Bn=jn.Z.span(E||(E=(0,bn.Z)(["\n  margin-right: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.375;\n  color: ",";\n"])),(function(n){return n.theme.palette.primary})),Rn=jn.Z.svg(J||(J=(0,bn.Z)(["\n  width: ",";\n  height: ",";\n\n  fill: currentColor;\n  stroke: ",";\n"])),(function(n){return n.modal?"16px;":"24px;"}),(function(n){return n.modal?"16px;":"22px;"}),(function(n){return n.theme.palette.accent})),Fn=gn._.icons,Ln=function(n){var e=n.noticeId,t=n.favorite,c=n.modal,s=n.label,l=(0,o.useState)(t),d=(0,r.Z)(l,2),u=d[0],h=d[1],m=(0,o.useState)(!1),p=(0,r.Z)(m,2),f=p[0],g=p[1],b=(0,x.kT)(),j=(0,r.Z)(b,1)[0],v=(0,i.v9)(a.sR);return(0,y.jsxs)(Pn,{modal:c,children:[(0,y.jsxs)(Nn,{modal:c,favorite:u,type:"button",title:"".concat(u?"Remove from":"Add to"," favorites"),onClick:function(){if(v)try{j({noticeId:e,favorite:!u}).then((function(n){var e,t;(n.error&&_.Am.error(n.error.data.message),n.data)&&(_.Am.success(null!==(e=null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)&&void 0!==e?e:"Success"),h((function(n){return!n})))}))}catch(n){console.log(n)}else g(!0)},children:[s&&(0,y.jsx)(Bn,{children:u?"Remove from":"Add to"}),(0,y.jsx)(Rn,{modal:c,"aria-label":"In Favorites",children:(0,y.jsx)("use",{href:"".concat(Fn,"#icon-heart-outlined")})})]}),f&&(0,y.jsx)(In.Z,{message:"Please, log in.",onClose:function(){return g(!1)}})]})},Mn=t(3429),En=jn.Z.button(D||(D=(0,bn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  margin-top: auto;\n  width: 248px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.366;\n  text-transform: capitalize;\n\n  background-color: ",";\n  color: ",";\n\n  border: 2px solid currentColor;\n  border-radius: 40px;\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.animations.transform})),Jn=t(8862),Dn=jn.Z.div(U||(U=(0,bn.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(17, 17, 17, 0.6);\n  backdrop-filter: blur(10px);\n  z-index: 150;\n  overflow-y: scroll;\n"]))),Un=jn.Z.div(O||(O=(0,bn.Z)(["\n  position: absolute;\n  top: 0;\n  width: 280px;\n  height: fit-content;\n  padding: 60px 20px 40px 20px;\n  background-color: ",";\n  border-radius: 20px;\n  margin-top: 30px;\n\n  @media screen and (min-width: ",") {\n    top: unset;\n    width: 704px;\n    border-radius: 40px;\n    padding: 32px 20px;\n    margin-top: 0;\n  }\n"])),(function(n){return n.theme.backgrounds.secondary}),(function(n){return n.theme.screens.tablet})),On=jn.Z.div(V||(V=(0,bn.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 0;\n  z-index: 1;\n  cursor: pointer;\n"]))),Vn=jn.Z.div(W||(W=(0,bn.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n  }\n"])),(function(n){return n.theme.screens.tablet})),Wn=jn.Z.div($||($=(0,bn.Z)(["\n  position: relative;\n  width: 240px;\n  height: 240px;\n  margin-bottom: 16px;\n\n  border: none;\n  border-bottom-right-radius: 40px;\n  border-bottom-left-radius: 40px;\n\n  overflow: hidden;\n\n  @media screen and (min-width: ",") {\n    width: 288px;\n    height: 328px;\n    margin-bottom: 0px;\n    margin-right: 20px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),$n=jn.Z.picture(q||(q=(0,bn.Z)(["\n  width: 100%;\n  height: 240px;\n\n  @media screen and (min-width: ",") {\n    width: 100%;\n    height: 328px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),qn=jn.Z.img(K||(K=(0,bn.Z)(["\n  max-width: 288px;\n  height: 240px;\n  object-fit: cover;\n\n  @media screen and (min-width: ",") {\n    height: 328px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),Kn=jn.Z.p(Y||(Y=(0,bn.Z)(["\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center;\n  position: absolute;\n  background: ",";\n  border-top-right-radius: 40px;\n  border-bottom-right-radius: 40px;\n  font-size: 12px;\n  line-height: 1.334;\n  top: 20px;\n  width: 158px;\n  height: 28px;\n"])),(function(n){return n.theme.backgrounds.whiteTranslucent})),Yn=jn.Z.div(X||(X=(0,bn.Z)(["\n  \n"]))),Xn=jn.Z.h2(H||(H=(0,bn.Z)(["\n  margin-bottom: 16px;\n  font-size: 24px;\n  line-height: 1.375;\n  font-weight: 700;\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 28px;\n    line-height: 1.357;\n    margin-bottom: 20px;\n    margin-right: 50px;\n     padding-right: 50px;\n  }\n"])),(function(n){return n.theme.palette.primary}),(function(n){return n.theme.screens.tablet})),Hn=jn.Z.ul(G||(G=(0,bn.Z)([""]))),Gn=jn.Z.li(Q||(Q=(0,bn.Z)(["\n  display: flex;\n  justify-content: flex-start;\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),Qn=jn.Z.p(nn||(nn=(0,bn.Z)(["\n  font-size: 14px;\n  line-height: 1.357;\n  font-weight: 500;\n  color: ",";\n\n  &:first-of-type {\n    width: 118px;\n    font-weight: 600;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 14px;\n    line-height: 1.375;\n  }\n"])),(function(n){return n.theme.palette.primary}),(function(n){return n.theme.screens.tablet})),ne=jn.Z.p(en||(en=(0,bn.Z)(["\n  margin-top: 28px;\n  margin-bottom: 40px;\n\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.366;\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 32px;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])),(function(n){return n.theme.screens.tablet})),ee=jn.Z.span(tn||(tn=(0,bn.Z)(["\n  font-weight: 600;\n"]))),te=jn.Z.div(rn||(rn=(0,bn.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  font-size: 16px;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n"])),(function(n){return n.theme.screens.tablet})),re=jn.Z.a(on||(on=(0,bn.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 240px;\n  height: 40px;\n  border: 2px solid ",";\n  border-radius: 40px;\n  color: ",";\n  background-color: ",";\n  margin: 0 0 12px 0;\n\n  @media screen and (min-width: ",") {\n    width: 160px;\n   margin: 0 20px 0 12px;\n\n     &:hover,\n  &:focus {\n    color: ",";\n    ","\n    transform: ",";\n  \n    }\n  }\n"])),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.palette.triadic}),(function(n){var e=n.modal,t=n.theme;return e?"border-color: ".concat(t.palette.hoverAccent,";"):""}),(function(n){return n.theme.animations.transform})),ie=document.querySelector("#modal-root"),oe=function(n){var e=n.onClose,t=n.noticeId,i=n.favorite,a=n.owner,c=(0,_n.zB)({noticeId:t}),s=c.notice,d=c.isSuccess;(0,o.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);if(!d)return"Loading...";var u=s.category,h=s.name,m=s.imageURL,p=s.title,x=s.birthday,f=s.breed,g=s.location,b=s.sex,j=s.comments,v=s.price,w=s.owner,Z=w.email,k=w.phone,z=(0,Tn.UM)(u);return(0,l.createPortal)((0,y.jsx)(Dn,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,y.jsxs)(Un,{children:[(0,y.jsx)(Jn.Z,{onClose:e}),(0,y.jsxs)(Vn,{children:[(0,y.jsxs)(Wn,{children:[(0,y.jsxs)($n,{children:[(0,y.jsx)("source",{srcSet:"".concat(m?(0,Tn.TJ)(null===m||void 0===m?void 0:m.profileMobile):""," 240w, ").concat(m?(0,Tn.TJ)(null===m||void 0===m?void 0:m.profileMobileRetina):""," 480w"),media:"(max-width: 767px)",sizes:"240px"}),(0,y.jsx)("source",{srcSet:"".concat(m?(0,Tn.TJ)(null===m||void 0===m?void 0:m.profile):""," 288w, ").concat(m?(0,Tn.TJ)(null===m||void 0===m?void 0:m.profileRetina):""," 576w"),media:"(min-width: 768px)",sizes:"288px"}),(0,y.jsx)(qn,{src:m?(0,Tn.TJ)(null===m||void 0===m?void 0:m.profile):"",loading:"lazy",alt:null===s||void 0===s?void 0:s.title})]}),(0,y.jsx)(Kn,{children:z}),(0,y.jsx)(On,{children:(0,y.jsx)(Mn.Z,{translucent:!0,noticeId:t,owner:a})})]}),(0,y.jsxs)(Yn,{children:[(0,y.jsx)(Xn,{children:p}),(0,y.jsxs)(Hn,{children:[(0,y.jsxs)(Gn,{children:[(0,y.jsx)(Qn,{children:"Name: "}),(0,y.jsx)(Qn,{children:h})]}),x&&(0,y.jsxs)(Gn,{children:[(0,y.jsx)(Qn,{children:"Birthday: "}),(0,y.jsx)(Qn,{children:function(){if(!x)return null;var n=x.slice(0,10).split("-"),e=(0,r.Z)(n,3),t=e[0],i=e[1],o=e[2];return"".concat(o,".").concat(i,".").concat(t)}()})]}),(0,y.jsxs)(Gn,{children:[(0,y.jsx)(Qn,{children:"Breed: "}),(0,y.jsx)(Qn,{children:f})]}),(0,y.jsxs)(Gn,{children:[(0,y.jsx)(Qn,{children:"Place: "}),(0,y.jsx)(Qn,{children:g})]}),(0,y.jsxs)(Gn,{children:[(0,y.jsx)(Qn,{children:"The sex: "}),(0,y.jsx)(Qn,{children:b})]}),(0,y.jsxs)(Gn,{children:[(0,y.jsx)(Qn,{children:"Email: "}),(0,y.jsx)(Qn,{children:Z})]}),(0,y.jsxs)(Gn,{children:[(0,y.jsx)(Qn,{children:"Phone: "}),(0,y.jsx)(Qn,{children:k})]}),"sell"===u&&(0,y.jsxs)(Gn,{children:[(0,y.jsx)(Qn,{children:"Sell: "}),(0,y.jsxs)(Qn,{children:[v,"$"]})]})]})]})]}),(0,y.jsxs)(ne,{children:[(0,y.jsx)(ee,{children:"Comments: "}),j]}),(0,y.jsxs)(te,{children:[(0,y.jsx)(Ln,{favorite:i,noticeId:t,modal:!0,label:!0}),(0,y.jsx)(re,{type:"button",href:"tel:".concat(k),children:"Contact"})]})]})}),ie)},ae=function(n){var e=n.noticeId,t=n.favorite,i=n.owner,a=(0,o.useState)(!1),c=(0,r.Z)(a,2),s=c[0],l=c[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(En,{type:"button",title:"Learn more",onClick:function(){l(!0),document.body.style.position="fixed"},children:"learn more"}),s&&(0,y.jsx)(oe,{noticeId:e,favorite:t,owner:i,onClose:function(){return l(!1)}})]})},ce=gn._.noImage.tablet;console.log(ce);var se,le,de,ue=jn.Z.li(an||(an=(0,bn.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-bottom: 32px;\n\n  background-color: ",";\n  border: none;\n  border-radius: 0px 0px 20px 20px;\n\n  box-shadow: ",";\n\n  @media screen and (min-width: ",") {\n    width: 336px;\n  }\n  @media screen and (min-width: ",") {\n    width: 288px;\n  }\n"])),(function(n){return n.theme.backgrounds.secondary}),(function(n){return n.theme.shadows.card}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),he=jn.Z.picture(cn||(cn=(0,bn.Z)(["\n  width: 280px;\n  height: 288px;\n\n  @media screen and (min-width: ",") {\n    width: 336px;\n  }\n  @media screen and (min-width: ",") {\n    width: 288px;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),me=jn.Z.img(sn||(sn=(0,bn.Z)(["\n  max-width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n  background-color: ",";\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n"])),(function(n){return n.theme.backgrounds.primary}),ce),pe=jn.Z.p(ln||(ln=(0,bn.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 20px;\n  left: 0;\n  width: 158px;\n  height: 28px;\n  padding-left: 20px;\n\n  z-index: 1;\n\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.334;\n\n  background-color: ",";\n  backdrop-filter: blur(2px);\n  border: none;\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n"])),(function(n){return n.theme.backgrounds.whiteTranslucent})),xe=jn.Z.div(dn||(dn=(0,bn.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 20px 50px 20px;\n  width: 100%;\n"]))),fe=jn.Z.ul(un||(un=(0,bn.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),ge=jn.Z.li(hn||(hn=(0,bn.Z)(["\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),be=jn.Z.h3(mn||(mn=(0,bn.Z)(["\n  margin-bottom: 20px;\n\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.357;\n  letter-spacing: -0.01em;\n\n  color: ",";\n"])),(function(n){return n.theme.palette.primary})),je=jn.Z.p(pn||(pn=(0,bn.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.375;\n\n  color: ",";\n\n  &:first-of-type {\n    min-width: 90px;\n\n    @media screen and (min-width: ",") {\n      min-width: 87px;\n    }\n  }\n"])),(function(n){return n.theme.palette.primary}),(function(n){return n.theme.screens.desktop})),ve=jn.Z.div(xn||(xn=(0,bn.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 1;\n"]))),we=gn._.noImage,Ze=function(n){var e=n._id,t=n.imageURL,r=n.title,i=n.breed,o=n.location,a=n.birthday,c=n.category,s=n.favorite,l=n.owner,d=n.price,u=(0,Tn.UM)(c),h=(0,Tn.wI)(a);return(0,y.jsxs)(ue,{children:[(0,y.jsx)(pe,{children:u}),(0,y.jsxs)(ve,{children:[(0,y.jsx)(Ln,{noticeId:e,favorite:s}),(0,y.jsx)(Mn.Z,{translucent:!0,noticeId:e,owner:l})]}),(0,y.jsxs)(he,{children:[(0,y.jsx)("source",{srcSet:"".concat(t?(0,Tn.TJ)(null===t||void 0===t?void 0:t.mobile):we.mobile," 280w, ").concat(t?(0,Tn.TJ)(null===t||void 0===t?void 0:t.mobileRetina):we.mobile," 560w"),media:"(max-width: 767px)",sizes:"280px"}),(0,y.jsx)("source",{srcSet:"".concat(t?(0,Tn.TJ)(null===t||void 0===t?void 0:t.desktop):we.desktop," 288w, ").concat(t?(0,Tn.TJ)(null===t||void 0===t?void 0:t.mobileRetina):we.desktop," 576w"),media:"(min-width: 1280px)",sizes:"288px"}),(0,y.jsx)("source",{srcSet:"".concat(t?(0,Tn.TJ)(null===t||void 0===t?void 0:t.tablet):we.tablet," 336w, ").concat(t?(0,Tn.TJ)(null===t||void 0===t?void 0:t.tabletRetina):we.tablet," 672w"),media:"(min-width: 768px)",sizes:"336px"}),(0,y.jsx)(me,{src:t?(0,Tn.TJ)(null===t||void 0===t?void 0:t.tablet):we.tablet,loading:"lazy",alt:r})]}),(0,y.jsxs)(xe,{children:[(0,y.jsx)(be,{children:r}),(0,y.jsxs)(fe,{children:[(0,y.jsxs)(ge,{children:[(0,y.jsx)(je,{children:"Breed:"}),(0,y.jsx)(je,{children:i})]}),(0,y.jsxs)(ge,{children:[(0,y.jsx)(je,{children:"Place:"}),(0,y.jsx)(je,{children:o})]}),h&&(0,y.jsxs)(ge,{children:[(0,y.jsx)(je,{children:"Age:"}),(0,y.jsx)(je,{children:h})]}),"sell"===u&&d&&(0,y.jsxs)(ge,{children:[(0,y.jsx)(je,{children:"Price:"}),(0,y.jsx)(je,{children:"".concat(d,"$")})]})]})]}),(0,y.jsx)(ae,{noticeId:e,favorite:s,owner:l})]})},ye=t(5843),ke=t(9645),ze=jn.Z.ul(se||(se=(0,bn.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 32px;\n\n  @media screen and (min-width: ",") {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media screen and (min-width: ",") {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),Ce=jn.Z.p(le||(le=(0,bn.Z)(["\n  min-height: 50vh;\n\n  font-size: 20px;\n  font-weight: 700;\n\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 30px;\n  }\n  @media screen and (min-width: ",") {\n    font-size: 40px;\n  }\n"])),(function(n){return n.theme.palette.translucent}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),Se=function(){var n=(0,o.useState)(1),e=(0,r.Z)(n,2),t=e[0],s=e[1],l=(0,i.v9)(a.sR),d=(0,i.v9)(a.x4),u=(0,c.TH)().pathname.replace("/notices/",""),h=(0,_n.fx)({categoryName:u,page:t,limit:2}),m=h.notices,p=h.totalPages,x=h.isLoading,f=0!==m.length;return(0,y.jsxs)(y.Fragment,{children:[x&&(0,y.jsx)(ke.Z,{}),!f&&(0,y.jsx)(Ce,{children:"Looks like there are no Ads here, yet."}),f&&(0,y.jsx)(ze,{children:m.map((function(n){var e,t=n._id,r=n.category,i=n.imageURL,o=n.title,a=n.breed,c=n.birthday,s=n.location,u=n.favorite,h=n.owner,m=n.price;return(0,y.jsx)(Ze,{_id:t,imageURL:i,title:o,breed:a,birthday:c,location:s,category:r,favorite:(0,Tn.Xs)({userId:l&&d?d:null,favorite:u}),owner:null!==(e=null===h||void 0===h?void 0:h._id)&&void 0!==e?e:h,price:m},t)}))}),(0,y.jsx)(ye.Z,{totalPages:p,onPageSelect:function(n){var e=n.currentPage;return s(e)},startPage:t})]})},Ae=t(2756),_e=t(4200),Te=(0,jn.Z)(Tn.W2)(de||(de=(0,bn.Z)(["\n  padding-bottom: 100px;\n\n  @media screen and (min-width: ",") {\n    padding-bottom: 200px;\n  }\n"])),(function(n){return n.theme.screens.desktop})),Ie=function(){return(0,y.jsxs)(Te,{children:[(0,y.jsx)(Ae.Z,{title:"Find your favorite pet"}),(0,y.jsx)(_e.Z,{}),(0,y.jsx)(An,{}),(0,y.jsx)(Se,{})]})}}}]);
//# sourceMappingURL=572.69015da7.chunk.js.map