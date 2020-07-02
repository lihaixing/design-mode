/**
 * 代理模式
 * 使用场景：
 * 1. 网页事件代理 
 * 2. Jquery中 $.proxy 
 * 3. ES6中 Proxy
 */

class RealImg {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk()
    }
    display(){
        console.log(`display ${this.fileName}`)
    }
    loadFromDisk(){
        console.log(`loading ${this.fileName} from disk`)
    }
}

class ProxyImg {
    constructor(fileName){
        this.realImg = new RealImg(fileName);
    }

    display(){
        this.realImg.display()
    }
}

const proxyImg = new ProxyImg('xxx.png')
proxyImg.display()