(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-list-list"],{1194:function(t,i,e){var n=e("cc79");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("967d").default;s("11157c26",n,!0,{sourceMap:!1,shadowMode:!1})},"2edb":function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={components:{},data:function(){return{cover:"https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"}}},methods:{onClick:function(t){console.log("执行click事件",t.data),uni.showToast({title:"点击反馈"})},switchChange:function(t){uni.showToast({title:"change:"+t.value,icon:"none"})}}};i.default=n},b29d:function(t,i,e){"use strict";e.r(i);var n=e("d738"),s=e("e459");for(var r in s)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(r);e("bddd");var o=e("828b"),l=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"50ddc0b2",null,!1,n["a"],void 0);i["default"]=l.exports},bddd:function(t,i,e){"use strict";var n=e("1194"),s=e.n(n);s.a},cc79:function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.slot-box[data-v-50ddc0b2]{display:flex;flex-direction:row;align-items:center}.slot-image[data-v-50ddc0b2]{display:block;margin-right:10px;width:30px;height:30px}.slot-text[data-v-50ddc0b2]{flex:1;font-size:14px;color:#4cd964;margin-right:10px}',""]),t.exports=i},d738:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var n={uniCard:e("c3f7").default,uniSection:e("71fa").default,uniList:e("53e4").default,uniListItem:e("b045").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[e("v-uni-text",{staticClass:"uni-h6"},[t._v("列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等")])],1),e("uni-section",{attrs:{title:"基础用法",type:"line"}},[e("uni-list",[e("uni-list-item",{attrs:{title:"列表文字"}}),e("uni-list-item",{attrs:{title:"列表文字",rightText:"右侧文字"}}),e("uni-list-item",{attrs:{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1)],1),e("uni-section",{attrs:{title:"禁用列表",type:"line"}},[e("uni-list",[e("uni-list-item",{attrs:{disabled:!0,title:"列表禁用状态",rightText:"右侧文字"}}),e("uni-list-item",{attrs:{disabled:!0,title:"列表禁用状态",rightText:"右侧文字"}})],1)],1),e("uni-section",{attrs:{title:"显示右侧箭头",type:"line"}},[e("uni-list",[e("uni-list-item",{attrs:{showArrow:!0,title:"列表文字"}}),e("uni-list-item",{attrs:{showArrow:!0,title:"列表文字",rightText:"右侧文字"}})],1)],1),e("uni-section",{attrs:{title:"开启点击反馈",type:"line"}},[e("uni-list",[e("uni-list-item",{attrs:{title:"弹窗提示",clickable:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"页面跳转",to:"./chat"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"关闭当前页面打开新页面",showArrow:!0,link:"redirectTo",to:"./chat"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"打开错误页面(查看控制台)",showArrow:!0,link:"redirectTo",to:"./chats"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}})],1)],1),e("uni-section",{attrs:{title:"不显示分隔线",type:"line"}},[e("uni-list",{attrs:{border:!1}},[e("uni-list-item",{attrs:{title:"列表文字"}}),e("uni-list-item",{attrs:{border:!1,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}}),e("uni-list-item",{attrs:{border:!1,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1)],1),e("uni-section",{attrs:{title:"分隔线通栏",type:"line"}},[e("uni-list",{attrs:{"border-full":!0}},[e("uni-list-item",{attrs:{title:"列表文字"}}),e("uni-list-item",{attrs:{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}}),e("uni-list-item",{attrs:{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1)],1),e("uni-section",{attrs:{title:"文字溢出隐藏",type:"line"}},[e("uni-list",[e("uni-list-item",{attrs:{ellipsis:"1",title:"超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"}}),e("uni-list-item",{attrs:{ellipsis:"2",title:"超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",rightText:"二行显示"}}),e("uni-list-item",{attrs:{ellipsis:"1",title:"全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",note:"列表描述信息,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字",showArrow:!0,rightText:"一行显示"}}),e("uni-list-item",{attrs:{title:"全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"全部"}})],1)],1),e("uni-section",{attrs:{title:"显示图标或图片",type:"line"}},[e("uni-list",[e("uni-list-item",{attrs:{"show-extra-icon":!0,showArrow:!0,"extra-icon":t.extraIcon,title:"列表左侧带扩展图标"}}),e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"/static/c1.png","thumb-size":"sm",rightText:"小图"}}),e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png","thumb-size":"base",rightText:"默认"}}),e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"lg",rightText:"大图"}})],1)],1),e("uni-section",{attrs:{title:"使用插槽",type:"line"}},[e("uni-list",[e("uni-list-item",{scopedSlots:t._u([{key:"body",fn:function(){return[e("v-uni-view",{staticClass:"slot-box"},[e("v-uni-text",{staticClass:"slot-text"},[t._v("使用 body 插槽")])],1)]},proxy:!0}])}),e("uni-list-item",{attrs:{title:"自定义右侧插槽",note:"列表描述信息",link:!0},scopedSlots:t._u([{key:"footer",fn:function(){return[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})]},proxy:!0}])}),e("uni-list-item",{scopedSlots:t._u([{key:"header",fn:function(){return[e("v-uni-view",{staticClass:"slot-box"},[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})],1)]},proxy:!0},{key:"body",fn:function(){return[e("v-uni-text",{staticClass:"slot-box slot-text"},[t._v("自定义两侧插槽")])]},proxy:!0},{key:"footer",fn:function(){return[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})]},proxy:!0}])})],1)],1)],1)},r=[]},e459:function(t,i,e){"use strict";e.r(i);var n=e("2edb"),s=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=s.a}}]);