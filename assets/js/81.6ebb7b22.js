(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{411:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("JavaScript 允许像使用对象一样使用原始类型（"),t("strong",[s._v("字符串，数字")]),s._v("等），并且提供调用方法。"),t("strong",[s._v("⚠️ 但原始类型并不是对象！")])]),s._v(" "),t("h2",{attrs:{id:"原始类型与对象之间的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始类型与对象之间的区别"}},[s._v("#")]),s._v(" 原始类型与对象之间的区别")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("原始值")]),s._v("：\n"),t("ul",[t("li",[s._v("是原始类型中的一种值。")]),s._v(" "),t("li",[s._v("在 JavaScript 中有 7 种原始类型： "),t("code",[s._v("string")]),s._v(" ， "),t("code",[s._v("number")]),s._v(" ， "),t("code",[s._v("bigint")]),s._v(" ， "),t("code",[s._v("boolean")]),s._v(" ， "),t("code",[s._v("symbol")]),s._v(" ， "),t("code",[s._v("null")]),s._v("  和  "),t("code",[s._v("undefined")]),s._v(" 。（相对于 ES6 以后的 JavaScript）")])])]),s._v(" "),t("li",[t("strong",[s._v("对象")]),s._v("：\n"),t("ul",[t("li",[s._v("能够存储多个值作为属性。")]),s._v(" "),t("li",[s._v("可以使用大括号  "),t("code",[s._v("{}")]),s._v("  创建对象，例如： "),t("code",[s._v('{name: "John", age: 30}')]),s._v(" 。JavaScript 中还有其他种类的对象，例如函数就是对象。")]),s._v(" "),t("li",[s._v("JavaScript 还有内建对象，处理日期、错误、HTML 元素等的内建对象。它们具有不同的属性和方法。")])])]),s._v(" "),t("li",[s._v("对象比原始类型更加「厚重」，需要额外资源支持运作。")])]),s._v(" "),t("h2",{attrs:{id:"为原始类型提供「对象包装器」"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为原始类型提供「对象包装器」"}},[s._v("#")]),s._v(" 为原始类型提供「对象包装器」")]),s._v(" "),t("p",[s._v("为了保持原始数据类型简单轻量，又想完成对字符串或者数字等原始类型执行操作。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("原始类型仍然是原始的，提供单个值。")])]),s._v(" "),t("li",[t("p",[s._v("JavaScript 允许访问字符串，数字，布尔值和 symbol 的方法和属性。")])]),s._v(" "),t("li",[t("p",[s._v("JavaScript 创建了提供额外功能的特殊「对象包装器」，使用后即被销毁。")])])]),s._v(" "),t("p",[s._v("「对象包装器」对于每种原始类型都是不同的，分别被称为  "),t("code",[s._v("String")]),s._v(" 、 "),t("code",[s._v("Number")]),s._v(" 、 "),t("code",[s._v("Boolean")]),s._v(" 、 "),t("code",[s._v("Symbol")]),s._v("  和  "),t("code",[s._v("BigInt")]),s._v(" 。因此，它们提供了不同的方法。")]),s._v(" "),t("p",[s._v("🌰 例子 / 字符串方法  "),t("code",[s._v("str.toUpperCase()")]),s._v("  字母大写化处理：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" str "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toUpperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("在  "),t("code",[s._v("str.toUpperCase()")]),s._v("  实际发生的事情：")]),s._v(" "),t("ul",[t("li",[s._v("访问字符串  "),t("code",[s._v("str")]),s._v("  时会创建一个包含字符串字面值的「"),t("strong",[s._v("特殊对象")]),s._v("」，并且具有有用的方法，例如  "),t("code",[s._v("toUpperCase()")]),s._v(" 。")]),s._v(" "),t("li",[s._v("该方法运行并返回一个新的字符串。")]),s._v(" "),t("li",[s._v("「特殊对象」被销毁。")])])]),s._v(" "),t("p",[s._v("🌰 例子 / 数字方法  "),t("code",[s._v("toFixed")]),s._v("  将数字舍入到给定的精度：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.23456")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toFixed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.23")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("所以原始类型可以提供方法，但它们依然是轻量级的。")]),s._v(" "),t("blockquote",[t("p",[s._v("JavaScript 引擎高度优化了这个过程。它甚至可能跳过创建额外的对象。但是它仍然必须遵守规范，并且表现得好像它创建了一样。")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[t("strong",[s._v("构造器")]),s._v(" "),t("code",[s._v("String/Number/Boolean")]),s._v(" "),t("strong",[s._v("仅供内部使用")]),s._v("。（在 Java 中也许可以  "),t("code",[s._v("new Number(1)")]),s._v("  或  "),t("code",[s._v("new Boolean(false)")]),s._v("  ，但是 JavaScript 极不推荐这样使用）")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("new …()")]),s._v("   JavaScript 的使用会引起问题：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "number"')]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "object"!')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" zero "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("zero"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// zero 为 true，因为它是一个对象")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zero is truthy?!?"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v("? 返回的对象始终为  "),t("code",[s._v("true")]),s._v("  。")])])])]),s._v(" "),t("p",[s._v("另一方面，JavaScript 可以调用不带  "),t("code",[s._v("new")]),s._v(" （关键字）的  "),t("code",[s._v("String/Number/Boolean")]),s._v("  函数（"),t("strong",[s._v("类型转换")]),s._v("），将一个值转换为相应的类型：转成字符串、数字或布尔值（原始类型）。")]),s._v(" "),t("p",[s._v("🌰 例子：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将字符串转成数字")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("对于  "),t("code",[s._v("null/undefined")]),s._v("  类型，没有任何数据类型的方法：它们没有对应的「对象包装器」，也没有提供任何方法，它们是「最原始的」数据类型。")]),s._v(" "),t("p",[s._v("尝试访问这种值的属性会导致错误：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"原始类型总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始类型总结"}},[s._v("#")]),s._v(" 原始类型总结")]),s._v(" "),t("ul",[t("li",[s._v("JavaScript 中基本类型不是对象，基本类型不能存储数据；所有的属性 / 方法操作都是在临时对象的帮助下执行的。")]),s._v(" "),t("li",[s._v("JavaScript 为原始类型提供了许多有用的方法（* 除了  "),t("code",[s._v("null/undefined")]),s._v("  ）")])])])}),[],!1,null,null,null);t.default=e.exports}}]);