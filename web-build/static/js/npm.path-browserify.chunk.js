(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{215:
/*!*************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/path-browserify/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r,t){"use strict";(function(r){function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,r){for(var t,n="",i=0,o=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)t=e.charCodeAt(a);else{if(47===t)break;t=47}if(47===t){if(o===a-1||1===l);else if(o!==a-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var h=n.lastIndexOf("/");if(h!==n.length-1){-1===h?(n="",i=0):i=(n=n.slice(0,h)).length-1-n.lastIndexOf("/"),o=a,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,l=0;continue}r&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,l=0}else 46===t&&-1!==l?++l:l=-1}return n}var i={resolve:function(){for(var e,i="",o=!1,l=arguments.length-1;l>=-1&&!o;l--){var a;l>=0?a=arguments[l]:(void 0===e&&(e=r.cwd()),a=e),t(a),0!==a.length&&(i=a+"/"+i,o=47===a.charCodeAt(0))}return i=n(i,!o),o?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];t(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":i.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=i.resolve(e))===(r=i.resolve(r)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var o=e.length,l=o-n,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var h=r.length-a,f=l<h?l:h,c=-1,s=0;s<=f;++s){if(s===f){if(h>f){if(47===r.charCodeAt(a+s))return r.slice(a+s+1);if(0===s)return r.slice(a+s)}else l>f&&(47===e.charCodeAt(n+s)?c=s:0===s&&(c=0));break}var g=e.charCodeAt(n+s);if(g!==r.charCodeAt(a+s))break;47===g&&(c=s)}var u="";for(s=n+c+1;s<=o;++s)s!==o&&47!==e.charCodeAt(s)||(0===u.length?u+="..":u+="/..");return u.length>0?u+r.slice(a+c):(a+=c,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,o=!0,l=e.length-1;l>=1;--l)if(47===(r=e.charCodeAt(l))){if(!o){i=l;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,i=0,o=-1,l=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,h=-1;for(n=e.length-1;n>=0;--n){var f=e.charCodeAt(n);if(47===f){if(!l){i=n+1;break}}else-1===h&&(l=!1,h=n+1),a>=0&&(f===r.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=h))}return i===o?o=h:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){i=n+1;break}}else-1===o&&(l=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,o=!0,l=0,a=e.length-1;a>=0;--a){var h=e.charCodeAt(a);if(47!==h)-1===i&&(o=!1,i=a+1),46===h?-1===r?r=a:1!==l&&(l=1):-1!==r&&(l=-1);else if(!o){n=a+1;break}}return-1===r||-1===i||0===l||1===l&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var l=-1,a=0,h=-1,f=!0,c=e.length-1,s=0;c>=n;--c)if(47!==(i=e.charCodeAt(c)))-1===h&&(f=!1,h=c+1),46===i?-1===l?l=c:1!==s&&(s=1):-1!==l&&(s=-1);else if(!f){a=c+1;break}return-1===l||-1===h||0===s||1===s&&l===h-1&&l===a+1?-1!==h&&(r.base=r.name=0===a&&o?e.slice(1,h):e.slice(a,h)):(0===a&&o?(r.name=e.slice(1,l),r.base=e.slice(1,h)):(r.name=e.slice(a,l),r.base=e.slice(a,h)),r.ext=e.slice(l,h)),a>0?r.dir=e.slice(0,a-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}).call(this,t(/*! ./../../../../../../usr/lib/node_modules/expo-cli/node_modules/process/browser.js */177))}}]);