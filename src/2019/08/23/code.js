var a = 0;
function f() {
    console.log(this.a)
}

var o = {
    a: 2,
    f: f
}

setTimeout(o.f, 1000)