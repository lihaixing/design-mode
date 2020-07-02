class State {
    constructor(color) {
        this.color = color;
    }
    handle(context) {
        context.setState(this)
    }
}

class Context {
    constructor() {
        this.state = null
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
}

/**
 * 状态模式
 * state不变，只是一直在改变上下文context中的state
 * 场景：不同的页面，相似的数据
 */
const context = new Context();
const red = new State('red');
red.handle(context);

const green = new State('green');
green.handle(context);

console.log(context.getState())