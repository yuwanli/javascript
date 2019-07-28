## Typescript

### 基础类型

#### 字符串
```js
let name: string = `Gene`;
```

#### 数字
```js
let age: number = 37;
```

#### 数组
```js
// 指定数组项的类型
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// 匹配数组项的类型
let list: Array<string|number> = [1, '2', '3'];

// 元组Tuple， 较为严格，必须一一对应（顺序和个数）
let list: [number, string] = [1, '2']; 
list[3] = 'new'; //访问越界的项，或赋予<number|string>的类型
list[4] = true; // error ,不是<number|string>类型

```

#### 枚举
```js
// 默认的规则：若前一个不指定（即为0）或者指定的是数字，则是按照递增（+1）的方式返回
enum Color {Red, Green, Blue}
let c: Color = Color.Green; //1

enum Color {Red, Green=3, Blue}
let c: Color = Color.Blue; //4 相应的Red = 0

// 可以是其他类型
enum Color {Red='#aa0000', Green='#00aa00', Blue='#0000aa'}
let c: Color = Color.Green;

enum Color {Red='#aa0000', Green='#00aa00', Blue}
let c: Color = Color.Blue;//error blue必须指定，仅有数字有默认规则
```

#### Any
```js
// 代码改造时或引入第三方库的时候比较有用，模糊类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 
notSure = [1,2,3]; 
```


#### Void
```js
// 表示函数无返回值
function warnUser(): void {
    console.log("This is my warning message");
}
```

#### Null 和 Undefined
```js
// 本身的意义不是很大
let u: undefined = undefined;
let n: null = null;
```

#### never(???)
不明白这个的意义与价值
```js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

#### Object
```js
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

#### 类型断言
```js
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```



### 类型注解

```js
function greeter(person: string) {
    return "Hello, " + person;
}
```

### 接口
1.参数接口-对每个参数进行类型注解
```js
interface Person {
    firstName: string;
    lastName: string;
    optionsValue?: string;//可选参数
    readonly x: number;// 只读属性
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
```

2. 函数接口
```js
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
```

3. class接口

```js
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

### class/pubilc
```js
// 注意这里用到了public，public的意思是该变量是成员变量
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
let user = new Student("Jane", "M.", "User")
console.log(user.firstName)
```

// 思考下，普通的js的写法去实现上述代码
```js
class Student {
    constructor(firstName, middleInitial, lastName) {
        // you see, 重复且机械
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        // you see
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
let user = new Student("Jane", "M.", "User")
console.log(user.firstName)
```