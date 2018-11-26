// 类
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    speak () {
        console.log(`${this.name}'s age is ${this.age}`);
    }
}

let zhang = new Person('zhang', 20);
console.log(zhang);
zhang.speak();

// 继承
class Student extends Person {
    constructor (name, age, number) {
        super(name, age);
        this.number = number;
    }

    study () {
        console.log(`${this.name} can study and he's number is ${this.number}`)
    }

    /**
     * 多态：虽然父类定义了speak方法，但子类仍然可以定义，保持了子类的开放性和灵活性
     */
    speak(){

    }
}

let li = new Student('li', 30, 18);
console.log(li);
li.speak();
li.study();

/**
 * 一、封装 public完全开放 private对自己开发 protected对自己和子类开发
 *  (1) public就是可以任何方法访问
 *  (2) protected 不能通过obj.attr的方法访问，只能通过obj.getAttr()访问
 *  (3) private 只能通过obj.getAttr()访问，而且不能被继承
 * 二、ES6不支持，一般认为_开头的属性就是private
 */

import myJquery from './myJquery'
myJquery()
// $('.myText').text('你好好好')

// UML
import LHX from './UML'
console.log(LHX)

// promise说明设计原则
import './5.设计原则栗子'