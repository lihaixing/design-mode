import $ from 'jquery'
import getCart from './getCart'
import StateMachine from 'javascript-state-machine'
import log from './decorator/log'
export default class Item {
    constructor(list, data) {
        this.list = list;
        this.data = data;
        this.$el = $('<div></div>');
        this.cart = getCart()
    }

    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }

    initContent() {
        const $el = this.$el;
        const data = this.data;
        $el.append($(`<p>名称：${data.name}</p>`))
        $el.append($(`<p>价格：${data.price}</p>`))
    }

    initBtn() {
        const $el = this.$el;
        const $btn = $('<button>')
        const _this = this;
        let fsm = new StateMachine({
            init:'加入购物车',
            transitions:[
                {
                    name:'addToCart',
                    from:'加入购物车',
                    to:'从购物车删除'
                },
                {
                    name:'delFromCart',
                    from:'从购物车删除',
                    to:'加入购物车'
                }
            ],
            methods:{
                onAddToCart(){
                    _this.addToCartHandle()
                    updateText()
                },
                onDelFromCart(){
                    _this.deleteFromCart()
                    updateText()
                }
            }
        })
        $btn.on('click', () => {
            if(fsm.is('加入购物车')){
                fsm.addToCart()
            }else{
                fsm.delFromCart()
            }
        })

        function updateText(){
            $btn.text(fsm.state)
        }

        updateText();

        $el.append($btn)
    }
    @log('delete')
    deleteFromCart() {
        this.cart.del(this.data.id)
    }
    @log('add')
    addToCartHandle() {
        this.cart.add(this.data)
    }

    render() {
        console.log('this.list.$el:',this.list.$el)
        this.list.$el.append(this.$el)
    }
}