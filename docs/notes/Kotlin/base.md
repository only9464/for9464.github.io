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

```kotlin
/**
    * @author:only9464
*/
```