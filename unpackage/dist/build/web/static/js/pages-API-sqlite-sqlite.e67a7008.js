(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-sqlite-sqlite"],{"09c4":function(t,e,n){"use strict";var a=n("e6e0"),i=n.n(a);i.a},"112c":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={pageHead:n("855f").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDB.apply(void 0,arguments)}}},[t._v("打开数据库test.db")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.executeSQL.apply(void 0,arguments)}}},[t._v("创建表database及插入数据")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSQL.apply(void 0,arguments)}}},[t._v("查询表database的数据")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.droptable.apply(void 0,arguments)}}},[t._v("删除表database")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDB.apply(void 0,arguments)}}},[t._v("关闭数据库test.db")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isOpenDB.apply(void 0,arguments)}}},[t._v("查询是否打开数据库")])],1)],1)],1)},s=[]},"199a":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".uni-btn-v[data-v-2d2cf0ac]{margin:%?20?% 0;padding:0}",""]),t.exports=e},"537b":function(t,e,n){"use strict";n.r(e);var a=n("112c"),i=n("9b04");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("09c4");var u=n("828b"),l=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"2d2cf0ac",null,!1,a["a"],void 0);e["default"]=l.exports},5485:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d4b5");var a={data:function(){return{title:"SQLite"}},methods:{openDB:function(){plus.sqlite.openDatabase({name:"first",path:"_doc/test.db",success:function(t){plus.nativeUI.alert("打开数据库test.db成功 ")},fail:function(t){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(t))}})},executeSQL:function(){plus.sqlite.executeSql({name:"first",sql:'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',success:function(t){plus.sqlite.executeSql({name:"first",sql:"insert into database values('彦','女','7000')",success:function(t){plus.nativeUI.alert("创建表table和插入数据成功")},fail:function(t){plus.nativeUI.alert("创建表table成功但插入数据失败: "+JSON.stringify(t))}})},fail:function(t){plus.nativeUI.alert("创建表table失败: "+JSON.stringify(t))}})},selectSQL:function(){plus.sqlite.selectSql({name:"first",sql:"select * from database",success:function(t){plus.nativeUI.alert("查询SQL语句成功: "+JSON.stringify(t))},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})},droptable:function(){plus.sqlite.executeSql({name:"first",sql:"drop table database",success:function(t){plus.nativeUI.alert("删除表database成功")},fail:function(t){plus.nativeUI.alert("删除表database失败: "+JSON.stringify(t))}})},closeDB:function(){plus.sqlite.closeDatabase({name:"first",success:function(t){plus.nativeUI.alert("关闭数据库成功")},fail:function(t){plus.nativeUI.alert("关闭数据库失败: "+JSON.stringify(t))}})},isOpenDB:function(){plus.sqlite.isOpenDatabase({name:"first",path:"_doc/test.db"})?plus.nativeUI.alert("Opened!"):plus.nativeUI.alert("Unopened!")}}};e.default=a},"9b04":function(t,e,n){"use strict";n.r(e);var a=n("5485"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},e6e0:function(t,e,n){var a=n("199a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("905041cc",a,!0,{sourceMap:!1,shadowMode:!1})}}]);