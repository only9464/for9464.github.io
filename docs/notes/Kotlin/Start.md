---
title: 快速开始
createTime: 2024/11/20 22:38:42
permalink: /Kotlin/noirva5o/
tags:
  - Kotlin
---



## 新建项目
项目名为：KotlinStudy
配置如下：

![1732113538585](image/Start/1732113538585.png)

## 获得文件结构

::: file-tree icon="colored"

- .idea (IntelliJ IDEA 的项目配置文件夹)
  - .gitignore (IDEA 配置文件的 Git 忽略规则)
  - kotlinc.xml (Kotlin 编译器的配置文件)
  - misc.xml (项目的全局配置文件)
  - modules.xml (项目模块信息文件)
  - workspace.xml (IDEA 工作空间个性化设置)
  - codeStyles (代码格式化配置文件夹)
    - codeStyleConfig.xml (全局代码样式规则)
    - Project.xml (项目级代码样式规则)
  - inspectionProfiles (静态代码检查配置文件夹)
    - Project_Default.xml (项目的默认检查规则)
  - libraries (项目依赖的库配置文件夹)
    - KotlinJavaRuntime.xml (Kotlin 项目使用的 Java 运行时配置)
- src (源代码存放目录)
  - Main.kt (Kotlin 主程序文件，包含程序入口)
- .gitignore (版本控制的忽略规则文件)
- KotlinStudy.iml (模块的配置文件，定义模块信息)

::: 


## 自动生成的Kotlin代码

::: kotlin-repl#editable
```kotlin
fun main() {
    val name = "Kotlin"
    println("Hello, " + name + "!")
    for (i in 1..5) {
        println("i = $i")
    }
}
```
::: 

## 运行项目

结果：

![1732114259149](image/Start/1732114259149.png)