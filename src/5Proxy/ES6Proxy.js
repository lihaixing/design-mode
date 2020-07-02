let star = {
    name: 'zhang xxx',
    age: 25,
    phone: 'star: 13453452359'
}

let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            // 返回经纪人电话
            return 'agent: 158588585885'
        }
        if (key === 'price') {
            // 明星不报价，经纪人报价
            return 120000
        }

        return target[key]
    },
    set: function (target, key, value) {
        if (key === 'customPrice') {
            if (value < 100000) {
                throw new Error('价格太低')
            } else {
                target[key] = value
                return true
            }
        }
    }
})

// test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice=110000
console.log('agent.customPrice: ',agent.customPrice)
