class Memento {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content
    }
}

// 备忘列表
class CareTaker {
    constructor() {
        this.list = []
        this.index = 0
    }
    add(memento) {
        if(this.index<this.list.length - 1){
            this.list = this.list.slice(0, this.index + 1)
        }
        this.list.push(memento)
        this.index = this.list.length - 1
    }

    changeIndex(cmd) {
        if (cmd === '+' && this.index < this.list.length - 1) {
            this.index++
        }
        if (cmd === '-' && this.index > 0) {
            this.index--
        }
    }
    get() {
        return this.list[this.index]
    }
}

class Editer {
    constructor() {
        this.content = null
        this.careTaker = new CareTaker();
    }
    // 书写
    setContent(content) {
        this.content = content
    }
    getNewContent() {
        console.log(this.content)
    }
    // 保存
    saveContentToMemento() {
        this.careTaker.add(new Memento(this.content))
    }

    // 撤销
    cancel() {
        this.careTaker.changeIndex('-')
    }

    // 前进
    forward() {
        this.careTaker.changeIndex('+')
    }

    getCurrentContent() {
       console.log(this.careTaker.get())
    }
}

window.editer = new Editer();

editer.setContent('111')
editer.saveContentToMemento()

editer.setContent('222')
editer.saveContentToMemento()

editer.setContent('333')
editer.saveContentToMemento()

editer.setContent('444')
editer.saveContentToMemento()

editer.cancel()
editer.getCurrentContent();

editer.setContent('555')
editer.saveContentToMemento()

editer.getCurrentContent();

editer.cancel()
editer.getCurrentContent();

editer.forward()
editer.getCurrentContent();

