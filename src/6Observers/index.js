/**
 * 发布订阅场景
 * 1. jquery网页事件绑定
 * 2. promise
 * 3. jquery callbacks
 * 4. nodejs自定义事件
 */

class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    getState() {
        return this.state
    }

    setState(state) {
        this.state = state;
        this.notifyAllObservers()
    }

    notifyAllObservers() {
        this.observers.forEach((observer) => {
            observer.update()
        })
    }

    attach(observer) {
        this.observers.push(observer)
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        // 初始化一个观察者，就要把观察者加到观察者列表中
        this.subject.attach(this);
    }

    update() {
        console.log(`${this.name} updated, state: ${this.subject.getState()}`)
    }
}

const s = new Subject();
const observer1 = new Observer('gcz1', s);
const observer2 = new Observer('gcz2', s);
const observer3 = new Observer('gcz3', s);
s.setState(1);
s.setState(2);
