/**
 * 用promise来说明SO
 * 单一职责原则：每个then中的逻辑只做好一件事
 * 开发封闭原则：如果新增需求，扩展then
 */
function loadImg (src) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject('图片加载失败')
        }
        img.src = src
    });
}

let src = 'https://www.zybuluo.com/static/img/logo.png'
let result = loadImg(src)
result.then(function (res) {
    console.log(`img.width:${res.width}`)
    return res
},function(err){
    console.log(err)
}).then(function (res) {
    console.log(`img.height:${res.height}`)
}).catch(function (ex) {
    console.log(ex)
})
