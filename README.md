javascript
=================================

```
npm run dev

http://localhost:3000/debounce/index.html
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