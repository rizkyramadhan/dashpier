(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{381:
/*!********************************************************!*\
  !*** /home/riz/Projects/dashpier/App.tsx + 20 modules ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/regenerator/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@expo/vector-icons/build/AntDesign.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@expo/vector-icons/build/Entypo.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@expo/vector-icons/build/FontAwesome.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/expo-font/build/Font.js (<- Module uses injected variables (module)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-paper/src/components/Divider.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-paper/src/components/Menu/Menu.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-paper/src/components/Typography/Text.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-paper/src/core/Provider.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/ActivityIndicator/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/ImageBackground/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/Platform/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/StyleSheet/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/Text/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/TouchableOpacity/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/View/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-navigation/src/react-navigation.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/mobx-react-lite/dist/index.module.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/mobx/lib/mobx.module.js (<- Module uses injected variables (process, global)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-area/es/victory-area.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-axis/es/victory-axis.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-chart/es/victory-chart.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-core/es/victory-label/victory-label.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-group/es/victory-group.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/victory-pie/es/victory-pie.js */function(e,t,a){"use strict";var l=a(1),r=a.n(l),n=a(622),i=a(272),o=a(150),m=a(59),s=a(35),c=a(380),u=a(2),f=a(12),N=function(e){return r.a.createElement("div",{style:{background:"#f2f2f2"},__source:{fileName:"/home/riz/Projects/dashpier/src/components/Body.web.tsx",lineNumber:5}},e.children)},_=a(42),b=a.n(_),d=a(16),y=a(82),p=a(613),g=a(614),E=a(15),h=a.n(E);a(/*! ./api-init */443);var z=new(a(/*! frisbee */444))({baseURI:"https://dashpier.rx.plansys.co",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}}).auth("admin:admin"),x=Object(m.d)({client:{ad_client_id:"",name:""},org:"",orglist:[],list:{},cash:{total:0,list:[]},bank:{total:0,list:[]},recv:{total:0,list:{}},payb:{total:0,list:{}},is:{rev:{total:0,list:{0:{total:0}}},exp:{total:0,list:{0:{total:0}}}}}),v=x,S={find:function(e){var t=function e(t,a){if(a[t])return a[t];for(var l in a){var r=a[l].childs;if(void 0===a[l].debet&&(a[l].id=l,a[l].debet=0,a[l].kredit=0,a[l].count=0),Object.keys(r).length>0)for(var n in r)r[n].parent=a[l];var i=e(t,r);if(i)return i}return!1},a=t(e,Object(m.g)(x.list));return!!a&&JSON.parse(JSON.stringify(a,function(e,t){return"parent"===e?t.id:t}))},reload:function(){var e,t,a,l;return h.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h.a.awrap(z.get("/client"));case 2:return x.client=r.sent.body[0],e=x.org?"?org="+x.org:"",r.next=6,h.a.awrap(z.get("/org"));case 6:return x.orglist=r.sent.body,r.next=9,h.a.awrap(z.get("/refresh"));case 9:return r.next=11,h.a.awrap(z.get("/get"+e));case 11:return x.list=r.sent.body,r.next=14,h.a.awrap(z.get("/cboh-id"));case 14:return t=r.sent.body,a=this.find(t[0].toString()),x.cash.list=a.childs,x.cash.total=a.debet-a.kredit,l=this.find(t[1].toString()),x.bank.list=l.childs,x.bank.total=l.debet-l.kredit,r.next=23,h.a.awrap(z.get("/ar"+e));case 23:return x.recv.list=r.sent.body,x.recv.total=b.a.sumBy(x.recv.list,function(e){return 1*e.sum}),r.next=27,h.a.awrap(z.get("/ap"+e));case 27:return x.payb.list=r.sent.body,x.payb.total=b.a.sumBy(x.payb.list,function(e){return 1*e.sum}),x.is.rev.total=0,r.next=32,h.a.awrap(z.get("/is?type=R"));case 32:return x.is.rev.list=r.sent.body,Object.keys(x.is.rev.list).forEach(function(e){var t=x.is.rev.list[e];x.is.rev.total+=Math.abs(t.total)}),x.is.exp.total=0,r.next=37,h.a.awrap(z.get("/is?type=E"));case 37:x.is.exp.list=r.sent.body,Object.keys(x.is.exp.list).forEach(function(e){var t=x.is.exp.list[e];x.is.exp.total+=Math.abs(t.total)});case 39:case"end":return r.stop()}},null,this)}},w=a(9).a.create({body:{backgroundColor:"#f2f2f2"}}),F="#333a43",j="#85898c",k="#ddd",D="#7655cb",I="#1976d2",R="#ff8354",O="#388e3c",T=a(612),P="/home/riz/Projects/dashpier/src/components/Title.tsx",B=Object(s.a)(function(e){var t=e.navigation,a=Object(s.b)({loading:!0,menuVisible:!1}),l="";return v.org&&(l=b.a.find(v.orglist,function(e){return e.id===v.org}).name),r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center"},__source:{fileName:P,lineNumber:22}},t&&r.a.createElement(y.a,{style:{marginBottom:10,marginLeft:5,marginRight:-15,padding:15},onPress:function(){t.pop()},__source:{fileName:P,lineNumber:29}},r.a.createElement(T.a,{name:"chevron-thin-left",size:28,color:j,__source:{fileName:P,lineNumber:40}})),r.a.createElement(u.a,{style:{flexDirection:"column",paddingHorizontal:25,paddingTop:45,alignItems:"flex-start",paddingBottom:60},__source:{fileName:P,lineNumber:43}},r.a.createElement(d.a,{style:{fontFamily:"light",fontSize:25},__source:{fileName:P,lineNumber:52}},v.client.name),r.a.createElement(p.a,{style:{padding:0},visible:a.menuVisible,onDismiss:function(){a.menuVisible=!1},anchor:r.a.createElement(y.a,{onPressIn:function(){return a.menuVisible=!0},style:{borderWidth:1,borderColor:k,paddingHorizontal:10,paddingVertical:2,borderRadius:4,marginLeft:-5},delayPressIn:0,delayPressOut:0,__source:{fileName:P,lineNumber:63}},r.a.createElement(d.a,{style:{fontFamily:"bold",fontSize:14,color:j},__source:{fileName:P,lineNumber:76}},l||"All Organization")),__source:{fileName:P,lineNumber:56}},r.a.createElement(p.a.Item,{onPress:function(){a.menuVisible=!1,v.org="",setTimeout(function(){return S.reload()},100)},title:"All Organization",__source:{fileName:P,lineNumber:84}}),r.a.createElement(g.a,{__source:{fileName:P,lineNumber:92}}),v.orglist.map(function(e,t){return r.a.createElement(p.a.Item,{onPress:function(){a.menuVisible=!1,v.org=e.id,setTimeout(function(){return S.reload()},100)},key:t,title:e.name,__source:{fileName:P,lineNumber:95}})}))))}),C=a(615),A=a(627),H=a(366),M=a(11),W=a.n(M),V="/home/riz/Projects/dashpier/src/components/Tappable.web.tsx",L=function(){},J=Object(s.a)(function(e){var t=Object(s.b)({tap:!1,startedWithTap:!1,click:!1});return r.a.createElement("div",{onTouchEnd:function(){t.tap&&e.onPress&&(e.onPress(),window.scrollTo({top:0})),t.tap=!1,t.startedWithTap=!0},onTouchMove:function(){t.tap=!1},onTouchStart:function(){t.tap=!0,t.startedWithTap=!0},onMouseDown:function(){t.click=!0},onMouseUp:function(){t.click&&!t.startedWithTap&&e.onPress&&(e.onPress(),window.scrollTo({top:0})),t.click=!1,t.startedWithTap=!1},__source:{fileName:V,lineNumber:13}},e.onPress?r.a.createElement(y.a,W()({},e,{onPress:L,__source:{fileName:V,lineNumber:41}})):r.a.createElement(u.a,W()({},e,{__source:{fileName:V,lineNumber:41}})))}),U="/home/riz/Projects/dashpier/src/components/Card.tsx",Y=function(e){var t=e.children,a=e.style,l=e.size,n=void 0===l?"single":l,i=e.bg,o=e.onPress,m="50%",s=280;return"single-short"===n&&(s=null),"double"===n&&(m="100%"),"double-short"===n&&(m="100%",s=null),r.a.createElement(u.a,{style:{flexBasis:m},__source:{fileName:U,lineNumber:30}},r.a.createElement(J,{onPress:o,style:[{borderRadius:18,backgroundColor:"#fff",marginHorizontal:8,marginBottom:8},a],__source:{fileName:U,lineNumber:35}},i?r.a.createElement(H.a,{style:{padding:20,height:s,borderRadius:18},source:i,__source:{fileName:U,lineNumber:48}},t):r.a.createElement(u.a,{style:{padding:20,height:s,borderRadius:18},__source:{fileName:U,lineNumber:59}},t)))},G=function(e){return(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"IDR ":"")+(Math.round(e)||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},X=function(e){return e>999999999?18:e>99999999?20:22},q="/home/riz/Projects/dashpier/src/pages/Home/HomeAP.tsx",K=Object(s.a)(function(e){var t=e.style,a=e.navigation;return r.a.createElement(Y,{style:t,size:"single-short",onPress:function(){a.push("AP")},__source:{fileName:q,lineNumber:14}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:q,lineNumber:21}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:q,lineNumber:28}},"Payable"),r.a.createElement(C.a,{name:"send-o",size:18,color:F,__source:{fileName:q,lineNumber:33}})),r.a.createElement(u.a,{style:{alignSelf:"center",marginTop:30},__source:{fileName:q,lineNumber:35}},r.a.createElement(d.a,{style:{color:R,fontSize:13,fontFamily:"bold"},__source:{fileName:q,lineNumber:36}},"IDR"),r.a.createElement(d.a,{style:{color:R,fontFamily:"light",fontSize:X(v.payb.total)},__source:{fileName:q,lineNumber:39}},G(v.payb.total,!1)),r.a.createElement(d.a,{style:{color:j,fontSize:13,fontFamily:"bold"},__source:{fileName:q,lineNumber:48}},"Open Bill")),r.a.createElement(A.a,{data:b.a.values(v.payb.list).map(function(e,t){return{x:e.name,y:1*e.sum}}),colorScale:"red",innerRadius:100,__source:{fileName:q,lineNumber:52}}))}),Q=a(616),Z="/home/riz/Projects/dashpier/src/pages/Home/HomeAR.tsx",$=Object(s.a)(function(e){var t=e.style,a=e.navigation;return r.a.createElement(Y,{style:t,size:"single-short",onPress:function(){a.push("AR")},__source:{fileName:Z,lineNumber:14}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:Z,lineNumber:21}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:Z,lineNumber:28}},"Receivable"),r.a.createElement(Q.a,{name:"clouddownloado",size:18,color:F,__source:{fileName:Z,lineNumber:33}})),r.a.createElement(u.a,{style:{alignSelf:"center",marginTop:30},__source:{fileName:Z,lineNumber:35}},r.a.createElement(d.a,{style:{color:O,fontSize:13,fontFamily:"bold"},__source:{fileName:Z,lineNumber:36}},"IDR"),r.a.createElement(d.a,{style:{color:O,fontFamily:"light",fontSize:X(v.recv.total)},__source:{fileName:Z,lineNumber:39}},G(v.recv.total,!1)),r.a.createElement(d.a,{style:{color:j,fontSize:13,fontFamily:"bold"},__source:{fileName:Z,lineNumber:48}},"Open Invoice")),r.a.createElement(A.a,{data:b.a.values(v.recv.list).map(function(e,t){return{x:e.name,y:1*e.sum}}),colorScale:"green",innerRadius:100,__source:{fileName:Z,lineNumber:52}}))}),ee="/home/riz/Projects/dashpier/src/pages/Home/HomeBank.tsx",te=a(/*! ../../imgs/bg2.png */588),ae=Object(s.a)(function(e){var t=e.style,a=e.navigation;return r.a.createElement(Y,{style:t,bg:te,onPress:function(){a.push("Bank")},__source:{fileName:ee,lineNumber:13}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:ee,lineNumber:20}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:ee,lineNumber:27}},"Bank"),r.a.createElement(Q.a,{name:"home",size:18,color:F,__source:{fileName:ee,lineNumber:32}})),r.a.createElement(u.a,{style:{alignSelf:"center",marginTop:30},__source:{fileName:ee,lineNumber:34}},r.a.createElement(d.a,{style:{color:I,fontSize:13,fontFamily:"bold"},__source:{fileName:ee,lineNumber:35}},"IDR"),r.a.createElement(d.a,{style:{color:I,fontFamily:"light",fontSize:X(v.bank.total)},__source:{fileName:ee,lineNumber:38}},G(v.bank.total,!1)),r.a.createElement(d.a,{style:{color:j,fontSize:13,fontFamily:"bold"},__source:{fileName:ee,lineNumber:47}},"as of today")))}),le="/home/riz/Projects/dashpier/src/pages/Home/HomeCash.tsx",re=a(/*! ../../imgs/bg.png */589),ne=Object(s.a)(function(e){var t=e.navigation;return r.a.createElement(Y,{bg:re,onPress:function(){t.push("Cash")},__source:{fileName:le,lineNumber:13}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:le,lineNumber:19}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:le,lineNumber:26}},"Cash"),r.a.createElement(Q.a,{name:"tagso",size:18,color:F,__source:{fileName:le,lineNumber:35}})),r.a.createElement(u.a,{style:{alignSelf:"center",marginTop:30},__source:{fileName:le,lineNumber:37}},r.a.createElement(d.a,{style:{color:D,fontSize:13,fontFamily:"bold"},__source:{fileName:le,lineNumber:38}},"IDR"),r.a.createElement(d.a,{style:{color:D,fontFamily:"light",fontSize:X(v.cash.total)},__source:{fileName:le,lineNumber:41}},G(v.cash.total,!1)),r.a.createElement(d.a,{style:{color:j,fontSize:13,fontFamily:"bold"},__source:{fileName:le,lineNumber:50}},"as of today")))}),ie=a(631),oe=a(629),me="/home/riz/Projects/dashpier/src/pages/Home/HomeStatement.tsx",se=Object(s.a)(function(e){var t=e.navigation;return r.a.createElement(Y,{size:"double-short",style:{marginBottom:70,paddingBottom:0,borderBottomLeftRadius:0,borderBottomRightRadius:0},onPress:function(){t.push("Statement")},__source:{fileName:me,lineNumber:13}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:me,lineNumber:25}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:me,lineNumber:32}},"Income Statement"),r.a.createElement(Q.a,{name:"linechart",size:18,color:F,__source:{fileName:me,lineNumber:41}})),r.a.createElement(u.a,{style:{marginTop:30,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:me,lineNumber:44}},r.a.createElement(u.a,{style:{marginLeft:20},__source:{fileName:me,lineNumber:52}},r.a.createElement(d.a,{style:{color:I,fontSize:13,fontFamily:"bold"},__source:{fileName:me,lineNumber:53}},"IDR"),r.a.createElement(d.a,{style:{color:I,fontFamily:"light",fontSize:X(v.is.rev.total)},__source:{fileName:me,lineNumber:56}},G(v.is.rev.total,!1)),r.a.createElement(d.a,{style:{color:I,fontSize:13,fontFamily:"bold"},__source:{fileName:me,lineNumber:65}},"REVENUE")),r.a.createElement(u.a,{style:{alignItems:"flex-end",marginRight:20},__source:{fileName:me,lineNumber:70}},r.a.createElement(d.a,{style:{color:D,fontSize:13,fontFamily:"bold"},__source:{fileName:me,lineNumber:71}},"IDR"),r.a.createElement(d.a,{style:{color:D,fontFamily:"light",fontSize:X(v.is.rev.total)},__source:{fileName:me,lineNumber:76}},G(v.is.exp.total,!1)),r.a.createElement(d.a,{style:{color:D,fontSize:13,fontFamily:"bold"},__source:{fileName:me,lineNumber:85}},"EXPENSES"))),r.a.createElement(u.a,{style:{marginHorizontal:-20,marginTop:20,marginBottom:-25},__source:{fileName:me,lineNumber:92}},r.a.createElement(ie.a,{height:100,padding:{top:10,left:0,bottom:0,right:0},style:{parent:{padding:0,margin:0},data:{strokeWidth:1,fillOpacity:.4}},__source:{fileName:me,lineNumber:99}},r.a.createElement(oe.a,{interpolation:"catmullRom",labels:function(){return null},style:{data:{fill:D,strokeWidth:1}},data:Object.keys(v.is.exp.list).map(function(e){var t=v.is.exp.list[e];return{x:e,y:Math.abs(t.total)}}),__source:{fileName:me,lineNumber:112}}),r.a.createElement(oe.a,{interpolation:"catmullRom",labels:function(){return null},style:{data:{fill:I,strokeWidth:1}},data:Object.keys(v.is.rev.list).map(function(e){var t=v.is.rev.list[e];return{x:e,y:Math.abs(t.total)}}),__source:{fileName:me,lineNumber:126}}))))}),ce="/home/riz/Projects/dashpier/src/pages/Home.tsx",ue=Object(s.a)(function(e){var t=e.navigation;return Object(l.useEffect)(function(){0===Object.keys(Object(m.g)(v.list)||{}).length&&S.reload(),o.b({light:a(/*! ../../assets/fonts/nunito/Nunito-Light.ttf */597),regular:a(/*! ../../assets/fonts/nunito/Nunito-Regular.ttf */598),bold:a(/*! ../../assets/fonts/nunito/Nunito-Bold.ttf */599),black:a(/*! ../../assets/fonts/nunito/Nunito-Black.ttf */600)})},[]),v.client.name&&"web"===f.a.OS&&(document.title=v.client.name),0===Object.keys(v.list||{}).length?r.a.createElement(N,{__source:{fileName:ce,lineNumber:35}},r.a.createElement(u.a,{style:{flex:1,margin:50,alignItems:"center",justifyContent:"center"},__source:{fileName:ce,lineNumber:36}},r.a.createElement(c.a,{size:"large",__source:{fileName:ce,lineNumber:44}}))):r.a.createElement(N,{__source:{fileName:ce,lineNumber:51}},r.a.createElement(B,{__source:{fileName:ce,lineNumber:52}}),r.a.createElement(u.a,{style:{flexDirection:"row",padding:8,paddingTop:0},__source:{fileName:ce,lineNumber:53}},r.a.createElement(ne,{navigation:t,__source:{fileName:ce,lineNumber:60}}),r.a.createElement(ae,{navigation:t,__source:{fileName:ce,lineNumber:61}})),r.a.createElement(u.a,{style:{flexDirection:"row",padding:8,paddingTop:0},__source:{fileName:ce,lineNumber:64}},r.a.createElement($,{navigation:t,__source:{fileName:ce,lineNumber:71}}),r.a.createElement(K,{navigation:t,__source:{fileName:ce,lineNumber:72}})),r.a.createElement(u.a,{style:{flexDirection:"row",padding:8,paddingTop:0},__source:{fileName:ce,lineNumber:75}},r.a.createElement(se,{navigation:t,__source:{fileName:ce,lineNumber:82}})))}),fe="/home/riz/Projects/dashpier/src/pages/Cash.tsx",Ne=Object(s.a)(function(e){var t=e.navigation;return r.a.createElement(N,{style:w.body,__source:{fileName:fe,lineNumber:15}},r.a.createElement(B,{navigation:t,__source:{fileName:fe,lineNumber:16}}),r.a.createElement(u.a,{style:{flexDirection:"row",padding:8,paddingTop:0},__source:{fileName:fe,lineNumber:17}},r.a.createElement(Y,{size:"double-short",__source:{fileName:fe,lineNumber:24}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:fe,lineNumber:25}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:fe,lineNumber:32}},"Cash on Hand"),r.a.createElement(Q.a,{name:"tagso",size:18,color:F,__source:{fileName:fe,lineNumber:41}})),r.a.createElement(u.a,{style:{marginVertical:10,marginLeft:10},__source:{fileName:fe,lineNumber:43}},r.a.createElement(d.a,{style:{color:D,fontSize:13,fontFamily:"bold"},__source:{fileName:fe,lineNumber:44}},"IDR"),r.a.createElement(d.a,{style:{color:D,fontFamily:"light",fontSize:24},__source:{fileName:fe,lineNumber:49}},G(v.cash.total,!1)),r.a.createElement(d.a,{style:{color:j,fontSize:13,fontFamily:"bold"},__source:{fileName:fe,lineNumber:54}},"as of today")))),r.a.createElement(d.a,{style:{fontFamily:"light",fontSize:24,color:j,padding:20},__source:{fileName:fe,lineNumber:62}},"Details"),r.a.createElement(u.a,{style:{padding:8,paddingTop:0},__source:{fileName:fe,lineNumber:72}},b.a.values(v.cash.list).map(function(e,t){return e.debet-e.kredit==0?null:r.a.createElement(Y,{size:"double-short",key:t,__source:{fileName:fe,lineNumber:84}},r.a.createElement(u.a,{style:{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"},__source:{fileName:fe,lineNumber:85}},r.a.createElement(d.a,{__source:{fileName:fe,lineNumber:92}},e.name),r.a.createElement(d.a,{__source:{fileName:fe,lineNumber:93}},G(e.debet-e.kredit))))})))}),_e="/home/riz/Projects/dashpier/src/pages/Bank.tsx",be=Object(s.a)(function(e){var t=e.navigation;return r.a.createElement(N,{__source:{fileName:_e,lineNumber:15}},r.a.createElement(B,{navigation:t,__source:{fileName:_e,lineNumber:16}}),r.a.createElement(u.a,{style:{flexDirection:"row",padding:8,paddingTop:0},__source:{fileName:_e,lineNumber:17}},r.a.createElement(Y,{size:"double-short",__source:{fileName:_e,lineNumber:24}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:_e,lineNumber:25}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:_e,lineNumber:32}},"Current Bank Balance"),r.a.createElement(Q.a,{name:"tagso",size:18,color:F,__source:{fileName:_e,lineNumber:41}})),r.a.createElement(u.a,{style:{marginVertical:10,marginLeft:10},__source:{fileName:_e,lineNumber:43}},r.a.createElement(d.a,{style:{color:I,fontSize:13,fontFamily:"bold"},__source:{fileName:_e,lineNumber:44}},"IDR"),r.a.createElement(d.a,{style:{color:I,fontFamily:"light",fontSize:24},__source:{fileName:_e,lineNumber:49}},G(v.bank.total,!1)),r.a.createElement(d.a,{style:{color:j,fontSize:13,fontFamily:"bold"},__source:{fileName:_e,lineNumber:54}},"as of today")))),r.a.createElement(d.a,{style:{fontFamily:"light",fontSize:24,color:j,padding:20},__source:{fileName:_e,lineNumber:62}},"Details"),r.a.createElement(u.a,{style:{padding:8,paddingTop:0},__source:{fileName:_e,lineNumber:72}},b.a.values(v.bank.list).map(function(e,t){return e.debet-e.kredit==0?null:r.a.createElement(Y,{size:"double-short",key:t,__source:{fileName:_e,lineNumber:85}},r.a.createElement(u.a,{style:{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"},__source:{fileName:_e,lineNumber:86}},r.a.createElement(d.a,{__source:{fileName:_e,lineNumber:93}},e.name),r.a.createElement(d.a,{__source:{fileName:_e,lineNumber:94}},G(e.debet-e.kredit))))})))}),de="/home/riz/Projects/dashpier/src/pages/AP.tsx",ye=Object(s.a)(function(e){var t=e.navigation;return r.a.createElement(N,{__source:{fileName:de,lineNumber:16}},r.a.createElement(B,{navigation:t,__source:{fileName:de,lineNumber:17}}),r.a.createElement(u.a,{style:{flexDirection:"row",padding:8,paddingTop:0},__source:{fileName:de,lineNumber:18}},r.a.createElement(Y,{size:"double-short",__source:{fileName:de,lineNumber:25}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:de,lineNumber:26}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:de,lineNumber:33}},"Payable"),r.a.createElement(C.a,{name:"send-o",size:18,color:F,__source:{fileName:de,lineNumber:42}})),r.a.createElement(u.a,{style:{flexDirection:"row"},__source:{fileName:de,lineNumber:44}},r.a.createElement(u.a,{style:{marginVertical:10,marginLeft:10},__source:{fileName:de,lineNumber:45}},r.a.createElement(d.a,{style:{color:R,fontSize:13,fontFamily:"bold"},__source:{fileName:de,lineNumber:46}},"IDR"),r.a.createElement(d.a,{style:{color:R,fontFamily:"light",fontSize:24},__source:{fileName:de,lineNumber:55}},G(v.payb.total,!1)),r.a.createElement(d.a,{style:{color:j,fontSize:13,fontFamily:"bold"},__source:{fileName:de,lineNumber:64}},"Open Bill")),r.a.createElement(A.a,{data:b.a.values(v.payb.list).map(function(e,t){return{x:e.name,y:1*e.sum}}),colorScale:"red",innerRadius:100,__source:{fileName:de,lineNumber:71}})))),r.a.createElement(d.a,{style:{fontFamily:"light",fontSize:24,color:j,padding:20},__source:{fileName:de,lineNumber:82}},"Details"),r.a.createElement(u.a,{style:{padding:8,paddingTop:0},__source:{fileName:de,lineNumber:92}},b.a.values(v.payb.list).sort(function(e,t){return t.sum-e.sum}).map(function(e,t){return r.a.createElement(Y,{size:"double-short",key:t,__source:{fileName:de,lineNumber:102}},r.a.createElement(u.a,{style:{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"},__source:{fileName:de,lineNumber:103}},r.a.createElement(d.a,{__source:{fileName:de,lineNumber:110}},e.name),r.a.createElement(d.a,{__source:{fileName:de,lineNumber:111}},G(e.sum))))})))}),pe="/home/riz/Projects/dashpier/src/pages/AR.tsx",ge=Object(s.a)(function(e){var t=e.navigation;return r.a.createElement(N,{__source:{fileName:pe,lineNumber:16}},r.a.createElement(B,{navigation:t,__source:{fileName:pe,lineNumber:17}}),r.a.createElement(u.a,{style:{flexDirection:"row",padding:8,paddingTop:0},__source:{fileName:pe,lineNumber:18}},r.a.createElement(Y,{size:"double-short",__source:{fileName:pe,lineNumber:25}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:pe,lineNumber:26}},r.a.createElement(d.a,{style:{fontFamily:"regular",fontSize:16,color:F},__source:{fileName:pe,lineNumber:33}},"Receivable"),r.a.createElement(Q.a,{name:"clouddownloado",size:18,color:F,__source:{fileName:pe,lineNumber:42}})),r.a.createElement(u.a,{style:{flexDirection:"row"},__source:{fileName:pe,lineNumber:44}},r.a.createElement(u.a,{style:{marginVertical:10,marginLeft:10},__source:{fileName:pe,lineNumber:45}},r.a.createElement(d.a,{style:{color:O,fontSize:13,fontFamily:"bold"},__source:{fileName:pe,lineNumber:46}},"IDR"),r.a.createElement(d.a,{style:{color:O,fontFamily:"light",fontSize:24},__source:{fileName:pe,lineNumber:51}},G(v.recv.total,!1)),r.a.createElement(d.a,{style:{color:j,fontSize:13,fontFamily:"bold"},__source:{fileName:pe,lineNumber:60}},"Open Invoice")),r.a.createElement(A.a,{data:b.a.values(v.recv.list).map(function(e,t){return{x:e.name,y:1*e.sum}}),colorScale:"green",innerRadius:100,__source:{fileName:pe,lineNumber:67}})))),r.a.createElement(d.a,{style:{fontFamily:"light",fontSize:24,color:j,padding:20},__source:{fileName:pe,lineNumber:78}},"Details"),r.a.createElement(u.a,{style:{padding:8,paddingTop:0},__source:{fileName:pe,lineNumber:88}},b.a.values(v.recv.list).sort(function(e,t){return t.sum-e.sum}).map(function(e,t){return r.a.createElement(Y,{size:"double-short",key:t,__source:{fileName:pe,lineNumber:98}},r.a.createElement(u.a,{style:{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"},__source:{fileName:pe,lineNumber:99}},r.a.createElement(d.a,{__source:{fileName:pe,lineNumber:106}},e.name),r.a.createElement(d.a,{__source:{fileName:pe,lineNumber:107}},G(e.sum))))})))}),Ee=a(632),he=a(633),ze=a(623),xe=a(364),ve="/home/riz/Projects/dashpier/src/pages/Statement.tsx",Se=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],we=(new Date).getFullYear(),Fe=Object(s.a)(function(e){var t=e.navigation,a=b.a.values(v.is.rev.list),l=Math.abs(b.a.sumBy(a,"total")/a.length),n=b.a.values(v.is.exp.list),i=Math.abs(b.a.sumBy(n,"total")/n.length);return r.a.createElement(N,{__source:{fileName:ve,lineNumber:48}},r.a.createElement(B,{navigation:t,__source:{fileName:ve,lineNumber:49}}),r.a.createElement(u.a,{style:{marginTop:-15,flexDirection:"row",paddingTop:0,alignItems:"center",justifyContent:"center"},__source:{fileName:ve,lineNumber:51}},r.a.createElement(u.a,{style:{alignItems:"flex-end"},__source:{fileName:ve,lineNumber:60}},r.a.createElement(xe.a,{style:{fontFamily:"light",fontSize:30,color:F},__source:{fileName:ve,lineNumber:61}},"Income Statement"),r.a.createElement(xe.a,{style:{marginTop:-10,fontFamily:"bold",fontSize:15,color:F},__source:{fileName:ve,lineNumber:70}},we))),r.a.createElement(Ee.a,{__source:{fileName:ve,lineNumber:83}},r.a.createElement(he.a,{dependentAxis:!0,width:500,tickFormat:function(e){return e>999999999?1e9+" M":G(e/1e6)+" jt"},style:{axis:{stroke:"transparent"},ticks:{stroke:"transparent"},tickLabels:{color:j,fontSize:11,fill:j}},standalone:!1,__source:{fileName:ve,lineNumber:84}}),r.a.createElement(he.a,{standalone:!1,style:{axis:{stroke:"transparent"},tickLabels:{color:j,fontSize:11,fill:j}},__source:{fileName:ve,lineNumber:109}}),r.a.createElement(ie.a,{style:{data:{strokeWidth:1,fillOpacity:.4}},__source:{fileName:ve,lineNumber:122}},r.a.createElement(oe.a,{labelComponent:r.a.createElement(ze.a,{style:{fontSize:5},dy:20,__source:{fileName:ve,lineNumber:128}}),interpolation:"catmullRom",style:{data:{fill:D,strokeWidth:1}},data:Object.keys(v.is.exp.list).map(function(e){var t=v.is.exp.list[e];return{x:Se[parseInt(e)],y:Math.abs(t.total)}}),__source:{fileName:ve,lineNumber:127}}),r.a.createElement(oe.a,{labelComponent:r.a.createElement(ze.a,{style:{fontSize:5},dy:20,__source:{fileName:ve,lineNumber:142}}),interpolation:"catmullRom",style:{data:{fill:I,strokeWidth:1}},data:Object.keys(v.is.rev.list).map(function(e){var t=v.is.rev.list[e];return{x:Se[parseInt(e)],y:Math.abs(t.total)}}),__source:{fileName:ve,lineNumber:141}}))),r.a.createElement(Y,{size:"double-short",style:{marginBottom:30},__source:{fileName:ve,lineNumber:158}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:ve,lineNumber:164}},r.a.createElement(u.a,{style:{marginLeft:15},__source:{fileName:ve,lineNumber:171}},r.a.createElement(xe.a,{style:{color:I,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:172}},"REVENUE"),r.a.createElement(xe.a,{style:{color:I,marginTop:20,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:177}},"IDR"),r.a.createElement(xe.a,{style:{color:I,fontFamily:"light",fontSize:X(v.is.rev.total)},__source:{fileName:ve,lineNumber:187}},G(v.is.rev.total,!1)),r.a.createElement(xe.a,{style:{color:I,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:197}},"THIS YEAR"),r.a.createElement(xe.a,{style:{color:I,fontSize:13,fontFamily:"bold",marginTop:20},__source:{fileName:ve,lineNumber:202}},"IDR"),r.a.createElement(xe.a,{style:{color:I,fontFamily:"light",fontSize:X(v.is.rev.total)},__source:{fileName:ve,lineNumber:212}},G(l,!1)),r.a.createElement(xe.a,{style:{color:I,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:222}},"AVG / MONTH")),r.a.createElement(u.a,{style:{alignItems:"flex-end",marginRight:15},__source:{fileName:ve,lineNumber:229}},r.a.createElement(xe.a,{style:{color:D,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:230}},"EXPENSES"),r.a.createElement(xe.a,{style:{color:D,marginTop:20,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:235}},"IDR"),r.a.createElement(xe.a,{style:{color:D,fontFamily:"light",fontSize:X(v.is.rev.total)},__source:{fileName:ve,lineNumber:245}},G(v.is.exp.total,!1)),r.a.createElement(xe.a,{style:{color:D,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:254}},"THIS YEAR"),r.a.createElement(xe.a,{style:{color:D,marginTop:20,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:260}},"IDR"),r.a.createElement(xe.a,{style:{color:D,fontFamily:"light",fontSize:X(v.is.rev.total)},__source:{fileName:ve,lineNumber:270}},G(i,!1)),r.a.createElement(xe.a,{style:{color:D,fontSize:13,fontFamily:"bold"},__source:{fileName:ve,lineNumber:279}},"AVG / MONTH")))),r.a.createElement(u.a,{style:{marginBottom:40},__source:{fileName:ve,lineNumber:288}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center"},__source:{fileName:ve,lineNumber:289}},r.a.createElement(xe.a,{style:{fontFamily:"regular",padding:10,paddingLeft:30,fontSize:16,flexBasis:"30%"},__source:{fileName:ve,lineNumber:290}},"Month"),r.a.createElement(xe.a,{style:{fontFamily:"regular",fontSize:16,padding:10,textAlign:"left",color:I,flexBasis:"35%"},__source:{fileName:ve,lineNumber:301}},"Revenue"),r.a.createElement(xe.a,{style:{fontFamily:"regular",fontSize:16,padding:10,textAlign:"left",color:D,flexBasis:"35%"},__source:{fileName:ve,lineNumber:313}},"Expenses")),[0,1,2,3,4,5,6,7,8,9,10,11].map(function(e,t){return r.a.createElement(Y,{size:"single-short",key:t,__source:{fileName:ve,lineNumber:328}},r.a.createElement(u.a,{style:{flexDirection:"row",alignItems:"center"},__source:{fileName:ve,lineNumber:329}},r.a.createElement(xe.a,{style:{fontFamily:"regular",fontSize:16,textAlign:"left",flexBasis:"30%"},__source:{fileName:ve,lineNumber:330}},Se[e]),r.a.createElement(xe.a,{style:{fontFamily:"regular",fontSize:16,color:I,flexBasis:"35%"},__source:{fileName:ve,lineNumber:340}},G(Math.abs((v.is.rev.list[t]||{}).total))),r.a.createElement(xe.a,{style:{fontFamily:"regular",fontSize:16,color:D,flexBasis:"35%"},__source:{fileName:ve,lineNumber:350}},G(Math.abs((v.is.exp.list[t]||{}).total)))))})))}),je=Object(i.createStackNavigator)({Home:ue,Cash:Ne,Bank:be,AR:ge,AP:ye,Statement:Fe},{headerMode:"none",initialRouteName:"Home"}),ke=Object(i.createAppContainer)(je);a.d(t,"a",function(){return Ie});var De="/home/riz/Projects/dashpier/App.tsx";function Ie(){return l.createElement(n.a,{__source:{fileName:De,lineNumber:7}},l.createElement(ke,{__source:{fileName:De,lineNumber:8}}))}},394:
/*!***********************************************************************!*\
  !*** multi /home/riz/Projects/dashpier/node_modules/expo/AppEntry.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a(/*! /home/riz/Projects/dashpier/node_modules/expo/AppEntry.js */602)},443:
/*!************************************************************!*\
  !*** /home/riz/Projects/dashpier/src/misc/api-init.web.ts ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){},588:
/*!****************************************************!*\
  !*** /home/riz/Projects/dashpier/src/imgs/bg2.png ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"static/media/bg2.aa578547.png"},589:
/*!***************************************************!*\
  !*** /home/riz/Projects/dashpier/src/imgs/bg.png ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"static/media/bg.bc9ef6e9.png"},597:
/*!************************************************************************!*\
  !*** /home/riz/Projects/dashpier/assets/fonts/nunito/Nunito-Light.ttf ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"./fonts/Nunito-Light.ttf"},598:
/*!**************************************************************************!*\
  !*** /home/riz/Projects/dashpier/assets/fonts/nunito/Nunito-Regular.ttf ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"./fonts/Nunito-Regular.ttf"},599:
/*!***********************************************************************!*\
  !*** /home/riz/Projects/dashpier/assets/fonts/nunito/Nunito-Bold.ttf ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"./fonts/Nunito-Bold.ttf"},600:
/*!************************************************************************!*\
  !*** /home/riz/Projects/dashpier/assets/fonts/nunito/Nunito-Black.ttf ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"./fonts/Nunito-Black.ttf"}},[[394,88,44,64,22,65,83,14,21,2,67,19,28,60,61,41,23,18,63,66,17,68,29,30,56,15,16,24,52,75,25,35,37,51,32,7,78,80,85,31,33,34,9,10,11,13,20,58,55,81,82,84,86,5,1,62,3,4,6,8,12,26,27,36,38,39,40,42,43,46,45,47,48,49,50,53,54,57,59,69,70,71,72,73,74,76,77,79,87]]]);