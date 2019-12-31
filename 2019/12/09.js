var F = function () { }

Object.prototype.a = function () {
    console.log('a()');
}

Function.prototype.b = function () {
    console.log('b()');
}

var f = new F()

F.a();
F.b();
f.a();
f.b();


setTimeout(() => {
    console.log(4)
}, 1);

new Promise(resolve => {
    resolve();
    console.log(1)
}).then(_ => {
    console.log(3)
})

console.log(2)

var testText = "darfdwerfwerfwefdhsnfuihgi";
var tmp = {};
for (var i = 0; i < testText.length; i++) {
    var charAt = testText.charAt(i);        //遍历字符串中的字符，有的话+1 没的话新建
    if (tmp[charAt]) {
        tmp[charAt] = tmp[charAt] + 1;
    }
    else {
        tmp[charAt] = 1;
    }
}
var str = ''
for (const key in tmp) {
    str += `${key}=${tmp[key]} `
}
console.log(str)


Array.prototype.method = function () {
    console.log(this.length);
}
var myArray = [111, 2, 422, 5, 6, 7]
myArray.name = "数组";
for (var value of myArray) {
    console.log(value);
}

// for (var key of Object.keys(myArray)) {
//     console.log(key + ": " + myArray[key]);
//   }

for (var value in myArray) {
    if (Object.hasOwnProperty(key)) {


        console.log(value);
    }
}



let regexp = /t(e)(st(\d?))/g;
let str1 = 'test1test2';

let array = [...str1.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
