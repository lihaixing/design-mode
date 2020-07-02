/**
 * 适配器模式
 * 使用场景：封装旧接口  vue中的computed
 */
class Adaptee {
    specificRequest() {
        return '德国标准插头'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request(){
        let info = this.adaptee.specificRequest();
        return  `${info} - 转换器 - 中国标准插头`
    }
}

let target = new Target();
console.log(target.request())