var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120;
    }
    Person.prototype.speak = function () {
        console.log(this.name + "'s age is " + this.age);
    };
    return Person;
}());
var zhang = new Person('zhang', 20);
console.log(zhang);
console.log(zhang.weight);
// 继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, number) {
        var _this = _super.call(this, name, age) || this;
        _this.number = number;
        _this.girlfried = 'xiaoLi';
        return _this;
    }
    Student.prototype.study = function () {
        console.log(this.name + " can study and he's number is " + this.number);
    };
    Student.prototype.getWeight = function () {
        console.log(this.name + "'s weigth is " + this.weight);
    };
    return Student;
}(Person));
var li = new Student('li', 30, 18);
console.log(li);
// console.log(li.girlfried)
console.log(li.getWeight());
