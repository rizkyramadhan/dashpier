(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{333:
/*!***************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/frisbee/lib/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";(function(t){function o(e,t,r,o,n,s,i){try{var a=e[s](i),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(o,n)}function n(e){return function(){var t=this,r=arguments;return new Promise(function(n,s){var i=e.apply(t,r);function a(e){o(i,n,s,a,c,"next",e)}function c(e){o(i,n,s,a,c,"throw",e)}a(void 0)})}}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){i(e,t,r[t])})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=r(/*! caseless */338),c=r(/*! qs */339),l=r(/*! url-join */342),p=r(/*! url-parse */74),d=r(/*! debug */345)("frisbee"),u=r(/*! boolean */348);r(/*! cross-fetch/polyfill */349),r(/*! abortcontroller-polyfill/dist/polyfill-patch-fetch */350);const h=r(/*! ./interceptor */351),f=["GET","HEAD","POST","PUT","DELETE","OPTIONS","PATCH"],b=["no-cors","cors","same-origin"],y=["default","no-cache","reload","force-cache","only-if-cached"],C=["include","same-origin","omit"],g=["manual","follow","error"],m=["no-referrer","client"],w={readOnly:["headers","ok","redirected","status","statusText","type","url","bodyUsed"],writable:["useFinalURL"],callable:["clone","error","redirect","arrayBuffer","blob","formData","json","text"]};e.exports=class{constructor(e={}){let t;this.opts=s({parse:{ignoreQueryPrefix:!0},stringify:{addQueryPrefix:!0,format:"RFC1738",arrayFormat:"indices"},preventBodyOnMethods:["GET","HEAD","DELETE","CONNECT"],interceptableMethods:f,mode:"same-origin",cache:"default",credentials:"same-origin",redirect:"follow",referrer:"client",body:null,params:null,logRequest:!1,logResponse:!1},e),Object.defineProperty(this,"abortController",{enumerable:!1,get:()=>(t||(t=new AbortController).signal.addEventListener("abort",()=>{t=null}),t)});const r=new Map;Object.defineProperty(this,"abortTokenMap",{enumerable:!1,get:()=>r}),Object.defineProperty(this,"parseErr",{enumerable:!1,value:e.parseErr||new Error(`Invalid JSON received${this.opts.baseURI?` from ${this.opts.baseURI}`:""}`)}),e.arrayFormat&&(this.opts.parse.arrayFormat="indices",delete e.arrayFormat),Array.isArray(e.preventBodyOnMethods)&&(this.opts.preventBodyOnMethods=this.opts.preventBodyOnMethods.map(e=>e.toUpperCase().trim())),this.opts.raw=u(this.opts.raw),this.opts.auth&&this.auth(this.opts.auth),f.forEach(e=>{this[e.toLowerCase()]=this._setup(e.toLowerCase())}),this.del=this._setup("delete"),this.interceptor=new h(this,this.opts.interceptableMethods),this.setOptions=this.setOptions.bind(this),this.auth=this.auth.bind(this),this.jwt=this.jwt.bind(this),this.abort=this.abort.bind(this),this.abortAll=this.abortAll.bind(this),this._request=this._request.bind(this),this._parseJSON=this._parseJSON.bind(this),this._fetch=this._fetch.bind(this)}setOptions(e){return this.opts=s({},this.opts,e),this.opts}abort(e){const t=this.abortTokenMap.get(e);t&&t.abortController&&t.abortController.abort()}abortAll(){this.abortController.abort()}_setup(e){return(t="/",r={})=>{if(r&&"object"==typeof r){let e;if(r.abortToken){let t=this.abortTokenMap.get(r.abortToken);t||(t={abortController:new AbortController,count:0}),t.count++,this.abortTokenMap.set(r.abortToken,t),e=t.abortController}else e=new AbortController;r.signal&&r.signal.addEventListener("abort",()=>e.abort()),this.abortController.signal.addEventListener("abort",()=>e.abort()),r.signal=e.signal}const o=r.signal,n=r.abortToken;return this._request({method:e,originalPath:t,originalOptions:r,signal:o,abortToken:n})}}_request({method:e,originalPath:t,originalOptions:r,signal:o,abortToken:i}){var u=this;return function(){var h=n(function*(n=t,h=r){if(d("frisbee",e,n,h),"string"!=typeof n)throw new TypeError("`path` must be a string");if("object"!=typeof h||Array.isArray(h))throw new TypeError("`options` must be an object");if(h.abortToken!==i)throw new Error("abortToken cannot be modified via an interceptor");if(h.signal!==o)throw new Error("signal cannot be modified via an interceptor");const f={method:"del"===e?"DELETE":e.toUpperCase(),mode:h.mode||u.opts.mode,cache:h.cache||u.opts.cache,credentials:h.credentials||u.opts.credentials,headers:s({},u.opts.headers,h.headers),redirect:h.redirect||u.opts.redirect,referrer:h.referrer||u.opts.referrer,signal:o};(u.opts.body||h.body)&&(f.body=s({},u.opts.body,h.body)),(u.opts.params||h.params)&&(f.params=s({},u.opts.params,h.params)),Object.keys(f.headers).forEach(e=>{void 0!==f.headers[e]&&null!==f.headers[e]&&""!==f.headers[e]||delete f.headers[e]});const b=a(f.headers),y=new p(n,{},!1),C="null"===y.origin?u.opts.baseURI?l(u.opts.baseURI,y.pathname):y.pathname:`${y.origin}${y.pathname}`;let g=c.parse(y.query,h.parse||u.opts.parse);if((h.params||u.opts.params)&&(g=s({},u.opts.params,h.params,g)),void 0===f.body&&"POST"===f.method)f.body="";else if("object"==typeof f.body){const e=h.preventBodyOnMethods||u.opts.preventBodyOnMethods;if(d("preventBodyOnMethods",e),Array.isArray(e)&&e.includes(f.method))g=s({},f.body,g),delete f.body;else if(b.get("Content-Type")&&"application/json"===b.get("Content-Type").split(";")[0])try{f.body=JSON.stringify(f.body)}catch(e){throw e}}const m=c.stringify(g,h.stringify||u.opts.stringify);let w,F;try{w=yield u._fetch(C+m,f,"boolean"==typeof h.raw?h.raw:u.opts.raw)}catch(e){F=e}const E=u.abortTokenMap.get(h.abortToken);if(E&&(E.count-1==0?u.abortTokenMap.delete(h.abortToken):u.abortTokenMap.set(h.abortToken,s({},E,{count:--E.count}))),F)throw F;return w});return function(){return h.apply(this,arguments)}}()}_parseJSON(e){var t=this;return n(function*(){try{"function"==typeof e.json?e.body=yield e.json():(e.body=yield e.text(),e.body=JSON.parse(e.body)),"object"==typeof e.body&&"string"==typeof e.body.message?e.err=new Error(e.body.message):Array.isArray(e.body)||"object"!=typeof e.body.error||(e.body.error.message&&(e.err=new Error(e.body.error.message)),e.body.error.stack&&(e.err.stack=e.body.error.stack),e.body.error.code&&(e.err.code=e.body.error.code),e.body.error.param&&(e.err.param=e.body.error.param))}catch(r){e.err=t.parseErr}return e})()}_fetch(e,t,r){var o=this;return n(function*(){if(d("fetch",e,t),d("raw",r),!f.includes(t.method))throw new Error(`Invalid "method" of "${t.method}", must be one of: ${f.join(", ")}`);if(!b.includes(t.mode))throw new Error(`Invalid "mode" of "${t.mode}", must be one of: ${b.join(", ")}`);if(!y.includes(t.cache))throw new Error(`Invalid "cache" of "${t.cache}", must be one of: ${y.join(", ")}`);if(!C.includes(t.credentials))throw new Error(`Invalid "credentials" of "${t.credentials}", must be one of: ${C.join(", ")}`);if(!g.includes(t.redirect))throw new Error(`Invalid "redirect" of "${t.redirect}", must be one of: ${g.join(", ")}`);if(!m.includes(t.referrer))throw new Error(`Invalid "referrer" of "${t.referrer}", must be one of: ${m.join(", ")}`);"function"==typeof o.opts.logRequest&&o.opts.logRequest(e,t);const n=yield fetch(e,t);"function"==typeof o.opts.logResponse&&o.opts.logResponse(e,t,n);const s=function(e){const t={originalResponse:e};w.readOnly.forEach(r=>Object.defineProperty(t,r,{value:e[r]})),w.writable.forEach(r=>Object.defineProperty(t,r,{get:()=>e[r],set(t){e[r]=t}}));let r=null;w.callable.forEach(o=>{Object.defineProperty(t,o,{value:(r=e[o],"function"==typeof r&&r.bind(e))})});const o={};return e.headers.forEach(e=>{o[e[0]]=e[1]}),Object.defineProperty(t,"headersObj",{value:o}),t}(n),i=s.headers.get("Content-Type");if(s.ok){if(r)return s.originalResponse;if(i&&i.includes("application/json"))try{"function"==typeof s.json?s.body=yield s.json():(s.body=yield s.text(),s.body=JSON.parse(s.body))}catch(e){if("application/json"===i)return s.err=o.parseErr,s}else s.body=yield s.text();return s}return s.err=new Error(s.statusText),i&&i.includes("application/json")?o._parseJSON(s):s})()}auth(e){if("string"==typeof e){const t=e.indexOf(":");-1!==t&&(e=[e.substr(0,t),e.substr(t+1)])}switch(Array.isArray(e)||(e=[].slice.call(arguments)),e.length){case 0:e=["",""];break;case 1:e.push("");break;case 2:break;default:throw new Error("auth option can only have two keys `[user, pass]`")}if("string"!=typeof e[0])throw new TypeError("auth option `user` must be a string");if("string"!=typeof e[1])throw new TypeError("auth option `pass` must be a string");return e[0]||e[1]?this.opts.headers.Authorization=`Basic ${t.from(e.join(":")).toString("base64")}`:delete this.opts.headers.Authorization,this}jwt(e){if(null===e||void 0===e)delete this.opts.headers.Authorization;else{if("string"!=typeof e)throw new TypeError("jwt token must be a string");this.opts.headers.Authorization=`Bearer ${e}`}return this}}}).call(this,r(/*! ./../../../../../../../../usr/lib/node_modules/expo-cli/node_modules/buffer/index.js */334).Buffer)},345:
/*!************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/frisbee/node_modules/debug/src/browser.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){(function(o){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let o=0,n=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&"%c"===e&&(n=++o)}),t.splice(n,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==o&&"env"in o&&(e=Object({NODE_ENV:"development",PUBLIC_URL:"/",APP_MANIFEST:{name:"Dashpier",slug:"dashpier",privacy:"public",sdkVersion:"34.0.0",platforms:["ios","android","web"],version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],description:"A Neat Expo App",primaryColor:"#4630EB",web:{background_color:"#ffffff",description:"A Neat Expo App",dir:"auto",display:"standalone",lang:"en",name:"Dashpier",orientation:"portrait",prefer_related_applications:!0,related_applications:[],short_name:"Dashpier",start_url:".",theme_color:"#4630EB"}}}).DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=r(/*! ./common */346)(t);const{formatters:n}=e.exports;n.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,r(/*! ./../../../../../../../../../../usr/lib/node_modules/expo-cli/node_modules/process/browser.js */173))},346:
/*!***********************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/frisbee/node_modules/debug/src/common.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){e.exports=function(e){function t(e){let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return o.colors[Math.abs(t)%o.colors.length]}function o(e){let r;function i(...e){if(!i.enabled)return;const t=i,n=Number(new Date),s=n-(r||n);t.diff=s,t.prev=r,t.curr=n,r=n,e[0]=o.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(r,n)=>{if("%%"===r)return r;a++;const s=o.formatters[n];if("function"==typeof s){const o=e[a];r=s.call(t,o),e.splice(a,1),a--}return r}),o.formatArgs.call(t,e),(t.log||o.log).apply(t,e)}return i.namespace=e,i.enabled=o.enabled(e),i.useColors=o.useColors(),i.color=t(e),i.destroy=n,i.extend=s,"function"==typeof o.init&&o.init(i),o.instances.push(i),i}function n(){const e=o.instances.indexOf(this);return-1!==e&&(o.instances.splice(e,1),!0)}function s(e,t){const r=o(this.namespace+(void 0===t?":":t)+e);return r.log=this.log,r}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return o.debug=o,o.default=o,o.coerce=function(e){return e instanceof Error?e.stack||e.message:e},o.disable=function(){const e=[...o.names.map(i),...o.skips.map(i).map(e=>"-"+e)].join(",");return o.enable(""),e},o.enable=function(e){let t;o.save(e),o.names=[],o.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length;for(t=0;t<n;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?o.skips.push(new RegExp("^"+e.substr(1)+"$")):o.names.push(new RegExp("^"+e+"$")));for(t=0;t<o.instances.length;t++){const e=o.instances[t];e.enabled=o.enabled(e.namespace)}},o.enabled=function(e){if("*"===e[e.length-1])return!0;let t,r;for(t=0,r=o.skips.length;t<r;t++)if(o.skips[t].test(e))return!1;for(t=0,r=o.names.length;t<r;t++)if(o.names[t].test(e))return!0;return!1},o.humanize=r(/*! ms */347),Object.keys(e).forEach(t=>{o[t]=e[t]}),o.instances=[],o.names=[],o.skips=[],o.formatters={},o.selectColor=t,o.enable(o.load()),o}},351:
/*!*********************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/frisbee/lib/interceptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";e.exports=class{constructor(e,t=[]){if(this.interceptors=[],!e)throw new Error("API should be passed to the Interceptor");if(0===t.length)throw new Error("no methods were added to interceptableMethods");(t=t.map(e=>e.toLowerCase())).includes("delete")&&!t.includes("del")&&t.push("del"),t.includes("del")&&!t.includes("delete")&&t.push("delete"),t.forEach(t=>{const r=e[t.toLowerCase()];e[t.toLowerCase()]=((...e)=>this.interceptedMethod(r(...e),...e))})}interceptedMethod(e,...t){const r=this.interceptors,o=r.slice().reverse();let n=Promise.resolve(t);return r.forEach(({request:e,requestError:t})=>{"function"==typeof e&&(n=n.then(t=>e(...[].concat(t)))),"function"==typeof t&&(n=n.catch(t))}),"function"==typeof e&&(n=n.then(t=>e(...[].concat(t)))),o.forEach(({response:e,responseError:t})=>{"function"==typeof e&&(n=n.then(e)),"function"==typeof t&&(n=n.catch(t))}),n}register(e){return this.interceptors.push(e),()=>this.unregister(e)}unregister(e){const t=this.interceptors.indexOf(e);t>=0&&this.interceptors.splice(t,1)}clear(){this.interceptors=[]}}}}]);