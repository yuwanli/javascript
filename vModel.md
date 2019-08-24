### v-model 原理

```js
<input type="text" v-model="testValue">
<p>{{testValue}}</p>

new Vue({
    data() {
        return {
            testValue: '1'
        }
    }
})
```

#### 执行的过程

- Vue是一个构造函数，`new` 操作会执行构造函数的`_init`方法，即原型上的`_init` 方法

- 在`_init`中会执行一系列的初始化，之后会执行`$mount`，实行挂载
- `$mount` 执行之前会把 `template` 转换成 `render` 函数，其中就涉及到`ast` 的转化即`parse`，接下来简单说下 `parse` 过程中跟`v-model`有关的部分
- 根据结果能知道，`parse` 的结果就是`ast`树，即整个过程就是把 `template` 字符串转换成`ast` 树对象的过程
- 一句话描述 `parseHTML` 的过程：通过标签开始和结束的方式，`while` 循环解析 `template` 字符串，遇到开始标签，则进行 `parseStartTag` 对标签进行属性进行解析。
- 拿到 `ast` 树对象之后就进行 `generate`, 生成对应的 `code`，即前面的说到的 `render` 函数
- `generate` 的过程是一个递归的过程，当处理到`v-model`属性的时候，会走平台的属性解析，即 `model` 方法，处理的结果就是将`v-model`转换成事件对象的形式：`{"input":function($event){if($event.target.composing)return;testValue=$event.target.value}}`。
- 有了事件对象，后续就将 `v-model` 当成事件的形式处理了。