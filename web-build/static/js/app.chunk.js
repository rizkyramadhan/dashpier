(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{280:
/*!********************************************************!*\
  !*** /home/riz/Projects/dashpier/App.tsx + 14 modules ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@babel/runtime/regenerator/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@expo/vector-icons/build/Entypo.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@expo/vector-icons/build/EvilIcons.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/@expo/vector-icons/build/FontAwesome.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-typography/src/collections/iOSUIKit.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-typography/src/helpers/iOSColors.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-typography/src/helpers/materialColors.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-typography/src/helpers/systemWeights.web.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/FlatList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/Picker/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/ScrollView/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/StyleSheet/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/Text/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/TouchableOpacity/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-native-web/dist/exports/View/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react-navigation/src/react-navigation.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/dayjs/dayjs.min.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/mobx-react-lite/dist/index.module.js */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/mobx/lib/mobx.module.js (<- Module uses injected variables (process, global)) */
/*! ModuleConcatenation bailout: Cannot concat with /home/riz/Projects/dashpier/node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";var a=r(203),n=r(16),i=r.n(n),l=r(53),o=r(0),c=r.n(o),s=r(35),m=r(3),u=r(14),f=r(30),b=r(2),d=r(39),N=r(210),_=r(465),g=r(15),y=r.n(g),p=r(40),h=new(r(/*! frisbee */340))({baseURI:"https://dashpier.rx.plansys.co",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}}).auth("admin:admin"),E=r(264),v=r.n(E),O=Object(p.d)({org:"",orglist:[],list:{},cboh:0,cbohList:[],recv:275e6,payb:825e5,income:{rev:{year:295e7,avgmth:384e5},exp:{year:1684e6,avgmth:245e5}}}),j=O,x={find:function(e){var t=function e(t,r){if(r[t])return r[t];for(var a in r){var n=r[a].childs;if(void 0===r[a].debet&&(r[a].id=a,r[a].debet=0,r[a].kredit=0,r[a].count=0),Object.keys(n).length>0)for(var i in n)n[i].parent=r[a];var l=e(t,n);if(l)return l}return!1},r=t(e,Object(p.g)(O.list));return!!r&&JSON.parse(JSON.stringify(r,function(e,t){return"parent"===e?t.id:t}))},reload:function(){var e;return y.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return e=O.org?"?org="+O.org:"",t.next=3,y.a.awrap(h.get("/get"+e));case 3:return O.list=t.sent.body,t.next=6,y.a.awrap(h.get("/org"));case 6:O.orglist=t.sent.body,O.cbohList=[this.find("30621"),this.find("30626")],O.cboh=v.a.sumBy(O.cbohList,function(e){return e.debet-e.kredit})||0;case 9:case"end":return t.stop()}},null,this)}},w=function(e){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?"IDR ":"")+(Math.round(e)||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},P="/home/riz/Projects/dashpier/src/pages/Home.tsx";function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var C=Object(l.a)(function(e){var t=e.navigation;return Object(o.useEffect)(function(){0===Object.keys(Object(p.g)(j.list)||{}).length&&x.reload()},[]),0===Object.keys(j.list||{}).length?c.a.createElement(b.a,{style:z.containerCenter,__source:{fileName:P,lineNumber:29}},c.a.createElement(u.a,{style:z.title,__source:{fileName:P,lineNumber:30}},"Loading...")):c.a.createElement(b.a,{style:z.container,__source:{fileName:P,lineNumber:36}},c.a.createElement(b.a,{style:{flexDirection:"row",paddingHorizontal:10},__source:{fileName:P,lineNumber:37}},c.a.createElement(u.a,{style:z.title,__source:{fileName:P,lineNumber:38}},"Dashpier")),c.a.createElement(s.a,{__source:{fileName:P,lineNumber:40}},c.a.createElement(f.a,{onPress:function(){t.navigate("Cboh")},style:z.itemContainer,__source:{fileName:P,lineNumber:41}},c.a.createElement(u.a,{style:z.itemTitle,__source:{fileName:P,lineNumber:47}},"Cash & Bank on Hand "),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:48}},w(j.cboh))),c.a.createElement(f.a,{onPress:function(){t.navigate("Recv")},style:z.itemContainer,__source:{fileName:P,lineNumber:51}},c.a.createElement(u.a,{style:z.itemTitle,__source:{fileName:P,lineNumber:57}},"Receivables"),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:58}},w(j.recv)),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:59}},"Open Invoice")),c.a.createElement(f.a,{onPress:function(){t.navigate("Payb")},style:z.itemContainer,__source:{fileName:P,lineNumber:62}},c.a.createElement(u.a,{style:z.itemTitle,__source:{fileName:P,lineNumber:68}},"Payables"),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:69}},w(j.payb)),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:70}},"Open Bill")),c.a.createElement(f.a,{onPress:function(){t.navigate("IncStm")},style:z.itemContainer,__source:{fileName:P,lineNumber:73}},c.a.createElement(u.a,{style:z.itemTitle,__source:{fileName:P,lineNumber:79}},"Income Statement"),c.a.createElement(b.a,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},__source:{fileName:P,lineNumber:80}},c.a.createElement(b.a,{__source:{fileName:P,lineNumber:87}},c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:88}},w(j.income.rev.year)),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:91}},"Revenue")),c.a.createElement(b.a,{__source:{fileName:P,lineNumber:93}},c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:94}},w(j.income.exp.year)),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:97}},"Expenses")))),c.a.createElement(f.a,{onPress:function(){t.navigate("Rev")},style:z.itemContainer,__source:{fileName:P,lineNumber:102}},c.a.createElement(u.a,{style:z.itemTitle,__source:{fileName:P,lineNumber:108}},"Revenue"),c.a.createElement(b.a,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},__source:{fileName:P,lineNumber:109}},c.a.createElement(b.a,{__source:{fileName:P,lineNumber:116}},c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:117}},w(j.income.rev.year)),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:120}},"To date")),c.a.createElement(b.a,{__source:{fileName:P,lineNumber:122}},c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:123}},w(j.income.rev.avgmth)),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:126}},"Avg per month")))),c.a.createElement(f.a,{onPress:function(){t.navigate("Exp")},style:z.itemContainer,__source:{fileName:P,lineNumber:131}},c.a.createElement(u.a,{style:z.itemTitle,__source:{fileName:P,lineNumber:137}},"Expenses"),c.a.createElement(b.a,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},__source:{fileName:P,lineNumber:138}},c.a.createElement(b.a,{__source:{fileName:P,lineNumber:145}},c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:146}},w(j.income.exp.year)),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:149}},"To date")),c.a.createElement(b.a,{__source:{fileName:P,lineNumber:151}},c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:152}},w(j.income.exp.avgmth)),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:155}},"Avg per month")))),c.a.createElement(f.a,{onPress:function(){t.navigate("Raw")},style:z.itemContainer,__source:{fileName:P,lineNumber:159}},c.a.createElement(u.a,{style:z.itemTitle,__source:{fileName:P,lineNumber:165}},"Trial Balance"),c.a.createElement(u.a,{style:z.subTitle,__source:{fileName:P,lineNumber:166}},"All Charts of Accounts"))))}),z=m.a.create({drillItem:{flexDirection:"row",alignItems:"center",paddingBottom:5},containerCenter:{backgroundColor:"#fafafa",position:"absolute",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"},container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"},itemContainer:{flexDirection:"column",padding:10},title:k({},d.a.light,{fontSize:35,color:N.a.black,marginVertical:15}),itemTitle:k({},d.a.thin,{fontSize:35,textTransform:"capitalize"}),subTitle:k({fontSize:14},d.a.semibold,{color:_.a.blackSecondary})}),D=r(467),I=r(466),S="/home/riz/Projects/dashpier/src/components/Title.tsx";function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}var B=function(e){var t=e.navigation,r=e.text;return c.a.createElement(b.a,{style:{flexDirection:"row",alignItems:"center",paddingHorizontal:10},__source:{fileName:S,lineNumber:8}},c.a.createElement(f.a,{onPress:function(){t.pop()},style:{marginLeft:-15,marginRight:-10},__source:{fileName:S,lineNumber:15}},c.a.createElement(I.a,{name:"chevron-left",size:64,__source:{fileName:S,lineNumber:21}})),c.a.createElement(u.a,{style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},d.a.light,{fontSize:35,color:N.a.black,marginVertical:15}),__source:{fileName:S,lineNumber:23}},r||"Dashpier"))},L="/home/riz/Projects/dashpier/src/pages/Raw.tsx";function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var A=Object(l.a)(function(e){var t=e.navigation,r=Object(l.b)({current:{},debet:0,kredit:0,trx:0,chartKey:"debet",mode:"total",drill:[]}),a=Object(o.useRef)(null);Object(o.useEffect)(function(){r.current=Object(p.g)(j.list),n()},[]);var n=function(){var e=0,t=0,a=0;Object.keys(r.current).forEach(function(n){var i=r.current[n];e+=i.debet||0,t+=i.kredit||0,a+=i.count||0}),r.debet=e,r.kredit=t,r.trx=a};return c.a.createElement(b.a,{style:F.container,__source:{fileName:L,lineNumber:67}},c.a.createElement(B,{navigation:t,__source:{fileName:L,lineNumber:68}}),c.a.createElement(b.a,{style:{borderRadius:4,borderWidth:1,borderColor:"#ccc",backgroundColor:"#fff",marginHorizontal:5,marginBottom:5},__source:{fileName:L,lineNumber:70}},c.a.createElement(b.a,{style:{flexDirection:"row",alignItems:"center",minHeight:30,padding:5,paddingBottom:0,borderColor:"#ccc",flexWrap:"wrap",borderWidth:0,borderBottomWidth:1},__source:{fileName:L,lineNumber:80}},c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{onPress:function(){r.drill=[],r.current=j.list,a.current.scrollTo({x:0,y:0,animated:!0}),n()},style:F.drillItem,__source:{fileName:L,lineNumber:94}},c.a.createElement(D.a,{name:"home",size:16,__source:{fileName:L,lineNumber:103}})),r.drill.length>0&&c.a.createElement(D.a,{name:"chevron-right",style:{marginHorizontal:5,paddingBottom:5},__source:{fileName:L,lineNumber:106}}),0===r.drill.length&&c.a.createElement(u.a,{style:{paddingHorizontal:10,paddingBottom:5,color:N.a.gray},__source:{fileName:L,lineNumber:112}},"« Root COA »")),r.drill.map(function(e,t){return r.drill.length===t+1?null:c.a.createElement(b.a,{key:t,style:F.drillItem,__source:{fileName:L,lineNumber:128}},c.a.createElement(f.a,{onPress:function(){for(var e in r.drill.splice(t+1,r.drill.length-t-1),r.current=j.list,r.drill){var n=r.drill[e];r.current[n.id]&&(r.debet=r.current[n.id].debet||0,r.kredit=r.current[n.id].kredit||0,r.trx=r.current[n.id].count||0,r.current=r.current[n.id].childs)}a.current.scrollTo({x:0,y:0,animated:!0})},__source:{fileName:L,lineNumber:129}},c.a.createElement(u.a,{style:{textTransform:"capitalize"},__source:{fileName:L,lineNumber:145}},e.name.toLowerCase())),t!==r.drill.length-2&&c.a.createElement(D.a,{name:"chevron-right",style:{marginHorizontal:5},__source:{fileName:L,lineNumber:150}}))})),c.a.createElement(b.a,{__source:{fileName:L,lineNumber:159}},r.drill.length>0&&c.a.createElement(b.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingRight:5},__source:{fileName:L,lineNumber:161}},c.a.createElement(u.a,{style:F.currentItemTitle,__source:{fileName:L,lineNumber:169}},r.drill[r.drill.length-1].name.toLowerCase()),c.a.createElement(u.a,{style:F.amtTitle,__source:{fileName:L,lineNumber:172}},"[",r.drill[r.drill.length-1].id,"]")),c.a.createElement(b.a,{style:{flexDirection:"row",padding:5,alignItems:"center",justifyContent:"space-between"},__source:{fileName:L,lineNumber:177}},"total"===r.mode?function(){var e=r.debet-r.kredit;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{style:{flexDirection:"row"},__source:{fileName:L,lineNumber:190}},c.a.createElement(u.a,{style:{fontSize:11,color:e>0?"green":"red",fontWeight:"bold"},__source:{fileName:L,lineNumber:191}},w(e))),0===r.drill.length?c.a.createElement(u.a,{style:{fontSize:11},__source:{fileName:L,lineNumber:202}},r.trx," trx"):c.a.createElement(f.a,{style:{flexDirection:"row",borderTopLeftRadius:3,borderBottomLeftRadius:3,borderWidth:1,borderColor:"#ccc",borderRightWidth:0,paddingHorizontal:10,backgroundColor:"#ececeb",marginRight:-5,alignItems:"center"},onPress:function(){t.navigate("Trx",{id:r.drill[r.drill.length-1].id,name:r.drill[r.drill.length-1].name})},__source:{fileName:L,lineNumber:204}},c.a.createElement(u.a,{style:{fontSize:11},__source:{fileName:L,lineNumber:224}},r.trx," trx"),c.a.createElement(I.a,{name:"chevron-right",size:20,style:{marginRight:-8},__source:{fileName:L,lineNumber:225}})))}():c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{style:{flexDirection:"row"},__source:{fileName:L,lineNumber:237}},c.a.createElement(u.a,{style:{fontSize:11},__source:{fileName:L,lineNumber:238}},"DEBET: "),c.a.createElement(u.a,{style:{fontSize:11,color:"green",fontWeight:"bold"},__source:{fileName:L,lineNumber:239}},w(r.debet))),c.a.createElement(b.a,{style:{flexDirection:"row"},__source:{fileName:L,lineNumber:245}},c.a.createElement(u.a,{style:{fontSize:11},__source:{fileName:L,lineNumber:246}},r.trx," trx")),c.a.createElement(b.a,{style:{flexDirection:"row"},__source:{fileName:L,lineNumber:248}},c.a.createElement(u.a,{style:{fontSize:11},__source:{fileName:L,lineNumber:249}},"KREDIT: "),c.a.createElement(u.a,{style:{fontSize:11,color:"red",fontWeight:"bold"},__source:{fileName:L,lineNumber:250}},w(r.kredit))))))),c.a.createElement(b.a,{style:{alignItems:"stretch",flex:1},__source:{fileName:L,lineNumber:262}},c.a.createElement(s.a,{ref:a,snapToEnd:!0,style:{paddingHorizontal:10},__source:{fileName:L,lineNumber:263}},Object.keys(r.current).sort(function(e,t){return e-t}).map(function(e,t){var n=r.current[e];return c.a.createElement(b.a,{key:t,__source:{fileName:L,lineNumber:291}},c.a.createElement(f.a,{key:t,style:{paddingBottom:15,paddingTop:t>0?15:5},onPress:function(){!function(e,t){r.drill.push({id:e,name:t.name}),r.debet=t.debet||0,r.kredit=t.kredit||0,r.trx=t.count||0,r.current=t.childs,a.current.scrollTo({x:0,y:0,animated:!0})}(e,n)},__source:{fileName:L,lineNumber:292}},c.a.createElement(b.a,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},__source:{fileName:L,lineNumber:302}},c.a.createElement(u.a,{style:F.itemTitle,__source:{fileName:L,lineNumber:309}},n.name.toLowerCase()),c.a.createElement(u.a,{style:F.amtTitle,__source:{fileName:L,lineNumber:312}},"[",n.key,"]")),c.a.createElement(b.a,{style:{flexDirection:"row",justifyContent:"space-between"},__source:{fileName:L,lineNumber:314}},"total"===r.mode?function(){var e=(n.debet||0)-(n.kredit||0);return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{style:{flexDirection:"row"},__source:{fileName:L,lineNumber:325}},c.a.createElement(u.a,{style:{fontSize:11,color:e>0?"green":"red",fontWeight:"bold"},__source:{fileName:L,lineNumber:326}},w(e))),c.a.createElement(b.a,{style:{flexDirection:"row"},__source:{fileName:L,lineNumber:338}},c.a.createElement(u.a,{style:{fontSize:11},__source:{fileName:L,lineNumber:339}},n.count||0," trx")))}():c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{style:{flex:1},__source:{fileName:L,lineNumber:348}},c.a.createElement(u.a,{style:F.amtTitle,__source:{fileName:L,lineNumber:349}},"DEBET"),c.a.createElement(u.a,{style:W({fontSize:13},d.a.semibold,{},n.debet>0?{color:"green"}:{}),__source:{fileName:L,lineNumber:350}},w(n.debet||0))),c.a.createElement(b.a,{style:{flexDirection:"row"},__source:{fileName:L,lineNumber:361}},c.a.createElement(u.a,{style:{fontSize:11},__source:{fileName:L,lineNumber:362}},n.count," trx")),c.a.createElement(b.a,{style:{flex:1,alignItems:"flex-end"},__source:{fileName:L,lineNumber:366}},c.a.createElement(u.a,{style:F.amtTitle,__source:{fileName:L,lineNumber:367}},"KREDIT"),c.a.createElement(u.a,{style:W({fontSize:13},d.a.semibold,{},n.kredit>0?{color:N.a.red}:{}),__source:{fileName:L,lineNumber:368}},w(n.kredit||0)))))),c.a.createElement(b.a,{style:{borderBottomWidth:1,marginHorizontal:-5,borderColor:"#aaa"},__source:{fileName:L,lineNumber:384}}))}))))}),F=m.a.create({drillItem:{flexDirection:"row",alignItems:"center",paddingBottom:5},container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"},currentItemTitle:W({},d.a.light,{paddingTop:0,fontSize:23,paddingLeft:5,textTransform:"capitalize"}),itemTitle:W({},d.a.light,{fontSize:23,paddingBottom:3,textTransform:"capitalize"}),amtTitle:W({fontSize:10,paddingBottom:3},d.a.semibold,{color:_.a.blackSecondary})}),M=r(469),V=r(468),J=r(170),K="/home/riz/Projects/dashpier/src/components/Org.tsx";function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}var U=Object(l.a)(function(e){var t=e.style,r=j.orglist.find(function(e){return e.id===j.org});return c.a.createElement(b.a,{style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({flex:1,backgroundColor:"#ddd",borderRadius:5,paddingLeft:5,flexDirection:"row",alignItems:"center"},t),__source:{fileName:K,lineNumber:10}},c.a.createElement(V.a,{name:"building-o",size:20,__source:{fileName:K,lineNumber:21}}),c.a.createElement(b.a,{style:{flex:1,alignItems:"stretch",height:30},__source:{fileName:K,lineNumber:22}},c.a.createElement(J.a,{selectedValue:r?r.id:" ",style:{flex:1,borderWidth:0,borderRadius:10,backgroundColor:"transparent"},onValueChange:function(e,t){j.org=e,x.reload()},__source:{fileName:K,lineNumber:23}},c.a.createElement(J.a.Item,{label:"- All -",value:"",__source:{fileName:K,lineNumber:36}}),j.orglist.map(function(e,t){return c.a.createElement(J.a.Item,{label:e.name,key:t,value:e.id,__source:{fileName:K,lineNumber:38}})}))))}),q="/home/riz/Projects/dashpier/src/pages/Cboh.tsx";function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}var Q=Object(l.a)(function(e){var t=e.navigation;return c.a.createElement(b.a,{style:X.container,__source:{fileName:q,lineNumber:12}},c.a.createElement(B,{navigation:t,text:"Cash & Bank on Hand",__source:{fileName:q,lineNumber:13}}),c.a.createElement(b.a,{style:{paddingLeft:50,paddingRight:10,paddingBottom:10},__source:{fileName:q,lineNumber:14}},c.a.createElement(u.a,{style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({fontSize:22,textAlign:"left",marginTop:-5},d.a.light),__source:{fileName:q,lineNumber:15}},w(j.cboh)),c.a.createElement(U,{style:{marginTop:10},__source:{fileName:q,lineNumber:25}})),c.a.createElement(b.a,{style:{padding:10},__source:{fileName:q,lineNumber:27}},c.a.createElement(b.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:q,lineNumber:28}},c.a.createElement(u.a,{style:M.a.title3Emphasized,__source:{fileName:q,lineNumber:35}},"Cash Account"),c.a.createElement(u.a,{__source:{fileName:q,lineNumber:36}},w(j.cbohList[0].debet-j.cbohList[0].kredit,!1))),c.a.createElement(b.a,{style:{padding:10},__source:{fileName:q,lineNumber:38}},Object.keys(j.cbohList[0].childs).map(function(e,r){var a=j.cbohList[0].childs[e];return a.debet-a.kredit==0?null:c.a.createElement(f.a,{key:r,style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},onPress:function(){t.navigate("Trx",{id:e,name:a.name})},__source:{fileName:q,lineNumber:44}},c.a.createElement(u.a,{__source:{fileName:q,lineNumber:58}},a.name),c.a.createElement(u.a,{__source:{fileName:q,lineNumber:59}},w(a.debet-a.kredit,!1)))})),c.a.createElement(b.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:q,lineNumber:64}},c.a.createElement(u.a,{style:M.a.title3Emphasized,__source:{fileName:q,lineNumber:71}},"Bank Account"),c.a.createElement(u.a,{__source:{fileName:q,lineNumber:72}},w(j.cbohList[1].debet-j.cbohList[1].kredit,!1))),c.a.createElement(b.a,{style:{padding:10},__source:{fileName:q,lineNumber:74}},Object.keys(j.cbohList[1].childs).map(function(e,r){var a=j.cbohList[1].childs[e];return a.debet-a.kredit==0?null:c.a.createElement(f.a,{key:r,style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},onPress:function(){t.navigate("Trx",{id:e,name:a.name})},__source:{fileName:q,lineNumber:79}},c.a.createElement(u.a,{__source:{fileName:q,lineNumber:93}},a.name),c.a.createElement(u.a,{__source:{fileName:q,lineNumber:94}},w(a.debet-a.kredit,!1)))}))))}),X=m.a.create({container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"}}),Z=m.a.create({container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"}}),$=m.a.create({container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"}}),ee=m.a.create({container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"}}),te=m.a.create({container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"}}),re=m.a.create({container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"}}),ae=r(279),ne=r.n(ae),ie=r(98),le="/home/riz/Projects/dashpier/src/pages/Trx.tsx";function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var se=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},me=Object(l.a)(function(e){var t=e.navigation,r=t.getParam("id"),a=t.getParam("name"),n=Object(l.b)({list:[],loading:!0});return Object(o.useEffect)(function(){y.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.awrap(h.get("/trx?id="+r));case 2:n.list=e.sent.body,n.loading=!1;case 4:case"end":return e.stop()}})},[]),c.a.createElement(b.a,{style:ue.container,__source:{fileName:le,lineNumber:32}},c.a.createElement(B,{navigation:t,text:a,__source:{fileName:le,lineNumber:33}}),c.a.createElement(b.a,{style:{alignItems:"stretch",flex:1},__source:{fileName:le,lineNumber:35}},n.loading?c.a.createElement(b.a,{style:{alignItems:"center",justifyContent:"center"},__source:{fileName:le,lineNumber:37}},c.a.createElement(u.a,{style:ue.itemTitle,__source:{fileName:le,lineNumber:38}},"Loading...")):c.a.createElement(ie.a,{data:n.list,renderItem:function(e){var t=e.item;return c.a.createElement(b.a,{style:{borderTopWidth:1,borderBottomWidth:1,borderColor:"#ccc",padding:10,marginHorizontal:3},__source:{fileName:le,lineNumber:44}},c.a.createElement(u.a,{style:ue.itemTitle,__source:{fileName:le,lineNumber:53}},t.desc),c.a.createElement(b.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},__source:{fileName:le,lineNumber:55}},c.a.createElement(u.a,{style:ue.amtTitle,__source:{fileName:le,lineNumber:62}},t.docno),c.a.createElement(u.a,{style:ue.amtTitle,__source:{fileName:le,lineNumber:63}},ne()(t.date).format("DD MMM YYYY HH:ii"))),c.a.createElement(b.a,{style:{flexDirection:"row",paddingTop:5},__source:{fileName:le,lineNumber:67}},c.a.createElement(b.a,{style:{flex:1},__source:{fileName:le,lineNumber:68}},c.a.createElement(u.a,{style:ue.amtTitle,__source:{fileName:le,lineNumber:69}},"DEBET"),c.a.createElement(u.a,{style:ce({fontSize:13},d.a.semibold,{},t.debet>0?{color:"green"}:{}),__source:{fileName:le,lineNumber:70}},se(t.debet||0))),c.a.createElement(b.a,{style:{flex:1,alignItems:"flex-end"},__source:{fileName:le,lineNumber:81}},c.a.createElement(u.a,{style:ue.amtTitle,__source:{fileName:le,lineNumber:82}},"KREDIT"),c.a.createElement(u.a,{style:ce({fontSize:13},d.a.semibold,{},t.kredit>0?{color:N.a.red}:{}),__source:{fileName:le,lineNumber:83}},se(t.kredit||0)))))},__source:{fileName:le,lineNumber:41}})))}),ue=m.a.create({drillItem:{flexDirection:"row",alignItems:"center",paddingBottom:5},container:{backgroundColor:"#fafafa",position:"absolute",alignItems:"stretch",width:"100%",height:"100%",justifyContent:"flex-start"},title:ce({},d.a.light,{fontSize:35,color:N.a.black,marginVertical:15}),currentItemTitle:ce({},d.a.light,{paddingTop:0,fontSize:23,paddingLeft:5,textTransform:"capitalize"}),itemTitle:ce({},d.a.light,{fontSize:18,paddingBottom:3,textTransform:"capitalize"}),amtTitle:ce({fontSize:10,paddingBottom:3},d.a.semibold,{color:_.a.blackSecondary})}),fe=Object(a.createStackNavigator)({Home:C,Raw:A,Trx:me,Cboh:Q,Exp:function(e){var t=e.navigation;return c.a.createElement(b.a,{style:Z.container,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/Exp.tsx",lineNumber:7}},c.a.createElement(B,{navigation:t,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/Exp.tsx",lineNumber:8}}))},IncStm:function(e){var t=e.navigation;return c.a.createElement(b.a,{style:$.container,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/IncStm.tsx",lineNumber:7}},c.a.createElement(B,{navigation:t,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/IncStm.tsx",lineNumber:8}}))},Payb:function(e){var t=e.navigation;return c.a.createElement(b.a,{style:ee.container,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/Payb.tsx",lineNumber:7}},c.a.createElement(B,{navigation:t,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/Payb.tsx",lineNumber:8}}))},Recv:function(e){var t=e.navigation;return c.a.createElement(b.a,{style:te.container,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/Recv.tsx",lineNumber:7}},c.a.createElement(B,{navigation:t,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/Recv.tsx",lineNumber:8}}))},Rev:function(e){var t=e.navigation;return c.a.createElement(b.a,{style:re.container,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/Rev.tsx",lineNumber:7}},c.a.createElement(B,{navigation:t,__source:{fileName:"/home/riz/Projects/dashpier/src/pages/Rev.tsx",lineNumber:8}}))}},{headerMode:"none",initialRouteName:"Home"});t.a=Object(a.createAppContainer)(fe)},290:
/*!***********************************************************************!*\
  !*** multi /home/riz/Projects/dashpier/node_modules/expo/AppEntry.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){e.exports=r(/*! /home/riz/Projects/dashpier/node_modules/expo/AppEntry.js */458)}},[[290,61,46,26,47,2,49,41,12,24,44,48,45,50,19,13,14,38,6,34,56,21,33,16,59,15,17,18,8,39,37,1,42,43,3,4,5,7,9,10,11,20,22,23,25,28,27,29,30,31,32,35,36,40,51,52,53,54,55,57,58,60]]]);