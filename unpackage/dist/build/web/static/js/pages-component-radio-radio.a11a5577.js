(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-radio-radio"],{"0750":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return i}));var i={pageHead:e("855f").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-title"},[t._v("默认样式")]),e("v-uni-view",[e("v-uni-label",{staticClass:"radio",staticStyle:{"margin-right":"30rpx"}},[e("v-uni-radio",{attrs:{value:"r1",checked:"true"}}),t._v("选中")],1),e("v-uni-label",{staticClass:"radio"},[e("v-uni-radio",{attrs:{value:"r2"}}),t._v("未选中")],1)],1)],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-title"},[t._v("不同颜色和尺寸的radio")]),e("v-uni-view",[e("v-uni-label",{staticClass:"radio",staticStyle:{"margin-right":"30rpx"}},[e("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"r1",checked:"true",color:"#FFCC33"}}),t._v("选中")],1),e("v-uni-label",{staticClass:"radio"},[e("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"r2",color:"#FFCC33"}}),t._v("未选中")],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-mt uni-common-pl"},[t._v("推荐展示样式")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-radio-group",{on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.radioChange.apply(void 0,arguments)}}},t._l(t.items,(function(a,i){return e("v-uni-label",{key:a.value,staticClass:"uni-list-cell uni-list-cell-pd"},[e("v-uni-view",[e("v-uni-radio",{attrs:{value:a.value,checked:i===t.current}})],1),e("v-uni-view",[t._v(t._s(a.name))])],1)})),1)],1)],1)},u=[]},3263:function(t,a,e){"use strict";var i=e("7cb0"),n=e.n(i);n.a},"3bad":function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,".uni-list-cell[data-v-fe9b71cc]{justify-content:flex-start}",""]),t.exports=a},"7cb0":function(t,a,e){var i=e("3bad");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("24835e8b",i,!0,{sourceMap:!1,shadowMode:!1})},"96fc":function(t,a,e){"use strict";e.r(a);var i=e("ad3a"),n=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},aa0a:function(t,a,e){"use strict";e.r(a);var i=e("0750"),n=e("96fc");for(var u in n)["default"].indexOf(u)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(u);e("3263");var r=e("828b"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"fe9b71cc",null,!1,i["a"],void 0);a["default"]=l.exports},ad3a:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={data:function(){return{title:"radio 单选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}],current:0}},methods:{radioChange:function(t){for(var a=0;a<this.items.length;a++)if(this.items[a].value===t.detail.value){this.current=a;break}}}}}}]);