/***
 *  1、属性得简写和用法
 *  2、方法得简写
 *  3、属性名的表达式
 *     es5：属性名和下标（表达式）
 *     es6：字面量支持表达式
 * 
 *  4、super 
 *     指向
 */

//1
// const foo = 'abc';
// const q = { foo }
// console.log(q)

// function f(x, y) {
//     return { x, y }
// }

// let res = f(1, 3)
// console.log(res);


//2
// var a = {
//     s() {
//         return '2、方法得简写'
//     }
// }

// console.log(a.s())


// 3

// let key = 'abc';
// let o = {
//     [key]: true,
//     ['a' + 'bd']: '123'
// }

// console.log(o[key]);
// console.log(o['abc']);

// const o1 = { a: "a" };
// const o2 = { b: "b" };
// const o3 = {
//     [o1]: 1,
//     [o2]: 2
// }

// console.log(o3)


// // 4
// const proto = {
//     foo: "十五"
// }

// const o4 = {
//     find() {
//         return super.foo
//     }
// }


// // Object.setPrototypeOf(o4, proto)
// // o4.__proto__ = proto;
// Object.create(o4, proto.prototype)

// //console.log(o4.find());


// let o6 = { a: { b: { c: 1 } } };
// console.log(...o6)

// let o61 = { ...o6 };
// o61.a.b.c = 2;
// console.log(o6);



; (function () {
    function foo() {
        console.log(123)
    }
    foo;
})()

console.log((function () {
    function foo() {
        console.log(123)
    }
    return foo;
})())





{
    function a() { }
    a = 10;

    console.log(a)
}
console.log(a);


var a= {x:1};
var b = a;
a.x = a = {x:2}

console.log(a.x)
console.log(b.x)