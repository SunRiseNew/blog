(window.webpackJsonp=window.webpackJsonp||[]).push([[1],Array(78).concat([function(t,e,n){},function(t,e,n){},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},,function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(24),o=n(109),i=n(110),u=n(111),c=n(112),a=n(113);function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=u,s.prototype.has=c,s.prototype.set=a,t.exports=s},function(t,e,n){var r=n(114),o=n(21);t.exports=function t(e,n,i,u,c){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,i,u,t,c))}},function(t,e,n){var r=n(115),o=n(118),i=n(119);t.exports=function(t,e,n,u,c,a){var s=1&n,f=t.length,p=e.length;if(f!=p&&!(s&&p>f))return!1;var l=a.get(t);if(l&&a.get(e))return l==e;var v=-1,b=!0,h=2&n?new r:void 0;for(a.set(t,e),a.set(e,t);++v<f;){var y=t[v],x=e[v];if(u)var g=s?u(x,y,v,e,t,a):u(y,x,v,t,e,a);if(void 0!==g){if(g)continue;b=!1;break}if(h){if(!o(e,(function(t,e){if(!i(h,e)&&(y===t||c(y,t,n,u,a)))return h.push(e)}))){b=!1;break}}else if(y!==x&&!c(y,x,n,u,a)){b=!1;break}}return a.delete(t),a.delete(e),b}},function(t,e,n){var r=n(88),o=n(11);t.exports=function(t,e,n){var i=e(t);return o(t)?i:r(i,n(t))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},function(t,e,n){var r=n(126),o=n(90),i=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols,c=u?function(t){return null==t?[]:(t=Object(t),r(u(t),(function(e){return i.call(t,e)})))}:o;t.exports=c},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(92),o=n(133),i=n(99);t.exports=function(t){return i(t)?r(t):o(t)}},function(t,e,n){var r=n(127),o=n(93),i=n(11),u=n(94),c=n(80),a=n(96),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),f=!n&&o(t),p=!n&&!f&&u(t),l=!n&&!f&&!p&&a(t),v=n||f||p||l,b=v?r(t.length,String):[],h=b.length;for(var y in t)!e&&!s.call(t,y)||v&&("length"==y||p&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||c(y,h))||b.push(y);return b}},function(t,e,n){var r=n(128),o=n(21),i=Object.prototype,u=i.hasOwnProperty,c=i.propertyIsEnumerable,a=r(function(){return arguments}())?r:function(t){return o(t)&&u.call(t,"callee")&&!c.call(t,"callee")};t.exports=a},function(t,e,n){(function(t){var r=n(10),o=n(129),i=e&&!e.nodeType&&e,u=i&&"object"==typeof t&&t&&!t.nodeType&&t,c=u&&u.exports===i?r.Buffer:void 0,a=(c?c.isBuffer:void 0)||o;t.exports=a}).call(this,n(95)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(130),o=n(131),i=n(132),u=i&&i.isTypedArray,c=u?o(u):r;t.exports=c},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(31),o=n(81);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){var r=n(18);t.exports=function(t){return t==t&&!r(t)}},function(t,e){t.exports=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){n.e(3).then(n.t.bind(null,160,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},o=(n(103),n(1)),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,u=(n(104),Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,n(83)),c=n.n(u),a=n(105),s=n.n(a),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return s()(this.$props,c.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}};Object(o.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},function(t,e,n){"use strict";var r=n(78);n.n(r).a},function(t,e,n){"use strict";var r=n(79);n.n(r).a},function(t,e,n){var r=n(33),o=n(106),i=n(148),u=n(153);t.exports=function(t,e){if(null==t)return{};var n=r(u(t),(function(t){return[t]}));return e=o(e),i(t,n,(function(t,n){return e(t,n[0])}))}},function(t,e,n){var r=n(107),o=n(141),i=n(83),u=n(11),c=n(145);t.exports=function(t){return"function"==typeof t?t:null==t?i:"object"==typeof t?u(t)?o(t[0],t[1]):r(t):c(t)}},function(t,e,n){var r=n(108),o=n(140),i=n(101);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},function(t,e,n){var r=n(84),o=n(85);t.exports=function(t,e,n,i){var u=n.length,c=u,a=!i;if(null==t)return!c;for(t=Object(t);u--;){var s=n[u];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++u<c;){var f=(s=n[u])[0],p=t[f],l=s[1];if(a&&s[2]){if(void 0===p&&!(f in t))return!1}else{var v=new r;if(i)var b=i(p,l,f,t,e,v);if(!(void 0===b?o(l,p,3,i,v):b))return!1}}return!0}},function(t,e,n){var r=n(24);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(24),o=n(29),i=n(27);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var u=n.__data__;if(!o||u.length<199)return u.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(u)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(84),o=n(86),i=n(120),u=n(124),c=n(135),a=n(11),s=n(94),f=n(96),p="[object Object]",l=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,b,h){var y=a(t),x=a(e),g=y?"[object Array]":c(t),d=x?"[object Array]":c(e),j=(g="[object Arguments]"==g?p:g)==p,_=(d="[object Arguments]"==d?p:d)==p,m=g==d;if(m&&s(t)){if(!s(e))return!1;y=!0,j=!1}if(m&&!j)return h||(h=new r),y||f(t)?o(t,e,n,v,b,h):i(t,e,g,n,v,b,h);if(!(1&n)){var O=j&&l.call(t,"__wrapped__"),w=_&&l.call(e,"__wrapped__");if(O||w){var P=O?t.value():t,k=w?e.value():e;return h||(h=new r),b(P,k,n,v,h)}}return!!m&&(h||(h=new r),u(t,e,n,v,b,h))}},function(t,e,n){var r=n(27),o=n(116),i=n(117);function u(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}u.prototype.add=u.prototype.push=o,u.prototype.has=i,t.exports=u},function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,n){var r=n(12),o=n(121),i=n(28),u=n(86),c=n(122),a=n(123),s=r?r.prototype:void 0,f=s?s.valueOf:void 0;t.exports=function(t,e,n,r,s,p,l){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!p(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=c;case"[object Set]":var b=1&r;if(v||(v=a),t.size!=e.size&&!b)return!1;var h=l.get(t);if(h)return h==e;r|=2,l.set(t,e);var y=u(v(t),v(e),r,s,p,l);return l.delete(t),y;case"[object Symbol]":if(f)return f.call(t)==f.call(e)}return!1}},function(t,e,n){var r=n(10).Uint8Array;t.exports=r},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},function(t,e,n){var r=n(125),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,i,u,c){var a=1&n,s=r(t),f=s.length;if(f!=r(e).length&&!a)return!1;for(var p=f;p--;){var l=s[p];if(!(a?l in e:o.call(e,l)))return!1}var v=c.get(t);if(v&&c.get(e))return v==e;var b=!0;c.set(t,e),c.set(e,t);for(var h=a;++p<f;){var y=t[l=s[p]],x=e[l];if(i)var g=a?i(x,y,l,e,t,c):i(y,x,l,t,e,c);if(!(void 0===g?y===x||u(y,x,n,i,c):g)){b=!1;break}h||(h="constructor"==l)}if(b&&!h){var d=t.constructor,j=e.constructor;d==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof d&&d instanceof d&&"function"==typeof j&&j instanceof j||(b=!1)}return c.delete(t),c.delete(e),b}},function(t,e,n){var r=n(87),o=n(89),i=n(91);t.exports=function(t){return r(t,i,o)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var u=t[n];e(u,n,t)&&(i[o++]=u)}return i}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(17),o=n(21);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(17),o=n(81),i=n(21),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!u[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(30),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===o&&r.process,c=function(){try{var t=i&&i.require&&i.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=c}).call(this,n(95)(t))},function(t,e,n){var r=n(97),o=n(134),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e,n){var r=n(98)(Object.keys,Object);t.exports=r},function(t,e,n){var r=n(136),o=n(29),i=n(137),u=n(138),c=n(139),a=n(17),s=n(32),f=s(r),p=s(o),l=s(i),v=s(u),b=s(c),h=a;(r&&"[object DataView]"!=h(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=h(new o)||i&&"[object Promise]"!=h(i.resolve())||u&&"[object Set]"!=h(new u)||c&&"[object WeakMap]"!=h(new c))&&(h=function(t){var e=a(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case f:return"[object DataView]";case p:return"[object Map]";case l:return"[object Promise]";case v:return"[object Set]";case b:return"[object WeakMap]"}return e}),t.exports=h},function(t,e,n){var r=n(16)(n(10),"DataView");t.exports=r},function(t,e,n){var r=n(16)(n(10),"Promise");t.exports=r},function(t,e,n){var r=n(16)(n(10),"Set");t.exports=r},function(t,e,n){var r=n(16)(n(10),"WeakMap");t.exports=r},function(t,e,n){var r=n(100),o=n(91);t.exports=function(t){for(var e=o(t),n=e.length;n--;){var i=e[n],u=t[i];e[n]=[i,u,r(u)]}return e}},function(t,e,n){var r=n(85),o=n(14),i=n(142),u=n(26),c=n(100),a=n(101),s=n(22);t.exports=function(t,e){return u(t)&&c(e)?a(s(t),e):function(n){var u=o(n,t);return void 0===u&&u===e?i(n,t):r(e,u,3)}}},function(t,e,n){var r=n(143),o=n(144);t.exports=function(t,e){return null!=t&&o(t,e,r)}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,n){var r=n(23),o=n(93),i=n(11),u=n(80),c=n(81),a=n(22);t.exports=function(t,e,n){for(var s=-1,f=(e=r(e,t)).length,p=!1;++s<f;){var l=a(e[s]);if(!(p=null!=t&&n(t,l)))break;t=t[l]}return p||++s!=f?p:!!(f=null==t?0:t.length)&&c(f)&&u(l,f)&&(i(t)||o(t))}},function(t,e,n){var r=n(146),o=n(147),i=n(26),u=n(22);t.exports=function(t){return i(t)?r(u(t)):o(t)}},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},function(t,e,n){var r=n(25);t.exports=function(t){return function(e){return r(e,t)}}},function(t,e,n){var r=n(25),o=n(149),i=n(23);t.exports=function(t,e,n){for(var u=-1,c=e.length,a={};++u<c;){var s=e[u],f=r(t,s);n(f,s)&&o(a,i(s,t),f)}return a}},function(t,e,n){var r=n(150),o=n(23),i=n(80),u=n(18),c=n(22);t.exports=function(t,e,n,a){if(!u(t))return t;for(var s=-1,f=(e=o(e,t)).length,p=f-1,l=t;null!=l&&++s<f;){var v=c(e[s]),b=n;if(s!=p){var h=l[v];void 0===(b=a?a(h,v,l):void 0)&&(b=u(h)?h:i(e[s+1])?[]:{})}r(l,v,b),l=l[v]}return t}},function(t,e,n){var r=n(151),o=n(28),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var u=t[e];i.call(t,e)&&o(u,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(152);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var r=n(16),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r=n(87),o=n(154),i=n(156);t.exports=function(t){return r(t,i,o)}},function(t,e,n){var r=n(88),o=n(155),i=n(89),u=n(90),c=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,i(t)),t=o(t);return e}:u;t.exports=c},function(t,e,n){var r=n(98)(Object.getPrototypeOf,Object);t.exports=r},function(t,e,n){var r=n(92),o=n(157),i=n(99);t.exports=function(t){return i(t)?r(t,!0):o(t)}},function(t,e,n){var r=n(18),o=n(97),i=n(158),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=o(t),n=[];for(var c in t)("constructor"!=c||!e&&u.call(t,c))&&n.push(c);return n}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}}])]);