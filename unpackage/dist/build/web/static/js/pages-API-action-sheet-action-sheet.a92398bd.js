(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-action-sheet-action-sheet"],{"17ed":function(t,e,n){"use strict";n.r(e);var i=n("716a"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"716a":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("5c47");var i={data:function(){return{title:"action-sheet",buttonRect:{}}},onReady:function(){this.getNodeInfo(),window.addEventListener("resize",this.getNodeInfo)},beforeDestroy:function(){window.removeEventListener("resize",this.getNodeInfo)},methods:{actionSheetTap:function(){uni.showActionSheet({title:"标题",itemList:["item1","item2","item3","item4"],popover:{top:this.buttonRect.top+104+this.buttonRect.height,left:this.buttonRect.left+this.buttonRect.width/2},success:function(t){console.log(t.tapIndex),uni.showToast({title:"点击了第"+t.tapIndex+"个选项",icon:"none"})}})},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec((function(e){var n=e[0];n&&(t.buttonRect=n)}))}}};e.default=i},eced:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={pageHead:n("855f").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"target",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.actionSheetTap.apply(void 0,arguments)}}},[t._v("弹出action sheet")])],1)],1)],1)},a=[]},fb41:function(t,e,n){"use strict";n.r(e);var i=n("eced"),o=n("17ed");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var u=n("828b"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports}}]);