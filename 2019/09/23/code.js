let arr = ["1", "2", "page", "5", "6", "7", "8"];
arr = arr.filter(x => /^\d+$/g.test(x));
console.log(arr)

let arr1 = ["1", "2", "0dd", "5", "6", "7", "8"];
let reg = /^\d+$/g;
arr1 = arr1.filter(x => {
    //if (reg.test(x)) console.log(reg.test(x));
    //if (reg.test(x)) console.log(reg.test(x));
    reg.lastIndex = 0;
    return reg.test(x);
});
console.log(arr1)

/**
 * 原因是正则表达式后面加上了全局参数g之后，每当使用test进行一次校验，在正则表达式内部就会有一个lastIndex来记录匹配的位置
 * 第一次进行test之后，lastIndex就变成了10，第二次test就是从位置10开始匹配，而不是从位置0开始了，所以就无法匹配到jack了，因此结果为false。
 */

/** 解决办法
 * 1.去掉全局参数g
 * 2.每次使用后将lastIndex清0，即reg.lastIndex=0
 * 3.不将正则表达式保存到变量，即/jack/g.test(str) 或者 /jack/.test(str)
 */

