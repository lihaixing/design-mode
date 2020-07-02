// 装饰类
@testDec
class Demo {

}

function testDec(target) {
    target.isDec = '黑黑';
}
console.log(Demo)
alert(Demo.isDec)