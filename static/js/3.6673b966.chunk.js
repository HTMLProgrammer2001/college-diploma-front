(this.webpackJsonptrackteacher=this.webpackJsonptrackteacher||[]).push([[3],{272:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return a})),t.d(r,"d",(function(){return c}));var n=t(330),i=(t(4),n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset),o=(n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit),a=(n.a.stopAsyncValidation,n.a.stopSubmit),c=n.a.submit;n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},295:function(e,r,t){"use strict";var n=function(e){var r=e.getIn;return function(e,t){return function(n){var i=t||function(e){return r(e,"form")};return!!r(i(n),e+".submitting")}}},i=t(20);r.a=n(i.a)},332:function(e,r,t){"use strict";var n=t(2),i=t(3),o=t(7),a=t.n(o),c=t(0),u=t.n(c),l=t(14),s=u.a.forwardRef((function(e,r){var t=e.bsPrefix,o=e.variant,c=e.animation,s=e.size,f=e.children,p=e.as,d=void 0===p?"div":p,v=e.className,g=Object(i.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),y=(t=Object(l.a)(t,"spinner"))+"-"+c;return u.a.createElement(d,Object(n.a)({ref:r},g,{className:a()(v,y,s&&y+"-"+s,o&&"text-"+o)}),f)}));s.displayName="Spinner",r.a=s},365:function(e,r,t){"use strict";var n=t(0),i=t.n(n),o=t(6),a=t.n(o);function c(e,r,t,n){return new(t||(t=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(r){o(r)}}function c(e){try{u(n.throw(e))}catch(r){o(r)}}function u(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}u((n=n.apply(e,r||[])).next())}))}function u(e,r){var t,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=r.call(e,a)}catch(c){o=[6,c],n=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}Object.create;function l(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,i,o=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(c){i={error:c}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(i)throw i.error}}return a}Object.create;var s=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function f(e,r){var t=function(e){var r=e.name;if(r&&-1!==r.lastIndexOf(".")&&!e.type){var t=r.split(".").pop().toLowerCase(),n=s.get(t);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof r?r:"string"===typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var p=[".DS_Store","Thumbs.db"];function d(e){return(null!==e.target&&e.target.files?y(e.target.files):[]).map((function(e){return f(e)}))}function v(e,r){return c(this,void 0,void 0,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return e.items?(t=y(e.items).filter((function(e){return"file"===e.kind})),"drop"!==r?[2,t]:[4,Promise.all(t.map(b))]):[3,2];case 1:return[2,g(m(n.sent()))];case 2:return[2,g(y(e.files).map((function(e){return f(e)})))]}}))}))}function g(e){return e.filter((function(e){return-1===p.indexOf(e.name)}))}function y(e){for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function b(e){if("function"!==typeof e.webkitGetAsEntry)return h(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?O(r):h(e)}function m(e){return e.reduce((function(e,r){return function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(l(arguments[r]));return e}(e,Array.isArray(r)?m(r):[r])}),[])}function h(e){var r=e.getAsFile();if(!r)return Promise.reject(e+" is not a File");var t=f(r);return Promise.resolve(t)}function D(e){return c(this,void 0,void 0,(function(){return u(this,(function(r){return[2,e.isDirectory?O(e):j(e)]}))}))}function O(e){var r=e.createReader();return new Promise((function(e,t){var n=[];!function i(){var o=this;r.readEntries((function(r){return c(o,void 0,void 0,(function(){var o,a,c;return u(this,(function(u){switch(u.label){case 0:if(r.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=u.sent(),e(o),[3,4];case 3:return a=u.sent(),t(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(r.map(D)),n.push(c),i(),u.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function j(e){return c(this,void 0,void 0,(function(){return u(this,(function(r){return[2,new Promise((function(r,t){e.file((function(t){var n=f(t,e.fullPath);r(n)}),(function(e){t(e)}))}))]}))}))}var w=t(510),F=t.n(w);function S(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(u){i=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return A(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var E=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var r=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(r)}},k=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},x=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},P={code:"too-many-files",message:"Too many files"};function C(e,r){var t="application/x-moz-file"===e.type||F()(e,r);return[t,t?null:E(r)]}function z(e,r,t){if(R(e.size))if(R(r)&&R(t)){if(e.size>t)return[!1,k(t)];if(e.size<r)return[!1,x(r)]}else{if(R(r)&&e.size<r)return[!1,x(r)];if(R(t)&&e.size>t)return[!1,k(t)]}return[!0,null]}function R(e){return void 0!==e&&null!==e}function T(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles;return!(!o&&r.length>1||o&&a>=1&&r.length>a)&&r.every((function(e){var r=S(C(e,t),1)[0],o=S(z(e,n,i),1)[0];return r&&o}))}function I(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function L(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function K(e){e.preventDefault()}function B(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function M(e){return-1!==e.indexOf("Edge/")}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return B(e)||M(e)}function $(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return r.some((function(r){return!I(e)&&r&&r.apply(void 0,[e].concat(n)),I(e)}))}}function G(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(u){i=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return t}(e,r)||W(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,r){if(e){if("string"===typeof e)return _(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,r):void 0}}function _(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function J(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach((function(r){V(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function V(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var Q=Object(n.forwardRef)((function(e,r){var t=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=J(J({},X),e),t=r.accept,i=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,c=r.minSize,u=r.multiple,l=r.maxFiles,s=r.onDragEnter,f=r.onDragLeave,p=r.onDragOver,d=r.onDrop,v=r.onDropAccepted,g=r.onDropRejected,y=r.onFileDialogCancel,b=r.preventDropOnDocument,m=r.noClick,h=r.noKeyboard,D=r.noDrag,O=r.noDragEventsBubbling,j=Object(n.useRef)(null),w=Object(n.useRef)(null),F=Object(n.useReducer)(Z,Y),S=U(F,2),A=S[0],E=S[1],k=A.isFocused,x=A.isFileDialogActive,R=A.draggedFiles,B=Object(n.useCallback)((function(){w.current&&(E({type:"openDialog"}),w.current.value=null,w.current.click())}),[E]),M=function(){x&&setTimeout((function(){w.current&&(w.current.files.length||(E({type:"closeDialog"}),"function"===typeof y&&y()))}),300)};Object(n.useEffect)((function(){return window.addEventListener("focus",M,!1),function(){window.removeEventListener("focus",M,!1)}}),[w,x,y]);var W=Object(n.useCallback)((function(e){j.current&&j.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),B()))}),[j,w]),_=Object(n.useCallback)((function(){E({type:"focus"})}),[]),q=Object(n.useCallback)((function(){E({type:"blur"})}),[]),Q=Object(n.useCallback)((function(){m||(N()?setTimeout(B,0):B())}),[w,m]),ee=Object(n.useRef)([]),re=function(e){j.current&&j.current.contains(e.target)||(e.preventDefault(),ee.current=[])};Object(n.useEffect)((function(){return b&&(document.addEventListener("dragover",K,!1),document.addEventListener("drop",re,!1)),function(){b&&(document.removeEventListener("dragover",K),document.removeEventListener("drop",re))}}),[j,b]);var te=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),le(e),ee.current=[].concat(G(ee.current),[e.target]),L(e)&&Promise.resolve(o(e)).then((function(r){I(e)&&!O||(E({draggedFiles:r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[o,s,O]),ne=Object(n.useCallback)((function(e){if(e.preventDefault(),e.persist(),le(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return L(e)&&p&&p(e),!1}),[p,O]),ie=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),le(e);var r=ee.current.filter((function(e){return j.current&&j.current.contains(e)})),t=r.indexOf(e.target);-1!==t&&r.splice(t,1),ee.current=r,r.length>0||(E({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),L(e)&&f&&f(e))}),[j,f,O]),oe=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),le(e),ee.current=[],L(e)&&Promise.resolve(o(e)).then((function(r){if(!I(e)||O){var n=[],i=[];r.forEach((function(e){var r=U(C(e,t),2),o=r[0],u=r[1],l=U(z(e,c,a),2),s=l[0],f=l[1];if(o&&s)n.push(e);else{var p=[u,f].filter((function(e){return e}));i.push({file:e,errors:p})}})),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach((function(e){i.push({file:e,errors:[P]})})),n.splice(0)),E({acceptedFiles:n,fileRejections:i,type:"setFiles"}),d&&d(n,i,e),i.length>0&&g&&g(i,e),n.length>0&&v&&v(n,e)}})),E({type:"reset"})}),[u,t,c,a,o,d,v,g,O]),ae=function(e){return i?null:e},ce=function(e){return h?null:ae(e)},ue=function(e){return D?null:ae(e)},le=function(e){O&&e.stopPropagation()},se=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.refKey,t=void 0===r?"ref":r,n=e.onKeyDown,o=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=H(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return J(J(V({onKeyDown:ce($(n,W)),onFocus:ce($(o,_)),onBlur:ce($(a,q)),onClick:ae($(c,Q)),onDragEnter:ue($(u,te)),onDragOver:ue($(l,ne)),onDragLeave:ue($(s,ie)),onDrop:ue($(f,oe))},t,j),i||h?{}:{tabIndex:0}),p)}}),[j,W,_,q,Q,te,ne,ie,oe,h,D,i]),fe=Object(n.useCallback)((function(e){e.stopPropagation()}),[]),pe=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.refKey,n=void 0===r?"ref":r,i=e.onChange,o=e.onClick,a=H(e,["refKey","onChange","onClick"]),c=V({accept:t,multiple:u,type:"file",style:{display:"none"},onChange:ae($(i,oe)),onClick:ae($(o,fe)),autoComplete:"off",tabIndex:-1},n,w);return J(J({},c),a)}}),[w,t,u,oe,i]),de=R.length,ve=de>0&&T({files:R,accept:t,minSize:c,maxSize:a,multiple:u,maxFiles:l}),ge=de>0&&!ve;return J(J({},A),{},{isDragAccept:ve,isDragReject:ge,isFocused:k&&!i,getRootProps:se,getInputProps:pe,rootRef:j,inputRef:w,open:ae(B)})}(H(e,["children"])),a=o.open,c=H(o,["open"]);return Object(n.useImperativeHandle)(r,(function(){return{open:a}}),[a]),i.a.createElement(n.Fragment,null,t(J(J({},c),{},{open:a})))}));Q.displayName="Dropzone";var X={disabled:!1,getFilesFromEvent:function(e){return c(this,void 0,void 0,(function(){return u(this,(function(r){return[2,(t=e,t.dataTransfer&&e.dataTransfer?v(e.dataTransfer,e.type):d(e))];var t}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1};Q.defaultProps=X,Q.propTypes={children:a.a.func,accept:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),multiple:a.a.bool,preventDropOnDocument:a.a.bool,noClick:a.a.bool,noKeyboard:a.a.bool,noDrag:a.a.bool,noDragEventsBubbling:a.a.bool,minSize:a.a.number,maxSize:a.a.number,maxFiles:a.a.number,disabled:a.a.bool,getFilesFromEvent:a.a.func,onFileDialogCancel:a.a.func,onDragEnter:a.a.func,onDragLeave:a.a.func,onDragOver:a.a.func,onDrop:a.a.func,onDropAccepted:a.a.func,onDropRejected:a.a.func};r.a=Q;var Y={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function Z(e,r){switch(r.type){case"focus":return J(J({},e),{},{isFocused:!0});case"blur":return J(J({},e),{},{isFocused:!1});case"openDialog":return J(J({},e),{},{isFileDialogActive:!0});case"closeDialog":return J(J({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var t=r.isDragActive,n=r.draggedFiles;return J(J({},e),{},{draggedFiles:n,isDragActive:t});case"setFiles":return J(J({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return J(J({},e),{},{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return e}}},510:function(e,r,t){"use strict";r.__esModule=!0,r.default=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return t.some((function(e){var r=e.trim().toLowerCase();return"."===r.charAt(0)?n.toLowerCase().endsWith(r):r.endsWith("/*")?o===r.replace(/\/.*$/,""):i===r}))}return!0}}}]);
//# sourceMappingURL=3.6673b966.chunk.js.map