(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-list2detail-detail-list2detail-detail"],{"0498":function(e,t,n){var a=n("a45f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("47ad2d60",a,!0,{sourceMap:!1,shadowMode:!1})},"14bf":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("aa9c"),n("4100"),n("d4b5"),n("5ef2"),n("fd3c"),n("5c47"),n("a1c1");var i=a(n("f727")),r="/pages/template/list2detail-detail/list2detail-detail";var s={data:function(){return{title:"",banner:{},htmlNodes:[]}},onLoad:function(e){var t=e.detailDate||e.payload;try{this.banner=JSON.parse(decodeURIComponent(t))}catch(n){this.banner=JSON.parse(t)}uni.setNavigationBarTitle({title:this.banner.title}),this.getDetail()},onShareAppMessage:function(){return{title:this.banner.title,path:r+"?detailDate="+JSON.stringify(this.banner)}},onNavigationBarButtonTap:function(e){var t=this,n=e.index;if(0===n){uni.getProvider({service:"share",success:function(e){if(e.provider&&e.provider.length&&~e.provider.indexOf("weixin")){var n=function(e){for(var t=[],n=0,a=e.length;n<a;n++)switch(e[n]){case"weixin":t.push({text:"分享到微信好友",id:"weixin",sort:0}),t.push({text:"分享到微信朋友圈",id:"weixin",sort:1});break;default:break}return t.sort((function(e,t){return e.sort-t.sort})),t}(e.provider);uni.showActionSheet({itemList:n.map((function(e){return e.text})),success:function(e){var n=e.tapIndex;uni.share({provider:"weixin",type:0,title:t.banner.title,scene:0===n?"WXSceneSession":"WXSceneTimeline",href:"https://uniapp.dcloud.io/h5"+r+"?detailDate="+JSON.stringify(t.banner),imageUrl:"https://web-assets.dcloud.net.cn/unidoc/zh/share-logo@3.png"})}})}else uni.showToast({title:"未检测到可用的微信分享服务"})},fail:function(e){uni.showToast({title:"获取分享服务失败"})}})}},methods:{getDetail:function(){var e=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(t){if(200==t.statusCode){var n=t.data.content.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"');e.htmlNodes=(0,i.default)(n)}},fail:function(){console.log("fail")}})}}};t.default=s},"8e87":function(e,t,n){"use strict";n.r(t);var a=n("fcfd"),i=n("ddee");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("9ad2");var s=n("828b"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"30ece8d8",null,!1,a["a"],void 0);t["default"]=o.exports},"9ad2":function(e,t,n){"use strict";var a=n("0498"),i=n.n(a);i.a},a45f:function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".banner[data-v-30ece8d8]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-30ece8d8]{width:100%}.banner-title[data-v-30ece8d8]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.article-meta[data-v-30ece8d8]{padding:%?20?% %?40?%;display:flex;flex-direction:row;justify-content:flex-start;color:grey}.article-text[data-v-30ece8d8]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-30ece8d8],\n.article-time[data-v-30ece8d8]{font-size:%?30?%}.article-content[data-v-30ece8d8]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""]),e.exports=t},ddee:function(e,t,n){"use strict";n.r(t);var a=n("14bf"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f727:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("5ef2"),n("5c47"),n("2c10"),n("a1c1"),n("23f4"),n("7d2f"),n("9c4e"),n("ab80"),n("aa9c"),n("473f"),n("bf0f"),n("3efd");var a=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,i=/^<\/([-A-Za-z0-9_]+)[^>]*>/,r=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=f("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),o=f("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),c=f("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),l=f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),d=f("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=f("script,style");function f(e){for(var t={},n=e.split(","),a=0;a<n.length;a++)t[n[a]]=!0;return t}var h=function(e){e=function(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}(e);var t=[],n={node:"root",children:[]};return function(e,t){var n,f,h,p=[],v=e;p.last=function(){return this[this.length-1]};while(e){if(f=!0,p.last()&&u[p.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(e,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(n),""})),g("",p.last());else if(0==e.indexOf("\x3c!--")?(n=e.indexOf("--\x3e"),n>=0&&(t.comment&&t.comment(e.substring(4,n)),e=e.substring(n+3),f=!1)):0==e.indexOf("</")?(h=e.match(i),h&&(e=e.substring(h[0].length),h[0].replace(i,g),f=!1)):0==e.indexOf("<")&&(h=e.match(a),h&&(e=e.substring(h[0].length),h[0].replace(a,m),f=!1)),f){n=e.indexOf("<");var b=n<0?e:e.substring(0,n);e=n<0?"":e.substring(n),t.chars&&t.chars(b)}if(e==v)throw"Parse Error: "+e;v=e}function m(e,n,a,i){if(n=n.toLowerCase(),o[n])while(p.last()&&c[p.last()])g("",p.last());if(l[n]&&p.last()==n&&g("",n),i=s[n]||!!i,i||p.push(n),t.start){var u=[];a.replace(r,(function(e,t){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:d[t]?t:"";u.push({name:t,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(n,u,i)}}function g(e,n){if(n){for(a=p.length-1;a>=0;a--)if(p[a]==n)break}else var a=0;if(a>=0){for(var i=p.length-1;i>=a;i--)t.end&&t.end(p[i]);p.length=a}}g()}(e,{start:function(e,a,i){var r={name:e};if(0!==a.length&&(r.attrs=function(e){return e.reduce((function(e,t){var n=t.value,a=t.name;return e[a]?e[a]=e[a]+" "+n:e[a]=n,e}),{})}(a)),i){var s=t[0]||n;s.children||(s.children=[]),s.children.push(r)}else t.unshift(r)},end:function(e){var a=t.shift();if(a.name!==e&&console.error("invalid state: mismatch end tag"),0===t.length)n.children.push(a);else{var i=t[0];i.children||(i.children=[]),i.children.push(a)}},chars:function(e){var a={type:"text",text:e};if(0===t.length)n.children.push(a);else{var i=t[0];i.children||(i.children=[]),i.children.push(a)}},comment:function(e){var n={node:"comment",text:e},a=t[0];a.children||(a.children=[]),a.children.push(n)}}),n.children};t.default=h},fcfd:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"banner"},[n("v-uni-image",{staticClass:"banner-img",attrs:{src:e.banner.cover}}),n("v-uni-view",{staticClass:"banner-title"},[e._v(e._s(e.banner.title))])],1),n("v-uni-view",{staticClass:"article-meta"},[n("v-uni-text",{staticClass:"article-author"},[e._v(e._s(e.banner.author_name))]),n("v-uni-text",{staticClass:"article-text"},[e._v("发表于")]),n("v-uni-text",{staticClass:"article-time"},[e._v(e._s(e.banner.published_at))])],1),n("v-uni-view",{staticClass:"article-content"},[n("v-uni-rich-text",{attrs:{nodes:e.htmlNodes}})],1)],1)},i=[]}}]);