/**
 * 单利模式有：$  登录框 购物车 vuex和redux中的store
 */

class SingleObject {
    constructor(){
        console.log('this',this)
    }
    login() {
        console.log('login...')
    }
}

// 单例模式，实例只是实例一次
// 且只能内部去实例（当然因为js原因，外部去 new SingleObject()也不会报错）
SingleObject.getInstance = (() => {
    let instance;
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
})()

const obj1 = SingleObject.getInstance();
obj1.login();
const obj2 = SingleObject.getInstance();
obj2.login()

const obj3 = new SingleObject();
obj3.login()
// console.log(obj1 === obj2);

