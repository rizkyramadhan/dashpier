(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{AP2w:
/*!*******************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/mobx-react-lite/dist/index.module.js ***!
  \*******************************************************************************************/
/*! exports provided: Observer, isUsingStaticRendering, observer, useAsObservableSource, useComputed, useDisposable, useForceUpdate, useLocalStore, useObservable, useObserver, useStaticRendering */
/*! exports used: observer, useObservable */function(r,e,n){"use strict";n.d(e,"a",function(){return v}),n.d(e,"b",function(){return u});var t=n(/*! mobx */"7G/f"),o=n(/*! react */"pEjj");if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!t.f)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");function u(r){var e=Object(o.useRef)(null);return e.current||(e.current=Object(t.d)(r)),e.current}var c=!1;function i(){return c}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var a=function(){return(a=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)};function f(r,e){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var t,o,u=n.call(r),c=[];try{for(;(void 0===e||e-- >0)&&!(t=u.next()).done;)c.push(t.value)}catch(r){o={error:r}}finally{try{t&&!t.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return c}function s(r){return r.current?Object(t.c)(r.current):"<unknown>"}var l=[];function p(){var r=f(Object(o.useState)(0),2)[1];return Object(o.useCallback)(function(){r(function(r){return r+1})},[])}var d={};function b(r,e,n){if(void 0===e&&(e="observed"),void 0===n&&(n=d),i())return r();var u=(n.useForceUpdate||p)(),c=Object(o.useRef)(null);c.current||(c.current=new t.a("observer("+e+")",function(){u()}));var a,f,b=function(){c.current&&!c.current.isDisposed&&c.current.dispose()};if(Object(o.useDebugValue)(c,s),function(r){Object(o.useEffect)(function(){return r},l)}(function(){b()}),c.current.track(function(){try{a=r()}catch(r){f=r}}),f)throw b(),f;return a}function v(r,e){if(i())return r;var n,t=a({forwardRef:!1},e),u=r.displayName||r.name,c=function(e,n){return b(function(){return r(e,n)},u)};return c.displayName=u,n=t.forwardRef?Object(o.memo)(Object(o.forwardRef)(c)):Object(o.memo)(c),function(r,e){Object.keys(r).forEach(function(n){r.hasOwnProperty(n)&&!y[n]&&Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}(r,n),n.displayName=u,n}var y={$$typeof:!0,render:!0,compare:!0,type:!0};function w(r){var e=r.children,n=r.render,t=e||n;return"function"!=typeof t?null:b(t)}function O(r,e,n,t,o){var u="children"===e?"render":"children",c="function"==typeof r[e],i="function"==typeof r[u];return c&&i?new Error("MobX Observer: Do not use children and render in the same time in`"+n):c||i?null:new Error("Invalid prop `"+o+"` of type `"+typeof r[e]+"` supplied to `"+n+"`, expected `function`.")}w.propTypes={children:O,render:O},w.displayName="Observer"}}]);
//# sourceMappingURL=../../f85cb3329202e04cbe1d.map