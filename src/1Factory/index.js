/**
 * 工厂模式例子：$()  React.createElement()
 */

class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        alert('init')
    }
    func1() {
        console.log('func1')
    }
    func2() {
        console.log('func2')
    }
}
/**
 * 工厂
 */
class Creater {
    create(name) {
        return new Product(name)
    }
}

const creater = new Creater();
const p1 = creater.create('p1');