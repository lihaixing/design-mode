import Item from './item'
function createDiscount(data) {
    return new Proxy(data, {
        get(target, key, receiver) {
            if (key === 'name') {
                return `${target.name} [折扣]`
            }
            if (key === 'price') {
                return target.price * 0.8
            }
            return target[key]
        }
    })
}
export default function (list, itemData) {
    if (itemData.discount) {
        itemData = createDiscount(itemData);
    }
    return new Item(list, itemData);
}