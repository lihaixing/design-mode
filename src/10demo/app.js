import $ from 'jquery'
import ShopingCart from './shopingCart'
import List from './list'
export default class App {
    constructor(id) {
        this.$el = $(`#${id}`)
    }
    initShopingCart() {
        let shopingCart = new ShopingCart(this)
        shopingCart.init()
    }
    initList() {
        let list = new List(this)
        list.init()
    }
    init() {
        this.initShopingCart()
        this.initList()
    }
}