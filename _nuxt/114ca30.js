(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{200:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("cbe8e72c",content,!0,{sourceMap:!1})},201:function(t,e,r){t.exports=r.p+"img/logo_green_e.b67e3e6.svg"},202:function(t,e,r){"use strict";r(200)},203:function(t,e,r){(e=r(48)(!1)).push([t.i,".logo[data-v-d4354a60]{height:40px}",""]),t.exports=e},204:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"search-articles":"Search articles"},"ja":{"search-articles":"記事を検索"}}'),delete t.options._Ctor}},205:function(t,e,r){"use strict";r.r(e);r(202);var n=r(38),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"logo",attrs:{src:r(201)}})}),[],!1,null,"d4354a60",null);e.default=component.exports},207:function(t,e,r){"use strict";var n=r(204),o=r.n(n);e.default=o.a},210:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"author":"Author"},"ja":{"author":"ライター"}}'),delete t.options._Ctor}},211:function(t,e,r){"use strict";r.r(e);r(140),r(17);var n=r(3),o={data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}},l=r(38),c=r(207),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:t.$t("search-articles")},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:t.localePath({name:"blog-slug",params:{slug:article.slug}})}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},213:function(t,e,r){var content=r(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("083745fe",content,!0,{sourceMap:!1})},214:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=r(38),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between"},[t.prev?r("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:t.localePath({name:"blog-slug",params:{slug:t.prev.slug}})}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:t.localePath({name:"blog-slug",params:{slug:t.next.slug}})}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):r("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,r){"use strict";r(213)},221:function(t,e,r){var n=r(48),o=r(222),l=r(223);e=n(!1);var c=o(l);e.push([t.i,".nuxt-content p{margin-bottom:20px}.nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.icon.icon-link{background-image:url("+c+");display:inline-block;width:20px;height:20px;background-size:20px 20px}",""]),t.exports=e},222:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},223:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4K"},224:function(t,e,r){"use strict";var n=r(210),o=r.n(n);e.default=o.a},237:function(t,e,r){"use strict";r.r(e);var n={props:{author:{type:Object,required:!0}}},o=r(38),l=r(224),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:t.localePath("/blog/author/"+t.author.slug)}},[t.author.img?r("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:t.author.img}}):t._e(),t._v(" "),r("div",{staticClass:"flex flex-col m-4"},[r("h4",{staticClass:"font-semibold"},[t._v(t._s(t.$t("author")))]),t._v(" "),r("p",[t._v(t._s(t.author.name))]),t._v(" "),r("p",[t._v(t._s(t.author.bio))])])])],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports},242:function(t,e,r){"use strict";r.r(e);r(20),r(31),r(19),r(30),r(29),r(23),r(24),r(10);var n=r(8),o=r(13),l=(r(14),r(46)),c=(r(17),r(3));function f(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,d,article,h,v,x,m,_,y,w,j,M,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,d=t.app,e.next=3,r("articles/".concat(d.i18n.locale),c.slug).fetch();case 3:article=e.sent,h=[],v=f(d.i18n.locales.filter((function(i){return i.code!==d.i18n.locale}))),e.prev=6,v.s();case 8:if((x=v.n()).done){e.next=20;break}return m=x.value,e.prev=10,e.next=13,r("articles/".concat(m.code),c.slug).fetch();case 13:h.push(m),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(10);case 18:e.next=8;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(6),v.e(e.t1);case 25:return e.prev=25,v.f(),e.finish(25);case 28:return e.next=30,r("tags").only(["name","slug"]).where({name:{$containsAny:article.tags}}).fetch();case 30:return _=e.sent,y=Object.assign.apply(Object,[{}].concat(Object(l.a)(_.map((function(s){return Object(o.a)({},s.name,s)}))))),e.next=34,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 34:return w=e.sent,j=Object(n.a)(w,2),M=j[0],C=j[1],e.abrupt("return",{article:article,tags:y,prev:M,next:C,availableLocales:h});case 39:case"end":return e.stop()}}),e,null,[[6,22,25,28],[10,16]])})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString(this.$i18n.locale,{year:"numeric",month:"long",day:"numeric"})}}},v=(r(220),r(38)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"},[r("div",{staticClass:"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left bg-black"},[r("img",{staticClass:"absolute h-full w-full object-cover",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"absolute top-32 left-32 text-white"},[r("NuxtLink",{attrs:{to:t.localePath("/")}},[r("Logo")],1),t._v(" "),r("div",{staticClass:"mt-16 -mb-3 flex uppercase text-sm"},[r("p",{staticClass:"mr-3"},[t._v("\n          "+t._s(t.formatDate(t.article.updatedAt))+"\n        ")]),t._v(" "),r("span",{staticClass:"mr-3"},[t._v("•")]),t._v(" "),r("p",[t._v(t._s(t.article.author.name))])]),t._v(" "),r("h1",{staticClass:"text-6xl font-bold"},[t._v(t._s(t.article.title))]),t._v(" "),t._l(t.article.tags,(function(e,n){return r("span",{key:n},[r("NuxtLink",{attrs:{to:t.localePath("/blog/tag/"+t.tags[e].slug)}},[r("span",{staticClass:"truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[t._v("\n            "+t._s(t.tags[e].name)+"\n          ")])])],1)}))],2),t._v(" "),r("div",{staticClass:"flex absolute top-3rem right-3rem"},[r("a",{staticClass:"mr-8 self-center text-white font-bold hover:underline",attrs:{href:"https://epigno.jp"}},[t._v("\n        Epigno\n      ")]),t._v(" "),r("AppSearchInput"),t._v(" "),t._l(t.availableLocales,(function(e){return r("NuxtLink",{key:e.code,staticClass:"py-2 px-4 text-white font-semibold",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),r("div",{staticClass:"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"},[r("h1",{staticClass:"font-bold text-4xl"},[t._v(t._s(t.article.title))]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("author",{attrs:{author:t.article.author}}),t._v(" "),r("PrevNext",{staticClass:"mt-8",attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(205).default,AppSearchInput:r(211).default,Author:r(237).default,PrevNext:r(214).default})}}]);