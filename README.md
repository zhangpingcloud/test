# 创建vue脚手架项目

.vue文件

[单文件组件](https://cn.vuejs.org/guide/scaling-up/sfc.html#single-file-components)

SFC的目的是，将组件的模板，业务和样式封装在一个文件中，从而与多个组件进行分离
多个组件之间完全不会产生任何冲突

- style是样式部分，和html中style标签用法几乎一模一样
- template是结构部分，完全等同于html，但是可以使用vue的任何语法
- script是脚本部分，完全等同于script标签，可以写任何js代码

```javascript
// 从vue中导入createApp用来创建vue实例
import { createApp } from 'vue'
import App from './App.vue'
// 原本createApp中应该放置一个选项式对象，
// 由于使用了构建工具，通过import导入的vue文件，会自动被转换成选项式对象
createApp(App).mount('#app')
```

@vitejs/plugin-vue
.vue本身不存在这个类型的文件，任何后缀名类型的文件，都需要相应的软件打开
比如.txt使用文本文档，比如.docx .xlsx .pptx使用office打开
.vue必须通过相应的插件才能解析
将.vue文件进行转换所需要使用的选项式对象

Vite
是构建工具，用于提供一系列功能供给开发时使用

# 目录结构

## .vscode
本地vscode的配置信息，提示需要安装一些插件

## node_modules
npm的包安装目录，可以直接通过import导入。
```javascript
import { createApp } from 'vue'
```

## public
公共文件目录，这个目录下的内容，表示不需要被打包工具所编译，原封不动保留。

## src
资源目录，所有的代码，文件都应该放在该目录下

### assets
资产的意思，意思是任何图片音频logo等都可以放在assets中

### components
自定义目录，没有什么特别的含义，一般用来存放组件

### pages/views
自定义目录，没有什么特别的含义，一般用来存放“页面”，其实就是.vue文件

### utils
自定义目录，通常存放一些自己写的工具，比如日期格式化

### apis/axios
自定义目录，封装HTTP请求，封装api接口
```javascript
function request(url,data){
    return await fetch(url)
}
async function queryStudentList(data){
    const data = await request('/apis/examples/query-student-list', data)
}
queryStudentList({
    skip: 0,
    count: 50,
    address: '镇江市'
})
```

### router
自定义目录，存放路由信息

### store
存放仓库

## .gitignore
表示提交Git时。需要忽略的文件

## index.html
html文件，全局唯一的html，最终项目会挂载到该文件的div#app中

## package.json
包配置信息

## vite.config.js
vite的配置文件，在其他脚手架中可能是vue.config.js。
webpack
