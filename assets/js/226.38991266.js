(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{554:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("相关问题：")]),t._v(" "),s("ul",[s("li",[t._v("JavaScript 中如何实现函数缓存？")]),t._v(" "),s("li",[t._v("JavaScript 函数缓存的应用场景。")])])]),t._v(" "),s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("JavaScript 函数缓存是将函数运算过的结果进行缓存。本质上是用 空间（缓存存储） 换 时间（计算过程）。常用于缓存数据计算结果和缓存对象。")]),t._v(" "),s("p",[t._v("缓存是一个临时的数据存储，保存数据以便将来对数据的请求能够更快地得到处理。")]),t._v(" "),s("p",[t._v("🌰 例子：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" calc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memoize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"如何实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现"}},[t._v("#")]),t._v(" 如何实现")]),t._v(" "),s("p",[t._v("实现函数缓存主要依靠 闭包、柯里化、高阶函数。")]),t._v(" "),s("p",[t._v("实现原理，把参数和对应的结果保存在一个对象中，调用时判断参数对应的数据是否存在，存在就返回对应的结果护具，否则就返回计算结果。")]),t._v(" "),s("p",[t._v("🌰 例子：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("memoize")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cache "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("调用方式：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" calc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memoize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("过程分析：")]),t._v(" "),s("ul",[s("li",[t._v("在当前函数作用域定义了一个空的独享，用于缓存运行结果；")]),t._v(" "),s("li",[t._v("运行柯里化返回一个函数，返回的函数由于闭包的特性，可以访问到  "),s("code",[t._v("cache")]),t._v(" 。")]),t._v(" "),s("li",[t._v("然后判断输入参数是不是在  "),s("code",[t._v("cache")]),t._v("  中。如果已经存在，直接返回  "),s("code",[t._v("cache")]),t._v("  的内容，如果没有存在，使用函数  "),s("code",[t._v("func")]),t._v("  对输入参数求值，然后把结果存储在  "),s("code",[t._v("cache")]),t._v(" 。")])]),t._v(" "),s("h2",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("p",[t._v("虽然缓存效率很高， 但并不适用所有场景，因此不能极端地将所有函数都添加缓存。")]),t._v(" "),s("p",[t._v("对于以下几种情况可以使用函数缓存：")]),t._v(" "),s("ul",[s("li",[t._v("对于昂贵函数调用时，需要执行复杂计算的函数；")]),t._v(" "),s("li",[t._v("对于具有有限且高度重复输入范围的函数；")]),t._v(" "),s("li",[t._v("对于具有重复输入值的递归函数；")]),t._v(" "),s("li",[t._v("对于纯函数，即每次使用特定输入调用时返回相同输出的函数。")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/112505577",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javascript 缓存函数 & 柯里化 & 偏函数 - 知乎 (zhihu.com)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vue3js.cn/interview/JavaScript/function_cache.html#%E4%BA%8C%E3%80%81%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：Javascript 中如何实现函数缓存？函数缓存有哪些应用场景？ | web 前端面试 - 面试官系列 (vue3js.cn)"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);