(this.webpackJsonptrackteacher=this.webpackJsonptrackteacher||[]).push([[10],{279:function(e,t,a){"use strict";var n=a(288),r=a(0),c=a.n(r),l=a(508),i=a(509),o=a(518);t.a=function(e){var t=e.onlyInValid,a=void 0===t||t,r=Object(n.a)(e,["onlyInValid"]);return c.a.createElement(l.a,{controlId:r.name},r.label&&c.a.createElement(i.a,{column:!0},r.label),c.a.createElement(o.a,{type:r.type,name:r.name,value:r.input.value,className:r.className,onChange:r.input.onChange,onFocus:r.input.onFocus,onBlur:r.input.onBlur,isValid:!a&&r.meta.touched?r.meta.valid:void 0,isInvalid:r.meta.touched?!r.meta.valid:void 0}),r.meta.error&&c.a.createElement(o.a.Feedback,{type:"invalid",style:{display:"block"}},r.meta.touched&&r.meta.error))}},280:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(139),l=a(5);t.a=function(){var e=Object(l.g)();return r.a.createElement(c.a,{variant:"light",onClick:function(){return e.goBack()}},"\u041d\u0430\u0437\u0430\u0434")}},281:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.error;return r.a.createElement("div",null,t||"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")}},283:function(e,t,a){"use strict";var n=a(21),r=a(0),c=a.n(r),l=a(7),i=a.n(l);t.a=function(e){var t,a=e.state,r=e.change,l=e.param;return c.a.createElement("i",{className:i()("fa cur pull-right",(t={},Object(n.a)(t,"fa-sort-amount-asc",1==a||void 0==a),Object(n.a)(t,"fa-sort-amount-desc",-1==a),Object(n.a)(t,"opacity-5",void 0==a),t)),onClick:function(){return r(l)}})}},284:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(356);t.a=function(e){var t=e.totalItems,a=e.curPage,n=e.setCur,l=e.pageSize,i=e.size,o=void 0===i?5:i,u=a>o,s=Math.ceil(t/l),m=s>(Math.floor((a-1)/o)+1)*o,p=Math.floor((a-1)/o);return s<=1?null:r.a.createElement(c.a,null,u&&r.a.createElement(c.a.Item,{onClick:function(){return n((p-1)*o+1)}},"<"),new Array(o).fill("").map((function(e,t){var l=p*o+t+1;return l>s?null:r.a.createElement(c.a.Item,{key:t,active:a==l,onClick:function(){return n(l)}},l)})),m&&r.a.createElement(c.a.Item,{onClick:function(){return n((p+1)*o+1)}},">"))}},287:function(e,t,a){"use strict";t.a=function(e){return e?null:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},293:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(344),l=a.n(c),i=a(508),o=a(509),u=a(518);t.a=function(e){var t=e.meta,a=e.input,n=e.name,c=e.label,s=e.className;return r.a.createElement(i.a,null,c&&r.a.createElement(o.a,{column:!0},c),r.a.createElement(l.a,{selected:a.value,className:s,dateFormat:"dd.MM.yyyy",showMonthDropdown:!0,showYearDropdown:!0,onChange:function(e){return a.onChange(e,n)}}),t.touched&&t.error&&r.a.createElement(u.a.Feedback,{style:{display:"block"}},t.error))}},294:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(23),l=a(28),i=Object(c.b)((function(e){return{user:Object(l.a)(e)}}));t.a=i((function(e){var t=e.role,a=e.children;return e.user.role<=t?r.a.createElement(r.a.Fragment,null,a):null}))},321:function(e,t,a){"use strict";t.a=function(e,t){var a={};if(Array.isArray(e))return e.forEach((function(e,n){var r="".concat(t,"[").concat(n,"]");a[r]=e})),a;if(e instanceof Object){for(var n in e){var r="".concat(t,"[").concat(n,"]");a[r]=e[n]}return a}}},327:function(e,t,a){"use strict";var n=a(8),r=a.n(n),c=a(19),l=a(101),i=a(0),o=a.n(i),u=a(388),s=a(508),m=a(509),p=a(518),d=a(1),b=a(100),f=a.n(b),E=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(i.useState)(null),u=Object(l.a)(o,2),s=u[0],m=u[1],p=Object(i.useState)(null),b=Object(l.a)(p,2),E=b[0],v=b[1],h=Object(i.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,l,i,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,c=t.headers,l=t.method,i=t.data,n(!0),e.prev=2,e.next=5,new Promise((function(e){setTimeout(e,3e3)}));case 5:return e.next=7,f.a.request({method:l,url:a,params:i,headers:Object(d.a)(Object(d.a)({},c),{},{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Origin":"*"})});case 7:o=e.sent,v(o.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),m((null===(u=e.t0.response)||void 0===u?void 0:u.data.message)||e.t0.message);case 14:return e.prev=14,n(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),[a,s,E]);return{isLoading:a,error:s,data:E,request:h}},v=function(e,t){var a=null;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];a&&clearTimeout(a),a=setTimeout((function(){e.apply(void 0,r)}),t)}};t.a=function(e){var t=e.id,a=e.placeholder,n=e.url,d=e.size,b=void 0===d?5:d,f=e.multiple,h=e.isFilter,g=e.input,y=g.onChange,O=g.name,j=g.value,x=Object(i.useState)(null),w=Object(l.a)(x,2),N=w[0],_=w[1],k=Object(i.useState)([]),S=Object(l.a)(k,2),F=S[0],D=S[1],A=E(),I=A.request,P=A.error,C=A.isLoading,T=A.data;Object(i.useEffect)((function(){null!=N&&N.length>=1&&L()}),[N]),Object(i.useEffect)((function(){D(f?j?F.filter((function(e){var t=e.id;return j.includes(t)})):[]:j?F.filter((function(e){return e.id==j})):[])}),[j]);var L=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,a={q:N,page:t,pageSize:b},e.next=4,I({url:n,data:a});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=v(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),500);return o.a.createElement(s.a,{controlId:t},a&&o.a.createElement(m.a,{column:!0},a),o.a.createElement(u.a,{onInputChange:R,onSearch:function(){console.log("Search")},filterBy:["title"],labelKey:"title",id:O,maxResults:b,minLength:1,options:(h?[{id:-1,title:"All"}]:[]).concat((null===T||void 0===T?void 0:T.data)?T.data:[]),isLoading:C,placeholder:a,emptyLabel:"No items",searchText:"Search...",isInvalid:!!P,onChange:function(e){D(e),y(f?e.map((function(e){return e.id})):e[0].id,O)},selected:F,multiple:f,renderMenuItemChildren:function(e){return o.a.createElement("div",{key:e.id},e.title)}}),P&&o.a.createElement(p.a.Feedback,{type:"invalid",style:{display:"block"}},e.meta.touched&&P))}},353:function(e,t,a){"use strict";var n=a(101),r=a(0),c=a.n(r),l=a(390),i=a(354),o=a.n(i);t.a=function(e){var t=e.name,a=e.label,i=e.input,u=Object(r.useState)(null),s=Object(n.a)(u,2),m=s[0],p=s[1];return c.a.createElement("div",null,c.a.createElement(l.a,{onDrop:function(e){p(e[0]),i.onChange(e[0],t)}},(function(e){var t=e.getRootProps,n=e.getInputProps;return c.a.createElement("section",{style:{position:"relative"}},c.a.createElement("div",Object.assign({},t(),{className:o.a.fileDrop}),c.a.createElement("input",n()),c.a.createElement("svg",{className:o.a.fileDrop__svg,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",className:o.a.fileDrop__rect}),c.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",className:"".concat(o.a.fileDrop__rect," ").concat(o.a.fileDrop__rect_2)})),c.a.createElement("p",{className:o.a.fileDrop__label},c.a.createElement("div",null,a),c.a.createElement("div",null,null===m||void 0===m?void 0:m.name))))})))}},354:function(e,t,a){e.exports={fileDrop:"styles_fileDrop__3vLx4",fileDrop__label:"styles_fileDrop__label__328fS",fileDrop__svg:"styles_fileDrop__svg__1fjtk",fileDrop__rect:"styles_fileDrop__rect__3KjTF",fileDrop__rect_2:"styles_fileDrop__rect_2__3UJkx"}},512:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a(63),i=a(507),o=a(139),u=a(510),s=a(15),m=a(23),p=a(267),d=a(280),b=a(296),f=a(297),E=a(343),v=a(279),h=a(327),g=a(293),y=Object(f.a)({form:"publicationsFilterForm"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t,className:"w-100 center flex-column my-3"},r.a.createElement(E.a,null,(function(e){return r.a.createElement(u.a,null,r.a.createElement(b.a,{component:h.a,name:"filterUser",id:"filterUser",className:"w-100",placeholder:e("publications.all.filterUser"),url:"".concat("http://localhost:8000/api","/search/users")}),r.a.createElement(b.a,{component:v.a,type:"text",name:"filterTitle",className:"w-100 ml-1",label:e("publications.all.filterName")}))})),r.a.createElement(E.a,null,(function(e){return r.a.createElement(u.a,null,r.a.createElement(b.a,{component:g.a,name:"filterFrom",className:"w-100",label:e("publications.all.filterFrom")}),r.a.createElement(b.a,{component:g.a,name:"filterTo",className:"w-100",label:e("publications.all.filterTo")}))})),r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",null,r.a.createElement(o.a,{variant:"info",type:"submit"},e("common.search")))})))})),O=a(1),j=a(352),x=a(283),w=a(34),N=a(281),_=a(98),k=a(330),S=a(27),F=a(294),D=function(e){var t=e.publication,a=e.isDeleting,n=e.del;return r.a.createElement("tr",null,r.a.createElement("th",null,t.id),r.a.createElement("th",null,t.title),r.a.createElement("th",null,t.authors),r.a.createElement("th",null,t.date_of_publication),r.a.createElement("th",null,r.a.createElement(F.a,{role:S.a.MODERATOR},r.a.createElement(s.b,{to:"/publications/".concat(t.id)},r.a.createElement("i",{className:"fa fa-eye"})),r.a.createElement(s.b,{to:"/publications/".concat(t.id,"/edit")},r.a.createElement("i",{className:"fa fa-pencil"})),a?r.a.createElement(s.b,{to:"#"},r.a.createElement("i",{className:"fa fa-close",onClick:function(){return n(t.id)}})):r.a.createElement(k.a,{animation:"border",size:"sm"}))))},A=function(e){return e.publications.all},I=function(e){return A(e).sort},P=function(e){return{pageSize:A(e).pageSize,curPage:A(e).currentPage,totalItems:A(e).total}},C=function(e){return e.publications.del},T=a(44),L=function(){return{type:T.d}},R=function(e){return{type:T.c,error:e}},z=function(e){return{type:T.e,payload:e}},M=function(e){return{type:T.b,payload:e}},B=a(8),K=a.n(B),U=a(19),q=a(286),V=a(100),J=a.n(V),W=a(321),Y=J.a.create({baseURL:"".concat("http://localhost:8000/api","/publications"),headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),G={getPublications:function(){var e=arguments;return Object(U.a)(K.a.mark((function t(){var a,n,r,c,l;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:{},n=e.length>1&&void 0!==e[1]?e[1]:[],r=e.length>2&&void 0!==e[2]?e[2]:1,c=e.length>3&&void 0!==e[3]?e[3]:5,l=Object(W.a)(n,"sort"),t.next=7,Y.get("/",{params:Object(O.a)(Object(O.a)(Object(O.a)({},a),l),{},{page:r,pageSize:c})});case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))()},getPublication:function(e){return Object(U.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.get("/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},editPublication:function(e,t){return Object(U.a)(K.a.mark((function a(){return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Y.put("/".concat(e),t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()},deletePublication:function(e){return Object(U.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.delete("/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},addPublication:function(e){return Object(U.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.post("/add",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(U.a)(K.a.mark((function t(a,n){var r,c,l,i;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(L()),t.prev=1,r=Object(q.a)("publicationsFilterForm"),c=I(n()),l=P(n()),t.next=5,G.getPublications(r(n()),c,e,l.pageSize);case 5:i=t.sent,a(z(i.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(R(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()},Q=a(97),X=a(82),Z=function(e){return{type:X.b,payload:e}},$=function(e,t){return{type:X.a,error:t,payload:e}},ee=function(e){return{type:X.c,payload:e}},te=function(e){return function(){var t=Object(U.a)(K.a.mark((function t(a){var n,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Z(e)),t.prev=1,t.next=4,G.deletePublication(e);case 4:a(ee(e)),a(M(e)),Q.b.success("\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0441 id ".concat(e," \u0443\u0434\u0430\u043b\u0435\u043d\u043e")),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a($(e,(null===(n=t.t0.response)||void 0===n?void 0:n.data.message)||t.t0.message)),Q.b.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat((null===(r=t.t0.response)||void 0===r?void 0:r.data.message)||t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},ae=Object(m.b)((function(e){return Object(O.a)(Object(O.a)({},A(e)),{},{deleting:C(e)})}),(function(e){return{changeSort:function(t){e(function(e){return{type:T.a,payload:e}}(t)),e(H(1))},load:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e(H(t))},deleteItem:function(t){e(te(t))}}}))((function(e){var t,a,c;Object(n.useEffect)((function(){e.isLoading||e.publications.length||e.load()}),[]);var l=Object(p.a)().t;return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0,style:{minWidth:"600px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("span",{className:"pull-left"},"ID"),r.a.createElement(x.a,{state:null===(t=Object(_.a)(e.sort,"ID"))||void 0===t?void 0:t.direction,change:e.changeSort,param:"ID"})),r.a.createElement("th",null,r.a.createElement("span",{className:"pull-left"},l("publications.all.name")),r.a.createElement(x.a,{state:null===(a=Object(_.a)(e.sort,"name"))||void 0===a?void 0:a.direction,change:e.changeSort,param:"name"})),r.a.createElement("th",null,r.a.createElement("span",{className:"pull-left"},l("publications.all.authors"))),r.a.createElement("th",null,r.a.createElement("span",{className:"pull-left"},l("publications.all.date")),r.a.createElement(x.a,{state:null===(c=Object(_.a)(e.sort,"date"))||void 0===c?void 0:c.direction,change:e.changeSort,param:"date"})),r.a.createElement("th",null,l("common.actions")))),r.a.createElement("tbody",null,e.isLoading&&r.a.createElement("tr",null,r.a.createElement("th",{colSpan:5,className:"text-center"},r.a.createElement(w.a,null))),e.error&&r.a.createElement("tr",{className:"text-center text-danger"},r.a.createElement("th",{colSpan:5,className:"text-center"},r.a.createElement(N.a,{error:e.error}))),!e.isLoading&&!e.error&&!e.publications.length&&r.a.createElement("tr",{className:"font-weight-bold text-center"},r.a.createElement("th",{colSpan:5,className:"text-center"},l("common.noItems",{what:l("publications.all.noForm")}))),!e.isLoading&&!e.error&&e.publications.map((function(t){return r.a.createElement(D,{key:t.id,publication:t,isDeleting:-1==e.deleting.findIndex((function(e){return e==t.id})),del:e.deleteItem})})))))})),ne=a(284),re=Object(m.b)((function(e){return{paginator:P(e)}}),{changePage:H})((function(e){var t=e.changePage,a=e.paginator,c=Object(p.a)().t;return Object(n.useEffect)((function(){document.title=c("publications.all.pageTitle")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},c("publications.name")),r.a.createElement(i.a,{className:"mr-5"},r.a.createElement(i.a.Body,null,r.a.createElement("div",{className:"model__filter-form"},r.a.createElement("div",null,r.a.createElement(F.a,{role:S.a.MODERATOR},r.a.createElement(s.b,{to:"/publications/add"},r.a.createElement(o.a,{variant:"success"},c("common.add"))))),r.a.createElement("div",null,r.a.createElement(F.a,{role:S.a.MODERATOR},r.a.createElement(s.b,{to:"/publications/import"},r.a.createElement(o.a,{variant:"primary"},c("common.import")))))),r.a.createElement(y,{onSubmit:function(){return t(1)}}),r.a.createElement("div",{className:"d-flex justify-content-center w-100"},r.a.createElement(ae,null)),r.a.createElement("div",{className:"d-flex my-3 justify-content-end w-100"},r.a.createElement(ne.a,Object.assign({},a,{setCur:t})))),r.a.createElement(i.a.Footer,null,r.a.createElement(u.a,{className:"justify-content-between p-2"},r.a.createElement(d.a,null)))))})),ce=a(288),le=a(285),ie=a(265),oe=a(35),ue=function(e){return e.publications.edit},se=function(e){return ue(e).publication},me=a(81),pe=function(e){return function(){var t=Object(U.a)(K.a.mark((function t(a){var n,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:me.b}),t.prev=1,t.next=4,G.getPublication(e);case 4:n=t.sent,a((l=n.data.data,{type:me.c,payload:l})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a((c=(null===(r=t.t0.response)||void 0===r?void 0:r.data.message)||t.t0.message,{type:me.a,error:c}));case 11:case"end":return t.stop()}var c,l}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},de=function(e,t){return function(){var a=Object(U.a)(K.a.mark((function a(n){var r,c,l;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(Object(ie.b)("publicationsEditForm")),a.prev=1,a.next=4,G.editPublication(e,t);case 4:n(Object(ie.c)("publicationsEditForm")),Q.b.success("\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430"),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),n(Object(ie.c)("publicationsEditForm",Object(O.a)({_error:(null===(r=a.t0.response)||void 0===r?void 0:r.data.message)||a.t0.message},null===(c=a.t0.response)||void 0===c?void 0:c.data.errors))),Q.b.error((null===(l=a.t0.response)||void 0===l?void 0:l.data.message)||a.t0.message);case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},be=a(287),fe=Object(m.b)((function(e){return{publication:se(e)}}))(Object(f.a)({form:"publicationsEditForm"})((function(e){var t=e.handleSubmit,a=e.error,c=e.initialize,l=e.publication;return Object(n.useEffect)((function(){c(Object(O.a)({},l))}),[]),r.a.createElement("form",{onSubmit:t},a&&r.a.createElement("div",null,a),r.a.createElement("div",{className:"d-md-flex w-100"},r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",{className:"w-100 pr-3"},r.a.createElement(b.a,{component:v.a,type:"text",name:"title",label:e("publications.edit.name"),validate:[be.a]}),r.a.createElement(b.a,{component:v.a,type:"text",name:"publisher",label:e("publications.edit.publisher"),validate:[be.a]}),r.a.createElement(b.a,{component:v.a,type:"text",name:"url",label:e("publications.edit.url")}))})),r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",{className:"w-100 pl-3"},r.a.createElement(b.a,{component:g.a,name:"date",className:"mb-2",label:e("publications.edit.date")}),r.a.createElement(b.a,{component:h.a,name:"authors",placeholder:e("publications.edit.authors"),url:"".concat("http://localhost:8000/api","/search/users"),multiple:!0}),r.a.createElement(b.a,{component:v.a,type:"text",name:"another_authors",label:e("publications.edit.anotherAuthors")}))}))),r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",{className:"w-100 mt-2"},r.a.createElement(b.a,{component:"textarea",className:"form-control",name:"description",rows:5,label:e("publications.edit.description")}))})))}))),Ee=Object(m.b)((function(e){return{editState:ue(e),submitting:Object(le.a)("publicationsEditForm")(e)}}),{loadPublication:pe,send:ie.d,editPublication:de}),ve=Object(oe.a)(S.a.MODERATOR,!0)(Ee((function(e){var t=e.editState,a=e.loadPublication,c=Object(ce.a)(e,["editState","loadPublication"]),l=Object(p.a)().t;Object(n.useEffect)((function(){a(+c.match.params.id),document.title=l("publications.edit.pageTitle")}),[]);return t.publication||t.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},l("publications.edit.pageTitle")),r.a.createElement(i.a,{className:"mr-5"},r.a.createElement(i.a.Body,null,t.isLoading&&r.a.createElement(w.a,null),!t.isLoading&&t.error&&r.a.createElement(N.a,{error:t.error}),!t.isLoading&&!t.error&&r.a.createElement(fe,{onSubmit:function(e){c.editPublication(+c.match.params.id,e)}})),r.a.createElement(i.a.Footer,null,r.a.createElement(u.a,{className:"justify-content-between p-2"},r.a.createElement(d.a,null),!t.isLoading&&!t.error&&r.a.createElement(o.a,{variant:"warning",onClick:function(){c.send("publicationsEditForm")},disabled:c.submitting},c.submitting&&r.a.createElement(k.a,{animation:"border",size:"sm"}),l("common.edit")))))):null}))),he=Object(f.a)({form:"publicationsAddForm"})((function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:t},a&&r.a.createElement("div",null,a),r.a.createElement("div",{className:"d-md-flex w-100"},r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",{className:"w-100 pr-3"},r.a.createElement(b.a,{component:v.a,type:"text",name:"title",label:e("publications.add.name"),validate:[be.a]}),r.a.createElement(b.a,{component:v.a,type:"text",name:"publisher",label:e("publications.add.publisher"),validate:[be.a]}),r.a.createElement(b.a,{component:v.a,type:"text",name:"url",label:e("publications.add.url")}))})),r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",{className:"w-100 pl-3"},r.a.createElement(b.a,{component:g.a,name:"date",className:"mb-2",label:e("publications.add.date")}),r.a.createElement(b.a,{component:h.a,name:"authors",placeholder:e("publications.add.authors"),url:"".concat("http://localhost:8000/api","/search/users"),multiple:!0}),r.a.createElement(b.a,{component:v.a,type:"text",name:"another_authors",label:e("publications.add.anotherAuthors")}))}))),r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",{className:"w-100 mt-2"},r.a.createElement(b.a,{component:"textarea",className:"form-control",name:"description",rows:5,label:e("publications.add.description")}))})))})),ge=function(e){return function(){var t=Object(U.a)(K.a.mark((function t(a){var n,r,c;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(ie.b)("publicationsAddForm")),t.prev=1,t.next=4,G.addPublication(e);case 4:a(Object(ie.c)("publicationsAddForm")),a(Object(ie.a)("publicationsAddForm")),Q.b.success("\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a(Object(ie.c)("publicationsAddForm",Object(O.a)({_error:(null===(n=t.t0.response)||void 0===n?void 0:n.data.message)||t.t0.message},null===(r=t.t0.response)||void 0===r?void 0:r.data.errors))),Q.b.error((null===(c=t.t0.response)||void 0===c?void 0:c.data.message)||t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},ye=Object(m.b)((function(e){return{submitting:Object(le.a)("publicationsAddForm")(e)}}),{add:ge,send:ie.d}),Oe=Object(oe.a)(S.a.MODERATOR,!0)(ye((function(e){var t=e.add,a=e.send,c=e.submitting,l=Object(p.a)().t;return Object(n.useEffect)((function(){document.title=l("publications.add.pageTitle")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},l("publications.add.pageTitle")),r.a.createElement(i.a,{className:"mr-5"},r.a.createElement(i.a.Body,null,r.a.createElement(he,{onSubmit:t})),r.a.createElement(i.a.Footer,null,r.a.createElement(u.a,{className:"justify-content-between p-2"},r.a.createElement(d.a,null),r.a.createElement(o.a,{variant:"success",onClick:function(){return a("publicationsAddForm")},disabled:c},c&&r.a.createElement(k.a,{size:"sm",animation:"border"}),l("common.add"))))))}))),je=function(e){return e.publications.single},xe=a(273),we=function(e){var t=e.publication;return r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",null,r.a.createElement(xe.a,{i18nKey:"publications.single.id"},r.a.createElement("div",null,"ID: ",{id:t.id})),r.a.createElement(xe.a,{i18nKey:"publications.single.title"},r.a.createElement("div",null,"Title: ",{title:t.title})),r.a.createElement(xe.a,{i18nKey:"publications.single.date"},r.a.createElement("div",null,"Date of publication: ",{id:t.date_of_publication})),r.a.createElement(xe.a,{i18nKey:"publications.single.authors"},r.a.createElement("div",null,"Authors: ",{authors:t.authors})),r.a.createElement(xe.a,{i18nKey:"publications.single.publisher"},r.a.createElement("div",null,"Publisher: ",{publisher:t.publisher||e("common.notSetted")})),r.a.createElement(xe.a,{i18nKey:"publications.single.url"},r.a.createElement("div",null,"URL: ",r.a.createElement("a",{href:t.url},{url:t.url}))),r.a.createElement(xe.a,{i18nKey:"publications.single.description"},r.a.createElement("div",null,"Description: ",{description:t.description||e("common.notSetted")})))}))},Ne=a(83),_e=function(e){return function(){var t=Object(U.a)(K.a.mark((function t(a){var n,r,c;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:Ne.b}),t.prev=1,t.next=4,G.getPublication(e);case 4:n=t.sent,a((i=n.data.data,{type:Ne.c,payload:i})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a((l=(null===(r=t.t0.response)||void 0===r?void 0:r.data.message)||t.t0.message,{type:Ne.a,error:l})),Q.b.error((null===(c=t.t0.response)||void 0===c?void 0:c.data.message)||t.t0.message);case 12:case"end":return t.stop()}var l,i}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},ke=Object(m.b)((function(e){return Object(O.a)({},je(e))}),{load:_e})((function(e){var t=e.match,a=e.isLoading,c=e.error,l=e.publication,m=e.load,b=Object(p.a)().t;return Object(n.useEffect)((function(){m(+t.params.id)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},b("publications.single.pageTitle")),r.a.createElement(i.a,{className:"mr-5"},r.a.createElement(i.a.Body,null,a&&r.a.createElement(w.a,null),!a&&c&&r.a.createElement(N.a,{error:c}),!a&&!c&&l&&r.a.createElement(we,{publication:l})),r.a.createElement(i.a.Footer,null,r.a.createElement(u.a,{className:"justify-content-between p-2"},r.a.createElement(d.a,null),r.a.createElement(s.b,{to:"/publications/".concat(t.params.id,"/edit")},r.a.createElement(o.a,{variant:"warning"},b("common.edit")))))))})),Se=a(353),Fe=Object(f.a)({form:"ranksAddForm"})((function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:t,className:"w-50"},a&&r.a.createElement("div",null,a),r.a.createElement(E.a,null,(function(e){return r.a.createElement("div",{className:"center w-100"},r.a.createElement(b.a,{name:"importFile",label:e("publications.import.file"),component:Se.a}))})))})),De=function(){var e=Object(p.a)().t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},e("publications.import.pageTitle")),r.a.createElement(i.a,{className:"mr-5"},r.a.createElement(i.a.Body,{className:"d-flex flex-column align-items-center"},r.a.createElement(Fe,{onSubmit:console.log}),r.a.createElement("a",{href:"".concat("http://localhost:8000/api","/examples/publications"),target:"_blank",className:"mt-3"},e("common.downloadExample"))),r.a.createElement(i.a.Footer,null,r.a.createElement(u.a,{className:"justify-content-between p-2"},r.a.createElement(d.a,null)))))};t.default=Object(oe.a)(S.a.VIEWER,!0)((function(){return r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/publications",exact:!0,component:re}),r.a.createElement(c.b,{path:"/publications/add",exact:!0,component:Oe}),r.a.createElement(c.b,{path:"/publications/import",exact:!0,component:De}),r.a.createElement(c.b,{path:"/publications/:id/edit",exact:!0,component:ve}),r.a.createElement(c.b,{path:"/publications/:id",exact:!0,component:ke}),r.a.createElement(c.b,{path:"/",component:l.a}))}))}}]);
//# sourceMappingURL=10.f33e4d05.chunk.js.map