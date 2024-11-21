---
title: 简单基础(主要和Golang对比)
createTime: 2024/11/20 23:09:13
permalink: /Kotlin/rqyq238r/
---


##  注释

::: code-tabs
@tab 单行注释.kt
```kotlin
fun main() {
    val name = "Kotlin"              // 单行注释
    println("Hello, " + name + "!")
    for (i in 1..5) {
        println("i = $i")
    }
}


```

@tab 多行注释.kt
```kotlin
fun main() {
    /*  多
        行
        注
        释*/
    val name = "Kotlin"
    println("Hello, " + name + "!")
    for (i in 1..5) {
        println("i = $i")
    }
}

```
@tab 文档注释.kt
```kotlin
/**
    * @author:only9464
*/
fun main() {
    val name = "Kotlin"
    println("Hello, " + name + "!")
    for (i in 1..5) {
        println("i = $i")
    }
}

```
:::

## 变量和常量的定义

<!-- ```markdown -->
//可变变量定义：var 关键字

var <标识符> : <类型> = <初始化值>

//不可变变量（常量）定义：val 关键字，只能赋值一次的变量(类似Java中final修饰的变量)

val <标识符> : <类型> = <初始化值>
<!-- ``` -->
```kotlin
    var a  : Int = 1
    var b = 2
    val c : String = "Hello, Kotlin!"
    val d = "Shit!"
```


## 数据类型（略）
整数类型
```
Byte、Short、Int、Long
```
## 条件控制
if
```kotlin
// 传统用法
var max = a 
if (a < b) max = b

// 使用 else 
var max: Int
if (a > b) {
    max = a
} else {
    max = b
}
 
// 作为表达式
val max = if (a > b) a else b

```


when
```kotlin
when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    in 3..10 -> print("x is in the range")
    in validNumbers -> print("x is valid")
    !in 10..20 -> print("x is outside the range")
    else -> { // 注意这个块
        print("x 不是 1 ，也不是 2")
    }
}

```

## 函数定义
```kotlin
fun 函数名(参数名: 参数类型, ... ): 返回值类型 {
    函数体
}
```
**可变长参数函数**
函数的变长参数可以用 vararg 关键字进行标识：
```kotlin
fun vars(vararg v:Int){
    for(vt in v){
        print(vt)
    }
}

// 测试
fun main(args: Array<String>) {
    vars(1,2,3,4,5)  // 输出12345
}
```
