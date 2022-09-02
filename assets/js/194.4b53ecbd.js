(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{521:function(v,_,t){"use strict";t.r(_);var e=t(3),T=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("相关问题：")]),v._v(" "),_("ul",[_("li",[v._v("说说 HTTP 请求方法 GET 与 POST 的区别？")]),v._v(" "),_("li",[v._v("HTTP 常见的请求方法有哪些？")])])]),v._v(" "),_("h2",{attrs:{id:"请求方法-get-与-post-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求方法-get-与-post-的区别"}},[v._v("#")]),v._v(" 请求方法 GET 与 POST 的区别")]),v._v(" "),_("h3",{attrs:{id:"get-post"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-post"}},[v._v("#")]),v._v(" GET / POST")]),v._v(" "),_("p",[v._v("是 HTTP 协议中的 "),_("strong",[v._v("发送请求的方法")]),v._v("。")]),v._v(" "),_("ul",[_("li",[v._v("GET 方法请求一个指定资源的表示形式，"),_("strong",[v._v("应该只被用于获取数据")]),v._v("。")]),v._v(" "),_("li",[v._v("POST 方法用于将实体提交到指定的资源，通常导致服务器上的状态变化或者副作用。")])]),v._v(" "),_("p",[v._v("本质上都是 TCP 连接。")]),v._v(" "),_("h3",{attrs:{id:"区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[v._v("#")]),v._v(" 区别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("请求数据 / 参数的位置：GET 的参数通过 URL 传递；POST 通过 Request Body 传递。")]),v._v(" "),_("blockquote",[_("p",[v._v("这只是一个约定，没有受到 HTTP 的特别规范。实际上可以在 POST 请求的 URL 中写入参数，或者 GET 的 Request Body 请求体中提交参数。")])])]),v._v(" "),_("li",[_("p",[v._v("请求数据 / 参数是否安全：GET 的请求参数直接暴露在 URL 中，不能传递敏感信息；GE T 的请求参数会完整保留在浏览器的历史中。")]),v._v(" "),_("blockquote",[_("p",[v._v("实际上，HTTP 使用明文传输，使用 POST 请求同样不安全。只有 HTTPS 才能加密安全。")])])]),v._v(" "),_("li",[_("p",[v._v("请求数据 / 参数类型 / 编码方式：GET 请求只接受 ASCII 字符；POST 请求没有限制。 GET 只能进行 URL 编码；POST 支持多种编码方式。")])]),v._v(" "),_("li",[_("p",[v._v("数据长度限制：GET 在 URL 传送参数时受到浏览器或者服务器的限制（URL 的长度）；POST 请求无。")]),v._v(" "),_("blockquote",[_("p",[v._v("实际上，HTTP 协议并没有限制 URL 和 Request Body 的长度。对 URL 的长度限制大多是浏览器和服务器的原因。")])])]),v._v(" "),_("li",[_("p",[v._v("缓存：GET 请求会被浏览器主动 Cache；POST 请求不会，除非手动设置。GET 在浏览器会退时无害，POST 会重新提交请求。")])]),v._v(" "),_("li",[_("p",[v._v("数据包：GET 请求，浏览器会一同发送 HTTP header 和 data，服务器响应  "),_("code",[v._v("200")]),v._v("  并返回数据；POST 请求，浏览器回先发送 header，服务器响应  "),_("code",[v._v("100")]),v._v(" ，浏览器再发送  "),_("code",[v._v("data")]),v._v("  ，所以数据包发送了两次。")])])]),v._v(" "),_("h2",{attrs:{id:"http-支持的请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-支持的请求方法"}},[v._v("#")]),v._v(" HTTP 支持的请求方法")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("GET")]),v._v(" ：最常见的请求方法，向服务器用于请求指定的页面信息，返回实体主体；")]),v._v(" "),_("li",[_("code",[v._v("POST")]),v._v(" ：客户端向指定的资源提交数据进行处理请求（提交表单或者上传文件），数据会被包含在请求体中，带来在服务器中资源的建立或者修改；")]),v._v(" "),_("li",[_("code",[v._v("PUT")]),v._v(" ：类似于 POST，从客户端向服务端传送的数据取代指定的服务器资源。")]),v._v(" "),_("li",[_("code",[v._v("DELETE")]),v._v(" ：主要用于删除服务器的某个资源。")]),v._v(" "),_("li",[_("code",[v._v("HEAD")]),v._v(" ： 类似于 GET，但是请求的内容不同，获取资源的响应报文的首部，确定请求的有效性和资源的更新日期，响应中没有具体的内容；")]),v._v(" "),_("li",[_("code",[v._v("OPTIONS")]),v._v(" ：查询请求的指定资源支持什么 HTTP 方法。")]),v._v(" "),_("li",[_("code",[v._v("CONNECT")]),v._v(" ：建立特殊的连接隧道；")]),v._v(" "),_("li",[_("code",[v._v("TRACE")]),v._v(" ：追踪请求 - 响应的传输路径。")])]),v._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")])])}),[],!1,null,null,null);_.default=T.exports}}]);