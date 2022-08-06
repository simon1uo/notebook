(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{446:function(t,s,n){"use strict";n.r(s);var a=n(3),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"bom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),s("p",[t._v("BOM 即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 "),s("code",[t._v("window")]),t._v(" 。")]),t._v(" "),s("p",[t._v("其他对象：")]),t._v(" "),s("p",[s("code",[t._v("navigator")]),t._v(" ：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器；")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("一般只会使用  "),s("code",[t._v("userAgent")]),t._v("  来判断浏览器的信息， "),s("code",[t._v("userAgent")]),t._v("  是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，不同的浏览器会有不同的  "),s("code",[t._v("userAgent")]),t._v(" ；")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ua "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("p",[s("code",[t._v("location")]),t._v("  ：代表当前浏览器的地址栏信息，通过  "),s("code",[t._v("location")]),t._v("  可以获取地址栏信息，或者操作浏览器跳转页面；")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("直接打印  "),s("code",[t._v("location")]),t._v(" ，则可以获取到地址栏的信息（当前页面的完整路径）；")])]),t._v(" "),s("li",[s("p",[t._v("如果直接将 location 属性修改为一个完整的路径或相对路径，则页面会自动跳转到该路径，并且会生成相应的历史记录：")])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assgin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳转到其他的页面")]),t._v("\n  location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新加载当前页面，作用和刷新按钮一样。参数为true时，则会强制清空缓存刷新页面")]),t._v("\n  location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以使用一个新的页面替换当前页面，调用完毕也会跳转页面。不会生成历史记录，不能使用回退按钮回退")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("code",[t._v("History")]),t._v("  ：代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录；由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页。而且该操作只在"),s("strong",[t._v("当次访问时有效")]),t._v("；"),s("br"),t._v(" "),s("code",[t._v("Screen")]),t._v("  ：代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息；")]),t._v(" "),s("p",[s("strong",[t._v("与 DOM 对比：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("code",[t._v("DOM")])]),t._v(" "),s("th",[s("code",[t._v("BOM")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("文档对象模型")]),t._v(" "),s("td",[t._v("浏览器对象模型")])]),t._v(" "),s("tr",[s("td",[t._v("把「文档」当做一个「对象」来看待")]),t._v(" "),s("td",[t._v("把「浏览器」当做一个「对象」来看待")])]),t._v(" "),s("tr",[s("td",[t._v("顶级对象是 document")]),t._v(" "),s("td",[t._v("顶级对象是 window")])]),t._v(" "),s("tr",[s("td",[t._v("操作页面元素")]),t._v(" "),s("td",[t._v("浏览器 == 窗口交互 == 的一些对象")])]),t._v(" "),s("tr",[s("td",[t._v("有 W3C 标准规范")]),t._v(" "),s("td",[t._v("浏览器厂商在各自浏览器上定义的，兼容性较差")])])])]),t._v(" "),s("h3",{attrs:{id:"构成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构成"}},[t._v("#")]),t._v(" 构成")]),t._v(" "),s("p",[s("code",[t._v("window")]),t._v("  对象是浏览器的"),s("strong",[t._v("顶级对象")]),t._v("，有双重角色；")]),t._v(" "),s("ul",[s("li",[t._v("是 JavaScript 访问浏览器窗口的一个接口；")]),t._v(" "),s("li",[t._v("是一个"),s("strong",[t._v("全局")]),t._v("对象。定义在"),s("strong",[t._v("全局作用域")]),t._v("中的变量、函数都会变成  "),s("code",[t._v("window")]),t._v("  对象的属性和方法；")])]),t._v(" "),s("p",[t._v("在调用的时候"),s("strong",[t._v("可以省略  "),s("code",[t._v("window")])]),t._v("，对话框属于  "),s("code",[t._v("window")]),t._v("  对象方法，如 "),s("code",[t._v("alert(), prompt()")]),t._v("  等。")]),t._v(" "),s("ul",[s("li",[t._v("window 下的一个"),s("strong",[t._v("特殊属性")]),t._v(" "),s("code",[t._v("window.name")]),t._v(" ；")])]),t._v(" "),s("h3",{attrs:{id:"常见事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见事件"}},[t._v("#")]),t._v(" 常见事件")]),t._v(" "),s("p",[s("strong",[t._v("窗口加载事件")])]),t._v(" "),s("p",[s("code",[t._v("window.onload")]),t._v("  是窗口 (页面）加载事件，当文档内容"),s("strong",[t._v("完全加载完成")]),t._v("会触发该事件（包括图像、脚本文件、CSS 文件等）， 就调用的处理函数。")]),t._v(" "),s("ul",[s("li",[t._v("有了 "),s("code",[t._v("window.onload")]),t._v("  就可以把 JavaScript 代码写到页面元素的上方，因为 "),s("code",[t._v("onload")]),t._v("  是等页面内容"),s("strong",[t._v("全部加载完毕")]),t._v("，再去执行处理函数；")]),t._v(" "),s("li",[s("code",[t._v("window.onload")]),t._v("  传统注册事件方式"),s("strong",[t._v("只能写一次")]),t._v("，如果有多个，会"),s("strong",[t._v("以最后一个")]),t._v(" "),s("code",[t._v("window.onload")]),t._v("  为准；")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("code",[t._v("document.addEventListener")]),t._v("  没有限制使用：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("DOMContentLoaded")]),t._v("  事件触发时，"),s("strong",[t._v("仅当 DOM 加载完成")]),t._v("，不包括样式表，图片，flash 等等；")]),t._v(" "),s("li",[t._v("IE9 以上才支持；")]),t._v(" "),s("li",[t._v("如果"),s("strong",[t._v("页面的图片很多")]),t._v("的话，从用户访问到  "),s("code",[t._v("onload")]),t._v("  触发可能需要较长的时间，交互效果就不能实现，必然影响用户的体验，"),s("strong",[t._v("此时用 "),s("code",[t._v("DOMContentLoaded")]),t._v("  事件比较合适")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("窗口大小改变事件")]),t._v(" "),s("p",[s("code",[t._v("window.onresize")]),t._v("  是"),s("strong",[t._v("调整窗口大小")]),t._v("加载事件，当触发时就调用的处理函数。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("只要"),s("strong",[t._v("窗口大小发生像素变化")]),t._v("，就会触发这个事件；")])]),t._v(" "),s("li",[s("p",[t._v("我们经常利用这个事件完成"),s("strong",[t._v("响应式布局")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("window.innerWidth")]),t._v("  当前屏幕的"),s("strong",[t._v("宽度")]),t._v("；")])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onresize")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("定时器")]),t._v(" "),s("code",[t._v("setInterval()")]),t._v(" ：将一个函数每隔一个时间执行一次；")]),t._v(" "),s("ul",[s("li",[t._v("第一个参数时回调函数；")]),t._v(" "),s("li",[t._v("第二个参数时调用间隔的时间，单位毫秒；")]),t._v(" "),s("li",[t._v("返回值是一个  "),s("code",[t._v("Number")]),t._v("  类型的数据，定时器的唯一标识；")]),t._v(" "),s("li",[t._v("使用  "),s("code",[t._v("clearInterval()")]),t._v("  关闭一个定时器：接收有效的定时器的标识，则停止对应的定时器。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\tcount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关闭定时器  ")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("strong",[t._v("延迟调用")]),t._v(" "),s("code",[t._v("setTimeout()")]),t._v(" ：一个函数不马上执行，而是隔一段时间以后在执行，而且"),s("strong",[t._v("只会执行一次")]),t._v("；")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用clearTimeout()来关闭一个延时调用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);