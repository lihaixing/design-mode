export default function log(type){
    return function log(target, name, descripter) {
        const oldValue = descripter.value;
        descripter.value = function () {
            console.log(`${type} error`);
            return oldValue.apply(this, arguments); // 因为oldValue不是在target里定义的，所以需要指定this
        }
        return descripter;
    }
}