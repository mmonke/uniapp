(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-switch-switch"],{"01ee":function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"switch 开关"}},methods:{switch1Change:function(t){console.log("switch1 发生 change 事件，携带值为",t.detail.value)},switch2Change:function(t){console.log("switch2 发生 change 事件，携带值为",t.detail.value)}}};i.default=e},"88f3":function(t,i,n){"use strict";n.d(i,"b",(function(){return c})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return e}));var e={pageHead:n("855f").default},c=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[t._v("默认样式")]),n("v-uni-view",[n("v-uni-switch",{attrs:{checked:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.switch1Change.apply(void 0,arguments)}}}),n("v-uni-switch",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.switch2Change.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"uni-title"},[t._v("不同颜色和尺寸的switch")]),n("v-uni-view",[n("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:!0,color:"#FFCC33"}}),n("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#FFCC33"}})],1),n("v-uni-view",{staticClass:"uni-title"},[t._v("推荐展示样式")])],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[t._v("开启中")]),n("v-uni-switch",{attrs:{checked:!0}})],1),n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[t._v("关闭")]),n("v-uni-switch")],1)],1)],1)},a=[]},"992d":function(t,i,n){"use strict";n.r(i);var e=n("88f3"),c=n("cacb");for(var a in c)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return c[t]}))}(a);var s=n("828b"),u=Object(s["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);i["default"]=u.exports},cacb:function(t,i,n){"use strict";n.r(i);var e=n("01ee"),c=n.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=c.a}}]);