
# 01:flow 认识

vue 引用flow做语法检查
flow 官网
https://flow.org/en/docs/getting-started/

/*@flow*/  需要检查的文件

.flowconfig flow 配置文件 flow init生成

# 02: vue 目录

src
├── compiler        # 编译相关 它包括把模板解析成 ast 语法树，ast 语法树优化，代码生成等功能。
├── core            # 核心代码 灵魂 包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数等等。
├── platforms       # 不同平台的支持 编译 weex和web 平台
├── server          # 服务端渲染 服务端渲染主要的工作是把组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序
├── sfc             # .vue 文件解析 把 .vue 文件内容解析成一个 JavaScript 的对象
├── shared          # 共享代码 Vue.js 会定义一些工具方法，这里定义的工具方法都是会被浏览器端的 Vue.js 和服务端的 Vue.js 所共享的

# 03源码构建

