(this.webpackJsonptrackteacher=this.webpackJsonptrackteacher||[]).push([[10],{268:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return i})),t.d(a,"d",(function(){return s}));var n=t(325),r=(t(4),n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset),c=(n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit),i=(n.a.stopAsyncValidation,n.a.stopSubmit),s=n.a.submit;n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},282:function(e,a,t){"use strict";var n=t(292),r=t(0),c=t.n(r),i=t(511),s=t(512),l=t(522);a.a=function(e){var a=e.onlyInValid,t=void 0===a||a,r=Object(n.a)(e,["onlyInValid"]);return c.a.createElement(i.a,{controlId:r.name},r.label&&c.a.createElement(s.a,{column:!0},r.label),c.a.createElement(l.a,{type:r.type,name:r.name,value:r.input.value,className:r.className,onChange:r.input.onChange,onFocus:r.input.onFocus,onBlur:r.input.onBlur,isValid:!t&&r.meta.touched?r.meta.valid:void 0,isInvalid:r.meta.touched?!r.meta.valid:void 0}),r.meta.error&&c.a.createElement(l.a.Feedback,{type:"invalid",style:{display:"block"}},r.meta.touched&&r.meta.error))}},283:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(142),i=t(5);a.a=function(){var e=Object(i.g)();return r.a.createElement(c.a,{variant:"light",onClick:function(){return e.goBack()}},"\u041d\u0430\u0437\u0430\u0434")}},284:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.error;return r.a.createElement("div",null,a||"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")}},285:function(e,a,t){"use strict";var n=t(21),r=t(0),c=t.n(r),i=t(7),s=t.n(i);a.a=function(e){var a,t=e.state,r=e.change,i=e.param;return c.a.createElement("i",{className:s()("fa cur pull-right",(a={},Object(n.a)(a,"fa-sort-amount-asc",1==t||void 0==t),Object(n.a)(a,"fa-sort-amount-desc",-1==t),Object(n.a)(a,"opacity-5",void 0==t),a)),onClick:function(){return r(i)}})}},286:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(341);a.a=function(e){var a=e.totalItems,t=e.curPage,n=e.setCur,i=e.pageSize,s=e.size,l=void 0===s?5:s,o=t>l,u=Math.ceil(a/i),m=u>(Math.floor((t-1)/l)+1)*l,d=Math.floor((t-1)/l);return u<=1?null:r.a.createElement(c.a,null,o&&r.a.createElement(c.a.Item,{onClick:function(){return n((d-1)*l+1)}},"<"),new Array(l).fill("").map((function(e,a){var i=d*l+a+1;return i>u?null:r.a.createElement(c.a.Item,{key:a,active:t==i,onClick:function(){return n(i)}},i)})),m&&r.a.createElement(c.a.Item,{onClick:function(){return n((d+1)*l+1)}},">"))}},287:function(e,a,t){"use strict";var n=function(e){var a=e.getIn;return function(e,t){return function(n){var r=t||function(e){return a(e,"form")};return!!a(r(n),e+".submitting")}}},r=t(20);a.a=n(r.a)},288:function(e,a,t){"use strict";var n=function(e){var a=e.getIn;return function(e,t){return function(n){var r=t||function(e){return a(e,"form")};return a(r(n),e+".values")}}},r=t(20);a.a=n(r.a)},289:function(e,a,t){"use strict";a.a=function(e){return e?null:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},291:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(23),i=t(28),s=Object(c.b)((function(e){return{user:Object(i.a)(e)}}));a.a=s((function(e){var a=e.role,t=e.children;return e.user.role<=a?r.a.createElement(r.a.Fragment,null,t):null}))},324:function(e,a,t){"use strict";a.a=function(e,a){var t={};if(Array.isArray(e))return e.forEach((function(e,n){var r="".concat(a,"[").concat(n,"]");t[r]=e})),t;if(e instanceof Object){for(var n in e){var r="".concat(a,"[").concat(n,"]");t[r]=e[n]}return t}}},327:function(e,a,t){"use strict";var n=t(2),r=t(3),c=t(7),i=t.n(c),s=t(0),l=t.n(s),o=t(12),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,s=e.animation,u=e.size,m=e.children,d=e.as,f=void 0===d?"div":d,p=e.className,b=Object(r.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),v=(t=Object(o.a)(t,"spinner"))+"-"+s;return l.a.createElement(f,Object(n.a)({ref:a},b,{className:i()(p,v,u&&v+"-"+u,c&&"text-"+c)}),m)}));u.displayName="Spinner",a.a=u},335:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(104),r=t.n(n),c=t(90),i=t.n(c),s=t(270);function l(e){var a=e.ns,t=e.children,n=i()(e,["ns","children"]),c=Object(s.a)(a,n),l=r()(c,3),o=l[0],u=l[1],m=l[2];return t(o,{i18n:u,lng:u.language},m)}},340:function(e,a,t){"use strict";var n=t(2),r=t(3),c=t(7),i=t.n(c),s=t(0),l=t.n(s),o=t(12),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.striped,u=e.bordered,m=e.borderless,d=e.hover,f=e.size,p=e.variant,b=e.responsive,v=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=Object(o.a)(t,"table"),g=i()(c,E,p&&E+"-"+p,f&&E+"-"+f,s&&E+"-striped",u&&E+"-bordered",m&&E+"-borderless",d&&E+"-hover"),h=l.a.createElement("table",Object(n.a)({},v,{className:g,ref:a}));if(b){var k=E+"-responsive";return"string"===typeof b&&(k=k+"-"+b),l.a.createElement("div",{className:k},h)}return h}));a.a=u},341:function(e,a,t){"use strict";var n=t(2),r=t(3),c=t(7),i=t.n(c),s=t(0),l=t.n(s),o=t(12),u=t(63),m=l.a.forwardRef((function(e,a){var t=e.active,c=e.disabled,s=e.className,o=e.style,m=e.activeLabel,d=e.children,f=Object(r.a)(e,["active","disabled","className","style","activeLabel","children"]),p=t||c?"span":u.a;return l.a.createElement("li",{ref:a,style:o,className:i()(s,"page-item",{active:t,disabled:c})},l.a.createElement(p,Object(n.a)({className:"page-link",disabled:c},f),d,t&&m&&l.a.createElement("span",{className:"sr-only"},m)))}));m.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},m.displayName="PageItem";var d=m;function f(e,a,t){function n(e){var n=e.children,c=Object(r.a)(e,["children"]);return l.a.createElement(m,c,l.a.createElement("span",{"aria-hidden":"true"},n||a),l.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var p=f("First","\xab"),b=f("Prev","\u2039","Previous"),v=f("Ellipsis","\u2026","More"),E=f("Next","\u203a"),g=f("Last","\xbb"),h=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.children,u=e.size,m=Object(r.a)(e,["bsPrefix","className","children","size"]),d=Object(o.a)(t,"pagination");return l.a.createElement("ul",Object(n.a)({ref:a},m,{className:i()(c,d,u&&d+"-"+u)}),s)}));h.First=p,h.Prev=b,h.Ellipsis=v,h.Item=d,h.Next=E,h.Last=g;a.a=h},519:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),i=t(64),s=t(510),l=t(142),o=t(513),u=t(13),m=t(23),d=t(270),f=t(283),p=t(298),b=t(299),v=t(335),E=t(282),g=Object(b.a)({form:"ranksFilterForm"})((function(e){var a=e.handleSubmit;return r.a.createElement("form",{onSubmit:a,className:"d-flex"},r.a.createElement(v.a,null,(function(e){return r.a.createElement(p.a,{component:E.a,type:"text",name:"filterName",className:"m-0",placeholder:e("ranks.all.filterName")})})),r.a.createElement(v.a,null,(function(e){return r.a.createElement("div",null,r.a.createElement(l.a,{variant:"info",className:"ml-1",type:"submit"},e("common.search")))})))})),h=t(1),k=t(340),O=t(285),j=t(35),y=t(284),x=t(101),N=t(327),S=t(27),w=t(291),F=function(e){var a=e.rank,t=e.isDeleting,n=e.del;return r.a.createElement("tr",null,r.a.createElement("th",null,a.id),r.a.createElement("th",null,a.name),r.a.createElement("th",null,r.a.createElement(w.a,{role:S.a.MODERATOR},r.a.createElement(u.b,{to:"/ranks/".concat(a.id,"/edit")},r.a.createElement("i",{className:"fa fa-pencil"})),t?r.a.createElement(u.b,{to:"#"},r.a.createElement("i",{className:"fa fa-close",onClick:function(){return n(a.id)}})):r.a.createElement(N.a,{animation:"border",size:"sm"}))))},R=function(e){return e.ranks.all},I=function(e){return R(e).sort},A=function(e){return{pageSize:R(e).pageSize,curPage:R(e).currentPage,totalItems:R(e).total}},z=function(e){return e.ranks.del},P=t(44),L=function(){return{type:P.d}},C=function(e){return{type:P.c,error:e}},D=function(e){return{type:P.e,payload:e}},M=function(e){return{type:P.b,payload:e}},T=t(9),B=t.n(T),V=t(19),_=t(288),W=t(102),J=t.n(W),U=t(324),q=J.a.create({baseURL:"".concat("https://trackteacher.herokuapp.com/api","/ranks"),headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),G={getRanks:function(){var e=arguments;return Object(V.a)(B.a.mark((function a(){var t,n,r,c,i;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:{},n=e.length>1&&void 0!==e[1]?e[1]:[],r=e.length>2&&void 0!==e[2]?e[2]:1,c=e.length>3&&void 0!==e[3]?e[3]:5,i=Object(U.a)(n,"sort"),a.next=7,q.get("/",{params:Object(h.a)(Object(h.a)(Object(h.a)({},t),i),{},{page:r,pageSize:c})});case 7:return a.abrupt("return",a.sent);case 8:case"end":return a.stop()}}),a)})))()},getRank:function(e){return Object(V.a)(B.a.mark((function a(){return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,q.get("/".concat(e));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()},editRank:function(e,a){return Object(V.a)(B.a.mark((function t(){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.put("/".concat(e),a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},deleteRank:function(e){return Object(V.a)(B.a.mark((function a(){return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,q.delete("/".concat(e));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()},addRank:function(e){return Object(V.a)(B.a.mark((function a(){return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,q.post("/add",e);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var a=Object(V.a)(B.a.mark((function a(t,n){var r,c,i,s;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(L()),a.prev=1,r=Object(_.a)("ranksFilterForm"),c=I(n()),i=A(n()),a.next=5,G.getRanks(r(n()),c,e,i.pageSize);case 5:s=a.sent,t(D(s.data)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),t(C(a.t0.message));case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e,t){return a.apply(this,arguments)}}()},K=t(100),Q=t(81),X=function(e){return{type:Q.b,payload:e}},Y=function(e,a){return{type:Q.a,error:a,payload:e}},Z=function(e){return{type:Q.c,payload:e}},$=function(e){return function(){var a=Object(V.a)(B.a.mark((function a(t){var n,r;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(X(e)),a.prev=1,a.next=4,G.deleteRank(e);case 4:t(Z(e)),t(M(e)),K.b.success("\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0441 id ".concat(e," \u0443\u0434\u0430\u043b\u0435\u043d\u043e")),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),t(Y(e,(null===(n=a.t0.response)||void 0===n?void 0:n.data.message)||a.t0.message)),K.b.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat((null===(r=a.t0.response)||void 0===r?void 0:r.data.message)||a.t0.message));case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},ee=Object(m.b)((function(e){return Object(h.a)(Object(h.a)({},R(e)),{},{deleting:z(e)})}),(function(e){return{changeSort:function(a){e(function(e){return{type:P.a,payload:e}}(a)),e(H(1))},load:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e(H(a))},deleteItem:function(a){e($(a))}}}))((function(e){var a,t;Object(n.useEffect)((function(){e.isLoading||e.ranks.length||e.load()}),[]);var c=Object(d.a)().t;return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0,style:{minWidth:"600px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("span",{className:"pull-left"},"ID"),r.a.createElement(O.a,{state:null===(a=Object(x.a)(e.sort,"ID"))||void 0===a?void 0:a.direction,change:e.changeSort,param:"ID"})),r.a.createElement("th",null,r.a.createElement("span",{className:"pull-left"},c("ranks.all.name")),r.a.createElement(O.a,{state:null===(t=Object(x.a)(e.sort,"name"))||void 0===t?void 0:t.direction,change:e.changeSort,param:"name"})),r.a.createElement("th",null,c("common.actions")))),r.a.createElement("tbody",null,e.isLoading&&r.a.createElement("tr",null,r.a.createElement("th",{colSpan:3,className:"text-center"},r.a.createElement(j.a,null))),e.error&&r.a.createElement("tr",{className:"text-center text-danger"},r.a.createElement("th",{colSpan:3,className:"text-center"},r.a.createElement(y.a,{error:e.error}))),!e.isLoading&&!e.error&&!e.ranks.length&&r.a.createElement("tr",{className:"font-weight-bold text-center"},r.a.createElement("th",{colSpan:3,className:"text-center"},c("common.noItems",{what:c("ranks.all.noForm")}))),!e.isLoading&&!e.error&&e.ranks.map((function(a){return r.a.createElement(F,{key:a.id,rank:a,isDeleting:-1==e.deleting.findIndex((function(e){return e==a.id})),del:e.deleteItem})})))))})),ae=t(286),te=Object(m.b)((function(e){return{paginator:A(e)}}),{changePage:H})((function(e){var a=e.changePage,t=e.paginator,c=Object(d.a)().t;return Object(n.useEffect)((function(){document.title=c("ranks.all.pageTitle")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},c("ranks.name")),r.a.createElement(s.a,{className:"mr-5"},r.a.createElement(s.a.Body,null,r.a.createElement("div",{className:"model__filter-form"},r.a.createElement("div",null,r.a.createElement(w.a,{role:S.a.MODERATOR},r.a.createElement(u.b,{to:"/ranks/add"},r.a.createElement(l.a,{variant:"success"},c("common.add"))))),r.a.createElement(g,{onSubmit:function(){return a(1)}})),r.a.createElement(ee,null),r.a.createElement("div",{className:"d-flex my-3 justify-content-end"},r.a.createElement(ae.a,Object.assign({},t,{setCur:a})))),r.a.createElement(s.a.Footer,null,r.a.createElement(o.a,{className:"justify-content-between p-2"},r.a.createElement(f.a,null)))))})),ne=t(292),re=t(287),ce=t(268),ie=t(36),se=function(e){return e.ranks.edit},le=function(e){return se(e).rank},oe=t(80),ue=function(e){return function(){var a=Object(V.a)(B.a.mark((function a(t){var n,r;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:oe.b}),a.prev=1,a.next=4,G.getRank(e);case 4:n=a.sent,t((i=n.data.data,{type:oe.c,payload:i})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t((c=(null===(r=a.t0.response)||void 0===r?void 0:r.data.message)||a.t0.message,{type:oe.a,error:c}));case 11:case"end":return a.stop()}var c,i}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},me=function(e,a){return function(){var t=Object(V.a)(B.a.mark((function t(n){var r,c,i;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(ce.b)("ranksEditForm")),t.prev=1,t.next=4,G.editRank(e,a);case 4:n(Object(ce.c)("ranksEditForm")),K.b.success("\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),n(Object(ce.c)("ranksEditForm",Object(h.a)({_error:(null===(r=t.t0.response)||void 0===r?void 0:r.data.message)||t.t0.message},null===(c=t.t0.response)||void 0===c?void 0:c.data.errors))),K.b.error((null===(i=t.t0.response)||void 0===i?void 0:i.data.message)||t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},de=t(398),fe=Object(m.b)((function(e){return{rank:le(e)}}))(Object(b.a)({form:"ranksEditForm"})((function(e){var a=e.handleSubmit,t=e.rank,c=e.initialize;Object(n.useEffect)((function(){c({name:t.name})}),[]);var i=Object(d.a)().t;return r.a.createElement("form",{onSubmit:a},r.a.createElement(de.a,{xs:12,md:6,xl:4},r.a.createElement(p.a,{component:E.a,type:"text",name:"name",className:"m-0",label:i("ranks.edit.name")})))}))),pe=Object(m.b)((function(e){return{editState:se(e),submitting:Object(re.a)("ranksEditForm")(e)}}),{loadRank:ue,send:ce.d,editRank:me}),be=Object(ie.a)(S.a.MODERATOR,!0)(pe((function(e){var a=e.editState,t=e.loadRank,c=Object(ne.a)(e,["editState","loadRank"]),i=Object(d.a)().t;Object(n.useEffect)((function(){t(+c.match.params.id),document.title=i("ranks.edit.pageTitle")}),[]);return a.rank||a.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},i("ranks.edit.pageTitle")),r.a.createElement(s.a,{className:"mr-5"},r.a.createElement(s.a.Body,null,a.isLoading&&r.a.createElement(j.a,null),!a.isLoading&&a.error&&r.a.createElement(y.a,{error:a.error}),!a.isLoading&&!a.error&&r.a.createElement(fe,{onSubmit:function(e){c.editRank(+c.match.params.id,e)}})),r.a.createElement(s.a.Footer,null,r.a.createElement(o.a,{className:"justify-content-between p-2"},r.a.createElement(f.a,null),!a.isLoading&&!a.error&&r.a.createElement(l.a,{variant:"warning",onClick:function(){c.send("ranksEditForm")},disabled:c.submitting},c.submitting&&r.a.createElement(N.a,{animation:"border",size:"sm"}),i("common.edit")))))):null}))),ve=t(289),Ee=Object(b.a)({form:"ranksAddForm"})((function(e){var a=e.handleSubmit,t=e.error;return r.a.createElement("form",{onSubmit:a},t&&r.a.createElement("div",null,t),r.a.createElement(v.a,null,(function(e){return r.a.createElement(de.a,{xs:12,md:6,lg:4},r.a.createElement(p.a,{component:E.a,type:"text",name:"name",className:"m-0",label:e("ranks.add.name"),validate:[ve.a]}))})))})),ge=function(e){return function(){var a=Object(V.a)(B.a.mark((function a(t){var n,r,c;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(Object(ce.b)("ranksAddForm")),a.prev=1,a.next=4,G.addRank(e);case 4:t(Object(ce.c)("ranksAddForm")),t(Object(ce.a)("ranksAddForm")),K.b.success("\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),t(Object(ce.c)("ranksAddForm",Object(h.a)({_error:(null===(n=a.t0.response)||void 0===n?void 0:n.data.message)||a.t0.message},null===(r=a.t0.response)||void 0===r?void 0:r.data.errors))),K.b.error((null===(c=a.t0.response)||void 0===c?void 0:c.data.message)||a.t0.message);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},he=Object(m.b)((function(e){return{submitting:Object(re.a)("ranksAddForm")(e)}}),{add:ge,send:ce.d}),ke=Object(ie.a)(S.a.MODERATOR,!0)(he((function(e){var a=e.add,t=e.send,c=e.submitting,i=Object(d.a)().t;return Object(n.useEffect)((function(){document.title=i("ranks.add.pageTitle")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},i("ranks.add.pageTitle")),r.a.createElement(s.a,{className:"mr-5"},r.a.createElement(s.a.Body,null,r.a.createElement(Ee,{onSubmit:a})),r.a.createElement(s.a.Footer,null,r.a.createElement(o.a,{className:"justify-content-between p-2"},r.a.createElement(f.a,null),r.a.createElement(l.a,{variant:"success",onClick:function(){return t("ranksAddForm")},disabled:c},c&&r.a.createElement(N.a,{size:"sm",animation:"border"}),i("common.add"))))))})));a.default=Object(ie.a)(S.a.VIEWER,!0)((function(){return r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/ranks",exact:!0,component:te}),r.a.createElement(c.b,{path:"/ranks/add",exact:!0,component:ke}),r.a.createElement(c.b,{path:"/ranks/:id/edit",exact:!0,component:be}),r.a.createElement(c.b,{path:"/",component:i.a}))}))}}]);
//# sourceMappingURL=10.a2143818.chunk.js.map