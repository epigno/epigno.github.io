(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("cbe8e72c",content,!0,{sourceMap:!1})},201:function(t,e,n){t.exports=n.p+"img/logo_green_e.b67e3e6.svg"},202:function(t,e,n){"use strict";n(200)},203:function(t,e,n){(e=n(48)(!1)).push([t.i,".logo[data-v-d4354a60]{height:40px}",""]),t.exports=e},204:function(t,e,n){"use strict";n.r(e);n(202);var r=n(38),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"logo",attrs:{src:n(201)}})}),[],!1,null,"d4354a60",null);e.default=component.exports},205:function(t,e,n){"use strict";n.r(e);var r=n(38),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"flex justify-center border-gray-500 border-t-2"},[e("p",{staticClass:"mt-4"},[e("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://epigno.jp"}},[this._v(" Epigno ")])])])}],!1,null,null,null);e.default=component.exports},207:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"back":"Back to All Articles","title":"Here are a list of articles by {name}:"},"ja":{"back":"ホームページに戻る","title":"{name}の記事"}}'),delete t.options._Ctor}},216:function(t,e,n){"use strict";var r=n(207),o=n.n(r);e.default=o.a},238:function(t,e,n){"use strict";n.r(e);n(20),n(31),n(19),n(30),n(29),n(14),n(23),n(24),n(10),n(17);var r=n(3);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,f,h,v,d,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,l=t.app,e.next=3,n("authors/".concat(l.i18n.locale),r.author).fetch();case 3:return c=e.sent,e.next=6,n("articles/".concat(l.i18n.locale)).where({"author.slug":r.author}).without("body").sortBy("createdAt","asc").fetch();case 6:f=e.sent,h=[],v=o(l.i18n.locales.filter((function(i){return i.code!==l.i18n.locale}))),e.prev=9,v.s();case 11:if((d=v.n()).done){e.next=23;break}return x=d.value,e.prev=13,e.next=16,n("authors/".concat(x.code),r.author).fetch();case 16:h.push(x),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(13);case 21:e.next=11;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(9),v.e(e.t1);case 28:return e.prev=28,v.f(),e.finish(28);case 31:return e.abrupt("return",{author:c,articles:f,availableLocales:h});case 32:case"end":return e.stop()}}),e,null,[[9,25,28,31],[13,19]])})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString(this.$i18n.locale,{year:"numeric",month:"long",day:"numeric"})}}},f=n(38),h=n(216),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"},[n("div",{staticClass:"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left"},[n("img",{staticClass:"absolute h-full w-full object-cover",attrs:{src:t.author.img,alt:t.author.name}})]),t._v(" "),n("div",{staticClass:"overlay"}),t._v(" "),n("div",{staticClass:"absolute top-32 left-32 text-white"},[n("div",{staticClass:"flex"},[n("NuxtLink",{attrs:{to:t.localePath("/")}},[n("Logo")],1),t._v(" "),t._l(t.availableLocales,(function(e){return n("NuxtLink",{key:e.code,staticClass:"py-2 px-4 text-white font-semibold",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])}))],2),t._v(" "),n("div",{staticClass:"mt-16 -mb-3 flex flex-col uppercase text-sm"},[n("h1",{staticClass:"text-4xl font-bold"},[t._v("\n        "+t._s(t.author.name)+"\n      ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v(t._s(t.author.bio))])]),t._v(" "),n("nuxt-content",{attrs:{document:t.author}})],1),t._v(" "),n("div",{staticClass:"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"},[n("NuxtLink",{attrs:{to:t.localePath("/")}},[n("p",{staticClass:"hover:underline"},[t._v(t._s(t.$t("back")))])]),t._v(" "),n("h3",{staticClass:"mb-4 font-bold text-4xl"},[t._v("\n      "+t._s(t.$t("title",{name:t.author.name}))+"\n    ")]),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"w-full px-2 xs:mb-6 md:mb-12 article-card"},[n("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:t.localePath({name:"blog-slug",params:{slug:article.slug}})}},[article.img?n("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img,alt:article.alt}}):t._e(),t._v(" "),n("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),n("p",[t._v(t._s(article.description))]),t._v(" "),n("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n              "+t._s(t.formatDate(article.updatedAt))+"\n            ")])])])],1)})),0),t._v(" "),n("TheFooter")],1)])}),[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(component);e.default=component.exports;installComponents(component,{Logo:n(204).default,TheFooter:n(205).default})}}]);