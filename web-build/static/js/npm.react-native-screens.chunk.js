(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{42:
/*!****************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/react-native-screens/src/screens.web.js ***!
  \****************************************************************************************/
/*! exports provided: useScreens, screensEnabled, Screen, ScreenContainer, NativeScreen, NativeScreenContainer */
/*! exports used: Screen, ScreenContainer, screensEnabled */function(e,n,t){"use strict";t.d(n,"c",function(){return V}),t.d(n,"a",function(){return A}),t.d(n,"b",function(){return I});var i=t(/*! @babel/runtime/helpers/extends */11),r=t.n(i),a=t(/*! @babel/runtime/helpers/classCallCheck */4),s=t.n(a),o=t(/*! @babel/runtime/helpers/createClass */6),u=t.n(o),d=t(/*! @babel/runtime/helpers/possibleConstructorReturn */9),l=t.n(d),c=t(/*! @babel/runtime/helpers/getPrototypeOf */8),p=t.n(c),v=t(/*! @babel/runtime/helpers/inherits */10),_=t.n(v),f=t(/*! debounce */71),m=t.n(f),h=t(/*! react */0),w=t.n(h),y=t(/*! react-native-web/dist/exports/Animated */5),L=t(/*! react-native-web/dist/exports/View */2),b=!0;function V(){return b}function U(e){return e&&e.__getValue&&e.addListener}function k(e){var n=e;return U(e)&&(n=e.__getValue()),!!n}var A=function(e){function n(e){var t;return s()(this,n),(t=l()(this,p()(n).call(this,e))).listenerId=null,t._addListener=function(e){if(t.listenerId)throw new Error("Screen: Attempting to observe an animated value while another value is already observed.");U(e)&&(t.listenerId=e.addListener(t._onAnimatedValueUpdated))},t._removeListener=function(e){U(e)&&(e.removeListener(t.listenerId),t.listenerId=null)},t._onAnimatedValueUpdated=function(e){var n=e.value;t._updateDisplay(!!n)},t._updateDisplay=function(e){void 0===e&&(e=k(t.props.active));var n=e?"flex":"none";t.setNativeProps({style:{display:n}})},t.setNativeProps=function(e){t._view&&t._view.setNativeProps(e)},t._setRef=function(e){t._view=e,t._updateDisplay()},t._onAnimatedValueUpdated=m()(t._onAnimatedValueUpdated,10),t._addListener(e.active),t}return _()(n,e),u()(n,[{key:"componentWillUnmount",value:function(){this._removeListener(this.props.active)}},{key:"shouldComponentUpdate",value:function(e){var n=e.active,t=this.props.active;return n===t||(this._removeListener(t),this._addListener(n),this._updateDisplay(k(n)),!1)}},{key:"render",value:function(){return w.a.createElement(y.a.View,r()({},this.props,{ref:this._setRef,__source:{fileName:"/home/riz/Projects/dashpier/node_modules/react-native-screens/src/screens.web.js",lineNumber:105}}))}}]),n}(w.a.Component);A.defaultProps={active:!0};var I=L.a;L.a,L.a}}]);