(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+IGv":
/*!********************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/expo-font/build/ExpoFontLoader.web.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,n,t){"use strict";var o=t(/*! fontfaceobserver */"Dq5N"),r=t.n(o);n.a={get name(){return"ExpoFontLoader"},loadAsync:function(e,n){if(!(document.head&&"function"==typeof document.head.appendChild))throw new Error("E_FONT_CREATION_FAILED : document element cannot support injecting fonts");var t=function(e,n){var t="@font-face {\n    font-family: "+e+";\n    src: url("+n+");\n  }",o=document.createElement("style");if(o.type="text/css",o.styleSheet)o.styleSheet.cssText=t;else{var r=document.createTextNode(t);o.appendChild(r)}return o}(e,n);return document.head.appendChild(t),new r.a(e).load()}}},gITz:
/*!******************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/expo-font/build/Font.js ***!
  \******************************************************************************/
/*! exports provided: processFontFamily, isLoaded, isLoading, loadAsync */
/*! exports used: isLoaded, loadAsync */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return h}),t.d(n,"b",function(){return x});var o=t(/*! @babel/runtime/regenerator */"jKFO"),r=t.n(o),a=t(/*! expo-asset */"bKF4"),s=t(/*! expo-constants */"9y88"),i=t(/*! @unimodules/core */"XWMs"),c=t(/*! ./ExpoFontLoader */"+IGv"),u="web"===i.a.OS,d=!u&&"expo"===s.a.appOwnership,f="standalone"===s.a.appOwnership&&"ios"===i.a.OS,p={},l={};function y(e){return(d||f)&&!s.a.systemFonts.includes(e)&&"System"!==e&&!e.includes(s.a.sessionId)}function m(e){return e&&y(e)?h(e)?"ExpoFont-"+F(e):(__DEV__&&(w(e)?console.error('You started loading the font "'+e+'", but used it before it finished loading.\n\n- You need to wait for Font.loadAsync to complete before using the font.\n\n- We recommend loading all fonts before rendering the app, and rendering only Expo.AppLoading while waiting for loading to complete.'):console.error('fontFamily "'+e+'" is not a system font and has not been loaded through Font.loadAsync.\n\n- If you intended to use a system font, make sure you typed the name correctly and that it is supported by your device operating system.\n\n- If this is a custom font, be sure to load it with Font.loadAsync.')),"System"):e}function h(e){return p.hasOwnProperty(e)}function w(e){return l.hasOwnProperty(e)}function x(e,n){var t,o,a,s;return r.a.async(function(i){for(;;)switch(i.prev=i.next){case 0:if("object"!=typeof e){i.next=6;break}return t=e,o=Object.keys(t),i.next=5,r.a.awrap(Promise.all(o.map(function(e){return x(e,t[e])})));case 5:return i.abrupt("return");case 6:if(!p[a=e]){i.next=9;break}return i.abrupt("return");case 9:if(!l[a]){i.next=11;break}return i.abrupt("return",l[a]);case 11:if(n){i.next=13;break}throw new Error('No source from which to load font "'+a+'"');case 13:return s=b(n),l[a]=r.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.awrap(g(a,s));case 3:p[a]=!0;case 4:return e.prev=4,delete l[a],e.finish(4);case 7:case"end":return e.stop()}},null,null,[[0,,4,7]]),i.next=17,r.a.awrap(l[a]);case 17:case"end":return i.stop()}})}function b(e){return e instanceof a.a?e:u||"string"!=typeof e?u||"number"==typeof e?a.a.fromModule(e):e:a.a.fromURI(e)}function g(e,n){return r.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(n.downloadAsync());case 2:if(n.downloaded){t.next=4;break}throw new Error('Failed to download asset for font "'+e+'"');case 4:return t.next=6,r.a.awrap(c.a.loadAsync(F(e),n.localUri));case 6:case"end":return t.stop()}})}function F(e){return y(e)?s.a.sessionId+"-"+e:e}if(e&&e.exports){var v=!1;Object.defineProperty(exports,"Font",{get:function(){return v||(console.warn("The syntax \"import { Font } from 'expo-font'\" is deprecated. Use \"import * as Font from 'expo-font'\" or import named exports instead. Support for the old syntax will be removed in SDK 33."),v=!0),{processFontFamily:m,isLoaded:h,isLoading:w,loadAsync:x}}})}}).call(this,t(/*! ./../../../../../../../../usr/lib/node_modules/expo-cli/node_modules/webpack/buildin/harmony-module.js */"t3K7")(e))}}]);
//# sourceMappingURL=../../51726308d2f92b35ca2e.map