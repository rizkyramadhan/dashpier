(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{149:
/*!**************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-timer-mixin/TimerMixin.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(i,t,n){"use strict";(function(t){var n="undefined"==typeof window?t:window,e=function(i,t,n){return function(e,a){var r=i(function(){t.call(this,r),e.apply(this,arguments)}.bind(this),a);return this[n]?this[n].push(r):this[n]=[r],r}},a=function(i,t){return function(n){if(this[t]){var e=this[t].indexOf(n);-1!==e&&this[t].splice(e,1)}i(n)}},r="TimerMixin_timeouts",s=a(n.clearTimeout,r),c=e(n.setTimeout,s,r),o="TimerMixin_intervals",l=a(n.clearInterval,o),m=e(n.setInterval,function(){},o),u="TimerMixin_immediates",h=a(n.clearImmediate,u),f=e(n.setImmediate,h,u),d="TimerMixin_rafs",p=a(n.cancelAnimationFrame,d),w={componentWillUnmount:function(){this[r]&&this[r].forEach(function(i){n.clearTimeout(i)}),this[r]=null,this[o]&&this[o].forEach(function(i){n.clearInterval(i)}),this[o]=null,this[u]&&this[u].forEach(function(i){n.clearImmediate(i)}),this[u]=null,this[d]&&this[d].forEach(function(i){n.cancelAnimationFrame(i)}),this[d]=null},setTimeout:c,clearTimeout:s,setInterval:m,clearInterval:l,setImmediate:f,clearImmediate:h,requestAnimationFrame:e(n.requestAnimationFrame,p,d),cancelAnimationFrame:p};i.exports=w}).call(this,n(/*! ./../../../../../../../usr/lib/node_modules/expo-cli/node_modules/webpack/buildin/global.js */51))}}]);