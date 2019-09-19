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