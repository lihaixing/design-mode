// 类
class Person {
    name
    age
    private weight // 受保护的属性，只有自己或者子类可以访问

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120;
    }

    speak() {
        console.log(`${this.name}'s age is ${this.age}`);
    }
}

let zhang = new Person('zhang', 20);
console.log(zhang);
console.log(zhang.weight)

// 继承
class Student extends Person {
    number
    private girlfried

    constructor(name, age, number) {
        super(name, age);
        this.number = number;
        this.girlfried = 'xiaoLi'
    }

    study() {
        console.log(`${this.name} can study and he's number is ${this.number}`)
    }
    getWeight (){
        console.log(`${this.name}'s weigth is ${this.weight}`)
    }
}

let li = new Student('li', 30, 18);
console.log(li)
// console.log(li.girlfried)
console.log(li.getWeight())

