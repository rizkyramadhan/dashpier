(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{159:
/*!***************************************************************************************************************!*\
  !*** /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/utils/DrawerGestureContext.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/index.js (referenced with cjs require) */function(e,r,t){"use strict";t.r(r);var n=t(/*! react */0),i=t.n(n);r.default=i.a.createContext(null)},198:
/*!*********************************************************************************************************!*\
  !*** /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/routers/DrawerRouter.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/index.js (referenced with cjs require) */function(e,r,t){"use strict";t.r(r);var n=t(/*! @babel/runtime/helpers/defineProperty */16),i=t.n(n),a=t(/*! @react-navigation/core */17),o=t(/*! ./DrawerActions */37);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(t,!0).forEach(function(r){i()(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function l(e,r,t){return e.hasOwnProperty(r)&&void 0!==e[r]?e:(e[r]=t,e)}var u=function e(r){return r.routes&&r.routes[r.index]?e(r.routes[r.index]):r.key};r.default=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=l(r=l(r=c({},r),"resetOnBlur",!!r.unmountInactiveRoutes||!!r.resetOnBlur),"backBehavior","initialRoute");var t=Object(a.SwitchRouter)(e,r),n=-1,i=function(){return++n};return c({},t,{getActionCreators:function(e,r){return c({openDrawer:function(){return o.default.openDrawer({key:r})},closeDrawer:function(){return o.default.closeDrawer({key:r})},toggleDrawer:function(){return o.default.toggleDrawer({key:r})}},t.getActionCreators(e,r))},getStateForAction:function(e,r){if(!r)return c({},t.getStateForAction(e,void 0),{isDrawerOpen:!1,isDrawerIdle:!0,drawerMovementDirection:null,openId:i(),closeId:i(),toggleId:i()});if(null==e.key||e.key===r.key){if(e.type===o.default.DRAWER_CLOSED)return c({},r,{isDrawerOpen:!1,isDrawerIdle:!0,drawerMovementDirection:null});if(e.type===o.default.DRAWER_OPENED)return c({},r,{isDrawerOpen:!0,isDrawerIdle:!0,drawerMovementDirection:null});if(e.type===o.default.CLOSE_DRAWER)return c({},r,{closeId:i()});if(e.type===o.default.MARK_DRAWER_SETTLING)return c({},r,{isDrawerIdle:!1,drawerMovementDirection:e.willShow?"opening":"closing"});if(e.type===o.default.MARK_DRAWER_ACTIVE)return c({},r,{isDrawerIdle:!1,drawerMovementDirection:null});if(e.type===o.default.MARK_DRAWER_IDLE)return c({},r,{isDrawerIdle:!0,drawerMovementDirection:null});if(e.type===a.NavigationActions.BACK&&(r.isDrawerOpen||!r.isDrawerIdle)&&"closing"!==r.drawerMovementDirection)return c({},r,{closeId:i()});if(e.type===o.default.OPEN_DRAWER)return c({},r,{openId:i()});if(e.type===o.default.TOGGLE_DRAWER)return c({},r,{toggleId:i()})}var n=t.getStateForAction(e,r);return null===n?null:n!==r?u(n)===u(r)||!r.isDrawerOpen&&"closing"===r.drawerMovementDirection?n:c({},n,{closeId:i()}):r}})}},199:
/*!*****************************************************************************************************************!*\
  !*** /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/DrawerView.js + 1 modules ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/toConsumableArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@react-navigation/core/lib/module/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-gesture-handler/DrawerLayout.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-screens/src/screens.web.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/Dimensions/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/Platform/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/StyleSheet/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/View/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/routers/DrawerActions.js (<- Module is referenced from these modules with unsupported syntax: /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/index.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/utils/DrawerGestureContext.js (<- Module is referenced from these modules with unsupported syntax: /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/index.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/DrawerSidebar.js (<- Module is referenced from these modules with unsupported syntax: /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/index.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,r,t){"use strict";t.r(r);var n=t(26),i=t.n(n),a=t(11),o=t.n(a),s=t(4),c=t.n(s),l=t(6),u=t.n(l),p=t(9),d=t.n(p),f=t(8),g=t.n(f),v=t(10),w=t.n(v),m=t(0),h=t.n(m),y=t(27),D=t(3),_=t(17),E=t(95),b=t(42),R=t(37),O=t(202),C=t(159),N=t(18),A=t.n(N),P=t(7),I=t(2),k="/Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/ResourceSavingScene.js",S=function(e){function r(){return c()(this,r),d()(this,g()(r).apply(this,arguments))}return w()(r,e),u()(r,[{key:"render",value:function(){if(b.c&&Object(b.c)()){var e=this.props,r=e.isVisible,t=A()(e,["isVisible"]);return m.createElement(b.a,o()({active:r?1:0},t,{__source:{fileName:k,lineNumber:12}}))}var n=this.props,i=n.isVisible,a=n.children,s=n.style,c=A()(n,["isVisible","children","style"]);return m.createElement(I.a,o()({style:[W.container,s],collapsable:!1,removeClippedSubviews:"ios"!==P.a.OS||!i,pointerEvents:i?"auto":"none"},c,{__source:{fileName:k,lineNumber:16}}),m.createElement(I.a,{style:i?W.attached:W.detached,__source:{fileName:k,lineNumber:20}},a))}}]),r}(m.Component),W=D.a.create({container:{flex:1,overflow:"hidden"},attached:{flex:1},detached:{flex:1,top:3e3}});t.d(r,"default",function(){return L});var j="/Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/DrawerView.js",L=function(e){function r(){var e,t;c()(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=d()(this,(e=g()(r)).call.apply(e,[this].concat(i)))).state={loaded:[t.props.navigation.state.index],drawerWidth:"function"==typeof t.props.navigationConfig.drawerWidth?t.props.navigationConfig.drawerWidth():t.props.navigationConfig.drawerWidth},t.drawerGestureRef=h.a.createRef(),t._handleDrawerStateChange=function(e,r){"Idle"===e?t.props.navigation.state.isDrawerIdle||t.props.navigation.dispatch({type:R.default.MARK_DRAWER_IDLE,key:t.props.navigation.state.key}):"Settling"===e?t.props.navigation.dispatch({type:R.default.MARK_DRAWER_SETTLING,key:t.props.navigation.state.key,willShow:r}):t.props.navigation.state.isDrawerIdle&&t.props.navigation.dispatch({type:R.default.MARK_DRAWER_ACTIVE,key:t.props.navigation.state.key})},t._handleDrawerOpen=function(){t.props.navigation.dispatch({type:R.default.DRAWER_OPENED,key:t.props.navigation.state.key})},t._handleDrawerClose=function(){t.props.navigation.dispatch({type:R.default.DRAWER_CLOSED,key:t.props.navigation.state.key})},t._updateWidth=function(){var e="function"==typeof t.props.navigationConfig.drawerWidth?t.props.navigationConfig.drawerWidth():t.props.navigationConfig.drawerWidth;t.state.drawerWidth!==e&&t.setState({drawerWidth:e})},t._renderNavigationView=function(e){return h.a.createElement(C.default.Provider,{value:t.drawerGestureRef,__source:{fileName:j,lineNumber:122}},h.a.createElement(O.default,o()({screenProps:t.props.screenProps,drawerOpenProgress:e,navigation:t.props.navigation,descriptors:t.props.descriptors,contentComponent:t.props.navigationConfig.contentComponent,contentOptions:t.props.navigationConfig.contentOptions,drawerPosition:t.props.navigationConfig.drawerPosition,style:t.props.navigationConfig.style},t.props.navigationConfig,{__source:{fileName:j,lineNumber:123}})))},t._renderContent=function(){var e=t.props,r=e.lazy,n=e.navigation,i=t.state.loaded,a=n.state.routes;if(t.props.navigationConfig.unmountInactiveRoutes){var o=n.state.routes[n.state.index].key,s=t.props.descriptors[o];return h.a.createElement(_.SceneView,{navigation:s.navigation,screenProps:t.props.screenProps,component:s.getComponent(),__source:{fileName:j,lineNumber:136}})}return h.a.createElement(b.b,{style:M.pages,__source:{fileName:j,lineNumber:138}},a.map(function(e,a){if(r&&!i.includes(a))return null;var o=n.state.index===a,s=t.props.descriptors[e.key];return h.a.createElement(S,{key:e.key,style:[D.a.absoluteFill,{opacity:o?1:0}],isVisible:o,__source:{fileName:j,lineNumber:148}},h.a.createElement(_.SceneView,{navigation:s.navigation,screenProps:t.props.screenProps,component:s.getComponent(),__source:{fileName:j,lineNumber:149}}))}))},t._setDrawerGestureRef=function(e){t.drawerGestureRef.current=e},t}return w()(r,e),u()(r,[{key:"componentDidMount",value:function(){y.a.addEventListener("change",this._updateWidth)}},{key:"componentDidUpdate",value:function(e){var r=this,t=this.props.navigation.state,n=t.openId,i=t.closeId,a=t.toggleId,o=t.isDrawerOpen,s=e.navigation.state,c=[s.openId,s.closeId,s.toggleId];[n,i,a].filter(function(e){return!c.includes(e)}).sort(function(e,r){return e>r}).forEach(function(e){e===n?r._drawer.openDrawer():e===i?r._drawer.closeDrawer():e===a&&(o?r._drawer.closeDrawer():r._drawer.openDrawer())})}},{key:"componentWillUnmount",value:function(){y.a.removeEventListener("change",this._updateWidth)}},{key:"render",value:function(){var e=this,r=this.props.navigation,t=r.state.routes[r.state.index].key,n=this.props.descriptors[t].options.drawerLockMode;return h.a.createElement(E.a,{ref:function(r){e._drawer=r},onGestureRef:this._setDrawerGestureRef,drawerLockMode:n||this.props.screenProps&&this.props.screenProps.drawerLockMode||this.props.navigationConfig.drawerLockMode,drawerBackgroundColor:this.props.navigationConfig.drawerBackgroundColor,keyboardDismissMode:this.props.navigationConfig.keyboardDismissMode,drawerWidth:this.state.drawerWidth,onDrawerOpen:this._handleDrawerOpen,onDrawerClose:this._handleDrawerClose,onDrawerStateChanged:this._handleDrawerStateChange,useNativeAnimations:this.props.navigationConfig.useNativeAnimations,renderNavigationView:this._renderNavigationView,drawerPosition:"right"===this.props.navigationConfig.drawerPosition?E.a.positions.Right:E.a.positions.Left,drawerType:this.props.navigationConfig.drawerType,edgeWidth:this.props.navigationConfig.edgeWidth,hideStatusBar:this.props.navigationConfig.hideStatusBar,statusBarAnimation:this.props.navigationConfig.statusBarAnimation,minSwipeDistance:this.props.navigationConfig.minSwipeDistance,overlayColor:this.props.navigationConfig.overlayColor,drawerContainerStyle:this.props.navigationConfig.drawerContainerStyle,contentContainerStyle:this.props.navigationConfig.contentContainerStyle,__source:{fileName:j,lineNumber:165}},h.a.createElement(C.default.Provider,{value:this.drawerGestureRef,__source:{fileName:j,lineNumber:170}},this._renderContent()))}}],[{key:"getDerivedStateFromProps",value:function(e,r){var t=e.navigation.state.index;return{loaded:r.loaded.includes(t)?r.loaded:[].concat(i()(r.loaded),[t])}}}]),r}(h.a.PureComponent);L.defaultProps={lazy:!0};var M=D.a.create({pages:{flex:1}})},201:
/*!***************************************************************************************************************************!*\
  !*** /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/DrawerNavigatorItems.js + 1 modules ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@react-navigation/native/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/Platform/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/StyleSheet/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/Text/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/TouchableNativeFeedback/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/TouchableOpacity/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/View/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,r,t){"use strict";t.r(r);var n=t(16),i=t.n(n),a=t(0),o=t.n(a),s=t(2),c=t(14),l=t(3),u=t(30),p=t(11),d=t.n(p),f=t(18),g=t.n(f),v=t(4),w=t.n(v),m=t(6),h=t.n(m),y=t(9),D=t.n(y),_=t(8),E=t.n(_),b=t(10),R=t.n(b),O=t(7),C=t(55),N=t(33),A="/Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/TouchableItem.js",P=function(e){function r(){return w()(this,r),D()(this,E()(r).apply(this,arguments))}return R()(r,e),h()(r,[{key:"render",value:function(){if("android"===O.a.OS&&O.a.Version>=21){var e=this.props,r=e.style,t=g()(e,["style"]);return o.a.createElement(C.a,d()({},t,{style:null,background:C.a.Ripple(this.props.pressColor,this.props.borderless),__source:{fileName:A,lineNumber:32}}),o.a.createElement(s.a,{style:r,__source:{fileName:A,lineNumber:33}},o.a.Children.only(this.props.children)))}return o.a.createElement(N.a,d()({},this.props,{__source:{fileName:A,lineNumber:37}}),this.props.children)}}]),r}(o.a.Component);P.defaultProps={borderless:!1,pressColor:"rgba(0, 0, 0, .32)"};var I="/Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/DrawerNavigatorItems.js",k=function(e){var r=e.items,t=e.activeItemKey,n=e.activeTintColor,a=e.activeBackgroundColor,l=e.inactiveTintColor,p=e.inactiveBackgroundColor,d=e.getLabel,f=e.renderIcon,g=e.onItemPress,v=e.itemsContainerStyle,w=e.itemStyle,m=e.labelStyle,h=e.activeLabelStyle,y=e.inactiveLabelStyle,D=e.iconContainerStyle,_=e.drawerPosition;return o.a.createElement(s.a,{style:[S.container,v],__source:{fileName:I,lineNumber:26}},r.map(function(e,r){var v,E=t===e.key,b=E?n:l,R=E?a:p,O={route:e,index:r,focused:E,tintColor:b},C=f(O),N=d(O),A="string"==typeof N?N:void 0,k=E?h:y;return o.a.createElement(P,{key:e.key,accessible:!0,accessibilityLabel:A,onPress:function(){g({route:e,focused:E})},delayPressIn:0,__source:{fileName:I,lineNumber:36}},o.a.createElement(u.SafeAreaView,{style:[{backgroundColor:R},S.item,w],forceInset:(v={},i()(v,_,"always"),i()(v,"left"===_?"right":"left","never"),i()(v,"vertical","never"),v),__source:{fileName:I,lineNumber:39}},C?o.a.createElement(s.a,{style:[S.icon,E?null:S.inactiveIcon,D],__source:{fileName:I,lineNumber:44}},C):null,"string"==typeof N?o.a.createElement(c.a,{style:[S.label,{color:b},m,k],__source:{fileName:I,lineNumber:47}},N):N))}))};k.defaultProps={activeTintColor:"#2196f3",activeBackgroundColor:"rgba(0, 0, 0, .04)",inactiveTintColor:"rgba(0, 0, 0, .87)",inactiveBackgroundColor:"transparent"};var S=l.a.create({container:{paddingVertical:4},item:{flexDirection:"row",alignItems:"center"},icon:{marginHorizontal:16,width:24,alignItems:"center"},inactiveIcon:{opacity:.62},label:{margin:16,fontWeight:"bold"}});r.default=k},202:
/*!********************************************************************************************************************!*\
  !*** /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/DrawerSidebar.js + 1 modules ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/@react-navigation/core/lib/module/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/StyleSheet/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react-native-web/dist/exports/View/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Volumes/Data/Projects/dashpier/node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,r,t){"use strict";t.r(r);var n=t(11),i=t.n(n),a=t(4),o=t.n(a),s=t(6),c=t.n(s),l=t(9),u=t.n(l),p=t(8),d=t.n(p),f=t(10),g=t.n(f),v=t(0),w=t.n(v),m=t(3),h=t(2),y=t(17);function D(e,r,t,n,i,a,o,s){if(void 0===r)throw new Error("invariant requires an error message argument");if(!e){var c;if(void 0===r)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,n,i,a,o,s],u=0;(c=new Error(r.replace(/%s/g,function(){return l[u++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}var _="/Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/views/DrawerSidebar.js",E=function(e){function r(){var e,t;o()(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=u()(this,(e=d()(r)).call.apply(e,[this].concat(i))))._getScreenOptions=function(e){var r=t.props.descriptors[e];return D(r.options,"Cannot access screen descriptor options from drawer sidebar"),r.options},t._getLabel=function(e){var r=e.focused,n=e.tintColor,i=e.route,a=t._getScreenOptions(i.key),o=a.drawerLabel,s=a.title;return o?"function"==typeof o?o({tintColor:n,focused:r}):o:"string"==typeof s?s:i.routeName},t._renderIcon=function(e){var r=e.focused,n=e.tintColor,i=e.route,a=t._getScreenOptions(i.key).drawerIcon;return a?"function"==typeof a?a({tintColor:n,focused:r}):a:null},t._onItemPress=function(e){var r=e.route;e.focused?t.props.navigation.closeDrawer():t.props.navigation.dispatch(y.NavigationActions.navigate({routeName:r.routeName}))},t}return g()(r,e),c()(r,[{key:"render",value:function(){var e=this.props.contentComponent;if(!e)return null;var r=this.props.navigation.state;return D("number"==typeof r.index,"should be set"),w.a.createElement(h.a,{style:[b.container,this.props.style],__source:{fileName:_,lineNumber:54}},w.a.createElement(e,i()({},this.props.contentOptions,{navigation:this.props.navigation,descriptors:this.props.descriptors,drawerOpenProgress:this.props.drawerOpenProgress,items:r.routes,activeItemKey:r.routes[r.index]?r.routes[r.index].key:null,screenProps:this.props.screenProps,getLabel:this._getLabel,renderIcon:this._renderIcon,onItemPress:this._onItemPress,drawerPosition:this.props.drawerPosition,__source:{fileName:_,lineNumber:55}})))}}]),r}(w.a.PureComponent),b=(r.default=E,m.a.create({container:{flex:1}}))},339:
/*!*********************************************************************************************************************!*\
  !*** /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/navigators/createDrawerNavigator.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/index.js (referenced with cjs require) */function(e,r,t){"use strict";t.r(r);var n=t(/*! @babel/runtime/helpers/defineProperty */16),i=t.n(n),a=t(/*! @babel/runtime/helpers/extends */11),o=t.n(a),s=t(/*! react */0),c=t.n(s),l=t(/*! react-native-web/dist/exports/Dimensions */27),u=t(/*! react-native-web/dist/exports/Platform */7),p=t(/*! react-native-web/dist/exports/ScrollView */35),d=t(/*! @react-navigation/core */17),f=t(/*! @react-navigation/native */30),g=t(/*! ../routers/DrawerRouter */198),v=t(/*! ../views/DrawerView */199),w=t(/*! ../views/DrawerNavigatorItems */201),m="/Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/navigators/createDrawerNavigator.js";function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var y={drawerWidth:function(){var e=l.a.get("window"),r=e.height,t=e.width,n=Math.min(r,t),i=t>r,a=n>=600,o="ios"===u.a.OS?i?32:44:56,s=a?320:280;return Math.min(n-o,s)},contentComponent:function(e){return c.a.createElement(p.a,{alwaysBounceVertical:!1,__source:{fileName:m,lineNumber:13}},c.a.createElement(f.SafeAreaView,{forceInset:{top:"always",horizontal:"never"},__source:{fileName:m,lineNumber:14}},c.a.createElement(w.default,o()({},e,{__source:{fileName:m,lineNumber:15}}))))},drawerPosition:"left",keyboardDismissMode:"on-drag",drawerBackgroundColor:"white",useNativeAnimations:!0,drawerType:"front",hideStatusBar:!1,statusBarAnimation:"slide",overlayColor:"black"};r.default=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(t,!0).forEach(function(r){i()(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},y,{},r),n=Object(g.default)(e,t);return Object(d.createNavigator)(v.default,n,t)}},37:
/*!**********************************************************************************************************!*\
  !*** /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/routers/DrawerActions.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/index.js (referenced with cjs require) */function(e,r,t){"use strict";t.r(r);var n=t(/*! @babel/runtime/helpers/defineProperty */16),i=t.n(n);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(t,!0).forEach(function(r){i()(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}r.default={OPEN_DRAWER:"Navigation/OPEN_DRAWER",CLOSE_DRAWER:"Navigation/CLOSE_DRAWER",TOGGLE_DRAWER:"Navigation/TOGGLE_DRAWER",DRAWER_OPENED:"Navigation/DRAWER_OPENED",DRAWER_CLOSED:"Navigation/DRAWER_CLOSED",MARK_DRAWER_ACTIVE:"Navigation/MARK_DRAWER_ACTIVE",MARK_DRAWER_IDLE:"Navigation/MARK_DRAWER_IDLE",MARK_DRAWER_SETTLING:"Navigation/MARK_DRAWER_SETTLING",openDrawer:function(e){return o({type:"Navigation/OPEN_DRAWER"},e)},closeDrawer:function(e){return o({type:"Navigation/CLOSE_DRAWER"},e)},toggleDrawer:function(e){return o({type:"Navigation/TOGGLE_DRAWER"},e)},markDrawerIdle:function(e){return o({type:"Navigation/MARK_DRAWER_IDLE"},e)},markDrawerActive:function(e){return o({type:"Navigation/MARK_DRAWER_ACTIVE"},e)},markDrawerSettling:function(e){return o({type:"Navigation/MARK_DRAWER_SETTLING"},e)}}},81:
/*!******************************************************************************************!*\
  !*** /Volumes/Data/Projects/dashpier/node_modules/react-navigation-drawer/dist/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r,t){e.exports={get createDrawerNavigator(){return t(/*! ./navigators/createDrawerNavigator */339).default},get DrawerRouter(){return t(/*! ./routers/DrawerRouter */198).default},get DrawerActions(){return t(/*! ./routers/DrawerActions */37).default},get DrawerNavigatorItems(){return t(/*! ./views/DrawerNavigatorItems */201).default},get DrawerSidebar(){return t(/*! ./views/DrawerSidebar */202).default},get DrawerView(){return t(/*! ./views/DrawerView */199).default},get DrawerGestureContext(){return t(/*! ./utils/DrawerGestureContext */159).default}}}}]);