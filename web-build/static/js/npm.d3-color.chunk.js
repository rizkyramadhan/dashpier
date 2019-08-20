(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{36:
/*!**********************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/d3-color/src/index.js + 5 modules ***!
  \**********************************************************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/*! exports used: color, cubehelix, hcl, hsl, lab, rgb */function(t,n,e){"use strict";var i=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t};function r(t,n){var e=Object.create(t.prototype);for(var i in n)e[i]=n[i];return e}function a(){}var s="\\s*([+-]?\\d+)\\s*",o="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",h="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",u=/^#([0-9a-f]{3})$/,l=/^#([0-9a-f]{6})$/,c=new RegExp("^rgb\\("+[s,s,s]+"\\)$"),g=new RegExp("^rgb\\("+[h,h,h]+"\\)$"),f=new RegExp("^rgba\\("+[s,s,s,o]+"\\)$"),d=new RegExp("^rgba\\("+[h,h,h,o]+"\\)$"),p=new RegExp("^hsl\\("+[o,h,h]+"\\)$"),b=new RegExp("^hsla\\("+[o,h,h,o]+"\\)$"),w={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function y(){return this.rgb().formatHex()}function m(){return this.rgb().formatRgb()}function N(t){var n;return t=(t+"").trim().toLowerCase(),(n=u.exec(t))?new q((n=parseInt(n[1],16))>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):(n=l.exec(t))?k(parseInt(n[1],16)):(n=c.exec(t))?new q(n[1],n[2],n[3],1):(n=g.exec(t))?new q(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=f.exec(t))?M(n[1],n[2],n[3],n[4]):(n=d.exec(t))?M(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=p.exec(t))?H(n[1],n[2]/100,n[3]/100,1):(n=b.exec(t))?H(n[1],n[2]/100,n[3]/100,n[4]):w.hasOwnProperty(t)?k(w[t]):"transparent"===t?new q(NaN,NaN,NaN,0):null}function k(t){return new q(t>>16&255,t>>8&255,255&t,1)}function M(t,n,e,i){return i<=0&&(t=n=e=NaN),new q(t,n,e,i)}function v(t){return t instanceof a||(t=N(t)),t?new q((t=t.rgb()).r,t.g,t.b,t.opacity):new q}function x(t,n,e,i){return 1===arguments.length?v(t):new q(t,n,e,null==i?1:i)}function q(t,n,e,i){this.r=+t,this.g=+n,this.b=+e,this.opacity=+i}function R(){return"#"+$(this.r)+$(this.g)+$(this.b)}function E(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function $(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function H(t,n,e,i){return i<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new O(t,n,e,i)}function I(t){if(t instanceof O)return new O(t.h,t.s,t.l,t.opacity);if(t instanceof a||(t=N(t)),!t)return new O;if(t instanceof O)return t;var n=(t=t.rgb()).r/255,e=t.g/255,i=t.b/255,r=Math.min(n,e,i),s=Math.max(n,e,i),o=NaN,h=s-r,u=(s+r)/2;return h?(o=n===s?(e-i)/h+6*(e<i):e===s?(i-n)/h+2:(n-e)/h+4,h/=u<.5?s+r:2-s-r,o*=60):h=u>0&&u<1?0:o,new O(o,h,u,t.opacity)}function j(t,n,e,i){return 1===arguments.length?I(t):new O(t,n,e,null==i?1:i)}function O(t,n,e,i){this.h=+t,this.s=+n,this.l=+e,this.opacity=+i}function P(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}i(a,N,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:y,formatHex:y,formatHsl:function(){return I(this).formatHsl()},formatRgb:m,toString:m}),i(q,x,r(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new q(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new q(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:R,formatHex:R,formatRgb:E,toString:E})),i(O,j,r(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new O(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new O(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*n,r=2*e-i;return new q(P(t>=240?t-240:t+120,r,i),P(t,r,i),P(t<120?t+240:t-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var S=Math.PI/180,J=180/Math.PI,z=.96422,C=1,L=.82521,A=4/29,B=6/29,D=3*B*B,F=B*B*B;function G(t){if(t instanceof Q)return new Q(t.l,t.a,t.b,t.opacity);if(t instanceof Z)return _(t);t instanceof q||(t=v(t));var n,e,i=W(t.r),r=W(t.g),a=W(t.b),s=T((.2225045*i+.7168786*r+.0606169*a)/C);return i===r&&r===a?n=e=s:(n=T((.4360747*i+.3850649*r+.1430804*a)/z),e=T((.0139322*i+.0971045*r+.7141733*a)/L)),new Q(116*s-16,500*(n-s),200*(s-e),t.opacity)}function K(t,n,e,i){return 1===arguments.length?G(t):new Q(t,n,e,null==i?1:i)}function Q(t,n,e,i){this.l=+t,this.a=+n,this.b=+e,this.opacity=+i}function T(t){return t>F?Math.pow(t,1/3):t/D+A}function U(t){return t>B?t*t*t:D*(t-A)}function V(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function W(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function X(t){if(t instanceof Z)return new Z(t.h,t.c,t.l,t.opacity);if(t instanceof Q||(t=G(t)),0===t.a&&0===t.b)return new Z(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*J;return new Z(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Y(t,n,e,i){return 1===arguments.length?X(t):new Z(t,n,e,null==i?1:i)}function Z(t,n,e,i){this.h=+t,this.c=+n,this.l=+e,this.opacity=+i}function _(t){if(isNaN(t.h))return new Q(t.l,0,0,t.opacity);var n=t.h*S;return new Q(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}i(Q,K,r(a,{brighter:function(t){return new Q(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Q(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new q(V(3.1338561*(n=z*U(n))-1.6168667*(t=C*U(t))-.4906146*(e=L*U(e))),V(-.9787684*n+1.9161415*t+.033454*e),V(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),i(Z,Y,r(a,{brighter:function(t){return new Z(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Z(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return _(this).rgb()}}));var tt=-.14861,nt=1.78277,et=-.29227,it=-.90649,rt=1.97294,at=rt*it,st=rt*nt,ot=nt*et-it*tt;function ht(t,n,e,i){return 1===arguments.length?function(t){if(t instanceof ut)return new ut(t.h,t.s,t.l,t.opacity);t instanceof q||(t=v(t));var n=t.r/255,e=t.g/255,i=t.b/255,r=(ot*i+at*n-st*e)/(ot+at-st),a=i-r,s=(rt*(e-r)-et*a)/it,o=Math.sqrt(s*s+a*a)/(rt*r*(1-r)),h=o?Math.atan2(s,a)*J-120:NaN;return new ut(h<0?h+360:h,o,r,t.opacity)}(t):new ut(t,n,e,null==i?1:i)}function ut(t,n,e,i){this.h=+t,this.s=+n,this.l=+e,this.opacity=+i}i(ut,ht,r(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new ut(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new ut(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*S,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),i=Math.cos(t),r=Math.sin(t);return new q(255*(n+e*(tt*i+nt*r)),255*(n+e*(et*i+it*r)),255*(n+e*(rt*i)),this.opacity)}})),e.d(n,"a",function(){return N}),e.d(n,"f",function(){return x}),e.d(n,"d",function(){return j}),e.d(n,"e",function(){return K}),e.d(n,"c",function(){return Y}),e.d(n,"b",function(){return ht})}}]);