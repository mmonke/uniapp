(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-badge-badge"],{"861d":function(t,e,a){"use strict";a.r(e);var i=a("eeb7"),n=a("8a6f");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("8e34");var r=a("828b"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"82655c94",null,!1,i["a"],void 0);e["default"]=u.exports},"8a6f":function(t,e,a){"use strict";a.r(e);var i=a("9101"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"8e34":function(t,e,a){"use strict";var i=a("b4cb"),n=a.n(i);n.a},"8f81":function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.example-body[data-v-82655c94]{flex-direction:row;justify-content:flex-start}.uni-badge-left-margin[data-v-82655c94]{margin-left:10px}.uni-badge-absolute[data-v-82655c94]{margin-left:40px}.box[data-v-82655c94]{width:40px;height:40px;display:flex;justify-content:center;align-items:center;text-align:center;background-color:#dcdfe6;color:#fff;font-size:12px}.box-text[data-v-82655c94]{text-align:center;color:#fff;font-size:12px}',""]),t.exports=e},9101:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{value:0,customStyle:{backgroundColor:"#62ed0d",color:"#fff"}}},mounted:function(){var t=this,e=setInterval((function(){t.value>=199?clearInterval(e):t.value++}),100)}};e.default=i},b4cb:function(t,e,a){var i=a("8f81");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("4bb2b130",i,!0,{sourceMap:!1,shadowMode:!1})},eeb7:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uniCard:a("c3f7").default,uniSection:a("71fa").default,uniBadge:a("49ff").default},n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[e("v-uni-text",{staticClass:"uni-h6"},[this._v("数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等")])],1),e("uni-section",{attrs:{title:"基础用法",type:"line",padding:!0}},[e("v-uni-view",{staticClass:"example-body"},[e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"1"}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"2",type:"primary"}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"34",type:"success"}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"45",type:"warning"}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"123",type:"info"}})],1)],1),e("uni-section",{attrs:{title:"无底色",type:"line",padding:!0}},[e("v-uni-view",{staticClass:"example-body"},[e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"1"}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"2",type:"primary"}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"34",type:"success"}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"45",type:"warning"}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"123",type:"info"}})],1)],1),e("uni-section",{attrs:{title:"自定义样式",type:"line",padding:!0}},[e("v-uni-view",{staticClass:"example-body"},[e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"2",type:"primary",customStyle:{background:"#4335d6"}}}),e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"2",type:"primary",customStyle:this.customStyle}})],1)],1),e("uni-section",{attrs:{title:"定位: aboslute 属性",subTitle:"注：在安卓端不支持 nvue",type:"line",padding:!0}},[e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:this.value,absolute:"rightTop",size:"small"}},[e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"box-text"},[this._v("右上")])],1)],1)],1),e("uni-section",{attrs:{title:"偏移: offset 属性(存在 aboslute)",type:"line",padding:!0}},[e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:8,absolute:"rightTop",offset:[-3,-3],size:"small"}},[e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"box-text"},[this._v("右上")])],1)],1)],1),e("uni-section",{attrs:{title:"仅显示点: is-dot 属性",type:"line",padding:!0}},[e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{"is-dot":!0,text:this.value,absolute:"rightTop",size:"small"}},[e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"box-text"},[this._v("圆点")])],1)],1)],1)],1)},s=[]}}]);