(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{NpWJ:
/*!************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/ua-parser-js/src/ua-parser.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(i,s,e){var o;
/*!
 * UAParser.js v0.7.20
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
/*!
 * UAParser.js v0.7.20
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
!function(r,a){"use strict";var n="model",d="name",t="type",l="vendor",w="version",u="mobile",c="tablet",m={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2==0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},b={rgx:function(i,s){for(var e,o,r,a,n,d,t=0;t<s.length&&!n;){var l=s[t],w=s[t+1];for(e=o=0;e<l.length&&!n;)if(n=l[e++].exec(i))for(r=0;r<w.length;r++)d=n[++o],"object"==typeof(a=w[r])&&a.length>0?2==a.length?"function"==typeof a[1]?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?"function"!=typeof a[1]||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):void 0:this[a[0]]=d?a[1].call(this,d,a[2]):void 0:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):void 0):this[a]=d||void 0;t+=2}},str:function(i,s){for(var e in s)if("object"==typeof s[e]&&s[e].length>0){for(var o=0;o<s[e].length;o++)if(m.has(s[e][o],i))return"?"===e?void 0:e}else if(m.has(s[e],i))return"?"===e?void 0:e;return i}},p={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},v={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[d,w],[/(opios)[\/\s]+([\w\.]+)/i],[[d,"Opera Mini"],w],[/\s(opr)\/([\w\.]+)/i],[[d,"Opera"],w],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[d,w],[/(konqueror)\/([\w\.]+)/i],[[d,"Konqueror"],w],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[d,"IE"],w],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[d,"Edge"],w],[/(yabrowser)\/([\w\.]+)/i],[[d,"Yandex"],w],[/(puffin)\/([\w\.]+)/i],[[d,"Puffin"],w],[/(focus)\/([\w\.]+)/i],[[d,"Firefox Focus"],w],[/(opt)\/([\w\.]+)/i],[[d,"Opera Touch"],w],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[d,"UCBrowser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],w],[/(windowswechat qbcore)\/([\w\.]+)/i],[[d,"WeChat(Win) Desktop"],w],[/(micromessenger)\/([\w\.]+)/i],[[d,"WeChat"],w],[/(brave)\/([\w\.]+)/i],[[d,"Brave"],w],[/(qqbrowserlite)\/([\w\.]+)/i],[d,w],[/(QQ)\/([\d\.]+)/i],[d,w],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[d,w],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[d,w],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[d,w],[/(MetaSr)[\/\s]?([\w\.]+)/i],[d],[/(LBBROWSER)/i],[d],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[w,[d,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[w,[d,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[d,w],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[w,[d,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[d,/(.+)/,"$1 WebView"],w],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[d,/(.+(?:g|us))(.+)/,"$1 $2"],w],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[w,[d,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[d,"Sailfish Browser"],w],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[d,w],[/(dolfin)\/([\w\.]+)/i],[[d,"Dolphin"],w],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[d,"Chrome"],w],[/(coast)\/([\w\.]+)/i],[[d,"Opera Coast"],w],[/fxios\/([\w\.-]+)/i],[w,[d,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[w,[d,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[w,d],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[d,"GSA"],w],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[d,[w,b.str,p.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[d,w],[/(navigator|netscape)\/([\w\.-]+)/i],[[d,"Netscape"],w],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[d,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",m.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",m.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",m.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[n,l,[t,c]],[/applecoremedia\/[\w\.]+ \((ipad)/],[n,[l,"Apple"],[t,c]],[/(apple\s{0,1}tv)/i],[[n,"Apple TV"],[l,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[l,n,[t,c]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[n,[l,"Amazon"],[t,c]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[n,b.str,p.device.amazon.model],[l,"Amazon"],[t,u]],[/android.+aft([bms])\sbuild/i],[n,[l,"Amazon"],[t,"smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[n,l,[t,u]],[/\((ip[honed|\s\w*]+);/i],[n,[l,"Apple"],[t,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[l,n,[t,u]],[/\(bb10;\s(\w+)/i],[n,[l,"BlackBerry"],[t,u]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[n,[l,"Asus"],[t,c]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[l,"Sony"],[n,"Xperia Tablet"],[t,c]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[n,[l,"Sony"],[t,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[l,n,[t,"console"]],[/android.+;\s(shield)\sbuild/i],[n,[l,"Nvidia"],[t,"console"]],[/(playstation\s[34portablevi]+)/i],[n,[l,"Sony"],[t,"console"]],[/(sprint\s(\w+))/i],[[l,b.str,p.device.sprint.vendor],[n,b.str,p.device.sprint.model],[t,u]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[l,[n,/_/g," "],[t,u]],[/(nexus\s9)/i],[n,[l,"HTC"],[t,c]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[n,[l,"Huawei"],[t,u]],[/(microsoft);\s(lumia[\s\w]+)/i],[l,n,[t,u]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[n,[l,"Microsoft"],[t,"console"]],[/(kin\.[onetw]{3})/i],[[n,/\./g," "],[l,"Microsoft"],[t,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[n,[l,"Motorola"],[t,u]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[n,[l,"Motorola"],[t,c]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[l,m.trim],[n,m.trim],[t,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[n,/^/,"SmartTV"],[l,"Samsung"],[t,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[n,[l,"Sharp"],[t,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[l,"Samsung"],n,[t,c]],[/smart-tv.+(samsung)/i],[l,[t,"smarttv"],n],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[l,"Samsung"],n,[t,u]],[/sie-(\w*)/i],[n,[l,"Siemens"],[t,u]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[l,"Nokia"],n,[t,u]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[n,[l,"Acer"],[t,c]],[/android.+([vl]k\-?\d{3})\s+build/i],[n,[l,"LG"],[t,c]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[l,"LG"],n,[t,c]],[/(lg) netcast\.tv/i],[l,n,[t,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[n,[l,"LG"],[t,u]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[l,n,[t,c]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[n,[l,"Lenovo"],[t,c]],[/(lenovo)[_\s-]?([\w-]+)/i],[l,n,[t,u]],[/linux;.+((jolla));/i],[l,n,[t,u]],[/((pebble))app\/[\d\.]+\s/i],[l,n,[t,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[l,n,[t,u]],[/crkey/i],[[n,"Chromecast"],[l,"Google"]],[/android.+;\s(glass)\s\d/i],[n,[l,"Google"],[t,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[n,[l,"Google"],[t,c]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[n,[l,"Google"],[t,u]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[n,/_/g," "],[l,"Xiaomi"],[t,u]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[n,/_/g," "],[l,"Xiaomi"],[t,c]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[n,[l,"Meizu"],[t,u]],[/(mz)-([\w-]{2,})/i],[[l,"Meizu"],n,[t,u]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[n,[l,"OnePlus"],[t,u]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[n,[l,"RCA"],[t,c]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[n,[l,"Dell"],[t,c]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[n,[l,"Verizon"],[t,c]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[l,"Barnes & Noble"],n,[t,c]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[n,[l,"NuVision"],[t,c]],[/android.+;\s(k88)\sbuild/i],[n,[l,"ZTE"],[t,c]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[n,[l,"Swiss"],[t,u]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[n,[l,"Swiss"],[t,c]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[n,[l,"Zeki"],[t,c]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[l,"Dragon Touch"],n,[t,c]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[n,[l,"Insignia"],[t,c]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[n,[l,"NextBook"],[t,c]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[l,"Voice"],n,[t,u]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[l,"LvTel"],n,[t,u]],[/android.+;\s(PH-1)\s/i],[n,[l,"Essential"],[t,u]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[n,[l,"Envizen"],[t,c]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[l,n,[t,c]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[n,[l,"MachSpeed"],[t,c]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[l,n,[t,c]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[n,[l,"Rotor"],[t,c]],[/android.+(KS(.+))\s+build/i],[n,[l,"Amazon"],[t,c]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[l,n,[t,c]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[t,m.lowerize],l,n],[/[\s\/\(](smart-?tv)[;\)]/i],[[t,"smarttv"]],[/(android[\w\.\s\-]{0,9});.+build/i],[n,[l,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[w,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)/i],[[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[d,w],[/rv\:([\w\.]{1,9}).+(gecko)/i],[w,d]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[d,w],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[d,[w,b.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[d,"Windows"],[w,b.str,p.os.windows.version]],[/\((bb)(10);/i],[[d,"BlackBerry"],w],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[d,w],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[d,"Symbian"],w],[/\((series40);/i],[d],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[d,"Firefox OS"],w],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[d,w],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[d,"Chromium OS"],w],[/(sunos)\s?([\w\.\d]*)/i],[[d,"Solaris"],w],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[d,w],[/(haiku)\s(\w+)/i],[d,w],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[w,/_/g,"."],[d,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[d,"Mac OS"],[w,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[d,w]]},h=function(i,s){if("object"==typeof i&&(s=i,i=void 0),!(this instanceof h))return new h(i,s).getResult();var e=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?m.extend(v,s):v;return this.getBrowser=function(){var i={name:void 0,version:void 0};return b.rgx.call(i,e,o.browser),i.major=m.major(i.version),i},this.getCPU=function(){var i={architecture:void 0};return b.rgx.call(i,e,o.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0};return b.rgx.call(i,e,o.device),i},this.getEngine=function(){var i={name:void 0,version:void 0};return b.rgx.call(i,e,o.engine),i},this.getOS=function(){var i={name:void 0,version:void 0};return b.rgx.call(i,e,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(i){return e=i,this},this};h.VERSION="0.7.20",h.BROWSER={NAME:d,MAJOR:"major",VERSION:w},h.CPU={ARCHITECTURE:"architecture"},h.DEVICE={MODEL:n,VENDOR:l,TYPE:t,CONSOLE:"console",MOBILE:u,SMARTTV:"smarttv",TABLET:c,WEARABLE:"wearable",EMBEDDED:"embedded"},h.ENGINE={NAME:d,VERSION:w},h.OS={NAME:d,VERSION:w},void 0!==s?(void 0!==i&&i.exports&&(s=i.exports=h),s.UAParser=h):void 0===(o=function(){return h}.call(s,e,s,i))||(i.exports=o);var g=r&&(r.jQuery||r.Zepto);if(void 0!==g&&!g.ua){var f=new h;g.ua=f.getResult(),g.ua.get=function(){return f.getUA()},g.ua.set=function(i){f.setUA(i);var s=f.getResult();for(var e in s)g.ua[e]=s[e]}}}("object"==typeof window?window:this)}}]);
//# sourceMappingURL=../../6a9181f5c165afb13ebb.map