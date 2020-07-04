

//callee
function fn1(a, b) {
    var c = 10; //变量
    var d = function () { };  // 函数变量
    function e() { };  // 函数

    (function () { console.log(123) })() //表达式
}


fn1(10) // caller