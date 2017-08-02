javascript
===========================

原型 原型链
作用域 必报
异步 单线程

dom操作
ajax
事件绑定

1.js中typeof有哪些类型（数据类型）
undefined Boolean String Number function Object

2.==&&===?（类型转换）

3.window.onload和DOMContentLoad（浏览器的渲染机制）

4.js创建10个a标签，点击弹出对应序号（作用域）

4.模块加载器的实现，实现类似require.js的基本功能（模块化）

5.数组的随机排序（js基础算法）


如何去解决面试题。

1.考点
2.不变应万变
3.题目到知识点再到题目


### 变量类型和计算

* js中typeof有哪些类型
* ==&&===?
* js有哪些内置函数
* js变量按照存储方式分可以分为哪些类型（值类型和引用类型）
* json


1.值类型和引用类型

值类型-存放的就是当前值
```javascript
var a = 100;
var b = a;
a = 200;
console.log(b);//100
```

引用类型-存放的指针（对象、数组、函数）
```javascript
var a = {age:20};
var b = a;
b.age = 21;
console.log(a.age);//21
```


2.typeof（undefined string number object function boolean）

typeof不能区分初函数以外的引用类型，可以区分值类型
```javascript
typeof null  //object
typeof {} //object
typeof [] //object
typeof console.log //function
```

* 类型转换的方式（值类型）
    * 字符串拼接
    * ==（双等号两边的会进行类型转换）
        ```javascript
        100 == '100'
        0 == 'true'
        ```
    * 何时使用==和===？
        ```javascript
        if(obj.a == null){
            //相当于obj.a === null||obj.a === undefined 简写了
        }
        //除此之外建议都用===
        ```
    * if语句
        ```javascript
        if(100){}
        //为false
        //0 NAN undefined null ''
        ```
    * 逻辑运算符
        ```javascript
        10&&0 //0
        ''||'abc' //abc
        !window.abc //abc
        ```

3.js中的内置函数

Object
Array
Boolean
Number
String
Function
Date
RegExp
Error

4.json（js的一个对象）
```javascript
JSON.stringify({})
JSON.parse('')
```


### 原型和原型链

*经典问题：
    * 如何判断一个变量为数组类型
    * 写一个原型链继承的例子
    * 描述new一个对象的过程
    * zepto源码中如何使用原型链

知识点：
#### 构造函数

```javascript
function Foo(name,age){//构造函数大写字母开头
    this.name = name;
    this.age = age;
    this.class = "class-1";
    return this;
    //this
}
var f = new Foo('zhangsan',20);
```

#### 构造函数-扩展
```javascript
var a = {}//其实是var a = new Object()
var a = []//其实是var a = new Array()
function Foo(){}//其实是 var Foo = new Function(){}
```
使用instanceof可以判断一个函数是否为一个变量的构造函数

#### 原型规则

所有的引用类型（数组、对象、函数）都具有对象的特性，即可以自由扩展属性（null除外）
所有的引用类型（数组、对象、函数）都具有_proto_属性（隐式原型），属性值式一个普通对象
所有的函数都有一个prototype属性（显式原型），属性值是一个普通对象
所有的引用类型（数组、对象、函数），_proto_属性值指向它的构造函数的'prototype'属性值

```javascript
var obj = {};obj.a = 100;
var arr = [];arr.a = 100;
function fn(){};fn.a = 100;

console.log(obj._proto_)
console.log(arr._proto_)
console.log(fn._proto_)

console.log(fn.prototype)

console.log(obj._proto_ === Object.prototype)
```

当试图得到一个引用类型的某个属性时，如果这个引用类型没有这个属性，那么就会去它的_proto_(即它的构造函数的prototype)中去寻找
```javascript
function Foo(name,age){
    this.name = name;
    this.age = age;
}
Foo.prototype.alertName = function (){
    alert(this.name)
}
var f = new Foo('zhangsan',20)
f.printName = function(){
    console.log(this.name)
}
f.printName();
f.alertName();

f.toString();//f._proto_.proto_(f的_proto_等同于他构造函数的'prototype'属性)
```

```javascript
var item;
for (item in f){
    //高级浏览器已经在for in中屏蔽了来自原型的属性
    //确保兼容性，需要加下面这个判断
    if(f.hasOwnProperty(item)){
        console.log(item)
    }
}
```

*原型链
    instanceof


如何判断一个变量为数组类型
instanceof

#### 写一个原型链继承的例子
```javascript
function Animal(){
    this.eat = function(){
        console.log('Animal eat')
    }
}

function Dog(){
    this.bark = function(){
        console.log("dog bark")
    }
}
Dog.prototype = new Animal();
var hashiqi = new Dog();
 ```

 ```javascript
 function Elem(id){
    this.elem = document.getElementById(id)
 }

 Elem.prototype.html = function (val){
    var elem = this.elem;
    if(val){
        elem.innerHTML = val
        return this
    }else{
        return elem.innerHTML
    }
 }

 ELem.prototype.on = function(type,fn){
    var elem = this.elem;
    elem.addEventListener(type,fn)
    return this;
 }

 var div1 = new Elem(id)
 console.log(div1.html())
 div1.on("click",function(){
    alert("1")
 })
 ```

* new一个对象的过程
    * 创建一个新对象
    * this指向这个新对象
    * 执行代码，即对this赋值
    * 返回this


* zepto源码中如何使用原型链（zepto设计和源码分析）



### 作用域和闭包

question:
变量提升
this的使用场景
创建10个a标签，点击的时候弹出对应的序号
如何理解作用域
实际开发中闭包的应用

*知识点
    *执行上下文
    *this
    *作用域
    *作用域链
    *闭包

#### 执行上下文

```javascript
console.log(a);//undefined
var a = 100;

fn('zhangsan') // zhangsan,20
var b = fn;//函数表达式
function fn(name){//函数声明
    age = 20;
    console.log(name,age);
    var age;
}
```

#### this

* this要在执行时才能确定值，定义时无法确认
    * 作为构造函数执行
    * 作为对象属性执行
    * 作为普通函数执行
    * call apply bind

```javascript
var a = {
    name:"A",
    fn:function(){
        console.log(this.name)
    }
}
a.fn();//this === a
a.fn.call({name:"B"});
var fn1 = a.fn;
fn1();//this.window
```

```javascript
function fn1(name,age){
    console.log(name);
    console.log(this)
}
fn1.call({x:100},'zhangsan',20);//this==={x:100}
fn1.apply({x:100},['zhangsan',20]);//this==={x:100}


var fn2 = function(name,age){
    console.log(name)
    console.log(this)
}.bind({y:200});

fn2('zhangsan',20);

```


#### 作用域

* 没有块级作用域


#### 闭包(封装变量，收敛权限)

```javascript
var i,a
for(i = 0;i< 10;i++){
    (function(i){
        a = document.createElement('a');
        a.innerHTML = i+'<br>'
        a.addEventListener('click',function(e){
            alert(i)
            e.preventDefault();
        })
        document.body.appendChild(a)
    })(i)
}
```

```javascript
function isFirstLoad(){
    var _list = []
    return function(id){
        if(_list.indexOf(id)>=0){
            return false
        }else {
            _list.push(id)
            return true
        }
    }
}
var firstLoad = isFirstLoad();
console.log(firstLoad(10))//true
console.log(firstLoad(10))//false
console.log(firstLoad(20))//true

```

### 异步和单线程

*常见问题：
    * 同步和异步的区别，并举例(同步会阻塞程序的运行，异步不会)
    * 有关setTimeout的题
    * 使用异步的场景有哪些

```javascript
console.log(100)
setTimeout(function(){console.log(200)});
console.log(300)
```


*何时需要异步
    *可能发生等待的情况
    *等待的过程不能像alert一样阻塞程序的运行
    *需要等待的情况则需要异步

*使用异步的场景
    *定时任务（setTimeout、setInterval）
    *网络请求：ajax、动态的img的加载
    *事件绑定（其实就是一个异步的等待）



### 数组相关api

#### forEach
```javascript
var arr = [1,2,3]
arr.forEach(function(item,index){
    console.log(item,index)
})
```

#### every(对数组中的每个元素进行遍历)

```javascript
var arr = [1,2,3]
var result = arr.every(function(item,index){
    if(item<2){
        return true
    }
})
console.log(result)
```


#### some


#### sort
```javascript
var arr = [1,4,2,3,5]
var result = arr.sort(function(a,b){
    //从小到大排序
    return a-b

    //从大到小排序
    //return b-a
})
console.log(result)
```

#### map

```javascript
var arr = [1,4,2,3,5]
var result = arr.map(function(item,index){
    return '<b>'+item+'</b>'
})
console.log(result)
```

#### filter
```javascript
var arr = [1,4,2,3,5]
var result = arr.filter(function(item,index){
    if(item>=2){
        return true
    }
})
console.log(result)
```

###  对象相关api



### DOM

* 基本的数据结构
* 常用API
* attr和property有何区别


新增节点
var p = document.createElement('p')
p.innerHTML = "1111"
document.body.appendChild(p)

获取父元素
parentElement

获取子元素
childNodes

删除子节点
removeChild()


### BOM

* 题目：
    * 监测浏览器的类型
    * 解析url的各部分

* 知识点
    * navigator
        * navigator.userAgent
    * screen
    * location（http://www.baidu.com/index.html?id=100#a=100）
        * href(http://www.baidu.com/index.html?id=100#a=100)
        * host (http:)
        * protocol(www.baidu.com)
        * pathname(/index.html)
        * search(?id=100)
        * hash  (#a=100)
    * history

### 事件

* 题目
    * 事件监听函数
    * 事件冒泡的过程
    * 无限下拉生成的元素绑定事件

* 知识点
    * 事件绑定 addEventListener(ie低版本使用attachEvent)
    * 事件代理（委托）

```javascript
function bindEvent(elem,type,selector,fn){
    if(fn == null){
        fn = selector
        selector = null
    }
    elem.addEventListener(type,function(e){
        var target;
        if(selector){
            target = e.target
            if(target.matches(selector)){
                fn.call(target,e)
            }else{
                fn(e)
            }
        }
    })
}
```

### Ajax-XMLHttpRequest

* 题目
    * 手动编写一个ajax，不依赖第三方库
    * 跨域的几种实现方式

* 知识点
    * XMLHttpRequest
    * 状态码
        * 0 还没吊用send方法
        * 1 已调用send方法，正在发起请求
        * 2 send执行完成，已接受到响应内容
        * 3 正在解析内容
        * 4 响应内容解析完成
    * 跨域

#### ajax
* status
    * 2XX 表示成功处理请求，如200
    * 3XX 需要重定向，浏览器直接跳转
    * 4XX 客户端请求错误，如404
    * 5XX 服务器端错误

```javascript
var xhr = new XMLHttpRequest();//1.创建XMLHttpRequest对象
xhr.open("GET","/api",false);//2.开启请求
xhr.onreadystatechange = function(){//3.写好状态处理函数
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            alert(xhr.responseText)
        }
    }
}
xhr.send(null);//4.发起请求
```

#### 跨域
* 问题
    * 什么是跨域
    * jsonp
    * 服务器端设置http header

* 什么是跨域
    * 浏览器有同源策略，不允许ajax访问其他域的接口
    * 跨域条件：协议、域名、端口，有一个不同就算快于


* jsonp
    * 三个标签可以允许跨域加载资源（<img><script><link>）
    * <img> 用于打点统计，统计网站可能是其他域
    * <link> 可以使用CDN
    * <script> 可以用于jsonp


* jsonp实现原理
    * 



### 存储

* cookie sessionstorage localstorage
    
* cookie
    * 用户客户端和服务器端通信
    * 有本地存储的功能
    * document.cookie获取并修改
    * 缺点：
        * 存储量小
        * 所有的http请求都会带着，影响效率
        * API过于简单，使用麻烦

* localStorage和sessionStorage
    * 容量大 5M
    * api丰富易于使用（setItem、getItem）
    * sessionStorage为会话级的

### 开发环境

* IDE（webstorm、sublime、vscode、atom）
    * 
* git

* svn
* js模块化
* 上线回滚的流程
    



### 模块化

* AMD
    * define
    * require
    * js依赖异步加载

* CommonJS
    * nodejs的模块化规范
    * 前端以来的插件和库都可以从npm中获取
    * CommonJS不会异步加载js，同步加载

```javascript
//util.js
module.exports = {
    fn:function(data){
        console.log(dat)
    }
}

//data.js
var util = require(util.js)
util.fn("hello world")
```
* 使用场景
    * 需要异步加载js的时候，可以使用AMD
    * 使用 npm时就建议使用CommonJS


* CMD(seajs)

### 构建工具

grunt

gulp

webpack

### 运行环境


#### 页面加载过程
* 题目
    * 输入url怎么到html


#### 性能优化

 
#### 安全性


* url
    * 根据DNS服务器得到域名的ip地址
    * 向ip发起http(https)请求
    * 服务器受到、处理并返回http请求
    * 浏览器得到返回的内容
* 渲染过程
    * 根据html生成dom tree
    * 根据 css生成cssdom
    * 将dom和cssDom整合形成RenderTree
    * 根据rendertree开始渲染和展示
    * 遇到script会阻塞渲染

window.addEventListener("load",function(){
    //页面资源加载完毕，包括图片和视频
})
document.addEventListener("DOMContentLoaded",function(){
    //DOM渲染完即可执行，此时图片和视频可能没加载完
})

### 性能优化

* 原则
    * 多使用内存、缓存等方法
    * 减少cpu计算、减少网络请求

* 加载资源优化
    * 静态资源的压缩合并(js、css的压缩合并)
    * 静态资源缓存
    * 使用CDN让资源加载更快
    * 使用SSR后端渲染，数据直接输出HTML中

* 渲染优化
    * css放前面、js放后面
    * 懒加载（图片懒加载、下拉加载更多）
    * 减少DOM查询，对DOM查询做缓存
    * 减少 DOM操作，多个操作金陵合并一起
    * 事件节流
    * 尽早执行操作（如DOMContentLoaded）

```javascript
var textarea = document.getElementById("text")
var timeoutId
textarea.addEventListener('keyup',function(){//防止连续触发change事件
    if(timeoutId){
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(function(){
        //触发change事件
    },100)
})
```

### 安全性

#### xss攻击
    脚本注入

#### xsrf跨站请求伪造
    增加验证流程




















