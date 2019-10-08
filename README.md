javascript
=================================

```
npm run dev

http://localhost:3000/debounce/index.html
```

### 分析下面代码，并解释下原因
```js
var a = 2;
var a = 3;
console.log(a)
```

```js 
let a = 2;
let a = 3;
console.log(a)
```

答案：
```js
//3
//Identifier 'a' has already been declared
```

var 与 let 的相同点在于都是变量的声明，区别有：
- let 声明的变量只能在当前代码块中有效
- let 不存在变量提升
- let 会形成‘暂时性死区’，声明的变量绑定这个区域
- let 可形成块级作用域

```js
var tmp = 123;

if (true) {
  // 形成暂时性死区，在声明前进行赋值会报错
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

### 分析下面代码，并解释下原因
```js
var a = 1
function test() {
	console.log(a)
	var a = 2
	console.log(a)
}
test()
console.log(a)

// undefined
// 2
// 1
```

```js 
var a = 1
function test() {
	console.log(a)
	a = 2
	console.log(a)
}
test()
console.log(a)

// 1
// 2 
// 2
```


### JS 异步解决方案的发展历程以及优缺点

[JS异步解决方案的发展历程以及优缺点](https://github.com/sisterAn/blog/issues/29)

1. 回调函数（callback）
2. promise
3. Generator
4. Async/await

思考：

```
let a = 0
let b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 1
```

- 首先函数 b 先执行，在执行到 await 10 之前变量 a 还是 0，因为 await 内部实现了 generator ，generator 会保留堆栈中东西，所以这时候 a = 0 被保存了下来
- 因为 await 是异步操作，后来的表达式不返回 Promise 的话，就会包装成 Promise.reslove(返回值)，然后会去执行函数外的同步代码
- 同步代码执行完毕后开始执行异步代码，将保存下来的值拿出来使用，这时候 a = 0 + 10


### Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？

### HTTP/2.0 相比1.0有哪些重大改进？
[HTTP/2.0 相比1.0有哪些重大改进？](https://www.zhihu.com/question/34074946/answer/75364178)

- 多路复用(多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。)-解决数量限制的问题
- 二进制分帧(应用层(HTTP/2)和传输层(TCP or UDP)之间增加一个二进制分帧层)-提升性能，实现低延迟和高吞吐量
- 首部压缩（减小体积）
- 服务端推送（Server Push）- 服务端缓存资源，当主页发起资源请求时主动推送其他资源（js、logo、css等）

### 谈谈你对 TCP 三次握手和四次挥手的理解
[作为前端的你了解多少tcp的内容](https://juejin.im/post/5c078058f265da611c26c235)

### React 中 setState 什么时候是同步的，什么时候是异步的？
[深入 setState 机制](https://github.com/sisterAn/blog/issues/26)

### npm install的实现原理
[npm install的实现原理？](https://www.zhihu.com/question/66629910)

[npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)

### 有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣

```js
Object.prototype.toString.call()

instanceof

Array.isArray()
```

性能 Array.isArray > instanceof > toString.call

### 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化

[介绍下重绘和回流（Repaint & Reflow），以及如何进行优化](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/24)

### 介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景
[介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/25)

- 观察者模式中主体和观察者是互相感知的，发布-订阅模式是借助第三方来实现调度的，发布者和订阅者之间互不感知

> vue 中的 observer watcher dep 可以理解为发布订阅者模式吧？
应该是观察者模式。 vue的事件通讯机制才是发布订阅模式


### 聊聊 Redux 和 Vuex 的设计思想
[Vuex、Flux、Redux、Redux-saga、Dva、MobX](https://zhuanlan.zhihu.com/p/53599723)

### 说说浏览器和 Node 事件循环的区别

[浏览器与Node的事件循环(Event Loop)有何区别?](https://juejin.im/post/5c337ae06fb9a049bc4cd218)


### 介绍模块化发展历程

- AMD （requirejs）- 先定义确认依赖（define）
- CMD (seajs) - 动态化引入
- CommonJS (node) - require引入 module.exports 导出
- ES6 - import 引入 export导出

### 如何防止 XSS 和 CSRF 攻击

[安全测试===8大前端安全问题](https://www.cnblogs.com/botoo/p/8182236.html)

#### XSS: 跨站点脚本攻击
- 不使用innerHTML 使用innerText
- 或转义innerHTML

#### CSRF: 跨站点请求伪造
- abr参数校验

### 两个数组合并成一个数组

请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。

```js
let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let a2 = ['A', 'B', 'C', 'D'].map((item) => {
  return item + 3
})

let a3 = [...a1, ...a2].sort().map((item) => {
  if(item.includes('3')){
    return item.split('')[0]
  }
  return item
})
```

### 经典循环输出0-9问题

```js
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
// 10 10 10 ....
```

```js
for (let i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
```

```js
for (var i = 0; i< 10; i++){
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  })(i)
}
```

```js
// 有兼容性问题
for (var i = 0; i< 10; i++){
	setTimeout((i) => {
		console.log(i);
    }, 1000, i)
}
```

### Virtual DOM VS 操作原生 DOM

[网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么](https://www.zhihu.com/question/31809713/answer/53544875)

### 浏览器缓存原理

[彻底搞懂浏览器缓存](https://www.jianshu.com/p/1d1d8a14a76c)

[深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)

### 使用迭代的方式实现 flatten 函数

```js
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten = function (arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

console.log(flatten(arr))
```

```js
const flatten = array => 
  array.reduce((acc, cur) => 
    (
      Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]
    ), [])
```

### 在 Vue 中，子组件为何不可以修改父组件传递的 Prop
[在 Vue 中，子组件为何不可以修改父组件传递的 Prop](https://github.com/chaijinsong/blog/issues/15)


### HTTPS 握手过程中，客户端如何验证证书的合法性
[HTTPs入门, 图解SSL从回车到握手](https://zhuanlan.zhihu.com/p/25587986)

### 输出以下代码的执行结果并解释为什么
```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) 	
console.log(b.x)
```

```js
undefined
{n: 2}
```
[javascript面试题，关于连续赋值的坑？](https://www.zhihu.com/question/41220520)

### 前端算法

[无算法，不前端 前端面试中常见的数据结构与算法汇总](https://blog.csdn.net/wjd36068407/article/details/82855802)

### 性能优化

- 白屏时间
- 白屏定义
- 白屏性能优化
- FMP首次有意义绘制
- TTI可交互时间

### 箭头函数和普通函数的区别

- 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象
- 不可以使用 arguments 对象，该对象在函数体内不存在。
- 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。
- 不可以使用 new 命令，因为：1.没有自己的 this，无法调用 call，apply 2. 没有 prototype 属性

### [2, 10, 3, 4, 5, 11, 10, 11, 20] 输出 [[2, 3, 4, 5], [10, 11], [20]]

```js
function selfDefinetSort(arr) {
    const res = []
    let tagIndex = 0;// 游标
    arr.sort((a,b) => a - b); //先排序

    while(tagIndex < arr.length){
        const current = arr[tagIndex]
        const start = (parseInt(current/10))*10
        const end = (parseInt(current/10) + 1)*10
        const valid = arr.filter((val) => {
            return val >= start && val < end
        })
        tagIndex += valid.length
        res.push(valid)
    }
    return res
}

selfDefinetSort([2, 10, 3, 4, 5, 11, 10, 11, 20])
```

### v-model 的原理

[v-model 原理](./vModel.md)

### em+rem

- em 是继承父元素的字体大小
- rem 可以根据根节点的字体大小整体调整

### lazyLoad 原理

`IntersectionObserver`

[Vue-lazyload原理详解之源码解析](https://blog.csdn.net/babyxue/article/details/82986160)

[vue-lazyload源码分析](https://blog.csdn.net/weixin_33825683/article/details/91647218)

[谈谈IntersectionObserver懒加载](https://www.jianshu.com/p/84a86e41eb2b)


### webpack的plugin编写


### 性能优化

- 常态页面的请求内容缓存在storage，下次打开预先请求缓存
- transform 动画代替left、right动画
- 服务端渲染
- 字体图标代替小图片
- 图片大小的优化（tinypng）

[前端性能优化](https://www.cnblogs.com/yangzhou33/p/9944106.html)

### 性能监控

[前端性能监控](https://juejin.im/post/5ca47c93f265da30ac21a686?utm_source=gold_browser_extension)
[蚂蚁金服如何把前端性能监控做到极致?](https://blog.csdn.net/sinat_17775997/article/details/88301120)

检测工具
- WebPagetest 

浏览器加载的过程抽象成4个
- 白屏时间（首次看到内容的时间）- 首尾标记一个时间戳

- 首屏时间 - `window.performance.getEntriesByType('paint')` 可以获取到相关的时间信息

- 用户可操作（domready即可操作）

- 总下载时间 - onload


- 利用的是 `window.performance` 下的 `timing` 提供的多个有效的时间信息
- 对于计算首屏加载，是监听 `window` 的 `load` 事件
- 对于接口的性能监控，是监听 `window` 的 `ajaxComplete` 事件

### 异常监控

1. 编译时的异常
- eslint 检查工具
- ts 、flow 等静态类型检查

2. 运行时的错误
- 重写 `window.onerror` 的方法
- 重写 `window.onunhandledrejection` 方法，处理没有写`reject`捕获方法的`promise`


### 页面加载进度条 （Pace.js）

整体进度分成4个部分组成：

1.document
- 监听`document`的`onreadystatechange`事件
- `document.readyState` 状态有 `loading`、`interactive`、`complete` 分别对应0%、50%、100%

2.elements
- 通过 `document.querySelector(this.selector)` 选择器选择配置的选择器列表
- 全部成功（默认是`body`）则表示该项完成

3.eventLag
- 匀速的更新进度，优化体验，避免‘卡住’的情况

4.ajax
- 代理模式，重写了 `XMLHttpRequest`、`XDomainRequest`、`WebSocket` 方法
- 即可监听 `progress，load，error` 方法

### h5适配
[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)

[移动端H5页面高清多屏适配方案](https://www.cnblogs.com/ranyonsue/p/6795943.html)


### webpack 热更新的原理

`hot-module-replacement-plugin` 和 `webpack-dev-server`

- webpack-dev-server(WDS)的功能提供 bundle server的能力，就是生成的 bundle.js 文件可以通过 localhost://xxx 的方式去访问，另外 WDS 也提供 livereload(浏览器的自动刷新)

- hot-module-replacement-plugin 的作用是提供 HMR 的 runtime，并且将 runtime 注入到 bundle.js 代码里面去。一旦磁盘里面的文件修改，那么 HMR server 会将有修改的 js module 信息发送给 HMR runtime，然后 HMR runtime 去局部更新页面的代码。因此这种方式可以不用刷新浏览器

[Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)

### KMP 算法

[KMP ppt](https://note.youdao.com/ynoteshare1/index.html?id=91749237e787b4aa0b246336ea0c1137&type=note)

[KMP算法详解-彻底清楚了](https://www.cnblogs.com/dusf/p/kmp.html)

### 关于 == 和 ===

需注意
- NaN 不等于 NaN
- +0 等于 -0

== 发生的类型转换
- 字符串和数字进行比较
则把字符串转换成数字进行比较

- 布尔值与其他类型进行比较
会把布尔值转换成数值然后在进行比较

- null 和 undefined
除下列情况外，其他值都不跟null和undefined相等
`null == undefined //true`

- 对象和非对象间的比较
对对象进行toPrimitive的操作（toString() valueOf()）

### css margin的折叠问题

[浅析让人D疼的margin折叠](https://www.jianshu.com/p/a1beddd81156)

### 观察者模式

### formData和原生的ajax有什么区别,介绍下表单提交，和formData有什么关系

### HTTP和HTTPS的区别

- https需要证书
- http 超文本传输协议 明文传输 https 是ssl加密的传输协议
- 连接的端口不一样，一个80 一个443

### js的垃圾回收机制

### webpack 动态引入 code split

```js
import page1 from '@/page/page1'
```

改成

```js
const page1 = () => import('@/page/page1')
```

### webpack 热更新 HMR 原理解析

[Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)

### typeof 妙用

```js
var a;

typeof a;// undefined
typeof b;// undefined

```

```js
// 这么使用有危险 未定义的情况下会报错
if (DEBUG){
  console.log('Debugging is staring')
}

// 这样就排查了 undefined 和 null的情况
if (typeof DEBUG !== 'undefined'){
  console.log('Debugging is staring')
}
```

### 如何在 H5 和小程序项目中计算白屏时间和首屏时间，说说你的思路

[Web 性能优化-首屏和白屏时间](https://lz5z.com/Web%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96-%E9%A6%96%E5%B1%8F%E5%92%8C%E7%99%BD%E5%B1%8F%E6%97%B6%E9%97%B4/)

### 饿了么，骨架图的实现原理

[page-skeleton-webpack-plugin](https://github.com/ElemeFE/page-skeleton-webpack-plugin)

原理分析：

[一种自动化生成骨架屏的方案](https://github.com/Jocs/jocs.github.io/issues/22)
