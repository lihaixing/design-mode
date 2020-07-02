// 装饰方法
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    @readonly
    detail() {
        return `NAME: ${this.name}\n AGE: ${this.age}`
    }
}

/**
 * 装饰方法
 * @param {*} target 默认
 * @param {*} name 默认
 * @param {*} descripter 
 */
function readonly(target, name, descripter) {
    console.log(target,name,descripter)
    descripter.writable = false;
    return descripter  //可以注掉
}

const persion = new Person('lihaixing', 31);

console.log(persion.detail())

// 以下会报错
persion.detail = function () {
    console.log(111)
}
