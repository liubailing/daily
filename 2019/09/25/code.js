
/**预编译 前置 */
// var getName= undefind;
// function getName() { console.lo(5) }   

function foo() {
    getName = function () { console.log(1) }
    return this;
}

foo.getName = function () { console.log(2) }
foo.prototype.getName = function () { console.log(3) }
var getName = function () { console.log(4) }  //变量定义  前置  var getName= undefind；                      运行第一行
function getName() { console.log(5) } //方法整体 前置  function getName() { console.lo(5) }                 运行第二行

//1
foo.getName(); //2

//2
getName(); // 4

//3
foo().getName() // 报错  -改成
foo()  //    执行一次     相当于给   外面第一行的重新赋值  getName = function () { console.log(1) } 

//4
getName(); // 1

//5
new foo.getName() // 2

//6
new foo().getName() // 3

//7
new new foo().getName() // 3
