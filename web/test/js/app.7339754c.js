(function(t){function n(n){for(var e,r,a=n[0],h=n[1],_=n[2],u=0,c=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(e in h)Object.prototype.hasOwnProperty.call(h,e)&&(t[e]=h[e]);l&&l(n);while(c.length)c.shift()();return o.push.apply(o,_||[]),s()}function s(){for(var t,n=0;n<o.length;n++){for(var s=o[n],e=!0,a=1;a<s.length;a++){var h=s[a];0!==i[h]&&(e=!1)}e&&(o.splice(n--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},o=[];function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,n,s){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(s,e,function(n){return t[n]}.bind(null,e));return s},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=n,a=a.slice();for(var _=0;_<a.length;_++)n(a[_]);var l=h;o.push([0,"chunk-vendors"]),s()})({0:function(t,n,s){t.exports=s("56d7")},"034f":function(t,n,s){"use strict";s("85ec")},"56d7":function(t,n,s){"use strict";s.r(n);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=s("5c96"),o=s.n(i),r=(s("0fae"),function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{attrs:{id:"app"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.sum_ave_len>100,expression:"sum_ave_len>100"}]},[t._v(" 图例如下(图片与下方示例无关)： "),s("br"),s("el-image",{attrs:{src:"https://s2.loli.net/2022/04/25/jN6efZX2OQEcJyR.png"}})],1),s("el-button",{on:{click:t.begin}},[t._v(t._s(t.text))]),s("br"),t._v(" 平均距离："+t._s(t.sum_ave_len)+" "),s("br"),s("canvas",{staticStyle:{border:"1px solid #000000"},attrs:{id:"canvas",width:t.window_width,height:t.window_width}})],1)}),a=[],h=(s("cb29"),s("a434"),{name:"App",components:{},created:function(){this.c_points=new Array(this.c_num);for(var t=0;t<this.c_num;t++)this.c_points[t]=new Array(2);this.s_points=new Array(this.s_num);for(var n=0;n<this.s_num;n++)this.s_points[n]=new Array(2);for(var s=0;s<this.c_num;s++){var e=!0;while(e){e=!1;for(var i=[Math.floor(Math.random()*this.window_width+1),Math.floor(Math.random()*this.window_width+1)],o=0;o<this.c_num;o++)this.lens(i,this.c_points[o])<10&&(e=!0);if(!1===e)for(var r=0;r<this.s_num;r++)this.lens(i,this.s_points[r])<10&&(e=!0)}this.c_points[s]=i}for(var a=0;a<this.s_num;a++){var h=!0;while(h){h=!1;for(var _=[Math.floor(Math.random()*this.window_width+1),Math.floor(Math.random()*this.window_width+1)],l=0;l<this.c_num;l++)this.lens(_,this.c_points[l])<5&&(h=!0);if(!1===h)for(var u=0;u<this.s_num;u++)this.lens(_,this.s_points[u])<5&&(h=!0)}this.s_points[a]=_}},data:function(){return{text:"开始",window_width:800,c_num:150,s_num:30,c_points:[],s_points:[],c_points_belong:[],s_points_ave_len:[],sum_ave_len:0}},methods:{begin:function(){this.sum_ave_len<=100&&("开始"===this.text?this.start_open():this.next_open(),this.text="继续",this.c_points_belong=this.kmeans(this.c_points,this.s_points),this.kmeans_draw(),this.kmeans_ave_len(),this.cut_s_points(),this.sum_ave_len>100&&this.end_open())},lens:function(t,n){return Math.sqrt(Math.pow(t[0]-n[0],2)+Math.pow(t[1]-n[1],2))},kmeans:function(t,n){for(var s=new Array(t.length),e=0;e<t.length;e++){for(var i=[],o=0;o<n.length;o++)i.push(this.lens(t[e],n[o]));s[e]=i.indexOf(Math.min.apply(null,i))}return s},kmeans_draw:function(){var t=document.getElementById("canvas"),n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,this.window_width,this.window_width),n.fillStyle="#ffca00";for(var s=0;s<this.c_num;s++)n.beginPath(),n.arc(this.c_points[s][0],this.c_points[s][1],3,0,2*Math.PI,!0),n.closePath(),n.fill();n.fillStyle="#ff0000";for(var e=0;e<this.s_num;e++)n.beginPath(),n.arc(this.s_points[e][0],this.s_points[e][1],5,0,2*Math.PI,!0),n.closePath(),n.fill();for(var i=0;i<this.c_num;i++)n.strokeStyle="#02fa79",n.moveTo(this.c_points[i][0],this.c_points[i][1]),n.lineTo(this.s_points[this.c_points_belong[i]][0],this.s_points[this.c_points_belong[i]][1]),n.stroke()},kmeans_ave_len:function(){var t=new Array(this.s_num);t.fill(0);var n=new Array(this.s_num);n.fill(0);var s=new Array(this.s_num);s.fill(0);for(var e=0;e<this.c_num;e++)t[this.c_points_belong[e]]=t[this.c_points_belong[e]]+this.lens(this.c_points[e],this.s_points[this.c_points_belong[e]]),n[this.c_points_belong[e]]=n[this.c_points_belong[e]]+1;for(var i=0;i<this.s_num;i++)n[i]>0&&(s[i]=t[i]/n[i]);this.s_points_ave_len=s;for(var o=0;o<this.s_points_ave_len.length;o++)this.sum_ave_len=this.sum_ave_len+this.s_points_ave_len[o];this.sum_ave_len=this.sum_ave_len/this.s_num},cut_s_points:function(){this.s_points.splice(this.s_points_ave_len.indexOf(Math.min.apply(null,this.s_points_ave_len)),1),this.s_num=this.s_num-1},sum_dis:function(t){for(var n=0,s=0;s<t.length-1;s++)n+=this.lens(t[s],t[s+1]);return n+=this.lens(t[0],t[t.length-1]),n},start_open:function(){this.$alert("随机选取若干红色配送点与橙色客户点，将客户点以配送点为中心聚类，并计算所有客户点到配送点的平均距离。",{confirmButtonText:"确定"})},next_open:function(){this.$notify({title:"提示",message:"依次去除平均配送距离最少的红色配送点，并重新聚类。"})},end_open:function(){this.$alert("<strong>当平均配送距离达到某个值后，停止去除配送点，将剩下的配送点通过模拟退火算法求出配送路径。</strong>",{dangerouslyUseHTMLString:!0})}}}),_=h,l=(s("034f"),s("2877")),u=Object(l["a"])(_,r,a,!1,null,null,null),c=u.exports;e["default"].use(o.a),new e["default"]({el:"#app",render:function(t){return t(c)}})},"85ec":function(t,n,s){}});
//# sourceMappingURL=app.7339754c.js.map