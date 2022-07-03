(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{662:function(t,v,s){"use strict";s.r(v);var a=s(29),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("ul",[s("li",[t._v("说一下对盒子模型的理解？")])])]),t._v(" "),s("h2",{attrs:{id:"盒子模型的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型的概念"}},[t._v("#")]),t._v(" 盒子模型的概念")]),t._v(" "),s("p",[t._v("对 HTML 文档进行布局的时候，浏览器的渲染引擎会根据标准之一的 CSS "),s("strong",[t._v("基础框盒模型")]),t._v(" ，将所有元素表示为一个矩形盒子。")]),t._v(" "),s("p",[t._v("标准盒子模型由四个部分组成：margins（外边距）、borders（边框）、paddings（内边距）、实际内容。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/simon1uo/image-flow@master/image/v7CXVH.png",alt:"image-20220607133708696"}})]),t._v(" "),s("ul",[s("li",[t._v("content：实际内容，（文本或者图像）；")]),t._v(" "),s("li",[t._v("padding：内边距，清除内容周围的区域，内边距是透明的，"),s("strong",[t._v("取值不能为负")]),t._v("，受盒子的 background 属性影响。")]),t._v(" "),s("li",[t._v("border：边框，围绕元素内容的内边距的一条或者多条线，由粗细、样式、颜色三部分组成。")]),t._v(" "),s("li",[t._v("margin：外边距，在元素外常见额外的空白。")])]),t._v(" "),s("p",[t._v("CSS 盒子模型可以分成，默认情况下是 W3C 标准盒子模型：")]),t._v(" "),s("ul",[s("li",[t._v("W3C 标准盒子模型；")]),t._v(" "),s("li",[t._v("IE 怪异盒子模型。")])]),t._v(" "),s("h3",{attrs:{id:"标准盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准盒子模型"}},[t._v("#")]),t._v(" 标准盒子模型")]),t._v(" "),s("p",[t._v("盒子总宽度 = 元素宽度 width + 内边距 padding（左右）+ border 边框宽度 （左右）+ 外边距 margin （左右）；")]),t._v(" "),s("p",[t._v("盒子总高度 = 元素高度 height + 内边距 padding （上下）+ border 边框宽度（上下） + 外边距 margin（上下）；")]),t._v(" "),s("blockquote",[s("p",[t._v("所以，最终的实际盒子宽度和高度不等于 内容元素的 宽度和高度")])]),t._v(" "),s("h3",{attrs:{id:"怪异盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怪异盒子模型"}},[t._v("#")]),t._v(" 怪异盒子模型")]),t._v(" "),s("p",[t._v("与 W3C 标准盒子模型不同，这里 width /height 包含了 内边距 padding 和边框 border 的长度。")]),t._v(" "),s("p",[t._v("盒子总宽度 = width + 外边距 margin（左右）；")]),t._v(" "),s("p",[t._v("盒子总高度 = height + 外边距 margin （上下）；")]),t._v(" "),s("h2",{attrs:{id:"box-sizing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing"}},[t._v("#")]),t._v(" "),s("code",[t._v("box-sizing")])]),t._v(" "),s("p",[t._v("定义浏览器引擎如何计算一个元素的 "),s("strong",[t._v("总宽度和总高度")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box | border-box | inherit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("content-box")]),t._v(" ：（默认值），表示元素的  "),s("code",[t._v("width")]),t._v("  /  "),s("code",[t._v("height")]),t._v("  不包含  "),s("code",[t._v("padding")]),t._v(" 、 "),s("code",[t._v("border")]),t._v(" ，即 W3C 的标准盒子模型；")]),t._v(" "),s("li",[s("code",[t._v("border-box")]),t._v(" ：表示元素的  "),s("code",[t._v("width")]),t._v("  /  "),s("code",[t._v("height")]),t._v("  包含  "),s("code",[t._v("padding")]),t._v("  和  "),s("code",[t._v("border")]),t._v(" ，即 怪异盒子模型。")]),t._v(" "),s("li",[s("code",[t._v("inherit")]),t._v(" ：从父元素继承  "),s("code",[t._v("box-sizing")]),t._v("  的值。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);