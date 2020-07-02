class A {
    constructor() {
        this.number = 0;
    }
    setNumber(number, medium) {
        this.number = number
        if (medium) {
            medium.setB()
        }
    }
}

class B {
    constructor() {
        this.number = 0;
    }
    setNumber(number, medium) {
        this.number = number
        if (medium) {
            medium.setA()
        }
    }
}

class Medium {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    setA() {
        let number = this.b.number;
        this.a.setNumber(number)
    }
    setB() {
        let number = this.a.number;
        this.b.setNumber(number)
    }
}

const a = new A();
const b = new B();
const medium = new Medium(a,b);
a.setNumber(100,medium)
console.log(a.number,b.number)
b.setNumber(200,medium)
console.log(a.number,b.number)