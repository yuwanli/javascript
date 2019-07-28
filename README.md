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

### 谈谈你对 TCP 三次握手和四次挥手的理解
[作为前端的你了解多少tcp的内容](https://juejin.im/post/5c078058f265da611c26c235)

### React 中 setState 什么时候是同步的，什么时候是异步的？
[深入 setState 机制](https://github.com/sisterAn/blog/issues/26)

### npm install的实现原理
[npm install的实现原理？](https://www.zhihu.com/question/66629910)
[npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)