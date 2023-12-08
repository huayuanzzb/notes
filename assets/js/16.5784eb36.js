(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{342:function(t,a,e){"use strict";e.r(a);var s=e(7),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"autowired-vs-resource-vs-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autowired-vs-resource-vs-inject"}},[t._v("#")]),t._v(" @AutoWired VS @Resource VS @Inject")]),t._v(" "),a("blockquote",[a("p",[t._v("本文只比较 Field Injection 和 Setter Injection 的方式，暂未比较构造函数注入的方式")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("Autowired")]),t._v(" "),a("th",[t._v("@Resource")]),t._v(" "),a("th",[t._v("@Inject")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("来源")]),t._v(" "),a("td",[t._v("Spring")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://jcp.org/en/jsr/detail?id=250",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSR-250"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://jcp.org/en/jsr/detail?id=330",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSR-330"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("作用范围")]),t._v(" "),a("td",[a("a",{attrs:{href:"#field_injection_for_autowired"}},[t._v("Field Injection")]),a("br"),a("a",{attrs:{href:"#setter_injection_for_autowired"}},[t._v("Setter Injection")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#field_injection_for_resource"}},[t._v("Field Injection")]),a("br"),a("a",{attrs:{href:"#setter_injection_for_resource"}},[t._v("Setter Injection")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#field_injection_for_injection"}},[t._v("Field Injection")]),a("br"),a("a",{attrs:{href:"#setter_injection_for_injection"}},[t._v("Setter Injection")])])]),t._v(" "),a("tr",[a("td",[t._v("注入规则"),a("br"),a("sub",[a("sup",[t._v("优先级由高到低")])])]),t._v(" "),a("td",[t._v("By Bean Type"),a("br"),t._v("By Qualifier"),a("br"),t._v("By Bean Name")]),t._v(" "),a("td",[t._v("By Bean Name"),a("br"),t._v("By Bean Type"),a("br"),t._v("by Qualifier")]),t._v(" "),a("td",[t._v("By Bean Type"),a("br"),t._v("By Qualifier"),a("br"),t._v("By Bean Name")])]),t._v(" "),a("tr",[a("td",[t._v("注意事项")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("需要额外引入"),a("code",[t._v("javax.inject")]),t._v("依赖")])])])]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("h3",{attrs:{id:"resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[t._v("#")]),t._v(" @Resource")]),t._v(" "),a("h4",{attrs:{id:"字段注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段注入"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"field_injection_for_resource"}},[t._v("字段注入")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case1. Inject by Bean Name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上下文中必须有名为 `authService` 的 Bean, 否则将抛出 NoSuceBeanDefinitionException")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthService")]),t._v(" authService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case2. Inject by Bean Type")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthService")]),t._v(" authService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case3. Inject by Qualifier")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 适用于同一种类型的 Bean 有多个实例时，需要在 `Qualifier` 中指定 Bean Name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Qualifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authService1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthService")]),t._v(" authService1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Qualifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authService2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthService")]),t._v(" authService2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"setter-注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setter-注入"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"setter_injection_for_resource"}},[t._v("Setter 注入")])]),t._v(" "),a("p",[t._v("使用方法与 "),a("a",{attrs:{href:"#field_injection_for_resource"}},[t._v("Field Injection")]),t._v(" 基本相同，唯一区别是注解加在 set 方法上，如：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAuthService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthService")]),t._v(" authService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authService "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" authService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Qualifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authService1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAuthService1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthService")]),t._v(" authService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authService1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" authService1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inject"}},[t._v("#")]),t._v(" @Inject")]),t._v(" "),a("h4",{attrs:{id:"字段注入-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段注入-2"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"field_injection_for_inject"}},[t._v("字段注入")])]),t._v(" "),a("p",[t._v("与 "),a("a",{attrs:{href:"#field_injection_for_resource"}},[t._v("Resource 的 Field Injection")]),t._v("基本相同，区别在于 By Bean Name 注入时的需要另一个注解 "),a("code",[t._v("Named")]),t._v("，如：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Named")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthService")]),t._v(" authService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"setter-注入-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setter-注入-2"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"setter_injection_for_inject"}},[t._v("Setter 注入")])]),t._v(" "),a("p",[t._v("与 "),a("a",{attrs:{href:"#setter_injection_for_resource"}},[t._v("Resource 的 Setter Injection")]),t._v("相同")]),t._v(" "),a("h3",{attrs:{id:"autowired"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autowired"}},[t._v("#")]),t._v(" AutoWired")]),t._v(" "),a("h4",{attrs:{id:"字段注入-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段注入-3"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"field_injection_for_autowired"}},[t._v("字段注入")])]),t._v(" "),a("p",[t._v("与 "),a("a",{attrs:{href:"#field_injection_for_resource"}},[t._v("Resource 的 Field Injection")]),t._v("基本相同，区别在于 By Bean Name 注入时"),a("strong",[t._v("变量名")]),t._v("必须与 Bean Name 相同，如：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AutoWired 先根据类型注入，当同一个类型有多个实例时，再根据 name 注入，此时变量名必须与Bean Name相同才能注入成功。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 个人认为，此时用 `Qualifier` 更加直观，不易出错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoWired")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthService")]),t._v(" authService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"setter-注入-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setter-注入-3"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"setter_injection_for_autowired"}},[t._v("Setter 注入")])]),t._v(" "),a("p",[t._v("与 "),a("a",{attrs:{href:"#setter_injection_for_resource"}},[t._v("Resource 的 Setter Injection")]),t._v("相同")])])}),[],!1,null,null,null);a.default=n.exports}}]);