webpackJsonp([5],{lO7g:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("xvZv"),e={data:function(){return{hotList:[]}},created:function(){var t=this;this.$connecter.$emit("page",{title:{tag:"首页",description:"欢迎浏览史莱姆的博客!（°Д°）Ъ"}}),this.$http.get("blog/hot").then(function(s){console.log(s.data,s.data.tag),s.data=s.data.map(function(t){return t.tag=t.tag.split("#"),t.tag.shift(),t.content=t.content.replace(/(<[^>]+>|&\w+;)/gim,"").substring(0,125)+" ...",t}),t.hotList=s.data})},methods:{unTime:function(t){return i.a.form("yyyy-MM-dd HH:mm:ss",1e3*t)}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"conter clearfix"},[a("div",{staticClass:"shuffling"},[a("div",{staticClass:"shuffling-flex"},[a("span",{staticClass:"shuffling-left"}),t._v(" "),a("ul",{staticClass:"shuffling-ling"},[a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://120.78.221.235/lun4.png",expression:"'http://120.78.221.235/lun4.png'"}],attrs:{alt:"NAV-2"}})])]),t._v(" "),a("span",{staticClass:"shuffling-right"})]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"content-row clearfix"},[a("div",{staticClass:"content-fixed-box"}),t._v(" "),a("div",{staticClass:"content-box"},t._l(t.hotList,function(s,i){return a("router-link",{key:i,attrs:{to:"/article/"+s.Id}},[a("div",{staticClass:"article clearfloat clearfix"},[a("a",{staticClass:"max-2",attrs:{href:"#"}}),t._v(" "),a("div",{staticClass:"top clearfloat"},[a("h3",{staticClass:"ellipsis"},[t._v(t._s(s.title))]),t._v(" "),a("ul",{staticClass:"font-shadow-black"},t._l(s.tag,function(s,i){return a("li",{key:i,attrs:{title:"查找"+s+"标签"}},[a("a",{attrs:{href:"#"}},[t._v(t._s(s))])])}),0)]),t._v(" "),a("div",{staticClass:"content"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.img,expression:"hot.img"}],attrs:{alt:"images"}})]),t._v(" "),a("span",[a("p",[t._v(t._s(s.content))])]),t._v(" "),a("ul",{staticClass:"article-parameter"},[a("li",[t._v("浏览: "+t._s(s.lookCount))]),t._v(" "),a("li",[t._v("评论: "+t._s(s.msgMe))]),t._v(" "),a("li",[t._v("发表: "+t._s(t.unTime(s.createTime)))])])])])}),1),t._v(" "),a("div",{staticClass:"content-fixed-box"})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"shuffling-select"},[s("li",{staticClass:"on"}),this._v(" "),s("li"),this._v(" "),s("li"),this._v(" "),s("li")])}]};var n=a("VU/8")(e,l,!1,function(t){a("zHUA")},null,null);s.default=n.exports},zHUA:function(t,s){}});
//# sourceMappingURL=5.f408dc755cc290775b82.js.map