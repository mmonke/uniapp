(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-list-chat"],{"0795":function(t,e,i){"use strict";i.r(e);var a=i("9edd"),n=i("ea39");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("db23");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"6f77d02a",null,!1,a["a"],void 0);e["default"]=s.exports},"1bee":function(t,e,i){"use strict";var a=i("7348"),n=i.n(a);n.a},"1fbd":function(t,e,i){"use strict";var a=i("a66f"),n=i.n(a);n.a},"2a4c":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("bf0f"),i("2797"),i("aa9c"),i("c223"),i("fd3c"),i("d4b5"),i("f7a5"),i("5c47"),i("dfcf");var a={components:{},data:function(){return{UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},listData:[],avatarList:[{url:"/static/logo.png"},{url:"/static/logo.png"},{url:"/static/logo.png"}]}},onLoad:function(){this.getList()},methods:{onClick:function(){uni.showToast({title:"列表被点击"})},avatar:function(t){var e=[];return this.avatarList.forEach((function(i,a){a<t&&e.push(i)})),e},getList:function(){var t=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news",data:{column:"id,post_id,title,author_name,cover,published_at"},success:function(e){if(200==e.statusCode){var i=t.setTime(e.data);i=t.reload?i:t.listData.concat(i),i.map((function(t){return t.text=Math.floor(-19*Math.random()+20),t})),t.listData=t.getRandomArrayElements(i,3)}},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},getRandomArrayElements:function(t,e){var i,a,n=t.slice(0),r=t.length,o=r-e;while(r-- >o)a=Math.floor((r+1)*Math.random()),i=n[a],n[a]=n[r],n[r]=i;return n.slice(o)},setTime:function(t){var e=this,i=[];return t.forEach((function(t){i.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:e.format(t.published_at),title:t.title})})),i},format:function(t){var e=this.parse(t),i=Date.now()-e.getTime();if(i<this.UNITS["天"])return this.humanize(i);var a=function(t){return t<10?"0"+t:t};return e.getFullYear()+"-"+a(e.getMonth()+1)+"-"+a(e.getDate())+" "+a(e.getHours())+":"+a(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}}};e.default=a},"2c46":function(t,e,i){"use strict";var a=i("9725"),n=i.n(a);n.a},"2d02":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-section[data-v-52a816e0]{background-color:#fff}.uni-section .uni-section-header[data-v-52a816e0]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section .uni-section-header__decoration[data-v-52a816e0]{margin-right:6px;background-color:#2979ff}.uni-section .uni-section-header__decoration.line[data-v-52a816e0]{width:4px;height:12px;border-radius:10px}.uni-section .uni-section-header__decoration.circle[data-v-52a816e0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px}.uni-section .uni-section-header__decoration.square[data-v-52a816e0]{width:8px;height:8px}.uni-section .uni-section-header__content[data-v-52a816e0]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section .uni-section-header__content .distraction[data-v-52a816e0]{flex-direction:row;align-items:center}.uni-section .uni-section-header__content-sub[data-v-52a816e0]{margin-top:2px}.uni-section .uni-section-header__slot-right[data-v-52a816e0]{font-size:14px}.uni-section .uni-section-content[data-v-52a816e0]{font-size:14px}',""]),t.exports=e},"3f29":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("c9b5"),i("bf0f"),i("ab80"),i("5ef2");var a={name:"UniListChat",emits:["click"],props:{title:{type:String,default:""},note:{type:String,default:""},clickable:{type:Boolean,default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},badgeText:{type:[String,Number],default:""},badgePositon:{type:String,default:"right"},time:{type:String,default:""},avatarCircle:{type:Boolean,default:!1},avatar:{type:String,default:""},avatarList:{type:Array,default:function(){return[]}}},computed:{isSingle:function(){if("dot"===this.badgeText)return"uni-badge--dot";var t=this.badgeText.toString();return t.length>1?"uni-badge--complex":"uni-badge--single"},computedAvatar:function(){return this.avatarList.length>4?(this.imageWidth=13.95,"avatarItem--3"):this.avatarList.length>1?(this.imageWidth=21.15,"avatarItem--2"):(this.imageWidth=45,"avatarItem--1")}},data:function(){return{isFirstChild:!1,border:!0,imageWidth:50}},mounted:function(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0),this.border=this.list.border)},methods:{getForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniList",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick:function(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},openPage:function(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi:function(t){var e=this;uni[t]({url:this.to,success:function(t){e.$emit("click",{data:t})},fail:function(t){e.$emit("click",{data:t}),console.error(t.errMsg)}})}}};e.default=a},"48e6":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list-chat",attrs:{"hover-class":t.clickable||t.link?"uni-list-chat--hover":""},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{class:{"uni-list--border":t.border,"uni-list-chat--first":t.isFirstChild}}),i("v-uni-view",{staticClass:"uni-list-chat__container"},[i("v-uni-view",{staticClass:"uni-list-chat__header-warp"},[t.avatarCircle||0===t.avatarList.length?i("v-uni-view",{staticClass:"uni-list-chat__header",class:{"header--circle":t.avatarCircle}},[i("v-uni-image",{staticClass:"uni-list-chat__header-image",class:{"header--circle":t.avatarCircle},attrs:{src:t.avatar,mode:"aspectFill"}})],1):i("v-uni-view",{staticClass:"uni-list-chat__header"},t._l(t.avatarList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-list-chat__header-box",class:t.computedAvatar,style:{width:t.imageWidth+"px",height:t.imageWidth+"px"}},[i("v-uni-image",{staticClass:"uni-list-chat__header-image",style:{width:t.imageWidth+"px",height:t.imageWidth+"px"},attrs:{src:e.url,mode:"aspectFill"}})],1)})),1)],1),t.badgeText&&"left"===t.badgePositon?i("v-uni-view",{staticClass:"uni-list-chat__badge uni-list-chat__badge-pos",class:[t.isSingle]},[i("v-uni-text",{staticClass:"uni-list-chat__badge-text"},[t._v(t._s("dot"===t.badgeText?"":t.badgeText))])],1):t._e(),i("v-uni-view",{staticClass:"uni-list-chat__content"},[i("v-uni-view",{staticClass:"uni-list-chat__content-main"},[i("v-uni-text",{staticClass:"uni-list-chat__content-title uni-ellipsis"},[t._v(t._s(t.title))]),i("v-uni-text",{staticClass:"uni-list-chat__content-note uni-ellipsis"},[t._v(t._s(t.note))])],1),i("v-uni-view",{staticClass:"uni-list-chat__content-extra"},[t._t("default",[i("v-uni-text",{staticClass:"uni-list-chat__content-extra-text"},[t._v(t._s(t.time))]),t.badgeText&&"right"===t.badgePositon?i("v-uni-view",{staticClass:"uni-list-chat__badge",class:[t.isSingle,"right"===t.badgePositon?"uni-list-chat--right":""]},[i("v-uni-text",{staticClass:"uni-list-chat__badge-text"},[t._v(t._s("dot"===t.badgeText?"":t.badgeText))])],1):t._e()])],2)],1)],1)],1)},n=[]},"53e4":function(t,e,i){"use strict";i.r(e);var a=i("a6c9"),n=i("f3c5");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("1fbd");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"e07ee5ea",null,!1,a["a"],void 0);e["default"]=s.exports},5406:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=a},6366:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-list-chat[data-v-4d7ecefa]{font-size:16px;position:relative;flex-direction:column;justify-content:space-between;background-color:#fff}.uni-list-chat--hover[data-v-4d7ecefa]{background-color:#f5f5f5}.uni-list--border[data-v-4d7ecefa]{position:relative;margin-left:15px}.uni-list--border[data-v-4d7ecefa]:after{position:absolute;top:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}.uni-list-item--first[data-v-4d7ecefa]:after{height:0}.uni-list-chat--first[data-v-4d7ecefa]{border-top-width:0}.uni-ellipsis[data-v-4d7ecefa]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.uni-ellipsis-2[data-v-4d7ecefa]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.uni-list-chat__container[data-v-4d7ecefa]{position:relative;display:flex;flex-direction:row;flex:1;padding:10px 15px;position:relative;overflow:hidden}.uni-list-chat__header-warp[data-v-4d7ecefa]{position:relative}.uni-list-chat__header[data-v-4d7ecefa]{display:flex;align-content:center;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap-reverse;width:45px;height:45px;border-radius:5px;border-color:#eee;border-width:1px;border-style:solid;overflow:hidden}.uni-list-chat__header-box[data-v-4d7ecefa]{box-sizing:border-box;display:flex;width:45px;height:45px;overflow:hidden;border-radius:2px}.uni-list-chat__header-image[data-v-4d7ecefa]{margin:1px;width:45px;height:45px}.uni-list-chat__header-image[data-v-4d7ecefa]{display:block;width:100%;height:100%}.avatarItem--1[data-v-4d7ecefa]{width:100%;height:100%}.avatarItem--2[data-v-4d7ecefa]{width:47%;height:47%}.avatarItem--3[data-v-4d7ecefa]{width:32%;height:32%}.header--circle[data-v-4d7ecefa]{border-radius:50%}.uni-list-chat__content[data-v-4d7ecefa]{display:flex;flex-direction:row;flex:1;overflow:hidden;padding:2px 0}.uni-list-chat__content-main[data-v-4d7ecefa]{display:flex;flex-direction:column;justify-content:space-between;padding-left:10px;flex:1;overflow:hidden}.uni-list-chat__content-title[data-v-4d7ecefa]{font-size:16px;color:#3b4144;font-weight:400;overflow:hidden}.uni-list-chat__content-note[data-v-4d7ecefa]{margin-top:3px;color:#999;font-size:12px;font-weight:400;overflow:hidden}.uni-list-chat__content-extra[data-v-4d7ecefa]{flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end;margin-left:5px}.uni-list-chat__content-extra-text[data-v-4d7ecefa]{color:#999;font-size:12px;font-weight:400;overflow:hidden}.uni-list-chat__badge-pos[data-v-4d7ecefa]{position:absolute;left:calc(45px + 10px - 6px + 0px);top:calc(10px/ 2 + 1px + 0px)}.uni-list-chat__badge[data-v-4d7ecefa]{display:flex;justify-content:center;align-items:center;border-radius:100px;background-color:#ff5a5f}.uni-list-chat__badge-text[data-v-4d7ecefa]{color:#fff;font-size:12px}.uni-badge--single[data-v-4d7ecefa]{width:18px;height:18px}.uni-badge--complex[data-v-4d7ecefa]{width:auto;height:18px;padding:0 6px}.uni-badge--dot[data-v-4d7ecefa]{left:calc(45px + 15px - 10px/ 2 + 1px + 0px);width:10px;height:10px;padding:0}',""]),t.exports=e},6636:function(t,e,i){"use strict";var a=i("8183"),n=i.n(a);n.a},"71fa":function(t,e,i){"use strict";i.r(e);var a=i("e23c"),n=i("b2ce");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("2c46");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"52a816e0",null,!1,a["a"],void 0);e["default"]=s.exports},7348:function(t,e,i){var a=i("d5da");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("3fb07f02",a,!0,{sourceMap:!1,shadowMode:!1})},"7d5e":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},n=[]},8183:function(t,e,i){var a=i("6366");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("e7d22368",a,!0,{sourceMap:!1,shadowMode:!1})},9627:function(t,e,i){var a=i("e6d4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("a7bc9280",a,!0,{sourceMap:!1,shadowMode:!1})},9725:function(t,e,i){var a=i("2d02");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("146f0da8",a,!0,{sourceMap:!1,shadowMode:!1})},"9edd":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniCard:i("c3f7").default,uniSection:i("71fa").default,uniList:i("53e4").default,uniListChat:i("f0ea").default,uniIcons:i("f2b7").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[i("v-uni-text",{staticClass:"uni-h6"},[t._v("此示例展示了聊天列表的使用场景。")])],1),i("uni-section",{attrs:{title:"圆头像且不显示分割线",type:"line"}},[i("uni-list",{attrs:{border:!1}},t._l(t.listData,(function(t){return i("uni-list-chat",{key:t.id,attrs:{"avatar-circle":!0,title:t.author_name,avatar:t.cover,note:t.title,time:t.published_at,clickable:!1}})})),1)],1),i("uni-section",{attrs:{title:"带圆点",type:"line"}},[i("uni-list",t._l(t.listData,(function(t){return i("uni-list-chat",{key:t.id,attrs:{title:t.author_name,avatar:t.cover,note:t.title,time:t.published_at,"badge-text":t.text,clickable:!1,"badge-positon":"left","badge-text":"dot"}})})),1)],1),i("uni-section",{attrs:{title:"自定义右侧内容",type:"line"}},[i("uni-list",t._l(t.listData,(function(e){return i("uni-list-chat",{key:e.id,attrs:{title:e.author_name,avatar:e.cover,note:e.title,"badge-positon":"left","badge-text":e.text}},[i("v-uni-view",{staticClass:"chat-custom-right"},[i("v-uni-text",{staticClass:"chat-custom-text"},[t._v("刚刚")]),i("uni-icons",{attrs:{type:"star-filled",color:"#999",size:"18"}})],1)],1)})),1)],1),i("uni-section",{attrs:{title:"带通知角标的单头像聊天列表",type:"line"}},[i("uni-list",t._l(t.listData,(function(e){return i("uni-list-chat",{key:e.id,attrs:{title:e.author_name,avatar:e.cover,note:e.title,time:e.published_at,clickable:!0,"badge-text":e.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})})),1)],1),i("uni-section",{attrs:{title:"带通知角标的多头像聊天列表",type:"line"}},[i("uni-list",t._l(t.listData,(function(e,a){return i("uni-list-chat",{key:e.id,attrs:{title:e.author_name,avatar:e.cover,note:e.title,time:e.published_at,clickable:!0,avatarList:t.avatar(a+1),"badge-text":e.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})})),1)],1)],1)},r=[]},a66f:function(t,e,i){var a=i("c7f8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("1d70bb93",a,!0,{sourceMap:!1,shadowMode:!1})},a6c9:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},n=[]},aa39:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding:function(){return"string"===typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},b2ce:function(t,e,i){"use strict";i.r(e);var a=i("aa39"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},c3f7:function(t,e,i){"use strict";i.r(e);var a=i("7d5e"),n=i("ea7f");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("1bee");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"44c0d81e",null,!1,a["a"],void 0);e["default"]=s.exports},c7f8:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},d5da:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #ebeef5}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},db23:function(t,e,i){"use strict";var a=i("9627"),n=i.n(a);n.a},e23c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section"},[i("v-uni-view",{staticClass:"uni-section-header",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.type?i("v-uni-view",{staticClass:"uni-section-header__decoration",class:t.type}):t._t("decoration"),i("v-uni-view",{staticClass:"uni-section-header__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle},style:{"font-size":t.titleFontSize,color:t.titleColor}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section-header__content-sub",style:{"font-size":t.subTitleFontSize,color:t.subTitleColor}},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section-header__slot-right"},[t._t("right")],2)],2),i("v-uni-view",{staticClass:"uni-section-content",style:{padding:t._padding}},[t._t("default")],2)],1)},n=[]},e538:function(t,e,i){"use strict";i.r(e);var a=i("3f29"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},e6d4:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.chat-custom-right[data-v-6f77d02a]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}.chat-custom-text[data-v-6f77d02a]{font-size:12px;color:#999}',""]),t.exports=e},ea39:function(t,e,i){"use strict";i.r(e);var a=i("2a4c"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},ea7f:function(t,e,i){"use strict";i.r(e);var a=i("5406"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},f0ea:function(t,e,i){"use strict";i.r(e);var a=i("48e6"),n=i("e538");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("6636");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"4d7ecefa",null,!1,a["a"],void 0);e["default"]=s.exports},f20e:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=a},f3c5:function(t,e,i){"use strict";i.r(e);var a=i("f20e"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a}}]);