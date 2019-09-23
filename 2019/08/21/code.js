class person {

    constructor(name) {
        this.name = name;
    }


    update(val) {
        console.log(this.name + "..." + val)
    }
}
person.prototype.caifu = "1000";

/**
 * Nb 的对象拷贝内
 * @param target 
 * @param source 
 */
copyOwnPropertiesFrom = (_target, _source) => {
    let names = Object.getOwnPropertyNames(_source);
    names.push("rmb");
    names.forEach(function (propKey) {
        let desc = Object.getOwnPropertyDescriptor(_source, propKey);
        if (desc) Object.defineProperty(_target, propKey, desc);
        if (propKey == "rmb") Object.defineProperty(_target, propKey, "1000");
    });
    return _target;
}

let p1 = new person(`小明`);

let copy = Object.create(Object.getPrototypeOf(p1));

// 2. 具有相同的属性和特性
let dd = copyOwnPropertiesFrom(copy, { ...p1 });

console.log(Object.getPrototypeOf(dd), dd instanceof person);
dd.name = "小花";
console.log(dd);
console.log(p1.name);

p1.name = "小草";
console.log(dd.name);
