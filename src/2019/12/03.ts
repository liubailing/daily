class a {
    name = "sss";
}

/**
 *
 *
 * @class b
 * @extends {a}
 */

class b extends a {
    constructor(name: string) {
        super();
        //this.name = name;
    }
    /**
     *
     *
     * @memberof b
     */
    fly() {
        console.log(this.name);
    }
}

class c extends b {
    constructor(name: string) {
        super(name);
    }
}

console.log(123);
var t = new c("test");
t.fly();
