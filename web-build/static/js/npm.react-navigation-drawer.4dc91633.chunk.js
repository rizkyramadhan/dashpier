(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{114:function(e,t,r){e.exports={get createDrawerNavigator(){return r(423).default},get DrawerRouter(){return r(253).default},get DrawerActions(){return r(48).default},get DrawerNavigatorItems(){return r(260).default},get DrawerSidebar(){return r(259).default},get DrawerView(){return r(258).default},get DrawerGestureContext(){return r(203).default}}},203:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n);t.default=o.a.createContext(null)},253:function(e,t,r){"use strict";r.r(t);var n=r(23),o=r.n(n),i=r(20),a=r(48);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return e.hasOwnProperty(t)&&void 0!==e[t]?e:(e[t]=r,e)}var l=function e(t){return t.routes&&t.routes[t.index]?e(t.routes[t.index]):t.key};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=p(t=c({},t),"resetOnBlur",!!t.unmountInactiveRoutes||!!t.resetOnBlur),t=p(t,"backBehavior","initialRoute");var r=Object(i.SwitchRouter)(e,t),n=-1,o=function(){return++n};return c({},r,{getActionCreators:function(e,t){return c({openDrawer:function(){return a.default.openDrawer({key:t})},closeDrawer:function(){return a.default.closeDrawer({key:t})},toggleDrawer:function(){return a.default.toggleDrawer({key:t})}},r.getActionCreators(e,t))},getStateForAction:function(e,t){if(!t)return c({},r.getStateForAction(e,void 0),{isDrawerOpen:!1,isDrawerIdle:!0,drawerMovementDirection:null,openId:o(),closeId:o(),toggleId:o()});if(null==e.key||e.key===t.key){if(e.type===a.default.DRAWER_CLOSED)return c({},t,{isDrawerOpen:!1,isDrawerIdle:!0,drawerMovementDirection:null});if(e.type===a.default.DRAWER_OPENED)return c({},t,{isDrawerOpen:!0,isDrawerIdle:!0,drawerMovementDirection:null});if(e.type===a.default.CLOSE_DRAWER)return c({},t,{closeId:o()});if(e.type===a.default.MARK_DRAWER_SETTLING)return c({},t,{isDrawerIdle:!1,drawerMovementDirection:e.willShow?"opening":"closing"});if(e.type===a.default.MARK_DRAWER_ACTIVE)return c({},t,{isDrawerIdle:!1,drawerMovementDirection:null});if(e.type===a.default.MARK_DRAWER_IDLE)return c({},t,{isDrawerIdle:!0,drawerMovementDirection:null});if(e.type===i.NavigationActions.BACK&&(t.isDrawerOpen||!t.isDrawerIdle)&&"closing"!==t.drawerMovementDirection)return c({},t,{closeId:o()});if(e.type===a.default.OPEN_DRAWER)return c({},t,{openId:o()});if(e.type===a.default.TOGGLE_DRAWER)return c({},t,{toggleId:o()})}var n=r.getStateForAction(e,t);return null===n?null:n!==t?l(n)===l(t)||!t.isDrawerOpen&&"closing"===t.drawerMovementDirection?n:c({},n,{closeId:o()}):t}})}},258:function(e,t,r){"use strict";r.r(t);var n=r(31),o=r.n(n),i=r(12),a=r.n(i),s=r(3),c=r.n(s),p=r(5),l=r.n(p),u=r(9),d=r.n(u),f=r(7),g=r.n(f),v=r(10),w=r.n(v),y=r(1),h=r.n(y),D=r(32),E=r(8),m=r(20),R=r(136),O=r(58),C=r(48),b=r(259),_=r(203),A=r(18),P=r.n(A),k=r(11),I=r(2),S=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return w()(t,e),l()(t,[{key:"render",value:function(){if(O.c&&Object(O.c)()){var e=this.props,t=e.isVisible,r=P()(e,["isVisible"]);return y.createElement(O.a,a()({active:t?1:0},r))}var n=this.props,o=n.isVisible,i=n.children,s=n.style,c=P()(n,["isVisible","children","style"]);return y.createElement(I.a,a()({style:[W.container,s],collapsable:!1,removeClippedSubviews:"ios"!==k.a.OS||!o,pointerEvents:o?"auto":"none"},c),y.createElement(I.a,{style:o?W.attached:W.detached},i))}}]),t}(y.Component),W=E.a.create({container:{flex:1,overflow:"hidden"},attached:{flex:1},detached:{flex:1,top:3e3}});r.d(t,"default",(function(){return N}));var N=function(e){function t(){var e,r;c()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=d()(this,(e=g()(t)).call.apply(e,[this].concat(o)))).state={loaded:[r.props.navigation.state.index],drawerWidth:"function"==typeof r.props.navigationConfig.drawerWidth?r.props.navigationConfig.drawerWidth():r.props.navigationConfig.drawerWidth},r.drawerGestureRef=h.a.createRef(),r._handleDrawerStateChange=function(e,t){"Idle"===e?r.props.navigation.state.isDrawerIdle||r.props.navigation.dispatch({type:C.default.MARK_DRAWER_IDLE,key:r.props.navigation.state.key}):"Settling"===e?r.props.navigation.dispatch({type:C.default.MARK_DRAWER_SETTLING,key:r.props.navigation.state.key,willShow:t}):r.props.navigation.state.isDrawerIdle&&r.props.navigation.dispatch({type:C.default.MARK_DRAWER_ACTIVE,key:r.props.navigation.state.key})},r._handleDrawerOpen=function(){r.props.navigation.dispatch({type:C.default.DRAWER_OPENED,key:r.props.navigation.state.key})},r._handleDrawerClose=function(){r.props.navigation.dispatch({type:C.default.DRAWER_CLOSED,key:r.props.navigation.state.key})},r._updateWidth=function(){var e="function"==typeof r.props.navigationConfig.drawerWidth?r.props.navigationConfig.drawerWidth():r.props.navigationConfig.drawerWidth;r.state.drawerWidth!==e&&r.setState({drawerWidth:e})},r._renderNavigationView=function(e){return h.a.createElement(_.default.Provider,{value:r.drawerGestureRef},h.a.createElement(b.default,a()({screenProps:r.props.screenProps,drawerOpenProgress:e,navigation:r.props.navigation,descriptors:r.props.descriptors,contentComponent:r.props.navigationConfig.contentComponent,contentOptions:r.props.navigationConfig.contentOptions,drawerPosition:r.props.navigationConfig.drawerPosition,style:r.props.navigationConfig.style},r.props.navigationConfig)))},r._renderContent=function(){var e=r.props,t=e.lazy,n=e.navigation,o=r.state.loaded,i=n.state.routes;if(r.props.navigationConfig.unmountInactiveRoutes){var a=n.state.routes[n.state.index].key,s=r.props.descriptors[a];return h.a.createElement(m.SceneView,{navigation:s.navigation,screenProps:r.props.screenProps,component:s.getComponent()})}return h.a.createElement(O.b,{style:L.pages},i.map((function(e,i){if(t&&!o.includes(i))return null;var a=n.state.index===i,s=r.props.descriptors[e.key];return h.a.createElement(S,{key:e.key,style:[E.a.absoluteFill,{opacity:a?1:0}],isVisible:a},h.a.createElement(m.SceneView,{navigation:s.navigation,screenProps:r.props.screenProps,component:s.getComponent()}))})))},r._setDrawerGestureRef=function(e){r.drawerGestureRef.current=e},r}return w()(t,e),l()(t,[{key:"componentDidMount",value:function(){D.a.addEventListener("change",this._updateWidth)}},{key:"componentDidUpdate",value:function(e){var t=this,r=this.props.navigation.state,n=r.openId,o=r.closeId,i=r.toggleId,a=r.isDrawerOpen,s=e.navigation.state,c=[s.openId,s.closeId,s.toggleId];[n,o,i].filter((function(e){return!c.includes(e)})).sort((function(e,t){return e>t})).forEach((function(e){e===n?t._drawer.openDrawer():e===o?t._drawer.closeDrawer():e===i&&(a?t._drawer.closeDrawer():t._drawer.openDrawer())}))}},{key:"componentWillUnmount",value:function(){D.a.removeEventListener("change",this._updateWidth)}},{key:"render",value:function(){var e=this,t=this.props.navigation,r=t.state.routes[t.state.index].key,n=this.props.descriptors[r].options.drawerLockMode;return h.a.createElement(R.a,{ref:function(t){e._drawer=t},onGestureRef:this._setDrawerGestureRef,drawerLockMode:n||this.props.screenProps&&this.props.screenProps.drawerLockMode||this.props.navigationConfig.drawerLockMode,drawerBackgroundColor:this.props.navigationConfig.drawerBackgroundColor,keyboardDismissMode:this.props.navigationConfig.keyboardDismissMode,drawerWidth:this.state.drawerWidth,onDrawerOpen:this._handleDrawerOpen,onDrawerClose:this._handleDrawerClose,onDrawerStateChanged:this._handleDrawerStateChange,useNativeAnimations:this.props.navigationConfig.useNativeAnimations,renderNavigationView:this._renderNavigationView,drawerPosition:"right"===this.props.navigationConfig.drawerPosition?R.a.positions.Right:R.a.positions.Left,drawerType:this.props.navigationConfig.drawerType,edgeWidth:this.props.navigationConfig.edgeWidth,hideStatusBar:this.props.navigationConfig.hideStatusBar,statusBarAnimation:this.props.navigationConfig.statusBarAnimation,minSwipeDistance:this.props.navigationConfig.minSwipeDistance,overlayColor:this.props.navigationConfig.overlayColor,drawerContainerStyle:this.props.navigationConfig.drawerContainerStyle,contentContainerStyle:this.props.navigationConfig.contentContainerStyle},h.a.createElement(_.default.Provider,{value:this.drawerGestureRef},this._renderContent()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.navigation.state.index;return{loaded:t.loaded.includes(r)?t.loaded:[].concat(o()(t.loaded),[r])}}}]),t}(h.a.PureComponent);N.defaultProps={lazy:!0};var L=E.a.create({pages:{flex:1}})},259:function(e,t,r){"use strict";r.r(t);var n=r(12),o=r.n(n),i=r(3),a=r.n(i),s=r(5),c=r.n(s),p=r(9),l=r.n(p),u=r(7),d=r.n(u),f=r(10),g=r.n(f),v=r(1),w=r.n(v),y=r(8),h=r(2),D=r(20);function E(e,t,r,n,o,i,a,s){if(void 0===t)throw new Error("invariant requires an error message argument");if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[r,n,o,i,a,s],l=0;(c=new Error(t.replace(/%s/g,(function(){return p[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}var m=function(e){function t(){var e,r;a()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=l()(this,(e=d()(t)).call.apply(e,[this].concat(o))))._getScreenOptions=function(e){var t=r.props.descriptors[e];return E(t.options,"Cannot access screen descriptor options from drawer sidebar"),t.options},r._getLabel=function(e){var t=e.focused,n=e.tintColor,o=e.route,i=r._getScreenOptions(o.key),a=i.drawerLabel,s=i.title;return a?"function"==typeof a?a({tintColor:n,focused:t}):a:"string"==typeof s?s:o.routeName},r._renderIcon=function(e){var t=e.focused,n=e.tintColor,o=e.route,i=r._getScreenOptions(o.key).drawerIcon;return i?"function"==typeof i?i({tintColor:n,focused:t}):i:null},r._onItemPress=function(e){var t=e.route;e.focused?r.props.navigation.closeDrawer():r.props.navigation.dispatch(D.NavigationActions.navigate({routeName:t.routeName}))},r}return g()(t,e),c()(t,[{key:"render",value:function(){var e=this.props.contentComponent;if(!e)return null;var t=this.props.navigation.state;return E("number"==typeof t.index,"should be set"),w.a.createElement(h.a,{style:[R.container,this.props.style]},w.a.createElement(e,o()({},this.props.contentOptions,{navigation:this.props.navigation,descriptors:this.props.descriptors,drawerOpenProgress:this.props.drawerOpenProgress,items:t.routes,activeItemKey:t.routes[t.index]?t.routes[t.index].key:null,screenProps:this.props.screenProps,getLabel:this._getLabel,renderIcon:this._renderIcon,onItemPress:this._onItemPress,drawerPosition:this.props.drawerPosition})))}}]),t}(w.a.PureComponent),R=(t.default=m,y.a.create({container:{flex:1}}))},260:function(e,t,r){"use strict";r.r(t);var n=r(23),o=r.n(n),i=r(1),a=r.n(i),s=r(2),c=r(16),p=r(8),l=r(41),u=r(12),d=r.n(u),f=r(18),g=r.n(f),v=r(3),w=r.n(v),y=r(5),h=r.n(y),D=r(9),E=r.n(D),m=r(7),R=r.n(m),O=r(10),C=r.n(O),b=r(11),_=r(84),A=r(81),P=function(e){function t(){return w()(this,t),E()(this,R()(t).apply(this,arguments))}return C()(t,e),h()(t,[{key:"render",value:function(){if("android"===b.a.OS&&b.a.Version>=21){var e=this.props,t=e.style,r=g()(e,["style"]);return a.a.createElement(_.a,d()({},r,{style:null,background:_.a.Ripple(this.props.pressColor,this.props.borderless)}),a.a.createElement(s.a,{style:t},a.a.Children.only(this.props.children)))}return a.a.createElement(A.a,this.props,this.props.children)}}]),t}(a.a.Component);P.defaultProps={borderless:!1,pressColor:"rgba(0, 0, 0, .32)"};var k=function(e){var t=e.items,r=e.activeItemKey,n=e.activeTintColor,i=e.activeBackgroundColor,p=e.inactiveTintColor,u=e.inactiveBackgroundColor,d=e.getLabel,f=e.renderIcon,g=e.onItemPress,v=e.itemsContainerStyle,w=e.itemStyle,y=e.labelStyle,h=e.activeLabelStyle,D=e.inactiveLabelStyle,E=e.iconContainerStyle,m=e.drawerPosition;return a.a.createElement(s.a,{style:[I.container,v]},t.map((function(e,t){var v,R=r===e.key,O=R?n:p,C=R?i:u,b={route:e,index:t,focused:R,tintColor:O},_=f(b),A=d(b),k="string"==typeof A?A:void 0,S=R?h:D;return a.a.createElement(P,{key:e.key,accessible:!0,accessibilityLabel:k,onPress:function(){g({route:e,focused:R})},delayPressIn:0},a.a.createElement(l.SafeAreaView,{style:[{backgroundColor:C},I.item,w],forceInset:(v={},o()(v,m,"always"),o()(v,"left"===m?"right":"left","never"),o()(v,"vertical","never"),v)},_?a.a.createElement(s.a,{style:[I.icon,R?null:I.inactiveIcon,E]},_):null,"string"==typeof A?a.a.createElement(c.a,{style:[I.label,{color:O},y,S]},A):A))})))};k.defaultProps={activeTintColor:"#2196f3",activeBackgroundColor:"rgba(0, 0, 0, .04)",inactiveTintColor:"rgba(0, 0, 0, .87)",inactiveBackgroundColor:"transparent"};var I=p.a.create({container:{paddingVertical:4},item:{flexDirection:"row",alignItems:"center"},icon:{marginHorizontal:16,width:24,alignItems:"center"},inactiveIcon:{opacity:.62},label:{margin:16,fontWeight:"bold"}});t.default=k},423:function(e,t,r){"use strict";r.r(t);var n=r(23),o=r.n(n),i=r(1),a=r.n(i),s=r(32),c=r(11),p=r(63),l=r(20),u=r(41),d=r(253),f=r(258),g=r(260);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={drawerWidth:function(){var e=s.a.get("window"),t=e.height,r=e.width,n=Math.min(t,r),o=r>t,i=n>=600,a="ios"===c.a.OS?o?32:44:56,p=i?320:280;return Math.min(n-a,p)},contentComponent:function(e){return a.a.createElement(p.a,{alwaysBounceVertical:!1},a.a.createElement(u.SafeAreaView,{forceInset:{top:"always",horizontal:"never"}},a.a.createElement(g.default,e)))},drawerPosition:"left",keyboardDismissMode:"on-drag",drawerBackgroundColor:"white",useNativeAnimations:!0,drawerType:"front",hideStatusBar:!1,statusBarAnimation:"slide",overlayColor:"black"};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=w({},y,{},t),n=Object(d.default)(e,r),o=Object(l.createNavigator)(f.default,n,r);return o}},48:function(e,t,r){"use strict";r.r(t);var n=r(23),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default={OPEN_DRAWER:"Navigation/OPEN_DRAWER",CLOSE_DRAWER:"Navigation/CLOSE_DRAWER",TOGGLE_DRAWER:"Navigation/TOGGLE_DRAWER",DRAWER_OPENED:"Navigation/DRAWER_OPENED",DRAWER_CLOSED:"Navigation/DRAWER_CLOSED",MARK_DRAWER_ACTIVE:"Navigation/MARK_DRAWER_ACTIVE",MARK_DRAWER_IDLE:"Navigation/MARK_DRAWER_IDLE",MARK_DRAWER_SETTLING:"Navigation/MARK_DRAWER_SETTLING",openDrawer:function(e){return a({type:"Navigation/OPEN_DRAWER"},e)},closeDrawer:function(e){return a({type:"Navigation/CLOSE_DRAWER"},e)},toggleDrawer:function(e){return a({type:"Navigation/TOGGLE_DRAWER"},e)},markDrawerIdle:function(e){return a({type:"Navigation/MARK_DRAWER_IDLE"},e)},markDrawerActive:function(e){return a({type:"Navigation/MARK_DRAWER_ACTIVE"},e)},markDrawerSettling:function(e){return a({type:"Navigation/MARK_DRAWER_SETTLING"},e)}}}}]);