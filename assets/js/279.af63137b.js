(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{607:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("ul",[t("li",[t("a",{attrs:{href:"https://jestjs.io/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jest 官网"),t("OutboundLink")],1),s._v("。它是 Facebook 出品的一个测试框架，相对其他测试框架，它的一大特点就是内置了常用的测试工具，比如自带断言、测试覆盖率工具，实现了开箱即用。")])])]),s._v(" "),t("h2",{attrs:{id:"安装使用-jest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装使用-jest"}},[s._v("#")]),s._v(" 安装使用 Jest")]),s._v(" "),t("blockquote",[t("p",[s._v("由于  "),t("code",[s._v("typescript-library-starter")]),s._v("  已经内置  "),t("code",[s._v("jest")]),s._v("  。可以使用以下命令重新安装更新到新的版本：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i jest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("h3",{attrs:{id:"jest-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jest-配置"}},[s._v("#")]),s._v(" Jest 配置")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("点击查看")]),s._v(" "),t("p",[s._v("在  "),t("code",[s._v("package.json")]),s._v("  中的  "),t("code",[s._v("jest")]),s._v("  相关配置：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jest"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"transform"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('".(ts|tsx)"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts-jest"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"testEnvironment"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"testRegex"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(/__tests__/.*|\\\\.(test|spec))\\\\.(ts|tsx|js)$"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"moduleFileExtensions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsx"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"coveragePathIgnorePatterns"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/node_modules/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/test/"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"coverageThreshold"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"global"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"branches"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"functions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lines"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"statements"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"collectCoverageFrom"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/*.{js,ts}"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("相关配置的含义：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("transform")]),s._v(" ：转换器配置。这里表示的就是使用  "),t("code",[s._v("ts-jest")]),s._v("  工具把  "),t("code",[s._v(".ts")]),s._v("  和  "),t("code",[s._v(".tsx")]),s._v("  文件内容转换成 JavaScript，因为使用 TypeScript 编写测试代码，而 Node.js 是不能直接支持 TypeScript 的，所以需要配置转换器。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("testEnvironment")]),s._v(" ：测试环境。表示它是一个类浏览器的测试环境，可以使用浏览器环境中的一些 API。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("testRegex")]),s._v(" ：测试文件的正则表达式。包含的文件格式。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("moduleFileExtensions")]),s._v(" ：模块文件扩展名，当去引入一个模块并没有指定扩展名的时候，它会依次尝试去添加这些扩展名去找你引入的模块文件。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("coverageThreshold")]),s._v("  ：测试覆盖率的阈值设定。当测试覆盖率达不到阈值的时候，测试会失败。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("collectCoverageFrom")]),s._v(" ：收集指定文件的测试覆盖率 (即使你没为这些文件编写测试)，它的值为 glob patterns 类型。")])])]),s._v(" "),t("p",[s._v("额外配置：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"setupFilesAfterEnv"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<rootDir>/test/boot.ts"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("setupFilesAfterEnv")]),s._v(" ：测试框架安装后立即执行的代码文件列表。表示每次跑具体测试代码之前会先运行  "),t("code",[s._v("<rootDir>/test/boot.ts")]),s._v("  中的代码， "),t("code",[s._v("<rootDir>")]),s._v("  表示当前项目的根目录。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);