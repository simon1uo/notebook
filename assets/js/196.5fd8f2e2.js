(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{665:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("相关问题：")]),t._v(" "),a("ul",[a("li",[t._v("在 CSS 中，有哪些方式可以实现隐藏页面的元素。")])])]),t._v(" "),a("h2",{attrs:{id:"实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),a("p",[t._v("有如下的方法：")]),t._v(" "),a("h3",{attrs:{id:"display-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-none"}},[t._v("#")]),t._v(" "),a("code",[t._v("display:none")])]),t._v(" "),a("p",[t._v("将元素的  "),a("code",[t._v("display")]),t._v("   属性设置为  "),a("code",[t._v("none")]),t._v("  。元素会在页面上彻底消失，不占用任何的空间（会导致浏览器重新排版渲染页面），无法响应点击事件。")]),t._v(" "),a("h3",{attrs:{id:"visibility-hidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visibility-hidden"}},[t._v("#")]),t._v(" "),a("code",[t._v("visibility:hidden")])]),t._v(" "),a("p",[t._v("页面上隐藏元素（不会引发重排，但是会引发重绘），DOM 结果均会存在，会占用页面空间，但是无法响应点击事件。")]),t._v(" "),a("h3",{attrs:{id:"opacity-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opacity-0"}},[t._v("#")]),t._v(" "),a("code",[t._v("opacity:0")])]),t._v(" "),a("p",[t._v("将元素的透明度设置为 0 （不会引发重排，但是会引发重绘），元素修改为不可见，会占用页面空间，可以响应点击事件。")]),t._v(" "),a("p",[t._v("设置盒子模型属性")]),t._v(" "),a("p",[t._v("不占据页面空间，无法响应点击事件。")]),t._v(" "),a("p",[t._v("🌰 例子：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hidden")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"position-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-absolute"}},[t._v("#")]),t._v(" "),a("code",[t._v("position:absolute")])]),t._v(" "),a("p",[t._v("将元素移出可视区域，元素不可见，不影响页面布局。")]),t._v(" "),a("p",[t._v("🌰 例子：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hidden")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -9999px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -9999px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"clip-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clip-path"}},[t._v("#")]),t._v(" "),a("code",[t._v("clip-path")])]),t._v(" "),a("p",[t._v("通过裁剪的形式，元素不可见，占据页面空间，无法响应点击事件。")]),t._v(" "),a("p",[t._v("🌰 例子：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hidden")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clip-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("polygon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0px 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0px 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0px 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0px 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("总结：最常用的是  "),a("code",[t._v("display: none")]),t._v("  和  "),a("code",[t._v("visibility: hidden")]),t._v(" 。其他元素只是巧妙地将元素隐藏，真正用途并非隐藏元素。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vue3js.cn/interview/css/hide_attributes.html#%E4%BA%8C%E3%80%81%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：css 中，有哪些方式可以隐藏页面元素？区别？| web 前端面试 - 面试官系列 (vue3js.cn)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);