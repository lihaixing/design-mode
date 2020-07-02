const prototype = {
    sayName() {
        console.log(this.name)
    }
}

const me = Object.create(prototype);
me.name = 'lihaixing'
me.sayName()