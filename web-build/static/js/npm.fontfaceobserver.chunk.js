(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Dq5N:
/*!******************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/fontfaceobserver/fontfaceobserver.standalone.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){!function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function i(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function o(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function s(e,n){function i(){var e=s;o(e)&&e.a.parentNode&&n(e.g)}var s=e;t(e.b,i),t(e.c,i),o(e)}function a(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var d=null,c=null,r=null,l=null;function h(){return null===l&&(l=!!document.fonts),l}function u(e,t){return[e.style,e.weight,function(){if(null===r){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}r=""!==e.style.font}return r}()?e.stretch:"","100px",t].join(" ")}a.prototype.load=function(e,t){var o=this,a=e||"BESbswy",r=0,l=t||3e3,f=(new Date).getTime();return new Promise(function(e,t){if(h()&&!function(){if(null===c)if(h()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);c=!!e&&603>parseInt(e[1],10)}else c=!1;return c}()){var p=new Promise(function(e,t){!function n(){(new Date).getTime()-f>=l?t(Error(l+"ms timeout exceeded")):document.fonts.load(u(o,'"'+o.family+'"'),a).then(function(t){1<=t.length?e():setTimeout(n,25)},t)}()}),m=new Promise(function(e,t){r=setTimeout(function(){t(Error(l+"ms timeout exceeded"))},l)});Promise.race([m,p]).then(function(){clearTimeout(r),e(o)},t)}else!function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}(function(){function c(){var t;(t=-1!=w&&-1!=v||-1!=w&&-1!=y||-1!=v&&-1!=y)&&((t=w!=v&&w!=y&&v!=y)||(null===d&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),d=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=d&&(w==x&&v==x&&y==x||w==g&&v==g&&y==g||w==b&&v==b&&y==b)),t=!t),t&&(E.parentNode&&E.parentNode.removeChild(E),clearTimeout(r),e(o))}var h=new n(a),p=new n(a),m=new n(a),w=-1,v=-1,y=-1,x=-1,g=-1,b=-1,E=document.createElement("div");E.dir="ltr",i(h,u(o,"sans-serif")),i(p,u(o,"serif")),i(m,u(o,"monospace")),E.appendChild(h.a),E.appendChild(p.a),E.appendChild(m.a),document.body.appendChild(E),x=h.a.offsetWidth,g=p.a.offsetWidth,b=m.a.offsetWidth,function e(){if((new Date).getTime()-f>=l)E.parentNode&&E.parentNode.removeChild(E),t(Error(l+"ms timeout exceeded"));else{var n=document.hidden;!0!==n&&void 0!==n||(w=h.a.offsetWidth,v=p.a.offsetWidth,y=m.a.offsetWidth,c()),r=setTimeout(e,50)}}(),s(h,function(e){w=e,c()}),i(h,u(o,'"'+o.family+'",sans-serif')),s(p,function(e){v=e,c()}),i(p,u(o,'"'+o.family+'",serif')),s(m,function(e){y=e,c()}),i(m,u(o,'"'+o.family+'",monospace'))})})},e.exports=a}()}}]);
//# sourceMappingURL=../../d7e76388ba5349c1889e.map