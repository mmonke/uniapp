(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-label-label"],{"0253":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return a}));var a={pageHead:i("855f").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("表单组件在label内")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.checkboxItems,(function(t){return i("v-uni-label",{key:t.name,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-checkbox",{attrs:{value:t.name,checked:t.checked}})],1),i("v-uni-view",[e._v(e._s(t.value))])],1)})),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label用for标识表单组件")]),i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.radioItems,(function(t,a){return i("v-uni-view",{key:a,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-radio",{attrs:{id:t.name,value:t.name,checked:t.checked}})],1),i("v-uni-label",{staticClass:"label-2-text",attrs:{for:t.name}},[i("v-uni-text",[e._v(e._s(t.value))])],1)],1)})),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label内有多个时选中第一个")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"label-3"},[i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("选项一")])],1),i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("选项二")])],1),i("v-uni-view",{staticClass:"uni-link uni-center",staticStyle:{"margin-top":"20rpx"}},[e._v("点击该label下的文字默认选中第一个checkbox")])],1)],1)],1)],1)],1)},l=[]},"141f":function(e,t,i){"use strict";i.r(t);var a=i("0253"),n=i("164f");for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);i("b142");var c=i("828b"),u=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"9b15c1ea",null,!1,a["a"],void 0);t["default"]=u.exports},"164f":function(e,t,i){"use strict";i.r(t);var a=i("2a4d"),n=i.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(l);t["default"]=n.a},"298f":function(e,t,i){var a=i("c86c");t=a(!1),t.push([e.i,".uni-list-cell[data-v-9b15c1ea]{justify-content:flex-start}.uni-list .label-3[data-v-9b15c1ea]{padding:0}.label-2-text[data-v-9b15c1ea]{flex:1}",""]),e.exports=t},"2a4d":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(e){var t=e.detail.value;console.log(t)},radioChange:function(e){var t=e.detail.value;console.log(t)}}};t.default=a},"7ee7":function(e,t,i){var a=i("298f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("967d").default;n("16346a61",a,!0,{sourceMap:!1,shadowMode:!1})},b142:function(e,t,i){"use strict";var a=i("7ee7"),n=i.n(a);n.a}}]);