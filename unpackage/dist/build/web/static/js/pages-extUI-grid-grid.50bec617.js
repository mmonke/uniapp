(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-grid-grid"],{"07f9":function(t,i,n){"use strict";n.r(i);var e=n("60f3"),a=n.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},1827:function(t,i,n){"use strict";n.r(i);var e=n("988f"),a=n("d2c44");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("6ee3");var s=n("828b"),d=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"13f73da8",null,!1,e["a"],void 0);i["default"]=d.exports},3393:function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("64aa"),n("aa9c"),n("bf0f"),n("2797"),n("dd2b");var e={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(i,n){i===t&&t.grid.children.splice(n,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};i.default=e},"3da7":function(t,i,n){var e=n("c86c");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-item[data-v-13f73da8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-13f73da8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-13f73da8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-13f73da8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-13f73da8]:active{background-color:#f1f1f1}',""]),t.exports=i},"44c9":function(t,i,n){var e=n("c86c");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-wrap[data-v-6f48037d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-6f48037d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-6f48037d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=i},"4b02":function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("64aa"),n("c9b5"),n("bf0f"),n("ab80"),n("2797"),n("5c47"),n("e966");var e={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(i){t.children.forEach((function(t,n){t.width=i}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var i=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(n){i.width=parseInt((n[0].width-1)/i.column)+"px",t(i.width)}))}}};i.default=e},"4c55":function(t,i,n){var e=n("3da7");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("967d").default;a("712e7cf7",e,!0,{sourceMap:!1,shadowMode:!1})},"4dc8":function(t,i,n){"use strict";var e=n("78a7"),a=n.n(e);a.a},"4f84":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":this.showBorder},style:{"border-left-color":this.borderColor},attrs:{id:this.elId}},[this._t("default")],2)],1)},a=[]},"546e":function(t,i,n){"use strict";n.r(i);var e=n("e181"),a=n("07f9");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("84f0");var s=n("828b"),d=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"88b481c6",null,!1,e["a"],void 0);i["default"]=d.exports},"60f3":function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("aa9c"),n("dd2b");var e={components:{},data:function(){return{dynamicList:[],list:[{url:"/static/c1.png",text:"Grid 1",badge:"0",type:"primary"},{url:"/static/c2.png",text:"Grid 2",badge:"1",type:"success"},{url:"/static/c3.png",text:"Grid 3",badge:"99",type:"warning"},{url:"/static/c4.png",text:"Grid 4",badge:"2",type:"error"},{url:"/static/c5.png",text:"Grid 5"},{url:"/static/c6.png",text:"Grid 6"},{url:"/static/c7.png",text:"Grid 7"},{url:"/static/c8.png",text:"Grid 8"},{url:"/static/c9.png",text:"Grid 9"}]}},methods:{change:function(t){var i=t.detail.index;this.list[i].badge&&this.list[i].badge++,uni.showToast({title:"点击第".concat(i+1,"个宫格"),icon:"none"})},add:function(){this.dynamicList.length<9?this.dynamicList.push({url:"/static/c".concat(this.dynamicList.length+1,".png"),text:"Grid ".concat(this.dynamicList.length+1),color:this.dynamicList.length%2===0?"#f5f5f5":"#fff"}):uni.showToast({title:"最多添加9个",icon:"none"})},del:function(){this.dynamicList.splice(this.dynamicList.length-1,1)}}};i.default=e},"6dfd":function(t,i,n){"use strict";n.r(i);var e=n("4f84"),a=n("eac3");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("4dc8");var s=n("828b"),d=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"6f48037d",null,!1,e["a"],void 0);i["default"]=d.exports},"6ee3":function(t,i,n){"use strict";var e=n("4c55"),a=n.n(e);a.a},"78a7":function(t,i,n){var e=n("44c9");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("967d").default;a("6dbd5f42",e,!0,{sourceMap:!1,shadowMode:!1})},"84f0":function(t,i,n){"use strict";var e=n("c38f"),a=n.n(e);a.a},"988f":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.width?n("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[n("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},a=[]},c38f:function(t,i,n){var e=n("e1ba");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("967d").default;a("4b242cdf",e,!0,{sourceMap:!1,shadowMode:!1})},d2c44:function(t,i,n){"use strict";n.r(i);var e=n("3393"),a=n.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},e181:function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}));var e={uniCard:n("c3f7").default,uniSection:n("71fa").default,uniGrid:n("6dfd").default,uniGridItem:n("1827").default,uniIcons:n("f2b7").default,uniBadge:n("49ff").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("宫格组件主要使用场景如：商品推荐列表、热门内容等")])],1),n("uni-section",{attrs:{title:"基础样式",type:"line",padding:!0}},[n("uni-grid",{attrs:{column:4,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(4,(function(i,e){return n("uni-grid-item",{key:e,attrs:{index:e}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("uni-icons",{attrs:{type:"image",size:30,color:"#777"}}),n("v-uni-text",{staticClass:"text"},[t._v("文本信息")])],1)],1)})),1)],1),n("uni-section",{attrs:{title:"自定义列数",type:"line",padding:!0}},[n("uni-grid",{attrs:{column:4,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(8,(function(i,e){return n("uni-grid-item",{key:e,attrs:{index:e}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("uni-icons",{attrs:{type:"image",size:30,color:"#777"}}),n("v-uni-text",{staticClass:"text"},[t._v("文本信息")])],1)],1)})),1)],1),n("uni-section",{attrs:{title:"滑动视图",type:"line",padding:!0}},[n("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0}},[n("v-uni-swiper-item",[n("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,e){return n("uni-grid-item",{key:e,attrs:{index:e}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1),n("v-uni-swiper-item",[n("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,e){return n("uni-grid-item",{key:e,attrs:{index:e}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1),n("v-uni-swiper-item",[n("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,e){return n("uni-grid-item",{key:e,attrs:{index:e}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1)],1)],1),n("uni-section",{attrs:{title:"动态加载",type:"line",padding:!0}},[n("v-uni-view",{staticClass:"grid-dynamic-box"},[n("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.dynamicList,(function(i,e){return n("uni-grid-item",{key:e,attrs:{index:e}},[n("v-uni-view",{staticClass:"grid-item-box",style:{backgroundColor:i.color}},[n("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.add.apply(void 0,arguments)}}},[t._v("点击添加一个宫格")]),0!==t.dynamicList.length?n("v-uni-button",{staticStyle:{"margin-top":"15px"},attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.del.apply(void 0,arguments)}}},[t._v("点击删除一个宫格")]):t._e()],1),n("uni-section",{attrs:{title:"无边框带角标（3列）",type:"line",padding:!0}},[n("uni-grid",{attrs:{column:3,"show-border":!1,square:!1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,e){return n("uni-grid-item",{key:e,attrs:{index:e}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))]),i.badge?n("v-uni-view",{staticClass:"grid-dot"},[n("uni-badge",{attrs:{text:i.badge,type:i.type}})],1):t._e()],1)],1)})),1)],1),n("uni-section",{attrs:{title:"矩形宫格（3列）",type:"line",padding:!0}},[n("uni-grid",{attrs:{column:3,square:!1,highlight:!1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,e){return n("uni-grid-item",{key:e,attrs:{index:e}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1),n("uni-section",{attrs:{title:"边框颜色（4列 无文字）",type:"line",padding:!0}},[n("uni-grid",{attrs:{column:4,"border-color":"#03a9f4"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},[n("uni-grid-item",{attrs:{index:0}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:"/static/c1.png",mode:"aspectFill"}})],1)],1),n("uni-grid-item",{attrs:{index:1}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:"/static/c2.png",mode:"aspectFill"}})],1)],1),n("uni-grid-item",{attrs:{index:2}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:"/static/c3.png",mode:"aspectFill"}})],1)],1),n("uni-grid-item",{attrs:{index:3}},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:"/static/c4.png",mode:"aspectFill"}})],1)],1)],1)],1)],1)},r=[]},e1ba:function(t,i,n){var e=n("c86c");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.image[data-v-88b481c6]{width:25px;height:25px}.text[data-v-88b481c6]{font-size:14px;margin-top:5px}.grid-dynamic-box[data-v-88b481c6]{margin-bottom:15px}.grid-item-box[data-v-88b481c6]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:15px 0}.grid-item-box-row[data-v-88b481c6]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px 0}.grid-dot[data-v-88b481c6]{position:absolute;top:5px;right:15px}.swiper[data-v-88b481c6]{height:420px}@media screen and (min-width:768px) and (max-width:1425px){.swiper[data-v-88b481c6]{height:630px}}@media screen and (min-width:1425px){.swiper[data-v-88b481c6]{height:830px}}',""]),t.exports=i},eac3:function(t,i,n){"use strict";n.r(i);var e=n("4b02"),a=n.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a}}]);