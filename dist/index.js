!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(self,(function(){return(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=h(t,e,r);if("normal"===c.type){if(n=r.done?d:l,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",p="executing",d="completed",v={};function m(){}function y(){}function g(){}var w={};c(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b($([])));x&&x!==r&&n.call(x,i)&&(w=x);var E=g.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(o,i,a,s){var c=h(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function $(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return y.prototype=g,c(E,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(T.prototype),c(T.prototype,a,(function(){return this})),t.AsyncIterator=T,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new T(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),c(E,s,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=$,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function t(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)}))}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.r(n),r.d(n,{default:()=>u});var a,s=r(757),c=r.n(s);(a=document.createElement("style")).innerHTML="\n  .refresh-indicator-animation {\n      animation: refresh-indicator-rotate 1s infinite linear;\n      -webkit-animation: refresh-indicator-rotate 1s infinite linear;\n      -moz-animation: refresh-indicator-rotate 1s infinite linear;\n      -o-animation: refresh-indicator-rotate 1s infinite linear;\n  }\n  \n  @keyframes refresh-indicator-rotate {\n    from {\n      transform: rotate(0);\n      -webkit-transform: rotate(0);\n      -moz-transform: rotate(0);\n      -o-transform: rotate(0);\n    }\n    \n    to {\n      transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n    }\n  }\n  ",document.body.appendChild(a);var u=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),this.dom=e,this.defaultOption={size:"30px",color:"green",bgColor:"white",distanceFactor:2,refreshDistanceFactor:1.2,onRefresh:function(){return new Promise((function(t){return setTimeout(t,3e3)}))}},this.option=Object.assign({},this.defaultOption,r||{}),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.times=0,this.init()}var r,n,a,s,u;return r=t,(n=[{key:"canScroll",value:(u=e(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",!1);case 2:return r=e.scrollTop||0,e.scrollTop=r+1,t.abrupt("return",new Promise((function(t){setTimeout((function(){var n=e.scrollTop;e.scrollTop=r,t(n!==r)}),0)})));case 5:case"end":return t.stop()}}),t)}))),function(t){return u.apply(this,arguments)})},{key:"init",value:(s=e(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.dom.parentNode,Object.assign(this.dom.style,{position:"absolute",zIndex:0,top:0,left:0,right:0,transform:"translate(0, -100%)",display:"flex",alignItems:"center",justifyContent:"center"}),this.refreshDom=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.refreshDom.setAttribute("viewBox","0 0 1024 1024"),this.refreshDom.setAttribute("width",this.option.size),this.refreshDom.setAttribute("height",this.option.size),Object.assign(this.refreshDom.style,{background:this.option.bgColor,borderRadius:"50%"}),(r=document.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d","M866.133333 573.013333a42.666667 42.666667 0 0 0-53.333333 27.733334A304.64 304.64 0 0 1 519.68 810.666667 302.933333 302.933333 0 0 1 213.333333 512a302.933333 302.933333 0 0 1 306.346667-298.666667 309.76 309.76 0 0 1 198.4 71.253334l-92.586667-15.36a42.666667 42.666667 0 0 0-49.066666 35.413333 42.666667 42.666667 0 0 0 35.413333 49.066667l180.906667 29.866666h7.253333a42.666667 42.666667 0 0 0 14.506667-2.56 14.08 14.08 0 0 0 4.266666-2.56 33.28 33.28 0 0 0 8.533334-4.693333l3.84-4.693333c0-2.133333 3.84-3.84 5.546666-6.4s0-4.266667 2.133334-5.973334a57.173333 57.173333 0 0 0 2.986666-7.68l32-170.666666a42.666667 42.666667 0 0 0-85.333333-16.213334l-11.52 61.866667A392.96 392.96 0 0 0 519.68 128 388.266667 388.266667 0 0 0 128 512a388.266667 388.266667 0 0 0 391.68 384A389.12 389.12 0 0 0 896 626.346667a42.666667 42.666667 0 0 0-29.866667-53.333334z"),r.setAttribute("fill",this.option.color),this.refreshDom.appendChild(r),this.dom.appendChild(this.refreshDom);case 12:if(!e){t.next=20;break}return t.next=15,this.canScroll(e);case 15:if(!t.sent){t.next=17;break}return t.abrupt("break",20);case 17:e=e.parentNode,t.next=12;break;case 20:e===document&&(e=document.documentElement),e||(e=document.documentElement),this.root=e,e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd),Object.assign(this.root.style,{position:"relative"});case 27:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"onTouchEnd",value:(a=e(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.refreshDom.scrollTop<=5&&this.times++,this.$$priviousY=void 0,!(this.dom.offsetTop>this.$$size/2*3)){t.next=13;break}return this.dom.style.top=this.$$size*this.option.refreshDistanceFactor+"px",t.prev=4,this.refreshDom.classList.add("refresh-indicator-animation"),t.next=8,this.option.onRefresh();case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.error("onRefresh error:",t.t0);case 13:this.dom.style.top="0",this.refreshDom.classList.remove("refresh-indicator-animation");case 15:case"end":return t.stop()}}),t,this,[[4,10]])}))),function(){return a.apply(this,arguments)})},{key:"onTouchStart",value:function(t){}},{key:"onTouchMove",value:function(t){if(this.times%2){var e=t.touches[0].clientY;if(void 0!==this.$$priviousY){var r=e-this.$$priviousY;this.$$priviousY=e;var n=parseFloat(this.dom.style.top)+r;this.$$size=this.$$size||this.refreshDom.getBoundingClientRect().height;var o=this.$$size*this.option.distanceFactor;n>o&&(n=o),this.dom.style.top=n+r+"px"}else this.$$priviousY=e}}},{key:"destroy",value:function(){this.root.removeEventListener("touchstart",this.onTouchStart),this.root.removeEventListener("touchmove",this.onTouchMove),this.root.removeEventListener("touchend",this.onTouchEnd)}}])&&i(r.prototype,n),t}()})(),n})()}));