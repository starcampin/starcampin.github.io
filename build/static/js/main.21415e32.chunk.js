(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var c=n(30),r=n.n(c),i=n(62),a=n.n(i),o=n(16),s=n(77),u=n(9),l=n(0),d=n(80),j=n(167),f=n(165),b=n(176),m=n(81),h=n.n(m),p=n.p+"static/media/Leapfrog.00b4adbd.ogg",O=n(42),x=n.n(O);function g(e){return e.substring(0,e.lastIndexOf(" "))}function v(e,t){if(!e||null===e)return S();var n=new Date,c=1*Math.pow(60,2);return t?c:c?(n.setSeconds(n.getSeconds()+c),n):null}function S(){var e=new Date;return e.setHours(0,0,0,0),e}var k=n(1);function w(e){var t=e.id,n=e.removeTimer,c=e.checkin;return Object(k.jsxs)("div",{className:"title-bar",children:[Object(k.jsx)("h2",{children:g(t)}),Object(k.jsxs)("h3",{children:["Check In: ",c]}),Object(k.jsx)(b.a,{"aria-label":"delete",color:"default",onClick:function(){localStorage.removeItem("input ".concat(t)),n()},children:Object(k.jsx)(h.a,{})})]})}var T=n(82),y=n.n(T),C=n(83),L=n.n(C),I=n(84),E=n.n(I);function N(e){var t=e.pause,n=e.resume,c=e.restart,r=e.isRunning,i=e.clockValues,a=e.input;return Object(k.jsxs)("div",{className:"buttons",children:[Object(k.jsx)(b.a,{onClick:function(){if(r())t();else if(i().every((function(e){return Boolean(e)})))n();else{var e=v(a());if(!e)return;c(e)}},children:r()?Object(k.jsx)(L.a,{}):Object(k.jsx)(y.a,{})}),Object(k.jsx)(b.a,{onClick:function(){var e=v(a());c(e),t()},children:Object(k.jsx)(E.a,{})})]})}n(74);function A(e){var t=e.expiryTimestamp,n=(e.updateTimeoutSeconds,e.removeTimer),c=e.id,r=e.isHidden,i=e.checkin,a=Object(d.useTimer)({autoStart:!0,expiryTimestamp:t,onExpire:function(){var e=v(I);T(e),h(),function(e){x.a.close();var t=new Audio(p);t.loop=!0,t.play(),x.a.fire({title:"".concat(g(e),"'s Time Up"),icon:"warning"}).then((function(){t.loop=!1,t.pause()}))}(c)}}),o=a.seconds,s=a.minutes,b=a.hours,m=a.isRunning,h=a.pause,O=a.resume,T=a.restart,y=[b,s,o],C=Object(l.useState)(function(e){var t=localStorage.getItem("input ".concat(e));return"null"!==t&&t?new Date(JSON.parse(t.toString())):S()}(c)),L=Object(u.a)(C,2),I=L[0];L[1];if(Object(l.useEffect)((function(){localStorage.setItem("input ".concat(c),JSON.stringify(I))}),[I]),r)return Object(k.jsx)(k.Fragment,{});function E(){return Object(k.jsxs)("div",{className:"clock buttons",children:[Object(k.jsx)("div",{className:"actual-timer",children:y.map((function(e,t){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{children:e<10?"0".concat(e):e}),t===y.length-1?"":":"]})}))}),Object(k.jsx)(N,{pause:function(){return h()},resume:function(){return O()},restart:function(e){return T(e)},isRunning:function(){return m},clockValues:function(){return y},input:function(){return I}})]})}return Object(k.jsxs)("section",{className:"wrapper",children:[Object(k.jsx)(w,{id:c,removeTimer:n,checkin:i}),Object(k.jsx)(f.a,{dateAdapter:j.a}),Object(k.jsx)(E,{}),Object(k.jsx)("hr",{})]})}var R=n(8),D=n(163),F=n(174),J=n(173),Z=n(175),B=n(170),H=n(88),M=n.n(H),V=n(168),P=n(171),G=n(86),K=n.n(G);var U=function(e){var t=e.sortList,n=Object(l.useState)(null),c=Object(u.a)(n,2),r=c[0],i=c[1],a=Boolean(r),o=function(e){i(null),"object"!==typeof e&&t(e)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(b.a,{onClick:function(e){i(e.currentTarget)},children:Object(k.jsx)(K.a,{style:{color:"white",cursor:"pointer",paddingRight:".3em"}})}),Object(k.jsxs)(V.a,{id:"basic-menu",anchorEl:r,open:a,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(k.jsx)(P.a,{onClick:function(){return o("A-Z")},children:"A-Z"}),Object(k.jsx)(P.a,{onClick:function(){return o("Z-A")},children:"Z-A"}),Object(k.jsx)(P.a,{onClick:function(){return o("time-up")},children:"Time (ascending)"}),Object(k.jsx)(P.a,{onClick:function(){return o("time-down")},children:"Time (descendig)"})]})]})},Y=n(87),q=n.n(Y);function z(e){var t=e.createTimer;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(b.a,{onClick:function(){t()},children:Object(k.jsx)(q.a,{style:{color:"white"}})})})}var Q=Object(R.a)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(D.a)(t.palette.common.white,0),marginLeft:0,width:"100%"}})),W=Object(R.a)("div")((function(e){return{paddingRight:e.theme.spacing(1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),X=Object(R.a)(B.a)((function(e){var t=e.theme;return{color:"inherit",width:"100%","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"}}}));function $(e){var t=e.createTimer,n=e.changeInputFilter,c=e.sortList,r=Object(l.useState)(""),i=Object(u.a)(r,2),a=i[0],o=i[1];return Object(l.useEffect)((function(){n(a)}),[a]),Object(k.jsx)(J.a,{sx:{flexGrow:1,width:"100%"},children:Object(k.jsx)(F.a,{position:"static",children:Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(U,{sortList:function(e){c(e)}}),Object(k.jsxs)(Q,{children:[Object(k.jsx)(W,{children:Object(k.jsx)(M.a,{})}),Object(k.jsx)(X,{onChange:function(e){return o(e.target.value)},placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onKeyDown:function(e){"Escape"===e.key&&(e.target.value="",o(""))}})]}),Object(k.jsx)(z,{createTimer:t})]})})})}function _(){var e=Object(l.useState)(function(){var e=localStorage.getItem("timerList");return e&&e!==[]?JSON.parse(e.toString()):[]}()),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(""),i=Object(u.a)(r,2),d=i[0],j=i[1];function f(){return(f=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.fire({title:"Enter child's name",input:"text",inputValidator:function(e){if(!e)return"You need to write something!"}}).then((function(e){if(e.value){var t=new Date,n=new Date;t.setSeconds(t.getSeconds()+3600),c((function(c){return[].concat(Object(o.a)(c),[{timeoutSeconds:0,id:"".concat(e.value," ").concat(c.length),checkin:n.toLocaleTimeString(),expiryTimestamp:t}])}))}}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){localStorage.setItem("timerList",JSON.stringify(n))}),[n]),Object(k.jsxs)("div",{id:"main",children:[Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"StarCamp Time Tracker"})}),Object(k.jsx)($,{createTimer:function(){return function(){return f.apply(this,arguments)}()},changeInputFilter:function(e){return j(e)},sortList:function(e){return function(e){var t="";switch(e){case"A-Z":t=Object(o.a)(n).sort((function(e,t){return e.id.localeCompare(t.id)}));break;case"Z-A":t=Object(o.a)(n).sort((function(e,t){return t.id.localeCompare(e.id)}));break;case"time-up":t=Object(o.a)(n).sort((function(e,t){return e.timeoutSeconds-t.timeoutSeconds}));break;case"time-down":t=Object(o.a)(n).sort((function(e,t){return t.timeoutSeconds-e.timeoutSeconds}));break;default:return null}c(t)}(e)}}),n.map((function(e){return Object(k.jsx)(A,{id:e.id,isHidden:!e.id.substring(0,e.id.lastIndexOf(" ")).toLocaleLowerCase().includes(d.toLocaleLowerCase()),expiryTimestamp:e.expiryTimestamp,checkin:e.checkin,removeTimer:function(){return function(e){c((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)},updateTimeoutSeconds:function(t){return function(e,t){var r=Object(o.a)(n),i=r.findIndex((function(t){return t.id===e.id}));r[i].timeoutSeconds=t,c(r)}(e,t)}},e.id)}))]})}r.a.render(Object(k.jsx)(_,{}),document.getElementById("root"))},74:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.21415e32.chunk.js.map