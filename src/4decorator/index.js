/**
 * 装饰器模式
 * 添加新功能 装饰一下，不改变原来的功能，只是扩展
 */

class Circle {
    draw() {
        console.log('画一个圆形')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }
    draw() {
        this.circle.draw()
    }
    setRedBorder() {
        console.log('设置红色边框')
    }
}

const circle = new Circle();
circle.draw();

const dec = new Decorator(circle);
dec.draw()
dec.setRedBorder()