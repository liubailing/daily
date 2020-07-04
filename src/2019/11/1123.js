// for (var i = 0; i <= 10; i++) {

//     ((j) => {setTimeout(() => {
//         console.log(j)
//     }, j*3000)})(i)
// }


function* gen(str) {
    let res = yield console.log(str)
    res = yield console.log(res)
    res = yield console.log(res)
}


var g = gen(1);
// g.next(2)
// g.next(3)

setTimeout(() => {
    g.next(2)
}, 10);
g.next(3)
