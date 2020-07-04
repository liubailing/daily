const tEnum = {
    a: Symbol(),
    b: Symbol(),
    c: Symbol()
}

function fn(s) {
    switch (s) {
        case tEnum.a:
            console.log('a');
            break;
        case tEnum.b:
            console.log('b');
            break;
        case tEnum.c:
            console.log('c');
            break;
        default:
            console.log('default');
            break;


    }
}


fn(tEnum.a);
fn(tEnum.b);
fn(tEnum.c);
