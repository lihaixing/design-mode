function mixin(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo() {
        alert('fool')
    }
}

@mixin(Foo)
class MyClass {

}

const my = new MyClass();
my.foo()
