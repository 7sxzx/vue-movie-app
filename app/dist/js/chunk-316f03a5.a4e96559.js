(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-316f03a5"],{"0cc8":function(t,i,e){"use strict";e("68ef"),e("ae9e")},3104:function(t,i,e){"use strict";var s=e("d282"),n=e("a142"),c=e("5fbe"),o=e("a8c1"),r=Object(s["a"])("sticky"),a=r[0],h=r[1];i["a"]=a({mixins:[Object(c["a"])((function(t){this.scroller||(this.scroller=Object(o["c"])(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:Number,container:null,offsetTop:{type:Number,default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(n["b"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var i=this.container,e=this.offsetTop,s=Object(o["d"])(window),n=Object(o["a"])(this.$el),c=function(){t.$emit("scroll",{scrollTop:s,isFixed:t.fixed})};if(i){var r=n+i.offsetHeight;if(s+e+this.height>r){var a=this.height+s-r;return a<this.height?(this.fixed=!0,this.transform=-(a+e)):this.fixed=!1,void c()}}s+e>n?(this.fixed=!0,this.transform=0):this.fixed=!1,c()}},render:function(){var t=arguments[0],i=this.fixed,e={height:i?this.height+"px":null};return t("div",{style:e},[t("div",{class:h({fixed:i}),style:this.style},[this.slots()])])}})},"5fbe":function(t,i,e){"use strict";e.d(i,"a",(function(){return n}));var s=e("1325");function n(t){function i(){this.binded||(t.call(this,s["b"],!0),this.binded=!0)}function e(){this.binded&&(t.call(this,s["a"],!1),this.binded=!1)}return{mounted:i,activated:i,deactivated:e,beforeDestroy:e}}},"842a":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"movie"},[e("Sticky",{attrs:{"offset-top":46}},[e("div",{staticClass:"topbar"},[e("router-link",{staticClass:"city-entry",attrs:{to:"/city-select"}},[e("span",{staticClass:"city-name"},[t._v(t._s(t.city))]),e("span",{staticClass:"city-entry-arrow"})]),e("div",{staticClass:"switch-hot"},t._l(t.tabList,(function(i,s){return e("div",{key:s,class:["hot-item",{active:i.title==t.$route.name}],on:{click:function(e){return t.selectItem(i)}}},[t._v(t._s(i.title))])})),0),e("router-link",{staticClass:"search-entry",attrs:{to:"./search-page?stype=-1"}},[e("span",{staticClass:"iconfont icon-sousuo"})])],1)]),e("div",{staticClass:"switch-content"},[e("router-view")],1)],1)},n=[],c=(e("0cc8"),e("3104")),o=(e("2f62"),{name:"movie",components:{Sticky:c["a"]},data:function(){return{tabList:[{title:"热映",url:"/movie/hot"},{title:"待映",url:"/movie/expected"}],title:"热映"}},created:function(){this.$store.commit("IsBackPage",!1)},computed:{city:function(){return this.$store.state.selectCity?this.$store.state.selectCity||this.city_name:"正在定位"}},methods:{selectItem:function(t){this.$route.path!==t.url&&(this.title=t.title,this.$router.push(t.url))}}}),r=o,a=(e("ebc7"),e("2877")),h=Object(a["a"])(r,s,n,!1,null,"30af1eca",null);i["default"]=h.exports},9754:function(t,i,e){},ae9e:function(t,i,e){},ebc7:function(t,i,e){"use strict";var s=e("9754"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-316f03a5.a4e96559.js.map