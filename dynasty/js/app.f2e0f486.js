(function(t){function e(e){for(var r,n,o=e[0],l=e[1],p=e[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);h&&h(e);while(m.length)m.shift()();return i.push.apply(i,p||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var h=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("5c96"),i=a.n(s),n=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-tag",{attrs:{type:"success"}},[t._v("王朝V0.1")]),a("el-dialog",{class:1==t.emperor_die?"":"none",attrs:{title:"登基",visible:t.emperor_die},on:{"update:visible":function(e){t.emperor_die=e}}},[a("el-form",[a("el-form-item",{attrs:{label:"皇帝姓名"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.emperor,callback:function(e){t.emperor=e},expression:"emperor"}})],1),a("el-form-item",{attrs:{label:"年号"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.yearNumber,callback:function(e){t.yearNumber=e},expression:"yearNumber"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.dio}},[t._v("确 定")])],1)],1),a("el-dialog",{class:1==t.dynasty_die?"":"none",attrs:{title:"结束",visible:t.dynasty_die},on:{"update:visible":function(e){t.dynasty_die=e}}},[a("div",[t._v("重新开始游戏？")]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.dio2}},[t._v("确 定")])],1)]),a("el-form",{staticClass:"demo-form-inline",class:1==t.firstgame?"":"none",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"朝代"}},[a("el-input",{attrs:{placeholder:"朝代"},model:{value:t.dynasty,callback:function(e){t.dynasty=e},expression:"dynasty"}})],1),a("el-form-item",{attrs:{label:"皇帝"}},[a("el-input",{attrs:{placeholder:"姓名"},model:{value:t.emperor,callback:function(e){t.emperor=e},expression:"emperor"}})],1),a("el-form-item",{attrs:{label:"年号"}},[a("el-input",{attrs:{placeholder:"年号"},model:{value:t.yearNumber,callback:function(e){t.yearNumber=e},expression:"yearNumber"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.gamestart}},[t._v("开始游戏")])],1)],1),a("el-tabs",{class:0==t.firstgame?"":"none",attrs:{type:"border-card","tab-position":"left"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"主界面",name:"first"}},[a("el-descriptions",{attrs:{title:"基本信息",direction:"vertical",column:2,border:""}},[a("el-descriptions-item",{attrs:{label:"朝代"}},[t._v(t._s(t.dynasty))]),a("el-descriptions-item",{attrs:{label:"皇帝"}},[t._v(t._s(t.emperor))]),a("el-descriptions-item",{attrs:{label:"年号"}},[t._v(t._s(t.yearNumber))]),a("el-descriptions-item",{attrs:{label:"纪年"}},[t._v(t._s(1==t.jinian?"元":t.jinian)+"年")])],1),a("p",[t._v("运行状况")]),a("el-progress",{attrs:{type:"circle",percentage:t.dynasty_hp}}),a("p",[t._v("身体状况")]),a("el-progress",{attrs:{type:"circle",percentage:t.emperor_hp}}),a("el-divider",{attrs:{"content-position":"center"}},[t._v("设置策略")]),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("勤政爱民")]),a("el-slider",{attrs:{"show-tooltip":!1},on:{change:t.bchange},model:{value:t.hardworking,callback:function(e){t.hardworking=e},expression:"hardworking"}})],1),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("声色犬马")]),a("el-slider",{attrs:{"show-tooltip":!1},on:{change:t.achange},model:{value:t.amuse,callback:function(e){t.amuse=e},expression:"amuse"}})],1),a("el-button",{attrs:{type:"primary",round:""},on:{click:t.gamemin}},[t._v("继续")])],1),a("el-tab-pane",{attrs:{label:"皇帝信息",name:"second"}},[a("el-descriptions",{attrs:{title:"基本信息",direction:"vertical",column:4,border:""}},[a("el-descriptions-item",{attrs:{label:"姓名"}},[t._v(t._s(t.emperor))]),a("el-descriptions-item",{attrs:{label:"年龄"}},[t._v(t._s(t.emperor_age))]),a("el-descriptions-item",{attrs:{label:"健康"}},[t._v(t._s(t.emperor_hp))]),a("el-descriptions-item",{attrs:{label:"能力"}},[t._v(t._s(t.emperor_ab))])],1)],1),a("el-tab-pane",{attrs:{label:"王朝信息",name:"third"}},[a("el-descriptions",{attrs:{title:"基本信息",direction:"vertical",column:3,border:""}},[a("el-descriptions-item",{attrs:{label:"朝代"}},[t._v(t._s(t.dynasty))]),a("el-descriptions-item",{attrs:{label:"国祚"}},[t._v(t._s(t.dynasty_age))]),a("el-descriptions-item",{attrs:{label:"状态"}},[t._v(t._s(t.dynasty_st))])],1),a("el-table",{attrs:{data:t.listjson}},[a("el-table-column",{attrs:{prop:"id",label:"序号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄"}}),a("el-table-column",{attrs:{prop:"nianhao",label:"年号"}}),a("el-table-column",{attrs:{prop:"jinian",label:"纪年"}})],1)],1)],1)],1)}),o=[],l={name:"App",data:function(){return{emperor_die:!1,dynasty_die:!1,emperor_id:1,firstgame:!0,emperor_age:0,emperor_hp:0,emperor_ab:0,dynasty_age:0,dynasty_st:"",dynasty_hp:0,jinian:1,dynasty:"",emperor:"",yearNumber:"",activeName:"first",amuse:50,hardworking:50,year:0,randomdata:0,total_amuse:1,total_hardworking:1,listjson:[{}]}},methods:{achange:function(){this.hardworking=100-this.amuse},bchange:function(){this.amuse=100-this.hardworking},gamestart:function(){this.firstgame=!this.firstgame,this.emperor_age=16,this.emperor_hp=100,this.emperor_ab=10,this.dynasty_hp=100,this.dynasty_hp>=90?this.dynasty_st="国泰民安":this.dynasty_hp>=80?this.dynasty_st="风调雨顺":this.dynasty_hp>=60?this.dynasty_st="差强人意":this.dynasty_hp>=30?this.dynasty_st="风雨飘摇":this.dynasty_hp<30&&(this.dynasty_st="国势倾颓")},gamemin:function(){this.emperor_hp>0?this.dynasty_hp>0?(this.emperor_die=!1,this.gamemin_dynasty(),this.gamemin_emperor()):this.dynasty_die=!0:this.emperor_die=!0},gamemin_dynasty:function(){this.total_amuse=this.total_amuse+this.amuse,this.total_hardworking=this.total_hardworking+this.hardworking,this.dynasty_hp=this.dynasty_hp-Math.floor(this.amuse/20-this.hardworking/40),this.dynasty_age=this.dynasty_age+1,this.dynasty_hp>=90?this.dynasty_st="国泰民安":this.dynasty_hp>=80?this.dynasty_st="风调雨顺":this.dynasty_hp>=60?this.dynasty_st="差强人意":this.dynasty_hp>=30?this.dynasty_st="风雨飘摇":this.dynasty_hp<30&&(this.dynasty_st="国势倾颓"),this.dynasty_hp>=100&&(this.dynasty_hp=100),this.dynasty_hp<=0&&(this.dynasty_die=!0)},gamemin_emperor:function(){this.emperor_age=this.emperor_age+1,this.jinian=this.jinian+1,this.randomdata=Math.random(),this.emperor_hp=this.emperor_hp-Math.floor((this.hardworking-this.emperor_ab)/10+(this.amuse-2*this.emperor_ab)/20-this.randomdata),this.emperor_hp>=100&&(this.emperor_hp=99),this.emperor_age>=40&&(this.emperor_hp=this.emperor_hp-8*Math.floor(this.randomdata)),this.emperor_hp<=0&&(this.listjson.push({id:this.emperor_id,name:this.emperor,nianhao:this.yearNumber,age:this.emperor_age,jinian:this.jinian}),this.emperor_die=!0,this.gamemin_emperor_change(),this.emperor_hp=0)},gamemin_emperor_change:function(){this.emperor_hp<=0&&(this.dynasty_hp=this.dynasty_hp-5,this.jinian=1,this.randomdata=this.emperor_age,this.emperor_age=this.randomdata-Math.floor(15*Math.random()),this.emperor_ab=5+Math.floor(5*Math.random())-Math.floor(3*Math.random()),this.emperor_hp=90+Math.floor(20*Math.random())-Math.floor(20*Math.random())-1*(this.emperor_age-16),this.emperor_hp>=100&&(this.emperor_hp=100),this.emperor_id=this.emperor_id+1)},gamemin_dynasty_change:function(){},dio:function(){this.emperor_die=!1,this.dialogFormVisible=!1,this.gamemin_emperor_change()},dio2:function(){this.dynasty_die=!1,this.dialogFormVisible=!1,this.firstgame=!0}}},p=l,h=(a("034f"),a("2877")),d=Object(h["a"])(p,n,o,!1,null,null,null),m=d.exports;r["default"].use(i.a),new r["default"]({render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.f2e0f486.js.map