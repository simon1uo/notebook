(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{689:function(v,_,e){"use strict";e.r(_);var l=e(29),o=Object(l.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("blockquote",[e("ul",[e("li",[e("code",[v._v("var")]),v._v("  、 "),e("code",[v._v("let")]),v._v(" 、 "),e("code",[v._v("const")]),v._v("  声明变量的区别？")])])]),v._v(" "),e("h2",{attrs:{id:"三者的概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三者的概念"}},[v._v("#")]),v._v(" 三者的概念")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("在 ES5 中，使用  "),e("code",[v._v("var")]),v._v("  声明的变量既是全局变量，也是顶级变量；")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("全局变量指在  "),e("code",[v._v("window")]),v._v("  对象中能获取到该变量的值；")])]),v._v(" "),e("li",[e("p",[v._v("顶级变量指的是  "),e("code",[v._v("var")]),v._v("  生命的变量存在变量提升；")])]),v._v(" "),e("li",[e("p",[v._v("使用  "),e("code",[v._v("var")]),v._v("  声明变量可以对一个变量多次声明，后面生面的变量会覆盖前面的声明；")])]),v._v(" "),e("li",[e("p",[v._v("函数中使用  "),e("code",[v._v("var")]),v._v("  声明的变量是局部变量；不在函数内声明的变量是全局变量；")])])])]),v._v(" "),e("li",[e("p",[v._v("在 ES6 中新增使用  "),e("code",[v._v("let")]),v._v("  声明变量：")]),v._v(" "),e("ul",[e("li",[v._v("声明的变量只在 "),e("code",[v._v("let")]),v._v("  命令的代码块内有效；")]),v._v(" "),e("li",[v._v("声明的变量不存在变量提升；（即声明之前，该变量不存在）")]),v._v(" "),e("li",[v._v("不允许在相同作用域中重复声明变量；")]),v._v(" "),e("li",[v._v("在块级作用域中内存在 "),e("code",[v._v("let")]),v._v("  命令，这个区域就不再受外部影响；")])])]),v._v(" "),e("li",[e("p",[v._v("使用  "),e("code",[v._v("const")]),v._v("  声明只读常量，一旦声明之后无法修改：")]),v._v(" "),e("ul",[e("li",[v._v("意味着声明时就要出初始化变量的值；")]),v._v(" "),e("li",[v._v("不能重复声明  "),e("code",[v._v("var")]),v._v("  或者  "),e("code",[v._v("let")]),v._v("  已经声明过的变量；")]),v._v(" "),e("li",[v._v("实际上保证的是 变量指向的内存地址保存的数据不改变，对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量；对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针， "),e("code",[v._v("const")]),v._v("  只能保证这个指针是固定的，并不能确保改变量的结构不变；")])])])]),v._v(" "),e("h2",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[v._v("#")]),v._v(" 区别")]),v._v(" "),e("p",[v._v("从五方面展开讲：")]),v._v(" "),e("ul",[e("li",[v._v("变量的提升：\n"),e("ul",[e("li",[e("code",[v._v("var")]),v._v("  声明的变量存在变量提升，即在变量声明之前就可以调用，值为  "),e("code",[v._v("undefined")]),v._v(" ；")]),v._v(" "),e("li",[e("code",[v._v("let")]),v._v("  和  "),e("code",[v._v("const")]),v._v("  都不存在变量提升，即变量必须要在声明之后才能使用，否则报错；")])])]),v._v(" "),e("li",[v._v("暂时性死区：\n"),e("ul",[e("li",[e("code",[v._v("var")]),v._v("  不存在暂时性死区，对于未知变量为  "),e("code",[v._v("undefined")]),v._v("  不报错；")]),v._v(" "),e("li",[e("code",[v._v("let")]),v._v("  和  "),e("code",[v._v("const")]),v._v("  存在暂时性死区，只有等到声明变量的那一行出现才能使用变量，否则报错；")])])]),v._v(" "),e("li",[v._v("块级作用域：\n"),e("ul",[e("li",[e("code",[v._v("var")]),v._v("  不存在块级作用域；")]),v._v(" "),e("li",[e("code",[v._v("let")]),v._v("  和  "),e("code",[v._v("const")]),v._v("  存在块级作用域：")])])]),v._v(" "),e("li",[v._v("重复声明：\n"),e("ul",[e("li",[e("code",[v._v("var")]),v._v("  允许重复声明变量；")]),v._v(" "),e("li",[e("code",[v._v("let")]),v._v("  和  "),e("code",[v._v("const")]),v._v("  不允许重复声明变量；")])])]),v._v(" "),e("li",[v._v("修改声明变量：\n"),e("ul",[e("li",[e("code",[v._v("var")]),v._v("  和  "),e("code",[v._v("let")]),v._v("  可以修改；")]),v._v(" "),e("li",[e("code",[v._v("cosnt")]),v._v("  声明常量，一旦生命不可修改；")])])]),v._v(" "),e("li",[v._v("使用情况：\n"),e("ul",[e("li",[v._v("能用 "),e("code",[v._v("const")]),v._v("  的情况尽量使用 "),e("code",[v._v("const")]),v._v(" ，其他情况下大多数使用 "),e("code",[v._v("let")]),v._v(" ，避免使用 "),e("code",[v._v("var")])])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);