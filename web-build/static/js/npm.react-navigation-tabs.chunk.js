(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"07No":
/*!*******************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/CrossFadeIcon.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";n.d(t,"a",function(){return y});var a=n(/*! @babel/runtime/helpers/classCallCheck */"KrBk"),r=n.n(a),i=n(/*! @babel/runtime/helpers/createClass */"tQ7g"),o=n.n(i),s=n(/*! @babel/runtime/helpers/possibleConstructorReturn */"BbWu"),l=n.n(s),c=n(/*! @babel/runtime/helpers/getPrototypeOf */"uBYy"),u=n.n(c),d=n(/*! @babel/runtime/helpers/inherits */"7Qk5"),p=n.n(d),b=n(/*! react */"pEjj"),f=n.n(b),h=n(/*! react-native-web/dist/exports/Animated */"7/yl"),g=n(/*! react-native-web/dist/exports/View */"AthC"),v=n(/*! react-native-web/dist/exports/StyleSheet */"oWB5"),m="/media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/CrossFadeIcon.js",y=function(e){function t(){return r()(this,t),l()(this,u()(t).apply(this,arguments))}return p()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.activeOpacity,a=e.inactiveOpacity,r=e.activeTintColor,i=e.inactiveTintColor,o=e.renderIcon,s=e.horizontal,l=e.style;return f.a.createElement(g.a,{style:l,__source:{fileName:m,lineNumber:33}},f.a.createElement(h.a.View,{style:[_.icon,{opacity:n}],__source:{fileName:m,lineNumber:34}},o({route:t,focused:!0,horizontal:s,tintColor:r})),f.a.createElement(h.a.View,{style:[_.icon,{opacity:a}],__source:{fileName:m,lineNumber:42}},o({route:t,focused:!1,horizontal:s,tintColor:i})))}}]),t}(f.a.Component),_=v.a.create({icon:{position:"absolute",alignSelf:"center",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",minWidth:25}})},BrfV:
/*!************************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/utils/createTabNavigator.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/index.js (referenced with cjs require) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var a=n(/*! @babel/runtime/helpers/extends */"xkKw"),r=n.n(a),i=n(/*! @babel/runtime/helpers/defineProperty */"s0qe"),o=n.n(i),s=n(/*! @babel/runtime/helpers/classCallCheck */"KrBk"),l=n.n(s),c=n(/*! @babel/runtime/helpers/createClass */"tQ7g"),u=n.n(c),d=n(/*! @babel/runtime/helpers/possibleConstructorReturn */"BbWu"),p=n.n(d),b=n(/*! @babel/runtime/helpers/getPrototypeOf */"uBYy"),f=n.n(b),h=n(/*! @babel/runtime/helpers/inherits */"7Qk5"),g=n.n(h),v=n(/*! react */"pEjj"),m=n(/*! @react-navigation/core */"PI76"),y="/media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/utils/createTabNavigator.js";function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function w(e){var t=function(t){function n(){var e,t;l()(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=p()(this,(e=f()(n)).call.apply(e,[this].concat(r))))._renderScene=function(e){var n=e.route,a=t.props,r=a.screenProps,i=a.descriptors[n.key],o=i.getComponent();return v.createElement(m.SceneView,{screenProps:r,navigation:i.navigation,component:o,__source:{fileName:y,lineNumber:39}})},t._renderIcon=function(e){var n=e.route,a=e.focused,r=void 0===a||a,i=e.tintColor,o=e.horizontal,s=void 0!==o&&o,l=t.props.descriptors[n.key].options;return l.tabBarIcon?"function"==typeof l.tabBarIcon?l.tabBarIcon({focused:r,tintColor:i,horizontal:s}):l.tabBarIcon:null},t._getButtonComponent=function(e){var n=e.route,a=t.props.descriptors[n.key].options;return a.tabBarButtonComponent?a.tabBarButtonComponent:null},t._getLabelText=function(e){var n=e.route,a=t.props.descriptors[n.key].options;return a.tabBarLabel?a.tabBarLabel:"string"==typeof a.title?a.title:n.routeName},t._getAccessibilityLabel=function(e){var n=e.route,a=t.props.descriptors[n.key].options;if(void 0!==a.tabBarAccessibilityLabel)return a.tabBarAccessibilityLabel;var r=t._getLabelText({route:n});if("string"==typeof r){var i=t.props.navigation.state.routes;return r+", tab, "+(i.indexOf(n)+1)+" of "+i.length}},t._getTestID=function(e){var n=e.route;return t.props.descriptors[n.key].options.tabBarTestID},t._makeDefaultHandler=function(e){var n=e.route,a=e.navigation;return function(){a.isFocused()?n.hasOwnProperty("index")&&n.index>0?a.dispatch(m.StackActions.popToTop({key:n.key})):a.emit("refocus"):t._jumpTo(n.routeName)}},t._handleTabPress=function(e){var n=e.route;t._isTabPress=!0;var a=t.props.descriptors[n.key],r=a.navigation,i=a.options,o=t._makeDefaultHandler({route:n,navigation:r});i.tabBarOnPress?i.tabBarOnPress({navigation:r,defaultHandler:o}):o()},t._handleTabLongPress=function(e){var n=e.route,a=t.props.descriptors[n.key],r=a.navigation,i=a.options,o=t._makeDefaultHandler({route:n,navigation:r});i.tabBarOnLongPress?i.tabBarOnLongPress({navigation:r,defaultHandler:o}):o()},t._handleIndexChange=function(e){t._isTabPress?t._isTabPress=!1:t._jumpTo(t.props.navigation.state.routes[e].routeName)},t._handleSwipeStart=function(){t.setState({isSwiping:!0})},t._handleSwipeEnd=function(){t.setState({isSwiping:!1})},t._jumpTo=function(e){return t.props.navigation.dispatch(m.NavigationActions.navigate({routeName:e}))},t._isTabPress=!1,t}return g()(n,t),u()(n,[{key:"render",value:function(){var t=this.props,n=t.descriptors,a=t.navigation,i=t.screenProps,s=a.state,l=n[s.routes[s.index].key],c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.props.navigationConfig,{},l.options);return v.createElement(e,r()({},c,{getLabelText:this._getLabelText,getButtonComponent:this._getButtonComponent,getAccessibilityLabel:this._getAccessibilityLabel,getTestID:this._getTestID,renderIcon:this._renderIcon,renderScene:this._renderScene,onIndexChange:this._handleIndexChange,onTabPress:this._handleTabPress,onTabLongPress:this._handleTabLongPress,navigation:a,descriptors:n,screenProps:i,__source:{fileName:y,lineNumber:197}}))}}]),n}(v.Component);return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(m.TabRouter)(e,n);return Object(m.createNavigator)(t,a,n)}}},Hd1m:
/*!***********************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/MaterialTopTabBar.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/index.js (referenced with cjs require) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return L});var a=n(/*! @babel/runtime/helpers/extends */"xkKw"),r=n.n(a),i=n(/*! @babel/runtime/helpers/objectWithoutProperties */"iF9F"),o=n.n(i),s=n(/*! @babel/runtime/helpers/toConsumableArray */"1HFh"),l=n.n(s),c=n(/*! @babel/runtime/helpers/classCallCheck */"KrBk"),u=n.n(c),d=n(/*! @babel/runtime/helpers/createClass */"tQ7g"),p=n.n(d),b=n(/*! @babel/runtime/helpers/possibleConstructorReturn */"BbWu"),f=n.n(b),h=n(/*! @babel/runtime/helpers/getPrototypeOf */"uBYy"),g=n.n(h),v=n(/*! @babel/runtime/helpers/inherits */"7Qk5"),m=n.n(v),y=n(/*! react */"pEjj"),_=n(/*! react-native-web/dist/exports/Animated */"7/yl"),w=n(/*! react-native-web/dist/exports/StyleSheet */"oWB5"),B=n(/*! react-native-tab-view */"/P0a"),T=n(/*! ./CrossFadeIcon */"07No"),k="/media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/MaterialTopTabBar.js",L=function(e){function t(){var e,n;u()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=f()(this,(e=g()(t)).call.apply(e,[this].concat(r))))._renderLabel=function(e){var t=e.route,a=n.props,r=a.position,i=a.navigation,o=a.activeTintColor,s=a.inactiveTintColor,c=a.showLabel,u=a.upperCaseLabel,d=a.labelStyle,p=a.allowFontScaling;if(!1===c)return null;var b=i.state.routes,f=b.indexOf(t),h=f===i.state.index,g=[-1].concat(l()(b.map(function(e,t){return t}))),v=g.map(function(e){return e===f?o:s}),m=r.interpolate({inputRange:g,outputRange:v}),w=h?o:s,B=n.props.getLabelText({route:t});return"string"==typeof B?y.createElement(_.a.Text,{style:[S.label,{color:m},d],allowFontScaling:p,__source:{fileName:k,lineNumber:82}},u?B.toUpperCase():B):"function"==typeof B?B({focused:h,tintColor:w}):B},n._renderIcon=function(e){var t=e.route,a=n.props,r=a.position,i=a.navigation,o=a.activeTintColor,s=a.inactiveTintColor,c=a.renderIcon,u=a.showIcon,d=a.iconStyle;if(!1===u)return null;var p=i.state.routes.indexOf(t),b=[-1].concat(l()(i.state.routes.map(function(e,t){return t}))),f=r.interpolate({inputRange:b,outputRange:b.map(function(e){return e===p?1:0})}),h=r.interpolate({inputRange:b,outputRange:b.map(function(e){return e===p?0:1})});return y.createElement(T.a,{route:t,navigation:i,activeOpacity:f,inactiveOpacity:h,activeTintColor:o,inactiveTintColor:s,renderIcon:c,style:[S.icon,d],__source:{fileName:k,lineNumber:126}})},n}return m()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.navigation,n=(e.renderIcon,e.getLabelText,o()(e,["navigation","renderIcon","getLabelText"]));return y.createElement(B.b,r()({},n,{navigationState:t.state,renderIcon:this._renderIcon,renderLabel:this._renderLabel,__source:{fileName:k,lineNumber:145}}))}}]),t}(y.PureComponent);L.defaultProps={activeTintColor:"#fff",inactiveTintColor:"#fff",showIcon:!1,showLabel:!0,upperCaseLabel:!0,allowFontScaling:!0};var S=w.a.create({icon:{height:24,width:24},label:{textAlign:"center",fontSize:13,margin:8,backgroundColor:"transparent"}})},Hjak:
/*!*************************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/ResourceSavingScene.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";n.d(t,"a",function(){return T});var a=n(/*! @babel/runtime/helpers/extends */"xkKw"),r=n.n(a),i=n(/*! @babel/runtime/helpers/objectWithoutProperties */"iF9F"),o=n.n(i),s=n(/*! @babel/runtime/helpers/classCallCheck */"KrBk"),l=n.n(s),c=n(/*! @babel/runtime/helpers/createClass */"tQ7g"),u=n.n(c),d=n(/*! @babel/runtime/helpers/possibleConstructorReturn */"BbWu"),p=n.n(d),b=n(/*! @babel/runtime/helpers/getPrototypeOf */"uBYy"),f=n.n(b),h=n(/*! @babel/runtime/helpers/inherits */"7Qk5"),g=n.n(h),v=n(/*! react */"pEjj"),m=n(/*! react-native-web/dist/exports/Platform */"EFQH"),y=n(/*! react-native-web/dist/exports/StyleSheet */"oWB5"),_=n(/*! react-native-web/dist/exports/View */"AthC"),w=n(/*! react-native-screens */"yOdr"),B="/media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/ResourceSavingScene.js",T=function(e){function t(){return l()(this,t),p()(this,f()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){if(w.c&&Object(w.c)()){var e=this.props,t=e.isVisible,n=o()(e,["isVisible"]);return v.createElement(w.a,r()({active:t?1:0},n,{__source:{fileName:B,lineNumber:21}}))}var a=this.props,i=a.isVisible,s=a.children,l=a.style,c=o()(a,["isVisible","children","style"]);return v.createElement(_.a,r()({style:[k.container,l,{opacity:i?1:0}],collapsable:!1,removeClippedSubviews:"ios"!==m.a.OS||!i,pointerEvents:i?"auto":"none"},c,{__source:{fileName:B,lineNumber:26}}),v.createElement(_.a,{style:i?k.attached:k.detached,__source:{fileName:B,lineNumber:37}},s))}}]),t}(v.Component),k=y.a.create({container:{flex:1,overflow:"hidden"},attached:{flex:1},detached:{flex:1,top:3e3}})},QgDN:
/*!******************************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/BottomTabBar.js + 1 modules ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/@react-navigation/native/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react-native-web/dist/exports/Animated/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react-native-web/dist/exports/Dimensions/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react-native-web/dist/exports/Keyboard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react-native-web/dist/exports/Platform/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react-native-web/dist/exports/StyleSheet/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react-native-web/dist/exports/View/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/CrossFadeIcon.js because of /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/MaterialTopTabBar.js */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /media/riz/data/Projects/dashpier/node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n("xkKw"),r=n.n(a),i=n("iF9F"),o=n.n(i),s=n("KrBk"),l=n.n(s),c=n("tQ7g"),u=n.n(c),d=n("BbWu"),p=n.n(d),b=n("uBYy"),f=n.n(b),h=n("7Qk5"),g=n.n(h),v=n("pEjj"),m=n.n(v),y=n("7/yl"),_=n("PGmr"),w=n("oWB5"),B=n("AthC"),T=n("qxvT"),k=n("EFQH"),L=n("MRIS"),S=n("07No"),C=n("blRH"),x=n("cD/7"),P=n.n(x),N="/media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/utils/withDimensions.js",I=function(e){return e.width>e.height};var E="/media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/views/BottomTabBar.js",j=parseInt(k.a.Version,10),O="ios"===k.a.OS,A=j>=11&&O,D=125,H=function(e){function t(){return l()(this,t),p()(this,f()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.onPress,n=e.onLongPress,a=e.testID,i=e.accessibilityLabel,s=e.accessibilityRole,l=e.accessibilityStates,c=o()(e,["onPress","onLongPress","testID","accessibilityLabel","accessibilityRole","accessibilityStates"]);return m.a.createElement(_.a,{onPress:t,onLongPress:n,testID:a,hitSlop:{left:15,right:15,top:0,bottom:5},accessibilityLabel:i,accessibilityRole:s,accessibilityStates:l,__source:{fileName:E,lineNumber:75}},m.a.createElement(B.a,r()({},c,{__source:{fileName:E,lineNumber:84}})))}}]),t}(m.a.Component),F=function(e){function t(){var e,n;l()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=p()(this,(e=f()(t)).call.apply(e,[this].concat(r)))).state={layout:{height:0,width:0},keyboard:!1,visible:new y.a.Value(1)},n._handleKeyboardShow=function(){return n.setState({keyboard:!0},function(){return y.a.timing(n.state.visible,{toValue:0,duration:150,useNativeDriver:!0}).start()})},n._handleKeyboardHide=function(){return y.a.timing(n.state.visible,{toValue:1,duration:100,useNativeDriver:!0}).start(function(){n.setState({keyboard:!1})})},n._handleLayout=function(e){var t=n.state.layout,a=e.nativeEvent.layout,r=a.height,i=a.width;r===t.height&&i===t.width||n.setState({layout:{height:r,width:i}})},n._renderLabel=function(e){var t=e.route,a=e.focused,r=n.props,i=r.activeTintColor,o=r.inactiveTintColor,s=r.labelStyle,l=r.showLabel,c=r.showIcon,u=r.allowFontScaling;if(!1===l)return null;var d=n.props.getLabelText({route:t}),p=a?i:o;return"string"==typeof d?m.a.createElement(y.a.Text,{numberOfLines:1,style:[z.label,{color:p},c&&n._shouldUseHorizontalLabels()?z.labelBeside:z.labelBeneath,s],allowFontScaling:u,__source:{fileName:E,lineNumber:183}},d):"function"==typeof d?d({route:t,focused:a,tintColor:p}):d},n._renderIcon=function(e){var t=e.route,a=e.focused,r=n.props,i=r.navigation,o=r.activeTintColor,s=r.inactiveTintColor,l=r.renderIcon,c=r.showIcon,u=r.showLabel;if(!1===c)return null;var d=n._shouldUseHorizontalLabels(),p=a?1:0,b=a?0:1;return m.a.createElement(S.a,{route:t,horizontal:d,navigation:i,activeOpacity:p,inactiveOpacity:b,activeTintColor:o,inactiveTintColor:s,renderIcon:l,style:[z.iconWithExplicitHeight,!1===u&&!d&&z.iconWithoutLabel,!1!==u&&!d&&z.iconWithLabel],__source:{fileName:E,lineNumber:226}})},n._shouldUseHorizontalLabels=function(){var e=n.props.navigation.state.routes,t=n.props,a=t.isLandscape,r=t.dimensions,i=t.adaptive,o=t.tabStyle;if(!i)return!1;if(k.a.isPad){var s=D,l=w.a.flatten(o);return l&&("number"==typeof l.width?s=l.width:"number"==typeof l.maxWidth&&(s=l.maxWidth)),e.length*s<=r.width}return a},n}return g()(t,e),u()(t,[{key:"componentDidMount",value:function(){"ios"===k.a.OS?(T.a.addListener("keyboardWillShow",this._handleKeyboardShow),T.a.addListener("keyboardWillHide",this._handleKeyboardHide)):(T.a.addListener("keyboardDidShow",this._handleKeyboardShow),T.a.addListener("keyboardDidHide",this._handleKeyboardHide))}},{key:"componentWillUnmount",value:function(){"ios"===k.a.OS?(T.a.removeListener("keyboardWillShow",this._handleKeyboardShow),T.a.removeListener("keyboardWillHide",this._handleKeyboardHide)):(T.a.removeListener("keyboardDidShow",this._handleKeyboardShow),T.a.removeListener("keyboardDidHide",this._handleKeyboardHide))}},{key:"render",value:function(){var e=this,t=this.props,n=t.navigation,a=t.keyboardHidesTabBar,r=t.activeBackgroundColor,i=t.inactiveBackgroundColor,o=t.onTabPress,s=t.onTabLongPress,l=t.safeAreaInset,c=t.style,u=t.tabStyle,d=n.state.routes,p=[z.tabBar,this._shouldUseHorizontalLabels()&&!k.a.isPad?z.tabBarCompact:z.tabBarRegular,c];return m.a.createElement(y.a.View,{style:[z.container,a?{transform:[{translateY:this.state.visible.interpolate({inputRange:[0,1],outputRange:[this.state.layout.height,0]})}],position:this.state.keyboard?"absolute":null}:null],pointerEvents:a&&this.state.keyboard?"none":"auto",onLayout:this._handleLayout,__source:{fileName:E,lineNumber:295}},m.a.createElement(L.SafeAreaView,{style:p,forceInset:l,__source:{fileName:E,lineNumber:320}},d.map(function(t,a){var l=a===n.state.index,c={route:t,focused:l},d=e.props.getAccessibilityLabel({route:t}),p=e.props.getAccessibilityRole({route:t}),b=e.props.getAccessibilityStates(c),f=e.props.getTestID({route:t}),h=l?r:i,g=e.props.getButtonComponent({route:t})||H;return m.a.createElement(g,{key:t.key,onPress:function(){return o({route:t})},onLongPress:function(){return s({route:t})},testID:f,accessibilityLabel:d,accessibilityRole:p,accessibilityStates:b,style:[z.tab,{backgroundColor:h},e._shouldUseHorizontalLabels()?z.tabLandscape:z.tabPortrait,u],__source:{fileName:E,lineNumber:347}},e._renderIcon(c),e._renderLabel(c))})))}}]),t}(m.a.Component);F.defaultProps={keyboardHidesTabBar:!1,activeTintColor:"#007AFF",activeBackgroundColor:"transparent",inactiveTintColor:"#8E8E93",inactiveBackgroundColor:"transparent",showLabel:!0,showIcon:!0,allowFontScaling:!0,adaptive:A,safeAreaInset:{bottom:"always",top:"never"}};var z=w.a.create({tabBar:{backgroundColor:"#fff",borderTopWidth:w.a.hairlineWidth,borderTopColor:"rgba(0, 0, 0, .3)",flexDirection:"row"},container:{left:0,right:0,bottom:0,elevation:8},tabBarCompact:{height:29},tabBarRegular:{height:49},tab:{flex:1,alignItems:O?"center":"stretch"},tabPortrait:{justifyContent:"flex-end",flexDirection:"column"},tabLandscape:{justifyContent:"center",flexDirection:"row"},iconWithoutLabel:{flex:1},iconWithLabel:{flex:1},iconWithExplicitHeight:{height:k.a.isPad?49:29},label:{textAlign:"center",backgroundColor:"transparent"},labelBeneath:{fontSize:11,marginBottom:1.5},labelBeside:{fontSize:12,marginLeft:15}});t.default=function(e){var t=C.a.get("window"),n=t.width,a=t.height,i=function(t){function i(){var e,t;l()(this,i);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=p()(this,(e=f()(i)).call.apply(e,[this].concat(o)))).state={dimensions:{width:n,height:a},isLandscape:I({width:n,height:a})},t.handleOrientationChange=function(e){var n=e.window,a=I(n);t.setState({isLandscape:a})},t}return g()(i,t),u()(i,[{key:"componentDidMount",value:function(){C.a.addEventListener("change",this.handleOrientationChange)}},{key:"componentWillUnmount",value:function(){C.a.removeEventListener("change",this.handleOrientationChange)}},{key:"render",value:function(){return v.createElement(e,r()({},this.props,this.state,{__source:{fileName:N,lineNumber:32}}))}}]),i}(v.Component);return i.displayName="withDimensions("+e.displayName+")",P()(i,e)}(F)},V01c:
/*!*****************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports={get createBottomTabNavigator(){return n(/*! ./navigators/createBottomTabNavigator */"cEY8").default},get createMaterialTopTabNavigator(){return n(/*! ./navigators/createMaterialTopTabNavigator */"fpva").default},get BottomTabBar(){return n(/*! ./views/BottomTabBar */"QgDN").default},get MaterialTopTabBar(){return n(/*! ./views/MaterialTopTabBar */"Hd1m").default},get createTabNavigator(){return n(/*! ./utils/createTabNavigator */"BrfV").default}}},cEY8:
/*!***********************************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/navigators/createBottomTabNavigator.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/index.js (referenced with cjs require) */function(e,t,n){"use strict";n.r(t);var a=n(/*! @babel/runtime/helpers/toConsumableArray */"1HFh"),r=n.n(a),i=n(/*! @babel/runtime/helpers/extends */"xkKw"),o=n.n(i),s=n(/*! @babel/runtime/helpers/classCallCheck */"KrBk"),l=n.n(s),c=n(/*! @babel/runtime/helpers/createClass */"tQ7g"),u=n.n(c),d=n(/*! @babel/runtime/helpers/possibleConstructorReturn */"BbWu"),p=n.n(d),b=n(/*! @babel/runtime/helpers/getPrototypeOf */"uBYy"),f=n.n(b),h=n(/*! @babel/runtime/helpers/inherits */"7Qk5"),g=n.n(h),v=n(/*! react */"pEjj"),m=n(/*! react-native-web/dist/exports/View */"AthC"),y=n(/*! react-native-web/dist/exports/StyleSheet */"oWB5"),_=n(/*! react-lifecycles-compat */"L3W6"),w=n(/*! react-native-screens */"yOdr"),B=n(/*! ../utils/createTabNavigator */"BrfV"),T=n(/*! ../views/BottomTabBar */"QgDN"),k=n(/*! ../views/ResourceSavingScene */"Hjak"),L="/media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/navigators/createBottomTabNavigator.js",S=function(e){function t(){var e,n;l()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=p()(this,(e=f()(t)).call.apply(e,[this].concat(r)))).state={loaded:[n.props.navigation.state.index]},n._renderTabBar=function(){var e=n.props,t=e.tabBarComponent,a=void 0===t?T.default:t,r=e.tabBarOptions,i=e.navigation,s=e.screenProps,l=e.getLabelText,c=e.getAccessibilityLabel,u=e.getButtonComponent,d=e.getAccessibilityRole,p=e.getAccessibilityStates,b=e.getTestID,f=e.renderIcon,h=e.onTabPress,g=e.onTabLongPress,m=n.props.descriptors,y=n.props.navigation.state;return!1===m[y.routes[y.index].key].options.tabBarVisible?null:v.createElement(a,o()({},r,{jumpTo:n._jumpTo,navigation:i,screenProps:s,onTabPress:h,onTabLongPress:g,getLabelText:l,getButtonComponent:u,getAccessibilityLabel:c,getAccessibilityRole:d,getAccessibilityStates:p,getTestID:b,renderIcon:f,__source:{fileName:L,lineNumber:78}}))},n._jumpTo=function(e){var t=n.props,a=t.navigation;(0,t.onIndexChange)(a.state.routes.findIndex(function(t){return t.key===e}))},n}return g()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.navigation,n=e.renderScene,a=e.lazy,r=t.state.routes,i=this.state.loaded;return v.createElement(m.a,{style:C.container,__source:{fileName:L,lineNumber:110}},v.createElement(w.b,{style:C.pages,__source:{fileName:L,lineNumber:111}},r.map(function(e,r){if(a&&!i.includes(r))return null;var o=t.state.index===r;return v.createElement(k.a,{key:e.key,style:y.a.absoluteFill,isVisible:o,__source:{fileName:L,lineNumber:121}},n({route:e}))})),this._renderTabBar())}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.navigation.state.index;return{loaded:t.loaded.includes(n)?t.loaded:[].concat(r()(t.loaded),[n])}}}]),t}(v.PureComponent);S.defaultProps={lazy:!0,getAccessibilityRole:function(){return"button"},getAccessibilityStates:function(e){return e.focused?["selected"]:[]}},Object(_.a)(S);var C=y.a.create({container:{flex:1,overflow:"hidden"},pages:{flex:1}});t.default=Object(B.default)(S)},fpva:
/*!****************************************************************************************************************************!*\
  !*** /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/navigators/createMaterialTopTabNavigator.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/index.js (referenced with cjs require) */function(e,t,n){"use strict";n.r(t);var a=n(/*! @babel/runtime/helpers/objectWithoutProperties */"iF9F"),r=n.n(a),i=n(/*! @babel/runtime/helpers/toConsumableArray */"1HFh"),o=n.n(i),s=n(/*! @babel/runtime/helpers/extends */"xkKw"),l=n.n(s),c=n(/*! @babel/runtime/helpers/classCallCheck */"KrBk"),u=n.n(c),d=n(/*! @babel/runtime/helpers/createClass */"tQ7g"),p=n.n(d),b=n(/*! @babel/runtime/helpers/possibleConstructorReturn */"BbWu"),f=n.n(b),h=n(/*! @babel/runtime/helpers/getPrototypeOf */"uBYy"),g=n.n(h),v=n(/*! @babel/runtime/helpers/inherits */"7Qk5"),m=n.n(v),y=n(/*! react */"pEjj"),_=n(/*! react-native-web/dist/exports/View */"AthC"),w=n(/*! react-native-web/dist/exports/Platform */"EFQH"),B=n(/*! react-lifecycles-compat */"L3W6"),T=n(/*! react-native-tab-view */"/P0a"),k=n(/*! ../utils/createTabNavigator */"BrfV"),L=n(/*! ../views/MaterialTopTabBar */"Hd1m"),S=n(/*! ../views/ResourceSavingScene */"Hjak"),C="/media/riz/data/Projects/dashpier/node_modules/react-navigation-tabs/src/navigators/createMaterialTopTabNavigator.js",x=function(e){function t(){var e,n;u()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=f()(this,(e=g()(t)).call.apply(e,[this].concat(r)))).state={index:0,isSwiping:!1,loaded:[n.props.navigation.state.index],transitioningFromIndex:null},n._renderIcon=function(e){var t=e.focused,a=e.route,r=e.tintColor,i=n.props.descriptors[a.key].options;return i.tabBarIcon?"function"==typeof i.tabBarIcon?i.tabBarIcon({tintColor:r,focused:t}):i.tabBarIcon:null},n._renderTabBar=function(e){var t=n.props.navigation.state,a=t.routes[t.index],r=n.props.descriptors[a.key].options,i=null==r.tabBarVisible||r.tabBarVisible,o=n.props,s=o.tabBarComponent,c=void 0===s?L.default:s,u=o.tabBarPosition,d=o.tabBarOptions;return null!==c&&i?y.createElement(c,l()({},d,e,{tabBarPosition:u,screenProps:n.props.screenProps,navigation:n.props.navigation,getLabelText:n.props.getLabelText,getAccessibilityLabel:n.props.getAccessibilityLabel,getTestID:n.props.getTestID,renderIcon:n._renderIcon,onTabPress:n.props.onTabPress,onTabLongPress:n.props.onTabLongPress,__source:{fileName:C,lineNumber:102}})):null},n._renderPanPager=function(e){return y.createElement(T.a,l()({},e,{__source:{fileName:C,lineNumber:118}}))},n._handleAnimationEnd=function(){n.props.lazy&&n.setState({transitioningFromIndex:null,isSwiping:!1})},n._handleSwipeStart=function(){var e=n.props,t=e.navigation;e.lazy&&n.setState({isSwiping:!0,loaded:o()(new Set([].concat(o()(n.state.loaded),[Math.max(t.state.index-1,0),Math.min(t.state.index+1,t.state.routes.length-1)])))})},n._handleIndexChange=function(e){var t=n.props,a=t.animationEnabled,r=t.navigation,i=t.onIndexChange;t.lazy&&a&&n.setState({transitioningFromIndex:r.state.index||0}),i(e)},n._mustBeVisible=function(e){var t=e.index,a=e.focused,r=n.props,i=r.animationEnabled,o=r.navigation,s=n.state,l=s.isSwiping,c=s.transitioningFromIndex;if(l&&(o.state.index===t-1||o.state.index===t+1))return!0;return!(!i||c!==t)||a},n._renderScene=function(e){var t=e.route,a=n.props,r=a.renderScene,i=a.descriptors,o=a.lazy,s=a.optimizationsEnabled;if(o){var l=n.state.loaded,c=n.props.navigation.state.routes.findIndex(function(e){return e.key===t.key}),u=i[t.key].navigation,d=n._mustBeVisible({index:c,focused:u.isFocused()});if(!l.includes(c)&&!d)return y.createElement(_.a,{__source:{fileName:C,lineNumber:200}});if(s)return y.createElement(S.a,{isVisible:d,__source:{fileName:C,lineNumber:205}},r({route:t}))}return r({route:t})},n}return m()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.navigation,n=e.animationEnabled,a=(e.renderScene,e.onIndexChange,r()(e,["navigation","animationEnabled","renderScene","onIndexChange"])),i=a.renderPager,o=this.props.navigation.state,s=o.routes[o.index],c=this.props.descriptors[s.key].options,u=null==c.swipeEnabled?this.props.swipeEnabled:c.swipeEnabled;return"function"==typeof u&&(u=u(o)),!1===n&&!1===u&&(i=this._renderPanPager),y.createElement(T.c,l()({},a,{navigationState:t.state,animationEnabled:n,swipeEnabled:u,onAnimationEnd:this._handleAnimationEnd,onIndexChange:this._handleIndexChange,onSwipeStart:this._handleSwipeStart,renderPager:i,renderTabBar:this._renderTabBar,renderScene:this._renderScene,__source:{fileName:C,lineNumber:248}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.navigation.state.index;return t.index===n?null:{loaded:t.loaded.includes(n)?t.loaded:[].concat(o()(t.loaded),[n]),index:n}}}]),t}(y.PureComponent);x.defaultProps={initialLayout:w.a.select({android:{width:1,height:0}}),animationEnabled:!0,lazy:!1,optimizationsEnabled:!1},Object(B.a)(x),t.default=Object(k.default)(x)}}]);
//# sourceMappingURL=../../a482ae10413f5be87fcd.map