import $ from 'jquery'
import createItem from './createItem'
export default class List {
    constructor(app) {
        this.app = app
        this.$el = $('<div></div>')
    }

    loadData() {
        return fetch('./api/list.json').then(result => {
            return result.json()
        })
    }
    initItemList(data) {
        const _this = this;
        data.forEach(itemData => {
            let item = createItem(_this,itemData);
            item.init()
        })
    }

    render() {
        this.app.$el.append(this.$el)
    }
    init() {
        this.loadData().then(data => {
            this.initItemList(data)
        }).then(() => {
            this.render();
        })
    }
}