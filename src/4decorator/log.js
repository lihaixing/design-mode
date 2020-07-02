class Math {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    @log
    add() {
        return this.a + this.b
    }
}

function log(target, name, descripter) {
    const oldValue = descripter.value;
    descripter.value = function () {
        console.log(`calling ${name} with `,arguments)
        return oldValue.apply(this, arguments); // 因为oldValue不是在target里定义的，所以需要指定this
    }
    return descripter;
}

const math = new Math(1,2);
console.log(math.add())
