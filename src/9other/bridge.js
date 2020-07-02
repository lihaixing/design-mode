/**
 * 桥接模式
 * 画图和填颜色分离
 */

class Color {
    constructor(name) {
        this.name = name
    }
}


class Shape{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    draw(){
        console.log(`${this.color.name} ${this.name}`)
    }
}

const color=new Color('red');
const pic = new Shape('circle',color);
pic.draw()