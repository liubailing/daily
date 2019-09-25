### 10
electron 加密方案

调用verify后返回加密字符串，包含一个过期时间，存在客户端全局变量里
过期时间设置为2小时
所有安全插件的方法都添加一个参数，返回值增加返回一个bool值表示验证是否通过，调用安全插件的方法都传递该加密字符串进去解密检验：1. 无法解密或没传，认证失败，直接退出程序；2. 时间过期返回false，屌用处重新调用verify获取新的加密字符存起来。每次调用后返回原结果和bool值。


edu
活动  ajax上传文件方案
[参考](https://blog.csdn.net/qq_33371372/article/details/82778538)

11
edu
活动  ajax上传文件方案
[参考](https://blog.csdn.net/qq_33371372/article/details/82778538)

###  17

1

c++ 返回字符串true和false 在js 环境下都识别为true
bug隐藏的比较深，
测试比较麻烦，需要编译c++，然后rebuild项目，后才能测试一次，比较耗费时间

2

 localStorage 的优势
 1、localStorage 拓展了 cookie 的 4K 限制。
 2、localStorage 会可以将第一次请求的数据直接存储到本地，这个相当于一个 5M 大小的针对于前端页面的数据库，相比于 cookie 可以节约带宽，但是这个却是只有在高版本的浏览器中才支持的。
localStorage 的局限
 1、浏览器的大小不统一，并且在 IE8 以上的 IE 版本才支持 localStorage 这个属性。
 2、目前所有的浏览器中都会把localStorage的值类型限定为string类型，这个在对我们日常比较常见的JSON对象类型需要一些转换。
 3、localStorage在浏览器的隐私模式下面是不可读取的。
 4、localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡。
 5、localStorage不能被爬虫抓取到。
localStorage 与 sessionStorage 的唯一一点区别就是 localStorage 属于永久性存储，而 sessionStorage 属于当会话结束的时候，sessionStorage 中的键值对会被清空。


###  18
vscode  c++不好调试；


 localStorage  跨域问题。 

###  19

1、Go js api

2、ipc通信，通过promise 可以产生回调


### 24
git细分操作，一个bug一次提交，
review代码


### 25
一个面试提
