(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{707:function(v,_,t){"use strict";t.r(_);var e=t(29),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("blockquote",[t("ul",[t("li",[v._v("说说对 NodeJS 的理解。")]),v._v(" "),t("li",[v._v("为什么要用 NodeJS？")])])]),v._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),t("p",[v._v("是一个开源、跨平台的 JavaScript 运行环境。在浏览器外运行 V8 JavaScript 引擎，利用事件驱动、非阻塞、异步输入输出模型等提高性功能。")]),v._v(" "),t("p",[v._v("可以理解为 Node.js 是一个服务器端、非阻塞 I/O 的、事件驱动的 JavaScript 运行环境。")]),v._v(" "),t("blockquote",[t("ul",[t("li",[t("p",[v._v("非阻塞异步：Node.js 采用非阻塞 I/O 机制，在 I/O 操作时不会造成任何的阻塞，完成之后，以时间的形式通知执行操作；")]),v._v(" "),t("p",[v._v("🌰 例子： 访问数据库代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高程序的执行效率；")])]),v._v(" "),t("li",[t("p",[v._v("事件驱动：当进来一个新的请求时，请求将会被压入一个事件队列，然后通过一个循环来检测队列中的事件状态变化，如果检测到状态发生变化，则执行该事件对应的处理代码，一般是回调函数。")]),v._v(" "),t("p",[v._v("🌰 例子： 读取一个文件时，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/simon1uo/image-flow@master/image/j53pgf.png",alt:"a7729590-c1e8-11eb-ab90-d9ae814b240d"}})])])])]),v._v(" "),t("h2",{attrs:{id:"优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[v._v("#")]),v._v(" 优缺点")]),v._v(" "),t("p",[t("strong",[v._v("优点")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("处理高并发场景性能优势；")]),v._v(" "),t("li",[v._v("适合 I/O 密集型的应用，指定是应用在运行极限时，CPU 占用率仍然比较低，大部分时间是在做 I/O 硬盘内存读写操作；")])]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("ul",[t("li",[v._v("因为 Node.js 是单线程，所以不适合 CPU 密集型应用；")]),v._v(" "),t("li",[v._v("只支持单核 CPU，不能充分利用 CPU；")]),v._v(" "),t("li",[v._v("可靠性低，一旦代码某个环节崩溃，整个系统都崩溃；")])]),v._v(" "),t("h2",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[v._v("#")]),v._v(" 使用场景")]),v._v(" "),t("p",[v._v("使用场景分类：")]),v._v(" "),t("ul",[t("li",[v._v("善于 I/O 操作；不善于计算；因为 Node.js 是一个单线程，如果计算（同步）太多，会阻塞这个程序；")]),v._v(" "),t("li",[v._v("大量并发的 I/。应用程序内部并不需要进行非常复杂的处理；")]),v._v(" "),t("li",[v._v("与 Websocket 配置，开发长连接的实时交互应用程序；")])]),v._v(" "),t("p",[v._v("具体场景：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("第一类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的 web 应用程序；")])]),v._v(" "),t("li",[t("p",[v._v("第二大类：基于 web、canvas 等多人联网游戏")])]),v._v(" "),t("li",[t("p",[v._v("第三大类：基于 web 的多人实时聊天客户端、聊天室、图文直播")])]),v._v(" "),t("li",[t("p",[v._v("第四大类：单页面浏览器应用程序")])]),v._v(" "),t("li",[t("p",[v._v("第五大类：操作数据库、为前端和移动端提供基于  "),t("code",[v._v("json")]),v._v("  的 API")])])]),v._v(" "),t("p",[t("code",[v._v("Nodejs")]),v._v("  能实现几乎一切的应用，只是要考虑适不适合使用它。")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("参考")]),v._v("：")])])])}),[],!1,null,null,null);_.default=a.exports}}]);