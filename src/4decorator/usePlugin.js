import { readonly, deprecate } from 'core-decorators';
class Person {
    constructor() {
        this.name = 'zhangsan'
    }

    @readonly
    sayName() {
        return this.name
    }

    @deprecate('即将费用')
    say() {
        console.log(this.name)
    }
}

const person = new Person();
// person.sayName = function () {}

person.say()