(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{360:
/*!*********************************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/@callstack/react-theme-provider/dist/themeProvider.es.js ***!
  \*********************************************************************************************************/
/*! exports provided: ThemeProvider, withTheme, createTheming */
/*! exports used: createTheming */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return Y});var n=r(/*! react */1),o=r.n(n);function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t){return e(t={exports:{}},t.exports),t.exports}function u(e){return function(){return e}}var c=function(){};c.thatReturns=u,c.thatReturnsFalse=u(!1),c.thatReturnsTrue=u(!0),c.thatReturnsNull=u(null),c.thatReturnsThis=function(){return this},c.thatReturnsArgument=function(e){return e};var f=c,s=function(e){};s=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")};var p=function(e,t,r,n,o,a,i,u){if(s(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,o,a,i,u],p=0;(c=new Error(t.replace(/%s/g,function(){return f[p++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}},l=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];(function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0,a="Warning: "+e.replace(/%s/g,function(){return r[o++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}}).apply(void 0,[t].concat(n))}},y=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in r=Object(arguments[a]))d.call(r,i)&&(o[i]=r[i]);if(y){n=y(r);for(var u=0;u<n.length;u++)v.call(r,n[u])&&(o[n[u]]=r[n[u]])}}return o},b="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m=p,g=l,O=b,w={};var j=function(e,t,r,n,o){for(var a in e)if(e.hasOwnProperty(a)){var i;try{m("function"==typeof e[a],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",n||"React class",r,a,typeof e[a]),i=e[a](t,a,n,r,null,O)}catch(e){i=e}if(g(!i||i instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,a,typeof i),i instanceof Error&&!(i.message in w)){w[i.message]=!0;var u=o?o():"";g(!1,"Failed %s type: %s%s",r,i.message,null!=u?u:"")}}},_=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,n="@@iterator";var o="<<anonymous>>",a={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:c(f.thatReturnsNull),arrayOf:function(e){return c(function(t,r,n,o,a){if("function"!=typeof e)return new u("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var i=t[r];if(!Array.isArray(i)){var c=d(i);return new u("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an array.")}for(var f=0;f<i.length;f++){var s=e(i,f,n,o,a+"["+f+"]",b);if(s instanceof Error)return s}return null})},element:function(){return c(function(t,r,n,o,a){var i=t[r];if(!e(i)){var c=d(i);return new u("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return c(function(t,r,n,a,i){if(!(t[r]instanceof e)){var c=e.name||o,f=function(e){if(!e.constructor||!e.constructor.name)return o;return e.constructor.name}(t[r]);return new u("Invalid "+a+" `"+i+"` of type `"+f+"` supplied to `"+n+"`, expected instance of `"+c+"`.")}return null})},node:function(){return c(function(e,t,r,n,o){if(!y(e[t]))return new u("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return c(function(t,r,n,o,a){if("function"!=typeof e)return new u("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var i=t[r],c=d(i);if("object"!==c)return new u("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var f in i)if(i.hasOwnProperty(f)){var s=e(i,f,n,o,a+"."+f,b);if(s instanceof Error)return s}return null})},oneOf:function(e){if(!Array.isArray(e))return l(!1,"Invalid argument supplied to oneOf, expected an instance of array."),f.thatReturnsNull;return c(function(t,r,n,o,a){for(var c=t[r],f=0;f<e.length;f++)if(i(c,e[f]))return null;var s=JSON.stringify(e);return new u("Invalid "+o+" `"+a+"` of value `"+c+"` supplied to `"+n+"`, expected one of "+s+".")})},oneOfType:function(e){if(!Array.isArray(e))return l(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),f.thatReturnsNull;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return l(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",m(r),t),f.thatReturnsNull}return c(function(t,r,n,o,a){for(var i=0;i<e.length;i++){var c=e[i];if(null==c(t,r,n,o,a,b))return null}return new u("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")})},shape:function(e){return c(function(t,r,n,o,a){var i=t[r],c=d(i);if("object"!==c)return new u("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var f in e){var s=e[f];if(s){var p=s(i,f,n,o,a+"."+f,b);if(p)return p}}return null})},exact:function(e){return c(function(t,r,n,o,a){var i=t[r],c=d(i);if("object"!==c)return new u("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var f=h({},t[r],e);for(var s in f){var p=e[s];if(!p)return new u("Invalid "+o+" `"+a+"` key `"+s+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var l=p(i,s,n,o,a+"."+s,b);if(l)return l}return null})}};function i(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function u(e){this.message=e,this.stack=""}function c(e){var r={},n=0;function a(a,i,c,f,s,y,d){if(f=f||o,y=y||c,d!==b)if(t)p(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("undefined"!=typeof console){var v=f+":"+c;!r[v]&&n<3&&(l(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,f),r[v]=!0,n++)}return null==i[c]?a?null===i[c]?new u("The "+s+" `"+y+"` is marked as required in `"+f+"`, but its value is `null`."):new u("The "+s+" `"+y+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(i,c,f,s,y)}var i=a.bind(null,!1);return i.isRequired=a.bind(null,!0),i}function s(e){return c(function(t,r,n,o,a,i){var c=t[r];return d(c)!==e?new u("Invalid "+o+" `"+a+"` of type `"+v(c)+"` supplied to `"+n+"`, expected `"+e+"`."):null})}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var o=function(e){var t=e&&(r&&e[r]||e[n]);if("function"==typeof t)return t}(t);if(!o)return!1;var a,i=o.call(t);if(o!==t.entries){for(;!(a=i.next()).done;)if(!y(a.value))return!1}else for(;!(a=i.next()).done;){var u=a.value;if(u&&!y(u[1]))return!1}return!0;default:return!1}}function d(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function v(e){if(void 0===e||null===e)return""+e;var t=d(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function m(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return u.prototype=Error.prototype,a.checkPropTypes=j,a.PropTypes=a,a},x=i(function(e){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=_(function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},!0)}),P="__global_unique_id__",T=function(){return e[P]=(e[P]||0)+1},E=i(function(e,t){t.__esModule=!0;var r=u(o.a),n=u(x),a=u(T),i=u(l);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=1073741823;t.default=r.default.createContext||function(e,t){var r,u,l="__create-react-context-"+(0,a.default)()+"__",y=function(e){function r(){var t,n;c(this,r);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=n=f(this,e.call.apply(e,[this].concat(a))),n.emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(r,n){e=r,t.forEach(function(t){return t(e,n)})}}}(n.props.value),f(n,t)}return s(r,e),r.prototype.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},r.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var r=this.props.value,n=e.value,o=void 0;!function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)?(o="function"==typeof t?t(r,n):p,(0,i.default)((o&p)===o,"calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s",o),0!=(o|=0)&&this.emitter.set(e.value,o)):o=0}},r.prototype.render=function(){return this.props.children},r}(o.a.Component);y.childContextTypes=((r={})[l]=n.default.object.isRequired,r);var d=function(t){function r(){var e,n;c(this,r);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=n=f(this,t.call.apply(t,[this].concat(a))),n.state={value:n.getValue()},n.onUpdate=function(e,t){0!=((0|n.observedBits)&t)&&n.setState({value:n.getValue()})},f(n,e)}return s(r,t),r.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?p:t},r.prototype.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?p:e},r.prototype.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},r.prototype.getValue=function(){return this.context[l]?this.context[l].get():e},r.prototype.render=function(){return function(e){return Array.isArray(e)?e[0]:e}(this.props.children)(this.state.value)},r}(o.a.Component);return d.contextTypes=((u={})[l]=n.default.object,u),{Provider:y,Consumer:d}},e.exports=t.default});a(E);var R=a(i(function(e,t){t.__esModule=!0;var r=a(o.a),n=a(E);function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||n.default,e.exports=t.default})),S=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},A=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},k=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};var N=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===M}(e)}(e)};var M="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function W(e,t){return!1!==t.clone&&t.isMergeableObject(e)?q(function(e){return Array.isArray(e)?[]:{}}(e),e,t):e}function D(e,t,r){return e.concat(t).map(function(e){return W(e,r)})}function q(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||D,r.isMergeableObject=r.isMergeableObject||N;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):function(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(t){n[t]=W(e[t],r)}),Object.keys(t).forEach(function(o){r.isMergeableObject(t[o])&&e[o]?n[o]=q(e[o],t[o],r):n[o]=W(t[o],r)}),n}(e,t,r):W(t,r)}q.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return q(e,r,t)},{})};var U=q,B=i(function(e,t){e.exports=function(){var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,n=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,u=i&&i(Object);return function c(f,s,p){if("string"!=typeof s){if(u){var l=i(s);l&&l!==u&&c(f,l,p)}var y=n(s);o&&(y=y.concat(o(s)));for(var d=0;d<y.length;++d){var v=y[d];if(!(e[v]||t[v]||p&&p[v])){var h=a(s,v);try{r(f,v,h)}catch(e){}}}return f}return f}}()}),F=["autobind","childContextTypes","componentDidMount","componentDidUpdate","componentWillMount","componentWillReceiveProps","componentWillUnmount","componentWillUpdate","contextTypes","displayName","getChildContext","getDefaultProps","getDOMNode","getInitialState","mixins","propTypes","render","replaceProps","setProps","shouldComponentUpdate","statics","updateComponent"];var J=function(e){return Boolean(e.prototype&&e.prototype.isReactComponent)},V=function(e,t){return function(r){var o=function(o){function a(){var e,t,r;S(this,a);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return t=r=k(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))),r._merge=function(e,t){var n=r._previous;if(n&&n.a===e&&n.b===t)return n.result;var o=e&&t?U(e,t):e||t;return r._previous={a:e,b:t,result:o},o},k(r,t)}return I(a,o),A(a,[{key:"render",value:function(){var o=this,a=this.props,i=(a.forwardedRef,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(a,["forwardedRef"]));return Object(n.createElement)(t.Consumer,null,function(t){var a=o._merge(t,o.props.theme),u=void 0;return u=J(r)?Object(n.createElement)(r,C({},i,{ref:function(e){o._root=e},theme:a})):Object(n.createElement)(r,C({},i,{theme:a})),a!==o.props.theme?Object(n.createElement)(e,{theme:a},u):u})}}]),a}(n.Component);o.displayName="withTheme("+(r.displayName||r.name)+")";var a=o;return J(r)&&(a.prototype.getWrappedInstance=function(){return this._root.getWrappedInstance?this._root.getWrappedInstance():this._root},a=function(e,t){return t.prototype?(Object.getOwnPropertyNames(t.prototype).filter(function(t){return!(F.includes(t)||t in n.Component.prototype||t in e.prototype||t.startsWith("_"))}).forEach(function(r){"function"==typeof t.prototype[r]?e.prototype[r]=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.prototype[r].apply(this.getWrappedInstance(),n)}:Object.defineProperty(e.prototype,r,{get:function(){return this.getWrappedInstance()[r]},set:function(e){this.getWrappedInstance()[r]=e}})}),e):e}(a,r)),B(a,r),a}};function Y(e){var t=R(e),r=function(e,t){var r,o;return o=r=function(e){function r(){return S(this,r),k(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return I(r,e),A(r,[{key:"render",value:function(){return Object(n.createElement)(t.Provider,{value:this.props.theme},this.props.children)}}]),r}(n.PureComponent),r.defaultProps={theme:e},o}(e,t);return{ThemeProvider:r,withTheme:V(r,t)}}var $=Y({});$.ThemeProvider,$.withTheme}).call(this,r(/*! ./../../../../../../../../usr/lib/node_modules/expo-cli/node_modules/webpack/buildin/global.js */52))}}]);