(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{633:
/*!********************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/victory-axis/es/victory-axis.js + 1 modules ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/lodash/assign.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/lodash/defaults.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/lodash/isFunction.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-container/victory-container.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-label/victory-label.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-primitives/line-segment.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-theme/victory-theme.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-util/add-events.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-util/axis.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-util/common-props.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-util/helpers.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-util/prop-types.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-util/scale.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-util/textsize.js */function(e,t,n){"use strict";var r=n(5),a=n.n(r),i=n(0),o=n.n(i),l=n(1),c=n.n(l),s=n(378),u=n(620),p=n(22),f=n(220),d=n(19),m=n(634),b=n(623),g=n(628),y=n(630),x=n(624),h=n(21),v=n.n(h),k=n(17),O=n.n(k),w=n(87);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C={top:-1,left:-1,right:1,bottom:1},L=function(e,t,n){return e&&Object.keys(e).some(function(t){return v()(e[t])})?Object.keys(e).reduce(function(r,a){return r[a]=function(e,t,n){return v()(e)?e(t,n):e}(e[a],t,n),r},{}):e},P=function(e,t){var n=e.style||{};t=t||{};return{parent:O()(n.parent,t.parent,{height:"100%",width:"100%"}),axis:O()({},n.axis,t.axis),axisLabel:O()({},n.axisLabel,t.axisLabel),grid:O()({},n.grid,t.grid),ticks:O()({},n.ticks,t.ticks),tickLabels:O()({},n.tickLabels,t.tickLabels)}},E=function(e,t,n){return"axis"!==n&&(e.theme[n]=function(e,t){var n=e.theme.axis||{};return O()({},e.theme[t],n)}(e,n)),p.a.modifyProps(e,t,n)},S=function(e,t){var n=function(e,t){var n=t.style,r=t.padding,a=t.isVertical,i=t.orientation,o=t.labelPadding,l=t.stringTicks,c=t.ticks,s="right"===i?r.right:r.left,u="top"===i?r.top:r.bottom,p=n.axisLabel.fontSize||14,f=null!==e.offsetX&&void 0!==e.offsetX?e.offsetX:s,d=null!==e.offsetY&&void 0!==e.offsetY?e.offsetY:u,m=c.map(function(t){var r=l?e.tickValues[t-1]:t;return L(n.ticks,r).size||0}),b=p+2*Math.max.apply(Math,j(m))+o,g=1.2*p;return{x:null!==f&&void 0!==f?f:a?b:g,y:null!==d&&void 0!==d?d:a?g:b}}(e,t);return{globalTransform:function(e,t,n){var r=t.orientation,a=t.axis,i=s.a.getAxisValue(e,a);return{top:{x:0,y:void 0!==i?i:n.y},bottom:{x:0,y:void 0!==i?i:e.height-n.y},left:{x:void 0!==i?i:n.x,y:0},right:{x:void 0!==i?i:e.width-n.x,y:0}}[r]}(e,t,n),gridOffset:function(e,t,n){var r=t.padding,a=t.orientation,i="right"===a?r.right:r.left,o="top"===a?r.top:r.bottom;return{x:e.crossAxis?n.x-i:0,y:e.crossAxis?n.y-o:0}}(e,t,n),gridEdge:function(e,t){var n=t.orientation,r=t.padding,a=t.isVertical,i=-C[n];return{x:a?i*(e.width-(r.left+r.right)):0,y:a?0:i*(e.height-(r.top+r.bottom))}}(e,t)}},T=function(e){var t=function(e){var t=e.theme,n=e.dependentAxis,r=t&&t.axis&&t.axis.style,a=n?"dependentAxis":"independentAxis",i=t&&t[a]&&t[a].style;return r&&i?["axis","axisLabel","grid","parent","tickLabels","ticks"].reduce(function(e,t){return e[t]=O()({},i[t],r[t]),e},{}):i||r}(e),n=P(e,t),r=p.a.getPadding(e),a=s.a.isVertical(e),i=function(e,t){var n=t.axisLabel||{};if(void 0!==n.padding&&null!==n.padding)return n.padding;var r=s.a.isVertical(e),a=n.fontSize||14;return e.label?a*(r?2.3:1.6):0}(e,n),o=s.a.stringTicks(e)?e.tickValues:void 0,l=s.a.getAxis(e),c=function(e){if(e.orientation)return e.orientation;var t={dependent:e.horizontal?"bottom":"left",independent:e.horizontal?"left":"bottom"};return e.dependentAxis?t.dependent:t.independent}(e),u=function(e){var t=s.a.getAxis(e),n=function(e,t){var n=e.orientation,r=e.horizontal;return n?{top:"x",bottom:"x",left:"y",right:"y"}[n]:r?"x"===t?"y":"x":t}(e,t),r=w.a.getBaseScale(e,t),a=e.domain&&e.domain[t]||s.a.getDomain(e)||r.domain();return r.range(p.a.getRange(e,n)),r.domain(a),r}(e),f=s.a.getDomain(e),d=s.a.getTicks(e,u,e.crossAxis),m=s.a.getTickFormat(e,u);return{axis:l,style:n,padding:r,orientation:c,isVertical:a,labelPadding:i,stringTicks:o,anchors:function(e,t){var n={top:"end",left:"end",right:"start",bottom:"start"}[e];return{textAnchor:t?n:"middle",verticalAnchor:t?"middle":n}}(c,a),scale:u,ticks:d,tickFormat:m,domain:f}},V=function(e,t){var n=function(e){return e.dependentAxis?e.theme&&e.theme.dependentAxis?"dependentAxis":"axis":e.theme&&e.theme.independentAxis?"independentAxis":"axis"}(e);e=E(e,t,n);var r=T(e),i=r.axis,o=r.style,l=r.orientation,c=r.isVertical,s=r.scale,u=r.ticks,f=r.tickFormat,d=r.anchors,m=r.domain,b=r.stringTicks,g=r.name,y="x"===i?"y":"x",x=e,h=x.width,v=x.height,k=x.standalone,O=x.theme,w=x.polar,j=x.padding,P=x.horizontal,V=S(e,r),z=V.globalTransform,_=V.gridOffset,F=V.gridEdge,D={scale:A({},i,s),polar:w,horizontal:P},M=function(e,t,n){var r=t.style,a=t.padding,i=t.isVertical,o=e.width,l=e.height;return{type:"axis",style:r.axis,x1:i?n.x:a.left+n.x,x2:i?n.x:o-a.right+n.x,y1:i?a.top+n.y:n.y,y2:i?l-a.bottom+n.y:n.y}}(e,r,z),X=function(e,t,n){var r=t.style,a=t.orientation,i=t.padding,o=t.labelPadding,l=t.isVertical,c=C[a],s=i.left+i.right,u=i.top+i.bottom,p=c<0?"end":"start",f=r.axisLabel,d=l?-90:0;return{x:l?n.x+c*o:(e.width-s)/2+i.left+n.x,y:l?(e.height-u)/2+i.top+n.y:c*o+n.y,verticalAnchor:f.verticalAnchor||p,textAnchor:f.textAnchor||"middle",angle:void 0===f.angle?d:f.angle,style:f,text:e.label}}(e,r,z),Y={parent:a()({style:o.parent,ticks:u,standalone:k,theme:O,width:h,height:v,padding:j,domain:m,name:g},D)},R={dimension:y,range:A({},y,p.a.getRange(e,y)),scale:e.scale&&e.scale[y]?A({},y,e.scale[y]):void 0};return u.reduce(function(e,t,n){var r=b?b[n]:t,p=function(e,t,n){return{tickStyle:L(e.ticks,t,n),labelStyle:L(e.tickLabels,t,n),gridStyle:L(e.grid,t,n)}}(o,r,n),m={position:function(e,t,n){var r=e.tickStyle,a=e.labelStyle,i=r.size||0,o=i+(r.padding||0)+(a.padding||0),l=C[t];return{x:n?l*o:0,x2:n?l*i:0,y:n?0:l*o,y2:n?0:l*i}}(p,l,c),transform:function(e,t,n){return{x:n?t.x:e+t.x,y:n?e+t.y:t.y}}(s(t),z,c)},g={edge:F,transform:{x:c?-_.x+z.x:s(t)+z.x,y:c?s(t)+z.y:_.y+z.y}};return e[n]={axis:a()({dimension:i},D,M),axisLabel:a()({},D,X),ticks:a()({},D,function(e,t,n){var r=e.position,a=e.transform;return{x1:a.x,y1:a.y,x2:a.x+r.x2,y2:a.y+r.y2,style:t,datum:n}}(m,p.tickStyle,t)),tickLabels:a()({},D,function(e,t,n,r,a){var i=e.position,o=e.transform;return{style:t,x:o.x+i.x,y:o.y+i.y,verticalAnchor:n.verticalAnchor,textAnchor:n.textAnchor,angle:t.angle,text:a,datum:r}}(m,p.labelStyle,d,t,f(t,n,u))),grid:a()({},D,R,function(e,t,n){var r=e.edge,a=e.transform;return{type:"grid",x1:a.x,y1:a.y,x2:r.x+a.x,y2:r.y+a.y,style:t,datum:n}}(g,p.gridStyle,t))},e},Y)};function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var M={width:450,height:300,padding:50},X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.a.Component),function(e,t,n){t&&F(e.prototype,t),n&&F(e,n)}(t,[{key:"renderLine",value:function(e){var t=e.axisComponent,n=this.getComponentProps(t,"axis",0);return c.a.cloneElement(t,n)}},{key:"renderLabel",value:function(e){var t=e.axisLabelComponent;if(!e.label)return null;var n=this.getComponentProps(t,"axisLabel",0);return c.a.cloneElement(t,n)}},{key:"renderGridAndTicks",value:function(e){var t=this,n=e.tickComponent,r=e.tickLabelComponent,a=e.gridComponent,i=e.name;return this.dataKeys.map(function(o,l){var s=t.getComponentProps(n,"ticks",l),u=c.a.cloneElement(n,s),p=t.getComponentProps(a,"grid",l),f=c.a.cloneElement(a,p),d=t.getComponentProps(r,"tickLabels",l),m=c.a.cloneElement(r,d);return c.a.cloneElement(e.groupComponent,{key:"".concat(i,"-tick-group-").concat(o)},f,u,m)})}},{key:"fixLabelOverlap",value:function(e,t){var n=s.a.isVertical(t),r=n?t.height:t.width,i=function(e){return e.type&&"label"===e.type.role},o=e.map(function(e){return e.props.children}).reduce(function(e,t){return e.concat(t)},[]).filter(i).map(function(e){return e.props}).reduce(function(e,t){var r=function(e){return"object"==typeof e?a()({},{top:0,right:0,bottom:0,left:0},e):{top:e,right:e,bottom:e,left:e}}(t.style.padding),i=u.a.approximateTextSize(t.text,{angle:t.angle,fontSize:t.style.fontSize,letterSpacing:t.style.letterSpacing,fontFamily:t.style.fontFamily});return e+(n?i.height+r.top+r.bottom:i.width+r.right+r.left)},0),l=Math.floor(r*e.length/o),c=Math.ceil(e.length/l)||1,p=function(e){return e.props.children.filter(i).reduce(function(e,t){return(n?t.props.y:t.props.x)||0},0)};return e.sort(function(e,t){return n?p(t)-p(e):p(e)-p(t)}).filter(function(e,t){return t%c==0})}},{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,r=p.a.modifyProps(this.props,M,n);if(this.shouldAnimate())return this.animateComponent(r,e);var a=this.renderGridAndTicks(r),i=r.fixLabelOverlap?this.fixLabelOverlap(a,r):a,o=[this.renderLine(r),this.renderLabel(r)].concat(_(i));return r.standalone?this.renderContainer(r.containerComponent,o):c.a.cloneElement(r.groupComponent,{},o)}}]),t}();Object.defineProperty(X,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["style","domain","range","tickCount","tickValues","offsetX","offsetY","padding","width","height"]}),Object.defineProperty(X,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryAxis"}),Object.defineProperty(X,"role",{configurable:!0,enumerable:!0,writable:!0,value:"axis"}),Object.defineProperty(X,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:{onExit:{duration:500},onEnter:{duration:500}}}),Object.defineProperty(X,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){z(e,t,n[t])})}return e}({},f.a.baseProps,{axisComponent:o.a.element,axisLabelComponent:o.a.element,axisValue:o.a.oneOfType([o.a.number,o.a.string,o.a.object]),categories:o.a.oneOfType([o.a.arrayOf(o.a.string),o.a.shape({x:o.a.arrayOf(o.a.string),y:o.a.arrayOf(o.a.string)})]),crossAxis:o.a.bool,dependentAxis:o.a.bool,events:o.a.arrayOf(o.a.shape({target:o.a.oneOf(["axis","axisLabel","grid","ticks","tickLabels"]),eventKey:o.a.oneOfType([o.a.array,d.a.allOfType([d.a.integer,d.a.nonNegative]),o.a.string]),eventHandlers:o.a.object})),fixLabelOverlap:o.a.bool,gridComponent:o.a.element,groupComponent:o.a.element,invertAxis:o.a.bool,label:o.a.any,offsetX:o.a.number,offsetY:o.a.number,orientation:o.a.oneOf(["top","bottom","left","right"]),origin:o.a.shape({x:o.a.number,y:o.a.number}),stringMap:o.a.object,style:o.a.shape({parent:o.a.object,axis:o.a.object,axisLabel:o.a.object,grid:o.a.object,ticks:o.a.object,tickLabels:o.a.object}),tickComponent:o.a.element,tickCount:d.a.allOfType([d.a.integer,d.a.greaterThanZero]),tickFormat:o.a.oneOfType([o.a.func,d.a.homogeneousArray]),tickLabelComponent:o.a.element,tickValues:d.a.homogeneousArray})}),Object.defineProperty(X,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{axisComponent:c.a.createElement(m.a,{type:"axis"}),axisLabelComponent:c.a.createElement(b.a,null),tickLabelComponent:c.a.createElement(b.a,null),tickComponent:c.a.createElement(m.a,{type:"tick"}),gridComponent:c.a.createElement(m.a,{type:"grid"}),standalone:!0,theme:g.a.grayscale,containerComponent:c.a.createElement(y.a,null),groupComponent:c.a.createElement("g",{role:"presentation"}),fixLabelOverlap:!1}}),Object.defineProperty(X,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:s.a.getDomain}),Object.defineProperty(X,"getAxis",{configurable:!0,enumerable:!0,writable:!0,value:s.a.getAxis}),Object.defineProperty(X,"getStyles",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return P(e,M.style)}}),Object.defineProperty(X,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return V(e,M)}}),Object.defineProperty(X,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["axisComponent","axisLabelComponent","groupComponent","containerComponent","tickComponent","tickLabelComponent","gridComponent"]});t.a=Object(x.a)(X,{components:[{name:"axis",index:0},{name:"axisLabel",index:0},{name:"grid"},{name:"parent",index:"parent"},{name:"ticks"},{name:"tickLabels"}]})}}]);