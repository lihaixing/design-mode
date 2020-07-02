// 装饰类加参数
@testDec(true)
class Demo {

}

function testDec(isDec) {
    return function (target) {
        target.isDec = isDec;
    }
}
console.log(Demo)
alert(Demo.isDec)