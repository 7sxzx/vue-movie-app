(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-530a58bc"],{"02de":function(t,e,i){"use strict";function n(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}i.d(e,"a",(function(){return n}))},"1af6":function(t,e,i){var n=i("63b6");n(n.S,"Array",{isArray:i("9003")})},"20fd":function(t,e,i){"use strict";var n=i("d9f6"),o=i("aebd");t.exports=function(t,e,i){e in t?n.f(t,e,o(0,i)):t[e]=i}},2994:function(t,e,i){"use strict";i("68ef"),i("c0c2")},"2bdd":function(t,e,i){"use strict";var n=i("d282"),o=i("02de"),r=i("5fbe"),c=i("a8c1"),s=i("543e"),a=Object(n["a"])("list"),d=a[0],l=a[1],f=a[2];e["a"]=d({mixins:[Object(r["a"])((function(t){this.scroller||(this.scroller=Object(c["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300},direction:{type:String,default:"down"}},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.loading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,r=t.offset,c=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var s=e.bottom-e.top;if(!s||Object(o["a"])(i))return!1;var a=!1,d=t.$refs.placeholder.getBoundingClientRect();a="up"===c?d.top-e.top<=r:d.bottom-e.bottom<=r,a&&(t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:l("placeholder")});return t("div",{class:l(),attrs:{role:"feed","aria-busy":this.loading}},["down"===this.direction?this.slots():e,this.loading&&t("div",{class:l("loading"),key:"loading"},[this.slots("loading")||t(s["a"],{attrs:{size:"16"}},[this.loadingText||f("loading")])]),this.finished&&this.finishedText&&t("div",{class:l("finished-text")},[this.finishedText]),this.error&&this.errorText&&t("div",{on:{click:this.clickErrorText},class:l("error-text")},[this.errorText]),"up"===this.direction?this.slots():e])}})},"549b":function(t,e,i){"use strict";var n=i("d864"),o=i("63b6"),r=i("241e"),c=i("b0dc"),s=i("3702"),a=i("b447"),d=i("20fd"),l=i("7cd6");o(o.S+o.F*!i("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,o,f,h=r(t),u="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,p=void 0!==v,g=0,b=l(h);if(p&&(v=n(v,m>2?arguments[2]:void 0,2)),void 0==b||u==Array&&s(b))for(e=a(h.length),i=new u(e);e>g;g++)d(i,g,p?v(h[g],g):h[g]);else for(f=b.call(h),i=new u;!(o=f.next()).done;g++)d(i,g,p?c(f,v,[o.value,g],!0):o.value);return i.length=g,i}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"67fc":function(t,e,i){},"75fc":function(t,e,i){"use strict";var n=i("a745"),o=i.n(n);function r(t){if(o()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var c=i("774e"),s=i.n(c),a=i("c8bb"),d=i.n(a);function l(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){return r(t)||l(t)||f()}i.d(e,"a",(function(){return h}))},"774e":function(t,e,i){t.exports=i("d2d5")},"88be":function(t,e,i){"use strict";var n=i("67fc"),o=i.n(n);o.a},"95d5":function(t,e,i){var n=i("40c3"),o=i("5168")("iterator"),r=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||r.hasOwnProperty(n(e))}},a745:function(t,e,i){t.exports=i("f410")},ba55:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment-detail"},[i("div",[t.hcmts.length?i("div",{staticClass:"hot"},[i("div",{staticClass:"comment-title"},[t._v("热门评论")]),t._l(t.hcmts,(function(t,e){return i("div",{key:e},[i("commentSection",{attrs:{comment:t}})],1)}))],2):t._e()]),t.cmts.length?i("div",{staticClass:"hot"},[i("div",{staticClass:"comment-title"},[t._v("最新评论")]),i("List",{attrs:{"immediate-check":t.check,offset:t.offset,finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onReachBottom},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.cmts,(function(t,e){return i("div",{key:e},[i("commentSection",{attrs:{comment:t}})],1)})),0)],1):t._e()])},o=[],r=i("75fc"),c=(i("96cf"),i("3b8d")),s=(i("2994"),i("2bdd")),a=i("0e7c"),d=i("7038"),l=(i("2f62"),{components:{commentSection:a["a"],List:s["a"]},mixins:[d["a"]],data:function(){return{movieId:"",cmts:[],hcmts:[],loadComplete:!1,finished:!1,offset:200,loading:!1,check:!1}},created:function(){var t=this.$route.query;this.initPage(t)},methods:{initPage:function(t){var e=t.movieId,i=t.movieName;this.$store.commit("changeTitle","观众评论-".concat(i)),this.$store.commit("IsBackPage",!0),this.movieId=e,this.getComment(e)},getComment:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var i,n,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.loadComplete){t.next=2;break}return t.abrupt("return");case 2:return i=this.cmts,t.next=5,this.$http.get("/movie/comments?movieId=".concat(e));case 5:n=t.sent,o=n.data,c=[].concat(Object(r["a"])(i),Object(r["a"])(this.formatData(o.cmts))),this.hcmts=this.formatData(o.hcmts),this.cmts=c,this.loadComplete=c.length>=o.total;case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onReachBottom:function(){var t=this;this.loadComplete?(this.finished=!0,this.loading=!1):(this.loading=!0,this.getComment(this.movieId),setTimeout((function(){t.loading=!1}),500))}}}),f=l,h=(i("88be"),i("2877")),u=Object(h["a"])(f,n,o,!1,null,"150d0f98",null);e["default"]=u.exports},c0c2:function(t,e,i){},c8bb:function(t,e,i){t.exports=i("54a1")},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-530a58bc.fdfdbaac.js.map