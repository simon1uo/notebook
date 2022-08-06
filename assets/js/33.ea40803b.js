(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{363:function(v,_,t){"use strict";t.r(_);var r=t(3),s=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("Git 是一个 分布式的 VCS （版本控制系统）。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("VCS（Version Control System）保留了文件的修改历史，可以方便地撤销之前对文件的修改操作。")])]),v._v(" "),_("li",[_("p",[v._v("分布式 VCS （DVCS，Distributed Version Control System）")])])]),v._v(" "),_("h2",{attrs:{id:"版本控制系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本控制系统"}},[v._v("#")]),v._v(" 版本控制系统")]),v._v(" "),_("p",[v._v("版本控制系统由 "),_("strong",[v._v("版本控制、主动提交、中央仓库")]),v._v(" 三个核心要素构成。")]),v._v(" "),_("h3",{attrs:{id:"版本控制的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本控制的理解"}},[v._v("#")]),v._v(" 版本控制的理解")]),v._v(" "),_("p",[v._v("版本控制最基本的模型是 编辑器的撤销功能：对某个内容进行修改或者删除操作之后，想要回退这个操作，可以使用撤销操作。这就是一次版本管理，将内容回退到上一个版本。")]),v._v(" "),_("h3",{attrs:{id:"主动提交机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主动提交机制"}},[v._v("#")]),v._v(" 主动提交机制")]),v._v(" "),_("p",[v._v("主动提交版本控制与常见的编辑器的撤销功能的区别：")]),v._v(" "),_("ul",[_("li",[v._v("当文件（代码）的修改周期很长，一次文件的修改历史版本可能需要保存非常长久的时间，并且版本控制使用的是 "),_("strong",[v._v("主动提交改动")]),v._v(" 的机制，不用担心找不到修改的历史；")]),v._v(" "),_("li",[v._v("而编辑器的自动保存和保留修改可撤销历史，频繁保存文件的历史版本自然是不现实的，并且改动历史无章可循，历史查找和回退较困难；")])]),v._v(" "),_("p",[v._v("版本控制的文件版本提交一般使用  "),_("code",[v._v("commit")]),v._v("  命令以及对该次改动的描述信息进行提交，这样这次改动就会记录到版本历史中，如果希望回退到这个版本，可以在版本历史中找到该次记录。")]),v._v(" "),_("h3",{attrs:{id:"中央仓库多人协作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中央仓库多人协作"}},[v._v("#")]),v._v(" 中央仓库多人协作")]),v._v(" "),_("p",[v._v("当多人开发代码时，需要一个中央仓库存储代码，并且所有人对代码的改动都会上传到仓库，通过同步可以获取其他人对代码的修改。")]),v._v(" "),_("h2",{attrs:{id:"中央式版本管理系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中央式版本管理系统"}},[v._v("#")]),v._v(" 中央式版本管理系统")]),v._v(" "),_("p",[v._v("中央式版本管理系统（Centralized VCS） 是最早的版本管理系统。比较简单的版本管理系统。")]),v._v(" "),_("blockquote",[_("p",[v._v("工作模型：假设你在一个三人团队，你们计划开发一个软件或者系统，并决定使用中央式 VCS 来管理代码。于是：")]),v._v(" "),_("ol",[_("li",[v._v("作为项目的主工程师，你独自一人花两天时间搭建了项目的框架；")]),v._v(" "),_("li",[v._v("然后，你在公司的服务器（这个服务器可以是公司内的设备，也可以是你们买的云服务）上"),_("strong",[v._v("创建了一个中央仓库，并把你的代码提交到了中央仓库上")]),v._v("；")]),v._v(" "),_("li",[v._v("你的两个队友"),_("strong",[v._v("从中央仓库取到了你的初始代码")]),v._v("，从此刻开始，你们三人开始"),_("strong",[v._v("并行开发")]),v._v("；")]),v._v(" "),_("li",[v._v("在之后的开发过程中，你们三人为了工作方便，总是每人独立负责开发一个功能，在这个功能开发完成后，这个人就把他的这些"),_("strong",[v._v("新代码提交到中央仓库")]),v._v("；")]),v._v(" "),_("li",[v._v("每次当有人把代码提交到中央仓库的时候，另外两个人就可以选择"),_("strong",[v._v("把这些代码同步到自己的机器上")]),v._v("，保持自己的本地代码总是最新的。")])]),v._v(" "),_("p",[v._v("而对于团队中的每个人来说，就会更简单一点：")]),v._v(" "),_("ol",[_("li",[v._v("第一次加入团队时，把中央仓库的代码取下来；")]),v._v(" "),_("li",[v._v("写完的新功能提交到中央仓库；")]),v._v(" "),_("li",[v._v("同事提交到中央仓库的新代码，及时同步下来。")])]),v._v(" "),_("p",[v._v("这样，一个三人的团队就成功做到了各自在自己的电脑上开发同一个项目，并且互不影响，就好像你们三个人是在同一台电脑上操作一样。")])]),v._v(" "),_("p",[v._v("但是通常开发中还需要处理代码冲突、版本历史、回退代码版本、版本分支，这些概念比中央式版本管理复杂，因此 Git 采用的是分布式版本系统。")]),v._v(" "),_("h2",{attrs:{id:"分布式版本管理系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式版本管理系统"}},[v._v("#")]),v._v(" 分布式版本管理系统")]),v._v(" "),_("p",[v._v("分布式 VCS 与中央式 VCS 的区别在于：分布式 VCS 除了中央仓库以外，还有本地仓库。")]),v._v(" "),_("blockquote",[_("p",[v._v("意味着每个成员的机器都有本地仓库，这个仓库包含了所有的版本历史，每个人可以在自己的本地仓库提交代码、查看历史，无需联网和中央仓库交互。")])]),v._v(" "),_("p",[v._v("分布式 VCS 的保存版本历史工作交给了本地仓库，中央仓库负责同步团队代码，并且保存的历史版本是作为团队的同步中转站。")]),v._v(" "),_("blockquote",[_("p",[v._v("工作模型：依然以三人团队为例，分布式 VCS 的工作模型大致是这样：")]),v._v(" "),_("ol",[_("li",[v._v("首先，你作为主工程师，独立搭建了项目架构，"),_("strong",[v._v("并把这些代码提交到了本地仓库")]),v._v("；")]),v._v(" "),_("li",[v._v("然后，你在服务器上创建了一个中央仓库，并把 1 中的提交"),_("strong",[v._v("从本地仓库推送到了服务器的中央仓库")]),v._v("；")]),v._v(" "),_("li",[v._v("其他同事"),_("strong",[v._v("把中央仓库的所有内容克隆到本地，拥有了各自的本地仓库")]),v._v("，从此刻开始，你们三人开始并行开发；")]),v._v(" "),_("li",[v._v("在之后的开发过程中，你们三人总是每人独立负责开发一个功能，在这个功能开发过程中，"),_("strong",[v._v("一个人会把它的每一步改动提交到本地仓库")]),v._v("。注意：由于本地提交无需立即上传到中央仓库，所以每一步提交不必是一个完整功能，而可以是功能中的一个步骤或块。")]),v._v(" "),_("li",[v._v("在一个人把某个功能开发完成之后，他就可以把这个功能相关的所有提交"),_("strong",[v._v("从本地仓库推送到中央仓库")]),v._v("；")]),v._v(" "),_("li",[v._v("每次当有人把新的提交推送到中央仓库的时候，另外两个人就可以选择"),_("strong",[v._v("把这些提交同步到自己的机器上，并把它们和自己的本地代码合并")]),v._v("。")])])]),v._v(" "),_("p",[v._v("分布式 VCS 与中央式 VCS 很相似，但是分布式 VCS 把代码提交和上传过程拆分开了。")]),v._v(" "),_("p",[v._v("分布式 VCS 的优点：")]),v._v(" "),_("ul",[_("li",[v._v("不需要联网就可以完成版本的提交和分支切换等操作；")]),v._v(" "),_("li",[v._v("因为有本地仓库，可以将代码版本更加细分，更加方便 review。")])]),v._v(" "),_("p",[v._v("分布式 VCS 的缺点：")]),v._v(" "),_("ul",[_("li",[v._v("初次从中央仓库中 clone 代码时可能会比较耗时；")]),v._v(" "),_("li",[v._v("本地仓库保存完整版本占用的存储比中央式 VCS 高；")])]),v._v(" "),_("blockquote",[_("p",[v._v("实际上，大多数项目代码都是文本内容，实际代码（不包括依赖）的体积不会很大，VCS 可以利用算法压缩仓库的体积，所以 Git 等分布式 VCS 的仓库体积并不大。初次获取项目的耗时和本地仓库的存储占用都很小。")]),v._v(" "),_("p",[v._v("对于一些游戏开发包含大尺寸数据和媒体文件，不容易压缩尺寸，使用分布式 VCS 会导致仓库体积庞大，一般使用中央式 VCS 管理代码。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);