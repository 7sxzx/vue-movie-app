(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f098b20"],{"02de":function(t,e,i){"use strict";function n(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}i.d(e,"a",(function(){return n}))},"0e2f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{staticClass:"movie-section",attrs:{to:t.url}},[i("img",{staticClass:"movie-img",attrs:{src:t.movie.img}}),i("div",{staticClass:"movie-info"},[i("div",{staticClass:"movie-name line-ellipsis"},[t._v("\n\t\t\t\t"+t._s(t.movie.nm)+"\n\t\t\t\t"),i("span",{class:["version",t.movie.version]})]),i("div",{staticClass:"movie-score line-ellipsis"},[t.movie.globalReleased?i("div",[t.movie.sc?i("span",[t._v("\n\t\t\t\t\t\t观众评\n\t\t\t\t\t\t"),i("span",{staticClass:"grade"},[t._v(t._s(t.movie.sc))])]):i("span",[t._v("暂无评分")])]):i("div",[i("span",{staticClass:"grade"},[t._v(t._s(t.movie.wish))]),t._v("人想看\n\t\t\t\t")])]),i("div",{staticClass:"movie-star line-ellipsis"},[t._v("主演："+t._s(t.movie.star))]),t.movie.rt?i("div",[t._v(t._s(t.movie.rt)+"上映")]):i("div",{staticClass:"movie-showInfo line-ellipsis"},[t._v(t._s(t.movie.showInfo))])]),i("div",{staticClass:"buy-tickets"},[3===t.movie.showst?i("div",{staticClass:"btn"},[t._v("购票")]):1===t.movie.showst?i("div",{staticClass:"btn want-see"},[t._v("想看")]):4===t.movie.showst?i("div",{staticClass:"btn pre-sale"},[t._v("预售")]):t._e()])])],1)},r=[],o={name:"movieSection",props:{movie:{type:Object}},computed:{url:function(){return"/movie/movie-detail?movieId="+this.movie.id}}},s=o,a=(i("7ceb"),i("2877")),c=Object(a["a"])(s,n,r,!1,null,null,null);e["a"]=c.exports},"1ad1":function(t,e,i){},"1af6":function(t,e,i){var n=i("63b6");n(n.S,"Array",{isArray:i("9003")})},"20fd":function(t,e,i){"use strict";var n=i("d9f6"),r=i("aebd");t.exports=function(t,e,i){e in t?n.f(t,e,r(0,i)):t[e]=i}},2994:function(t,e,i){"use strict";i("68ef"),i("c0c2")},"2bdd":function(t,e,i){"use strict";var n=i("d282"),r=i("02de"),o=i("5fbe"),s=i("a8c1"),a=i("543e"),c=Object(n["a"])("list"),l=c[0],d=c[1],u=c[2];e["a"]=l({mixins:[Object(o["a"])((function(t){this.scroller||(this.scroller=Object(s["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300},direction:{type:String,default:"down"}},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.loading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,o=t.offset,s=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var a=e.bottom-e.top;if(!a||Object(r["a"])(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===s?l.top-e.top<=o:l.bottom-e.bottom<=o,c&&(t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.loading}},["down"===this.direction?this.slots():e,this.loading&&t("div",{class:d("loading"),key:"loading"},[this.slots("loading")||t(a["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])]),this.finished&&this.finishedText&&t("div",{class:d("finished-text")},[this.finishedText]),this.error&&this.errorText&&t("div",{on:{click:this.clickErrorText},class:d("error-text")},[this.errorText]),"up"===this.direction?this.slots():e])}})},"549b":function(t,e,i){"use strict";var n=i("d864"),r=i("63b6"),o=i("241e"),s=i("b0dc"),a=i("3702"),c=i("b447"),l=i("20fd"),d=i("7cd6");r(r.S+r.F*!i("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,r,u,f=o(t),v="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,p=void 0!==m,g=0,b=d(f);if(p&&(m=n(m,h>2?arguments[2]:void 0,2)),void 0==b||v==Array&&a(b))for(e=c(f.length),i=new v(e);e>g;g++)l(i,g,p?m(f[g],g):f[g]);else for(u=b.call(f),i=new v;!(r=u.next()).done;g++)l(i,g,p?s(u,m,[r.value,g],!0):r.value);return i.length=g,i}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"75fc":function(t,e,i){"use strict";var n=i("a745"),r=i.n(n);function o(t){if(r()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var s=i("774e"),a=i.n(s),c=i("c8bb"),l=i.n(c);function d(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||d(t)||u()}i.d(e,"a",(function(){return f}))},"774e":function(t,e,i){t.exports=i("d2d5")},"7ceb":function(t,e,i){"use strict";var n=i("b307"),r=i.n(n);r.a},"8f4e":function(t,e,i){"use strict";var n=i("1ad1"),r=i.n(n);r.a},"95d5":function(t,e,i){var n=i("40c3"),r=i("5168")("iterator"),o=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||o.hasOwnProperty(n(e))}},a481:function(t,e,i){"use strict";var n=i("cb7c"),r=i("4bf8"),o=i("9def"),s=i("4588"),a=i("0390"),c=i("5f1b"),l=Math.max,d=Math.min,u=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};i("214f")("replace",2,(function(t,e,i,m){return[function(n,r){var o=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,o,r):i.call(String(o),n,r)},function(t,e){var r=m(i,t,this,e);if(r.done)return r.value;var u=n(t),f=String(this),v="function"===typeof e;v||(e=String(e));var g=u.global;if(g){var b=u.unicode;u.lastIndex=0}var x=[];while(1){var w=c(u,f);if(null===w)break;if(x.push(w),!g)break;var y=String(w[0]);""===y&&(u.lastIndex=a(f,o(u.lastIndex),b))}for(var C="",k=0,_=0;_<x.length;_++){w=x[_];for(var O=String(w[0]),j=l(d(s(w.index),f.length),0),S=[],$=1;$<w.length;$++)S.push(h(w[$]));var I=w.groups;if(v){var T=[O].concat(S,j,f);void 0!==I&&T.push(I);var A=String(e.apply(void 0,T))}else A=p(O,f,j,S,I,e);j>=k&&(C+=f.slice(k,j)+A,k=j+O.length)}return C+f.slice(k)}];function p(t,e,n,o,s,a){var c=n+t.length,l=o.length,d=v;return void 0!==s&&(s=r(s),d=f),i.call(a,d,(function(i,r){var a;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":a=s[r.slice(1,-1)];break;default:var d=+r;if(0===d)return i;if(d>l){var f=u(d/10);return 0===f?i:f<=l?void 0===o[f-1]?r.charAt(1):o[f-1]+r.charAt(1):i}a=o[d-1]}return void 0===a?"":a}))}}))},a745:function(t,e,i){t.exports=i("f410")},b307:function(t,e,i){},b850:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("8e6e"),i("456d");var n=i("bd86");i("a481"),i("28a5"),i("ac6a");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(i,!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var s={methods:{formatImgUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Array.isArray(t)){var i=[];return t.forEach((function(t){var n=t.comingTitle;e&&(n=t.comingTitle.split(" ")[0]);var r=t.img.replace("w.h","128.180");i.push(o({},t,{comingTitle:n,img:r}))})),i}}}}},c0c2:function(t,e,i){},c8bb:function(t,e,i){t.exports=i("54a1")},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},effb:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.mostExpectedList.length?i("div",{staticClass:"most-expected"},[i("div",{staticClass:"title"},[t._v("近期最受期待")]),i("div",{staticClass:"scroll-view_H"},t._l(t.mostExpectedList,(function(e){return i("div",{key:e.id},[i("router-link",{staticClass:"expected-item",attrs:{to:"movie.url"}},[i("img",{staticClass:"poster",attrs:{src:e.img}}),i("div",{staticClass:"name line-ellipsis"},[t._v(t._s(e.nm))]),i("div",{staticClass:"data line-ellipsis"},[t._v(t._s(e.wish)+"人想看")]),i("div",{staticClass:"data"},[t._v(t._s(e.comingTitle))])])],1)})),0)]):t._e(),i("List",{attrs:{"immediate-check":t.check,offset:t.offset,finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("div",t._l(t.movieList,(function(t){return i("div",{key:t.id},[i("movie-section",{attrs:{movie:t,rt:"true"}})],1)})),0)])],1)},r=[],o=i("75fc"),s=(i("ac6a"),i("96cf"),i("3b8d")),a=(i("2994"),i("2bdd")),c=i("b850"),l=i("0e2f"),d=(i("2f62"),{name:"expected-movie",components:{movieSection:l["a"],List:a["a"]},mixins:[c["a"]],data:function(){return{offset:200,loading:!1,finished:!1,check:!1,movieList:[],movieIds:[],loadComplete:!1,mostExpectedList:[]}},created:function(){this.$store.commit("changeTitle","待映"),this.getMostExpected(),this.getComing()},methods:{getComing:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:0,t.next=3,this.$http.get("/movie/mostExpected");case 3:e=t.sent,i=this.formatImgUrl(e.data.coming,!0),i.forEach((function(t){t.url="movie-detail/movie-detail?movieId=".concat(t.id)})),this.mostExpectedList=i;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getMostExpected:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/movie/comingList");case 2:e=t.sent,this.movieIds=e.data.movieIds,this.movieList=this.formatImgUrl(e.data.coming);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),ReachBottom:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,i,n){var r,s,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return");case 2:return r=e.length,r+10>=i.length&&(this.loadCompleteitem=!0),s=i.slice(r,r+10).join("%2C"),t.next=7,this.$http.get("/movie/moreComingList?token=&movieIds=".concat(s));case 7:a=t.sent,c=this.formatImgUrl(a.data.coming),this.movieList=[].concat(Object(o["a"])(e),Object(o["a"])(c));case 10:case"end":return t.stop()}}),t,this)})));function e(e,i,n){return t.apply(this,arguments)}return e}(),onLoad:function(){var t=this;this.loadComplete?(this.finished=!0,this.loading=!1):(this.loading=!0,this.loadBottom(),setTimeout((function(){t.loading=!1}),500))},loadBottom:function(){var t=this.movieList,e=this.movieIds,i=this.loadComplete;this.ReachBottom(t,e,i,0)}}}),u=d,f=(i("8f4e"),i("2877")),v=Object(f["a"])(u,n,r,!1,null,"1bdbbf3f",null);e["default"]=v.exports},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-4f098b20.5422cfbe.js.map