(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"13fb":function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("e966");var a={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+t})}}};n.default=a},"20f9":function(t,n,e){var a=e("c86c");n=a(!1),n.push([t.i,".sender-container[data-v-6c33cc76]{padding:20px}",""]),t.exports=n},"27a0":function(t,n,e){"use strict";var a=e("e3c0d"),i=e.n(a);i.a},"29a7":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"sender-container"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.send.apply(void 0,arguments)}}},[t._v("点击发送消息")])],1)},i=[]},"3d3b":function(t,n,e){var a=e("f4a1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("967d").default;i("03d90810",a,!0,{sourceMap:!1,shadowMode:!1})},"43a8":function(t,n,e){"use strict";var a=e("493c"),i=e.n(a);i.a},"48a5":function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("e966");var a={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From event bus -> "+t})}}};n.default=a},"493c":function(t,n,e){var a=e("20f9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("967d").default;i("03836ac5",a,!0,{sourceMap:!1,shadowMode:!1})},5600:function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};n.default=a},8688:function(t,n,e){"use strict";e.r(n);var a=e("9cb2"),i=e("cb76");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);var u=e("828b"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"7c80fd46",null,!1,a["a"],void 0);n["default"]=c.exports},9199:function(t,n,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("c750")),r=a(e("be82")),u=a(e("c840")),c={components:{reciver:i.default,sender:r.default,senderBus:u.default},data:function(){return{}},methods:{}};n.default=c},9790:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"sender-container"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.send.apply(void 0,arguments)}}},[t._v("自定义EventBus")])],1)},i=[]},"9b26":function(t,n,e){"use strict";var a=e("3d3b"),i=e.n(a);i.a},"9cb2":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={pageHead:e("855f").default},i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:"组件通讯示例"}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("reciver"),n("sender"),n("sender-bus")],1)],1)],1)},r=[]},"9da2":function(t,n,e){"use strict";e.r(n);var a=e("5600"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},be82:function(t,n,e){"use strict";e.r(n);var a=e("29a7"),i=e("c6f3");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("9b26");var u=e("828b"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"8a1ffc22",null,!1,a["a"],void 0);n["default"]=c.exports},c6f3:function(t,n,e){"use strict";e.r(n);var a=e("13fb"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},c750:function(t,n,e){"use strict";e.r(n);var a=e("df8f"),i=e("9da2");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("27a0");var u=e("828b"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6fc920a8",null,!1,a["a"],void 0);n["default"]=c.exports},c840:function(t,n,e){"use strict";e.r(n);var a=e("9790"),i=e("cea5");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("43a8");var u=e("828b"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6c33cc76",null,!1,a["a"],void 0);n["default"]=c.exports},cb76:function(t,n,e){"use strict";e.r(n);var a=e("9199"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},cbc1:function(t,n,e){var a=e("c86c");n=a(!1),n.push([t.i,".reciver[data-v-6fc920a8]{padding:40px 0;text-align:center;line-height:40px}",""]),t.exports=n},cea5:function(t,n,e){"use strict";e.r(n);var a=e("48a5"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},df8f:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"reciver"},[this._v(this._s(""===this.msg?"等待发送":"收到消息：")+this._s(this.msg))])],1)},i=[]},e3c0d:function(t,n,e){var a=e("cbc1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("967d").default;i("7c8918d0",a,!0,{sourceMap:!1,shadowMode:!1})},f4a1:function(t,n,e){var a=e("c86c");n=a(!1),n.push([t.i,".sender-container[data-v-8a1ffc22]{padding:20px}",""]),t.exports=n}}]);