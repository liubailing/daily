// for (var i = 0; i <= 10; i++) {
    
//     ((j) => {setTimeout(() => {
//         console.log(j)
//     }, j*3000)})(i)
// }

var g = gen();
function*  gen(){
   yield console.log(1,console.log(g))
   yield console.log(2)
   yield console.log(3) 
}


console.log(g.next())
// g.next()
// g.next()
