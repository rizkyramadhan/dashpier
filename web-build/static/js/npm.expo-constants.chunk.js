(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{49:
/*!**********************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/expo-constants/build/Constants.js + 1 modules ***!
  \**********************************************************************************************/
/*! exports provided: AppOwnership, UserInterfaceIdiom, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/regenerator/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/ua-parser-js/src/ua-parser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/uuid/v4.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";var r=n(23),o=n.n(r),a=n(18),i=n.n(a),s=n(15),p=n.n(s),l=n(279),u=n.n(l),c=n(280),g=n.n(c),f=n(/*! expo/package.json */541),d=new u.a,m="EXPO_CONSTANTS_INSTALLATION_ID",b=g()(),v={get name(){return"ExponentConstants"},get appOwnership(){return"expo"},get installationId(){var e;try{null!=(e=localStorage.getItem(m))&&"string"==typeof e||(e=g()(),localStorage.setItem(m,e))}catch(t){e=b}finally{return e}},get sessionId(){return b},get platform(){return{web:u()(navigator.userAgent)}},get isHeadless(){return!1},get isDevice(){return!0},get isDetached(){return!1},get expoVersion(){return f.version},get linkingUri(){return location.origin+location.pathname},get expoRuntimeVersion(){return f.version},get deviceName(){var e=d.getResult(),t=e.browser,n=e.engine,r=e.os;return t.name||n.name||r.name||void 0},get nativeAppVersion(){return null},get nativeBuildVersion(){return null},get systemFonts(){return[]},get statusBarHeight(){return 0},get deviceYearClass(){return null},get manifest(){return{name:"Dashpier",slug:"dashpier",privacy:"public",sdkVersion:"34.0.0",platforms:["ios","android","web"],version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],description:"A Neat Expo App",primaryColor:"#4630EB",web:{background_color:"#ffffff",description:"A Neat Expo App",dir:"auto",display:"standalone",lang:"en",name:"Dashpier",orientation:"portrait",prefer_related_applications:!0,related_applications:[],short_name:"Dashpier",start_url:".",theme_color:"#4630EB"}}||{}},get experienceUrl(){return location.origin+location.pathname},get debugMode(){return!0},getWebViewUserAgentAsync:function(){return p.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",navigator.userAgent);case 1:case"end":return e.stop()}})}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}v||console.warn("No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?");var h=null;v&&v.manifest&&"string"==typeof(h=v.manifest)&&(h=JSON.parse(h));var w=v||{},O=(w.name,i()(w,["name"]));t.a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},O,{manifest:h,deviceId:O.installationId,linkingUrl:O.linkingUri})}}]);