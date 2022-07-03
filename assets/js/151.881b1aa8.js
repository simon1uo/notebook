(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{620:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("🔗 相关链接：")]),t._v(" "),a("ul",[a("li",[t._v("📁 官方文档："),a("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js (vuejs.org)"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("🇨🇳 中文文档："),a("a",{attrs:{href:"https://cn.vuejs.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js (vuejs.org)"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[t._v("🚠 实例代码仓库：https://github.com/simon1uo/vue-notes")]),t._v(" "),a("p",[t._v("Vue 是一个动态构建用户界面的渐进式 JavaScript 框架；")]),t._v(" "),a("blockquote",[a("p",[t._v("相关概念：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("渐进式： 自底向上逐层的应用；")])]),t._v(" "),a("li",[a("p",[t._v("简单应用：只需要轻量小巧的核心库；")])]),t._v(" "),a("li",[a("p",[t._v("复杂应用：可引入各式各样的 Vue 插件；")])])])]),t._v(" "),a("p",[t._v("特点：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("遵循组件化模式")]),t._v("，提高代码的复用率、更好维护；")])]),t._v(" "),a("li",[a("p",[t._v("声明式编码，无需操作 DOM，提高开发效率；（非命令式编码）")])]),t._v(" "),a("li",[a("p",[t._v("使用虚拟 DOM + Diff 算法，尽量复用 DOM 节点；")])]),t._v(" "),a("li",[a("p",[t._v("编码简洁、体积小、运行效率高，适合移动 / PC 端开发；")])]),t._v(" "),a("li",[a("p",[t._v("只关注 UI, 也可以引入其它第三方库开发项目；")]),t._v(" "),a("p",[t._v("其他 JS 框架的关联：")])]),t._v(" "),a("li",[a("p",[t._v("借鉴 Angular 的模板和数据绑定技术；")])]),t._v(" "),a("li",[a("p",[t._v("借鉴 React 的组件化和虚拟 DOM 技术；")])])]),t._v(" "),a("h2",{attrs:{id:"基础学习中使用-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础学习中使用-vue"}},[t._v("#")]),t._v(" 基础学习中使用 Vue")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("为了在学习过程中得到警告提示，使用开发版本的 Vue.js:")]),t._v(" "),a("p",[t._v("在文档中引入  "),a("code",[t._v("vue.js")]),t._v("  ：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("此处引入的是 cdn 的 Vue 2 开发环境版本。生产环境版本可以替换为  "),a("code",[t._v("https://cdn.jsdelivr.net/npm/vue@2")]),t._v(" （优化尺寸和速度）")])])]),t._v(" "),a("li",[a("p",[t._v("安装浏览器拓展 🔗 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Devtools "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("（可选项） "),a("strong",[t._v("关闭生产环境提示")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("producitonTip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("p",[t._v("🌰 第一个 Vue 页面：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 1. 准备容器 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" hello, {{name}}, {{age}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("producitonTip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个Vue实例")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'simon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("blockquote",[a("ul",[a("li",[a("code",[t._v("el")]),t._v("   指定当前 Vue 实例为哪个容器服务，通常为 CSS 选择器；")]),t._v(" "),a("li",[a("code",[t._v("data")]),t._v("  存储数据；")])])]),t._v(" "),a("h3",{attrs:{id:"使用-vue-工作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-工作步骤"}},[t._v("#")]),t._v(" "),a("strong",[t._v("使用 Vue 工作步骤")])]),t._v(" "),a("ol",[a("li",[t._v("创建 Vue 实例，传入一个配置对象；")]),t._v(" "),a("li",[t._v("准备一个容器，内可使用特殊的 Vue 语法（如  "),a("code",[t._v("{{}}")]),t._v("  引用数据）；")]),t._v(" "),a("li",[t._v("容器内的代码被称为 "),a("strong",[t._v("Vue 模版")]),t._v("；")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("注意：")]),t._v(" "),a("ul",[a("li",[t._v("一个实例只能为一个容器服务，多个实例不能接管同一个容器 ——"),a("strong",[t._v(" 容器与实例一对一")]),t._v("；")]),t._v(" "),a("li",[t._v("真实开发中"),a("strong",[t._v("只有一个")]),t._v(" Vue 实例，并且会配合着组件一起使用；")]),t._v(" "),a("li",[a("code",[t._v("{variable}")]),t._v("  中的  "),a("code",[t._v("xx")]),t._v("  要写 JavaScript "),a("strong",[t._v("表达式")]),t._v("，且  "),a("code",[t._v("variable")]),t._v("  可以自动读取到  "),a("code",[t._v("data")]),t._v("  中的所有属性；")]),t._v(" "),a("li",[t._v("一旦 "),a("code",[t._v("data")]),t._v("  中的数据发生改变，那么模板中用到该数据的地方也会"),a("strong",[t._v("自动更新")]),t._v("；")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);