(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{177:
/*!***********************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/index.js + 4 modules ***!
  \***********************************************************************************************/
/*! exports provided: TabView, TabBar, PagerDefault, PagerPan, PagerScroll, PagerAndroid, PagerExperimental, SceneMap */
/*! exports used: PagerPan, TabBar, TabView */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerAndroid.web.js (<- Module is referenced from these modules with unsupported syntax: /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerDefault.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerPan.js (<- Module is referenced from these modules with unsupported syntax: /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerDefault.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerScroll.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PropTypes.js because of /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/TabBar.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/TabBar.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/Animated/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/Platform/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/StyleSheet/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/View/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";var r,a=n(11),o=n.n(a),i=n(18),s=n.n(i),l=n(23),u=n.n(l),p=n(3),c=n.n(p),d=n(4),h=n.n(d),f=n(7),b=n.n(f),m=n(6),v=n.n(m),g=n(8),y=n.n(g),_=n(1),w=n(0),S=n.n(w),T=n(10),x=n(2),O=n(9),P=n(193);switch(n(12).a.OS){case"android":r=n(/*! ./PagerAndroid */237).default;break;case"ios":r=n(/*! ./PagerScroll */238).default;break;default:r=n(/*! ./PagerPan */239).default}var E=r,j=n(94),I="/home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/TabView.js";function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){u()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R=function(e){function t(e){var n;c()(this,t),(n=b()(this,v()(t).call(this,e)))._mounted=!1,n._renderScene=function(e){return n.props.renderScene(e)},n._handleLayout=function(e){var t=e.nativeEvent.layout,r=t.height,a=t.width;n.state.layout.width===a&&n.state.layout.height===r||(n.state.panX.setValue(0),n.state.offsetX.setValue(-n.props.navigationState.index*a),n.state.layoutXY.setValue({x:a||.001,y:r||.001}),n.setState({layout:{measured:!0,height:r,width:a}}))},n._buildSceneRendererProps=function(){return{panX:n.state.panX,offsetX:n.state.offsetX,position:n.state.position,layout:n.state.layout,navigationState:n.props.navigationState,jumpTo:n._jumpTo,useNativeDriver:!0===n.props.useNativeDriver}},n._jumpTo=function(e){if(n._mounted){var t=n.props,r=t.canJumpToTab,a=t.navigationState,o=a.routes.findIndex(function(t){return t.key===e});r(a.routes[o])&&o!==a.index&&n.props.onIndexChange(o)}};var r=n.props.navigationState,a=N({},n.props.initialLayout,{measured:!1}),o=new T.a.Value(0),i=new T.a.Value(-r.index*a.width),s=new T.a.ValueXY({x:a.width||.001,y:a.height||.001}),l=T.a.multiply(T.a.divide(T.a.add(o,i),s.x),-1);return n.state={layout:a,layoutXY:s,panX:o,offsetX:i,position:l,renderUnfocusedScenes:!1},n}return y()(t,e),h()(t,[{key:"componentDidMount",value:function(){var e=this;this._mounted=!0,setTimeout(function(){return e.setState({renderUnfocusedScenes:!0})},0)}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var e=this,t=this.props,n=t.navigationState,r=(t.onIndexChange,t.initialLayout,t.renderScene,t.renderPager),a=t.renderTabBar,o=t.tabBarPosition,i=s()(t,["navigationState","onIndexChange","initialLayout","renderScene","renderPager","renderTabBar","tabBarPosition"]),l=this._buildSceneRendererProps();return _.createElement(x.a,{collapsable:!1,style:[M.container,this.props.style],__source:{fileName:I,lineNumber:190}},"top"===o&&a(l),_.createElement(x.a,{onLayout:this._handleLayout,style:M.pager,__source:{fileName:I,lineNumber:192}},r(N({},l,{},i,{panX:this.state.panX,offsetX:this.state.offsetX,children:n.routes.map(function(t,n){var r;return r=e.props.navigationState.index===n||e.state.renderUnfocusedScenes?e._renderScene(N({},l,{route:t})):_.createElement(x.a,{__source:{fileName:I,lineNumber:209}}),_.isValidElement(r)&&(r=_.cloneElement(r,{key:t.key})),r})}))),"bottom"===o&&a(l))}}]),t}(_.Component);R.propTypes={navigationState:j.a.isRequired,onIndexChange:S.a.func.isRequired,initialLayout:S.a.shape({height:S.a.number.isRequired,width:S.a.number.isRequired}),canJumpToTab:S.a.func.isRequired,renderPager:S.a.func.isRequired,renderScene:S.a.func.isRequired,renderTabBar:S.a.func,tabBarPosition:S.a.oneOf(["top","bottom"])},R.defaultProps={canJumpToTab:function(){return!0},tabBarPosition:"top",renderTabBar:function(e){return _.createElement(P.a,o()({},e,{__source:{fileName:I,lineNumber:59}}))},renderPager:function(e){return _.createElement(E,o()({},e,{__source:{fileName:I,lineNumber:60}}))},getTestID:function(e){var t=e.route;return"string"==typeof t.testID?t.testID:void 0},initialLayout:{height:0,width:0},useNativeDriver:!1};var M=O.a.create({container:{flex:1,overflow:"hidden"},pager:{flex:1}}),k=n(239),X=(n(238),n(237),"/home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerExperimental.js");function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach(function(t){u()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var L={timing:T.a.spring,tension:68,friction:12},A=function(e){function t(){var e,n;c()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=b()(this,(e=v()(t)).call.apply(e,[this].concat(a))))._handleHandlerStateChange=function(e){var t=n.props.GestureHandler;if(e.nativeEvent.state===t.State.BEGAN)n.props.onSwipeStart&&n.props.onSwipeStart();else if(e.nativeEvent.state===t.State.END){n.props.onSwipeEnd&&n.props.onSwipeEnd();var r=n.props,a=r.navigationState,o=r.layout,i=r.swipeDistanceThreshold,s=void 0===i?o.width/1.75:i,l=r.swipeVelocityThreshold,u=void 0===l?150:l,p=e.nativeEvent,c=p.translationX,d=p.translationY,h=p.velocityX,f=p.velocityY,b="number"==typeof n._pendingIndex?n._pendingIndex:a.index,m=b;Math.abs(c)>Math.abs(d)&&Math.abs(h)>Math.abs(f)&&(Math.abs(c)>s||Math.abs(h)>u)&&(m=Math.round(Math.min(Math.max(0,b-c/Math.abs(c)),a.routes.length-1))),isFinite(m)&&n.props.canJumpToTab(n.props.navigationState.routes[m])||(m=b),n._transitionTo(m,h)}},n._transitionTo=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=-e*n.props.layout.width;if(!1===n.props.animationEnabled||!1===r)return n.props.panX.setValue(0),void n.props.offsetX.setValue(a);var o=L.timing,i=s()(L,["timing"]),l=n.props.useNativeDriver;T.a.parallel([o(n.props.panX,C({},i,{toValue:0,velocity:t,useNativeDriver:l})),o(n.props.offsetX,C({},i,{toValue:a,velocity:t,useNativeDriver:l}))]).start(function(t){if(t.finished){var r=n.props.navigationState.routes[e];n.props.jumpTo(r.key),n.props.onAnimationEnd&&n.props.onAnimationEnd(),n._pendingIndex=null}}),n._pendingIndex=e},n}return y()(t,e),h()(t,[{key:"componentDidUpdate",value:function(e){e.navigationState.routes.length!==this.props.navigationState.routes.length||e.layout.width!==this.props.layout.width?this._transitionTo(this.props.navigationState.index,void 0,!1):e.navigationState.index!==this.props.navigationState.index&&this.props.navigationState.index!==this._pendingIndex&&this._transitionTo(this.props.navigationState.index)}},{key:"render",value:function(){var e=this,t=this.props,n=t.GestureHandler,r=t.panX,a=t.offsetX,o=t.layout,i=t.navigationState,s=t.swipeEnabled,l=t.children,u=o.width,p=i.routes,c=u*(p.length-1),d=p.length>1?T.a.add(r,a).interpolate({inputRange:[-c,0],outputRange:[-c,0],extrapolate:"clamp"}):0;return _.createElement(n.PanGestureHandler,{enabled:0!==o.width&&!1!==s,minDeltaX:10,onGestureEvent:T.a.event([{nativeEvent:{translationX:this.props.panX}}],{useNativeDriver:this.props.useNativeDriver}),onHandlerStateChange:this._handleHandlerStateChange,__source:{fileName:X,lineNumber:166}},_.createElement(T.a.View,{style:[q.sheet,u?{width:p.length*u,transform:[{translateX:d}]}:null],__source:{fileName:X,lineNumber:175}},_.Children.map(l,function(t,n){var r=i.routes[n],a=n===i.index;return _.createElement(x.a,{key:r.key,testID:e.props.getTestID({route:r}),accessibilityElementsHidden:!a,importantForAccessibility:a?"auto":"no-hide-descendants",style:u?{width:u}:a?O.a.absoluteFill:null,__source:{fileName:X,lineNumber:188}},a||u?t:null)})))}}]),t}(_.Component);A.propTypes=C({},j.b,{swipeDistanceThreshold:S.a.number,swipeVelocityThreshold:S.a.number,GestureHandler:S.a.object}),A.defaultProps={canJumpToTab:function(){return!0}};var q=O.a.create({sheet:{flex:1,flexDirection:"row",alignItems:"stretch"}});!function(e){function t(){return c()(this,t),b()(this,v()(t).apply(this,arguments))}y()(t,e),h()(t,[{key:"render",value:function(){var e=this.props,t=e.component,n=s()(e,["component"]);return _.createElement(t,n)}}])}(_.PureComponent);n.d(t,"c",function(){return R}),n.d(t,"b",function(){return P.a}),n.d(t,"a",function(){return k.default})},193:
/*!************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/TabBar.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return R});var r=n(/*! @babel/runtime/helpers/defineProperty */23),a=n.n(r),o=n(/*! @babel/runtime/helpers/toConsumableArray */32),i=n.n(o),s=n(/*! @babel/runtime/helpers/classCallCheck */3),l=n.n(s),u=n(/*! @babel/runtime/helpers/createClass */4),p=n.n(u),c=n(/*! @babel/runtime/helpers/possibleConstructorReturn */7),d=n.n(c),h=n(/*! @babel/runtime/helpers/getPrototypeOf */6),f=n.n(h),b=n(/*! @babel/runtime/helpers/inherits */8),m=n.n(b),v=n(/*! react */1),g=n(/*! prop-types */0),y=n.n(g),_=n(/*! react-native-web/dist/exports/Animated */10),w=n(/*! react-native-web/dist/exports/NativeModules */65),S=n(/*! react-native-web/dist/exports/StyleSheet */9),T=n(/*! react-native-web/dist/exports/View */2),x=n(/*! react-native-web/dist/exports/Platform */12),O=n(/*! react-native-web/dist/exports/I18nManager */28),P=n(/*! ./TouchableItem */231),E=n(/*! ./PropTypes */94),j="/home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/TabBar.js";function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N=Boolean(w.a.NativeAnimatedModule),R=function(t){function n(t){var r;l()(this,n),(r=d()(this,f()(n).call(this,t)))._isIntial=!0,r._isManualScroll=!1,r._isMomentumScroll=!1,r._startTrackingPosition=function(){r._offsetXListener=r.props.offsetX.addListener(function(e){var t=e.value;r._lastOffsetX=t,r._handlePosition()}),r._panXListener=r.props.panX.addListener(function(e){var t=e.value;r._lastPanX=t,r._handlePosition()})},r._stopTrackingPosition=function(){r.props.offsetX.removeListener(r._offsetXListener),r.props.panX.removeListener(r._panXListener)},r._handlePosition=function(){var e=r.props,t=e.navigationState,n=e.layout;if(0!==n.width){var a=(("number"==typeof r._lastPanX?r._lastPanX:0)+("number"==typeof r._lastOffsetX?r._lastOffsetX:-t.index*n.width))/-(n.width||.001);r._adjustScroll(a)}},r._renderLabel=function(e){if(void 0!==r.props.renderLabel)return r.props.renderLabel(e);var t=r.props.getLabelText(e);return"string"!=typeof t?null:v.createElement(_.a.Text,{style:[M.tabLabel,r.props.labelStyle],__source:{fileName:j,lineNumber:202}},t)},r._renderIndicator=function(e){if(void 0!==r.props.renderIndicator)return r.props.renderIndicator(e);var t=e.width,n=e.position,a=e.navigationState,o=_.a.multiply(_.a.multiply(n.interpolate({inputRange:[-1,a.routes.length],outputRange:[-1,a.routes.length],extrapolate:"clamp"}),t),O.a.isRTL?-1:1);return v.createElement(_.a.View,{style:[M.indicator,{width:t,transform:[{translateX:o}]},r.props.indicatorStyle],__source:{fileName:j,lineNumber:225}})},r._getTabWidth=function(e){var t=e.layout,n=e.navigationState,r=e.tabStyle,a=S.a.flatten(r);if(a)switch(typeof a.width){case"number":return a.width;case"string":if(a.width.endsWith("%")){var o=parseFloat(a.width);if(Number.isFinite(o))return t.width*(o/100)}}return e.scrollEnabled?t.width/5*2:t.width/n.routes.length},r._handleTabPress=function(e){var t=e.route;r._pendingIndex=r.props.navigationState.routes.indexOf(t),r.props.onTabPress&&r.props.onTabPress({route:t}),r.props.jumpTo(t.key)},r._handleTabLongPress=function(e){var t=e.route;r.props.onTabLongPress&&r.props.onTabLongPress({route:t})},r._normalizeScrollValue=function(e,t){var n=e.layout,a=e.navigationState,o=r._getTabWidth(e),i=Math.max(o*a.routes.length,n.width)-n.width;return Math.max(Math.min(t,i),0)},r._getScrollAmount=function(e,t){var n=e.layout,a=r._getTabWidth(e)*(t+.5)-n.width/2;return r._normalizeScrollValue(e,a)},r._adjustScroll=function(t){r.props.scrollEnabled&&(e.cancelAnimationFrame(r._scrollResetCallback),r._scrollView&&r._scrollView.scrollTo({x:r._normalizeScrollValue(r.props,r._getScrollAmount(r.props,t)),animated:!r._isIntial}),r._isIntial=!1)},r._resetScroll=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];r.props.scrollEnabled&&(e.cancelAnimationFrame(r._scrollResetCallback),r._scrollResetCallback=e.requestAnimationFrame(function(){r._scrollView&&r._scrollView.scrollTo({x:r._getScrollAmount(r.props,t),animated:n})}))},r._handleBeginDrag=function(){r._isManualScroll=!0,r._isMomentumScroll=!1},r._handleEndDrag=function(){e.requestAnimationFrame(function(){r._isMomentumScroll||(r._isManualScroll=!1)})},r._handleMomentumScrollBegin=function(){r._isMomentumScroll=!0},r._handleMomentumScrollEnd=function(){r._isMomentumScroll=!1,r._isManualScroll=!1};var a=1;r.props.scrollEnabled&&(r._getTabWidth(r.props)||(a=0));var o=r.props.scrollEnabled&&r.props.layout.width?{x:r._getScrollAmount(r.props,r.props.navigationState.index),y:0}:void 0;return r.state={visibility:new _.a.Value(a),scrollAmount:new _.a.Value(0),initialOffset:o},r}return m()(n,t),p()(n,[{key:"componentDidMount",value:function(){this.props.scrollEnabled&&this._startTrackingPosition()}},{key:"componentDidUpdate",value:function(e){var t=this._getTabWidth(e),n=this._getTabWidth(this.props),r="number"==typeof this._pendingIndex?this._pendingIndex:this.props.navigationState.index;this._pendingIndex=null,t!==n&&n&&this.state.visibility.setValue(1),e.navigationState.routes.length!==this.props.navigationState.routes.length||e.layout.width!==this.props.layout.width?this._resetScroll(this.props.navigationState.index,!1):e.navigationState.index!==r&&this._resetScroll(this.props.navigationState.index)}},{key:"componentWillUnmount",value:function(){this._stopTrackingPosition()}},{key:"render",value:function(){var e=this,t=this.props,n=t.position,r=t.navigationState,a=t.scrollEnabled,o=t.bounces,s=r.routes,l=this._getTabWidth(this.props),u=l*s.length,p=[-1].concat(i()(s.map(function(e,t){return t}))),c=_.a.multiply(this.state.scrollAmount,-1);return v.createElement(_.a.View,{style:[M.tabBar,this.props.style],__source:{fileName:j,lineNumber:366}},v.createElement(_.a.View,{pointerEvents:"none",style:[M.indicatorContainer,a?{width:u,transform:[{translateX:c}]}:null],__source:{fileName:j,lineNumber:367}},this._renderIndicator(D({},this.props,{width:l}))),v.createElement(T.a,{style:M.scroll,__source:{fileName:j,lineNumber:381}},v.createElement(_.a.ScrollView,{horizontal:!0,keyboardShouldPersistTaps:"handled",scrollEnabled:a,bounces:o,alwaysBounceHorizontal:!1,scrollsToTop:!1,showsHorizontalScrollIndicator:!1,automaticallyAdjustContentInsets:!1,overScrollMode:"never",contentContainerStyle:[M.tabContent,a?null:M.container],scrollEventThrottle:1,onScroll:_.a.event([{nativeEvent:{contentOffset:{x:this.state.scrollAmount}}}],{useNativeDriver:N}),onScrollBeginDrag:this._handleBeginDrag,onScrollEndDrag:this._handleEndDrag,onMomentumScrollBegin:this._handleMomentumScrollBegin,onMomentumScrollEnd:this._handleMomentumScrollEnd,contentOffset:this.state.initialOffset,ref:function(t){return e._scrollView=t&&t.getNode()},__source:{fileName:j,lineNumber:382}},s.map(function(t,o){var i=p.map(function(e){return e===o?1:.7}),s=_.a.multiply(e.state.visibility,n.interpolate({inputRange:p,outputRange:i})),u=e._renderLabel({route:t}),c=e.props.renderIcon?e.props.renderIcon({route:t}):null,d=e.props.renderBadge?e.props.renderBadge({route:t}):null,h={};h.opacity=s,c&&(u?h.paddingTop=8:h.padding=12);var f=S.a.flatten(e.props.tabStyle),b=f&&void 0!==f.width||!0===a,m={};b&&(h.width=l),f&&"number"==typeof f.flex?m.flex=f.flex:b||(m.flex=1);var g=e.props.getAccessibilityLabel({route:t});g=void 0!==g?g:e.props.getLabelText({route:t});var y=o===r.index;return v.createElement(P.a,{borderless:!0,key:t.key,testID:e.props.getTestID({route:t}),accessible:e.props.getAccessible({route:t}),accessibilityLabel:g,accessibilityTraits:y?["button","selected"]:"button",accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:y?["selected"]:[],pressColor:e.props.pressColor,pressOpacity:e.props.pressOpacity,delayPressIn:0,onPress:function(){return e._handleTabPress({route:t})},onLongPress:function(){return e._handleTabLongPress({route:t})},style:m,__source:{fileName:j,lineNumber:474}},v.createElement(T.a,{pointerEvents:"none",style:M.container,__source:{fileName:j,lineNumber:493}},v.createElement(_.a.View,{style:[M.tabItem,h,f,M.container],__source:{fileName:j,lineNumber:494}},c,u),d?v.createElement(_.a.View,{style:[M.badge,{opacity:e.state.visibility}],__source:{fileName:j,lineNumber:506}},d):null))}))))}}]),n}(v.Component);R.propTypes=D({},E.c,{scrollEnabled:y.a.bool,bounces:y.a.bool,pressColor:P.a.propTypes.pressColor,pressOpacity:P.a.propTypes.pressOpacity,getLabelText:y.a.func,getAccessible:y.a.func,getAccessibilityLabel:y.a.func,getTestID:y.a.func,renderIcon:y.a.func,renderLabel:y.a.func,renderIndicator:y.a.func,onTabPress:y.a.func,onTabLongPress:y.a.func,labelStyle:y.a.any,style:y.a.any}),R.defaultProps={getLabelText:function(e){var t=e.route;return"string"==typeof t.title?t.title.toUpperCase():t.title},getAccessible:function(e){var t=e.route;return void 0===t.accessible||t.accessible},getAccessibilityLabel:function(e){return e.route.accessibilityLabel},getTestID:function(e){return e.route.testID}};var M=S.a.create({container:{flex:1},scroll:{overflow:"web"===x.a.OS?"auto":"scroll"},tabBar:{backgroundColor:"#2196f3",elevation:4,shadowColor:"black",shadowOpacity:.1,shadowRadius:S.a.hairlineWidth,shadowOffset:{height:S.a.hairlineWidth},zIndex:"android"===x.a.OS?0:1},tabContent:{flexDirection:"row",flexWrap:"nowrap"},tabLabel:{backgroundColor:"transparent",color:"white",margin:8},tabItem:{flex:1,padding:8,alignItems:"center",justifyContent:"center"},badge:{position:"absolute",top:0,right:0},indicatorContainer:{position:"absolute",top:0,left:0,right:0,bottom:0},indicator:{backgroundColor:"#ffeb3b",position:"absolute",left:0,bottom:0,right:0,height:2}})}).call(this,n(/*! ./../../../../../../../usr/lib/node_modules/expo-cli/node_modules/webpack/buildin/global.js */52))},231:
/*!*******************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/TouchableItem.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";n.d(t,"a",function(){return O});var r=n(/*! @babel/runtime/helpers/extends */11),a=n.n(r),o=n(/*! @babel/runtime/helpers/objectWithoutProperties */18),i=n.n(o),s=n(/*! @babel/runtime/helpers/classCallCheck */3),l=n.n(s),u=n(/*! @babel/runtime/helpers/createClass */4),p=n.n(u),c=n(/*! @babel/runtime/helpers/possibleConstructorReturn */7),d=n.n(c),h=n(/*! @babel/runtime/helpers/getPrototypeOf */6),f=n.n(h),b=n(/*! @babel/runtime/helpers/inherits */8),m=n.n(b),v=n(/*! react */1),g=n(/*! prop-types */0),y=n.n(g),_=n(/*! react-native-web/dist/exports/TouchableNativeFeedback */85),w=n(/*! react-native-web/dist/exports/TouchableOpacity */82),S=n(/*! react-native-web/dist/exports/Platform */12),T=n(/*! react-native-web/dist/exports/View */2),x="/home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/TouchableItem.js",O=function(e){function t(){return l()(this,t),d()(this,f()(t).apply(this,arguments))}return m()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.pressOpacity,r=e.pressColor,o=e.borderless,s=i()(e,["style","pressOpacity","pressColor","borderless"]);return"android"===S.a.OS&&S.a.Version>=21?v.createElement(_.a,a()({},s,{background:_.a.Ripple(r,o),__source:{fileName:x,lineNumber:44}}),v.createElement(T.a,{style:t,__source:{fileName:x,lineNumber:48}},v.Children.only(this.props.children))):v.createElement(w.a,a()({},s,{rejectResponderTermination:!0,style:t,activeOpacity:n,__source:{fileName:x,lineNumber:53}}),this.props.children)}}]),t}(v.Component);O.propTypes={onPress:y.a.func.isRequired,delayPressIn:y.a.number,borderless:y.a.bool,pressColor:y.a.string,pressOpacity:y.a.number,children:y.a.node.isRequired},O.defaultProps={pressColor:"rgba(255, 255, 255, .4)"}},237:
/*!**********************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerAndroid.web.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerDefault.js (referenced with cjs require) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(/*! react */1),a=n.n(r),o="/home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerAndroid.web.js";function i(){return a.a.createElement("p",{__source:{fileName:o,lineNumber:5}},"PagerAndroid is not supported on web.")}},238:
/*!*****************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerScroll.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return x});var r=n(/*! @babel/runtime/helpers/defineProperty */23),a=n.n(r),o=n(/*! @babel/runtime/helpers/classCallCheck */3),i=n.n(o),s=n(/*! @babel/runtime/helpers/createClass */4),l=n.n(s),u=n(/*! @babel/runtime/helpers/possibleConstructorReturn */7),p=n.n(u),c=n(/*! @babel/runtime/helpers/getPrototypeOf */6),d=n.n(c),h=n(/*! @babel/runtime/helpers/inherits */8),f=n.n(h),b=n(/*! react */1),m=n(/*! prop-types */0),v=n.n(m),g=n(/*! react-native-web/dist/exports/View */2),y=n(/*! react-native-web/dist/exports/ScrollView */64),_=n(/*! react-native-web/dist/exports/StyleSheet */9),w=n(/*! ./PropTypes */94),S="/home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerScroll.js";function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var x=function(t){function n(t){var r;i()(this,n),(r=p()(this,d()(n).call(this,t)))._isIdle=!0,r._isInitial=!0,r._setInitialPage=function(){r.props.layout.width&&(r._isInitial=!0,r._scrollTo(r.props.navigationState.index*r.props.layout.width,!1)),setTimeout(function(){r._isInitial=!1},50)},r._scrollTo=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];r._isIdle&&r._scrollView&&r._scrollView.scrollTo({x:e,animated:t&&!1!==r.props.animationEnabled})},r._handleMomentumScrollEnd=function(t){var n=Math.round(t.nativeEvent.contentOffset.x/r.props.layout.width),a=r.props.navigationState.routes[n];r.props.canJumpToTab({route:a})?(r.props.jumpTo(a.key),r.props.onAnimationEnd&&r.props.onAnimationEnd()):e.requestAnimationFrame(function(){r._scrollTo(r.props.navigationState.index*r.props.layout.width)})},r._handleScroll=function(t){if(!r._isInitial&&0!==t.nativeEvent.contentSize.width){var n=r.props,a=n.navigationState,o=n.layout,i=a.index*o.width;r.props.offsetX.setValue(-i),r.props.panX.setValue(i-t.nativeEvent.contentOffset.x),e.cancelAnimationFrame(r._idleCallback),r._isIdle=!1,r._idleCallback=e.requestAnimationFrame(function(){r._isIdle=!0})}};var a=r.props,o=a.navigationState,s=a.layout;return r.state={initialOffset:{x:o.index*s.width,y:0}},r}return f()(n,t),l()(n,[{key:"componentDidMount",value:function(){this._setInitialPage()}},{key:"componentDidUpdate",value:function(e){var t=this.props.navigationState.index*this.props.layout.width;e.navigationState.routes.length!==this.props.navigationState.routes.length||e.layout.width!==this.props.layout.width?this._scrollTo(t,!1):e.navigationState.index!==this.props.navigationState.index&&this._scrollTo(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.layout,a=t.navigationState,o=t.onSwipeStart,i=t.onSwipeEnd,s=t.bounces;return b.createElement(y.a,{horizontal:!0,pagingEnabled:!0,directionalLockEnabled:!0,keyboardDismissMode:"on-drag",keyboardShouldPersistTaps:"always",overScrollMode:"never",scrollToOverflowEnabled:!0,scrollEnabled:this.props.swipeEnabled,automaticallyAdjustContentInsets:!1,bounces:s,alwaysBounceHorizontal:s,scrollsToTop:!1,showsHorizontalScrollIndicator:!1,scrollEventThrottle:1,onScroll:this._handleScroll,onScrollBeginDrag:o,onScrollEndDrag:i,onMomentumScrollEnd:this._handleMomentumScrollEnd,contentOffset:this.state.initialOffset,style:O.container,contentContainerStyle:r.width?null:O.container,ref:function(t){return e._scrollView=t},__source:{fileName:S,lineNumber:154}},b.Children.map(n,function(t,n){var o=a.routes[n],i=n===a.index;return b.createElement(g.a,{key:o.key,testID:e.props.getTestID({route:o}),accessibilityElementsHidden:!i,importantForAccessibility:i?"auto":"no-hide-descendants",style:r.width?{width:r.width,overflow:"hidden"}:i?O.page:null,__source:{fileName:S,lineNumber:183}},i||r.width?t:null)}))}}]),n}(b.Component);x.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},w.b,{bounces:v.a.bool.isRequired}),x.defaultProps={canJumpToTab:function(){return!0},bounces:!1};var O=_.a.create({container:{flex:1},page:{flex:1,overflow:"hidden"}})}.call(this,n(/*! ./../../../../../../../usr/lib/node_modules/expo-cli/node_modules/webpack/buildin/global.js */52))},239:
/*!**************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerPan.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerDefault.js (referenced with cjs require) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k});var r=n(/*! @babel/runtime/helpers/extends */11),a=n.n(r),o=n(/*! @babel/runtime/helpers/defineProperty */23),i=n.n(o),s=n(/*! @babel/runtime/helpers/objectWithoutProperties */18),l=n.n(s),u=n(/*! @babel/runtime/helpers/classCallCheck */3),p=n.n(u),c=n(/*! @babel/runtime/helpers/createClass */4),d=n.n(c),h=n(/*! @babel/runtime/helpers/possibleConstructorReturn */7),f=n.n(h),b=n(/*! @babel/runtime/helpers/getPrototypeOf */6),m=n.n(b),v=n(/*! @babel/runtime/helpers/inherits */8),g=n.n(v),y=n(/*! react */1),_=n(/*! prop-types */0),w=n.n(_),S=n(/*! react-native-web/dist/exports/Animated */10),T=n(/*! react-native-web/dist/exports/I18nManager */28),x=n(/*! react-native-web/dist/exports/PanResponder */384),O=n(/*! react-native-web/dist/exports/StyleSheet */9),P=n(/*! react-native-web/dist/exports/View */2),E=n(/*! react-native-web/dist/exports/Platform */12),j=n(/*! ./PropTypes */94),I="/home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PagerPan.js";function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R=12,M={timing:S.a.spring,tension:300,friction:35},k=function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=f()(this,(e=m()(t)).call.apply(e,[this].concat(a))))._currentIndex=n.props.navigationState.index,n._isMovingHorizontally=function(e,t){return Math.abs(t.dx)>Math.abs(2*t.dy)&&Math.abs(t.vx)>Math.abs(2*t.vy)},n._canMoveScreen=function(e,t){if(!1===n.props.swipeEnabled)return!1;var r=n.props.navigationState.routes;return n._isMovingHorizontally(e,t)&&(t.dx>=R&&n._currentIndex>0||t.dx<=-R&&n._currentIndex<r.length-1)},n._startGesture=function(){n.props.onSwipeStart&&n.props.onSwipeStart(),n.props.panX.stopAnimation()},n._respondToGesture=function(e,t){var r=n.props.navigationState,a=r.routes,o=r.index;t.dx>0&&o<=0||t.dx<0&&o>=a.length-1||n.props.panX.setValue(t.dx)},n._finishGesture=function(e,t){var r=n.props,a=r.navigationState,o=r.layout,i=r.swipeDistanceThreshold,s=void 0===i?o.width/1.75:i,l=n.props.swipeVelocityThreshold,u=void 0===l?.15:l;n.props.onSwipeEnd&&n.props.onSwipeEnd(),"android"===E.a.OS&&(u/=1e6);var p="number"==typeof n._pendingIndex?n._pendingIndex:n._currentIndex,c=p;Math.abs(t.dx)>Math.abs(t.dy)&&Math.abs(t.vx)>Math.abs(t.vy)&&(Math.abs(t.dx)>s||Math.abs(t.vx)>u)&&(c=Math.round(Math.min(Math.max(0,p-t.dx/Math.abs(t.dx)),a.routes.length-1)),n._currentIndex=c),isFinite(c)&&n.props.canJumpToTab({route:n.props.navigationState.routes[c]})||(c=p),n._transitionTo(c)},n._transitionTo=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=-e*n.props.layout.width,a=n.props.navigationState.routes[e];if(!1===n.props.animationEnabled||!1===t)return n.props.panX.setValue(0),n.props.offsetX.setValue(r),void n.props.jumpTo(a.key);var o=M.timing,i=l()(M,["timing"]);S.a.parallel([o(n.props.panX,N({},i,{toValue:0})),o(n.props.offsetX,N({},i,{toValue:r}))]).start(function(e){e.finished&&(n.props.jumpTo(a.key),n.props.onAnimationEnd&&n.props.onAnimationEnd(),n._pendingIndex=null)}),n._pendingIndex=e},n._panResponder=x.a.create({onMoveShouldSetPanResponder:n._canMoveScreen,onMoveShouldSetPanResponderCapture:n._canMoveScreen,onPanResponderGrant:n._startGesture,onPanResponderMove:n._respondToGesture,onPanResponderTerminate:n._finishGesture,onPanResponderRelease:n._finishGesture,onPanResponderTerminationRequest:function(){return!0}}),n}return g()(t,e),d()(t,[{key:"componentDidUpdate",value:function(e){this._currentIndex=this.props.navigationState.index,e.navigationState.routes.length!==this.props.navigationState.routes.length||e.layout.width!==this.props.layout.width?this._transitionTo(this.props.navigationState.index,!1):e.navigationState.index!==this.props.navigationState.index&&this._transitionTo(this.props.navigationState.index)}},{key:"render",value:function(){var e=this,t=this.props,n=t.panX,r=t.offsetX,o=t.navigationState,i=t.layout,s=t.children,l=i.width,u=o.routes,p=l*(u.length-1),c=S.a.multiply(S.a.add(n,r).interpolate({inputRange:[-p,0],outputRange:[-p,0],extrapolate:"clamp"}),T.a.isRTL?-1:1);return y.createElement(S.a.View,a()({style:[X.sheet,l?{width:u.length*l,transform:[{translateX:c}]}:null]},this._panResponder.panHandlers,{__source:{fileName:I,lineNumber:249}}),y.Children.map(s,function(t,n){var r=o.routes[n],a=n===o.index;return y.createElement(P.a,{key:r.key,testID:e.props.getTestID({route:r}),style:l?{width:l}:a?O.a.absoluteFill:null,__source:{fileName:I,lineNumber:266}},a||l?t:null)}))}}]),t}(y.Component);k.propTypes=N({},j.b,{swipeDistanceThreshold:w.a.number,swipeVelocityThreshold:w.a.number}),k.defaultProps={canJumpToTab:function(){return!0},initialLayout:{height:0,width:0}};var X=O.a.create({sheet:{flex:1,flexDirection:"row",alignItems:"stretch"}})},94:
/*!***************************************************************************************!*\
  !*** /home/riz/Projects/dashpier/node_modules/react-native-tab-view/src/PropTypes.js ***!
  \***************************************************************************************/
/*! exports provided: NavigationRoutePropType, NavigationStatePropType, SceneRendererPropType, PagerRendererPropType */
/*! exports used: NavigationStatePropType, PagerRendererPropType, SceneRendererPropType */function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return u});var r=n(/*! prop-types */0),a=n.n(r),o=n(/*! react-native-web/dist/exports/Animated */10),i=a.a.shape({title:a.a.string,key:a.a.string.isRequired}),s=a.a.shape({routes:a.a.arrayOf(i).isRequired,index:a.a.number.isRequired}),l={panX:a.a.object.isRequired,offsetX:a.a.object.isRequired,layout:a.a.shape({measured:a.a.bool.isRequired,height:a.a.number.isRequired,width:a.a.number.isRequired}).isRequired,navigationState:s.isRequired,position:a.a.object.isRequired,jumpTo:a.a.func.isRequired,useNativeDriver:a.a.bool},u={layout:a.a.shape({measured:a.a.bool.isRequired,height:a.a.number.isRequired,width:a.a.number.isRequired}).isRequired,navigationState:s.isRequired,panX:a.a.instanceOf(o.a.Value).isRequired,offsetX:a.a.instanceOf(o.a.Value).isRequired,canJumpToTab:a.a.func.isRequired,jumpTo:a.a.func.isRequired,animationEnabled:a.a.bool,swipeEnabled:a.a.bool,useNativeDriver:a.a.bool,onSwipeStart:a.a.func,onSwipeEnd:a.a.func,onAnimationEnd:a.a.func,children:a.a.node.isRequired}}}]);