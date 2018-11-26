class People {
    constructor (name, house) {
        this.name = name;
        this.house = house;
    }

    saySomething () {
        console.log('I am people')
    }
}

class A extends People {
    constructor (name, house) {
        super(name, house);
    }

    saySomething () {
        console.log('I am A')
    }
}

class B extends People {
    constructor (name, house) {
        super(name, house);
    }

    saySomething () {
        console.log('I am B')
    }
}

class House {
    constructor (city) {
        this.city = city;
    }

    showCity () {
        console.log(`My city is ${this.city}`)
    }
}
export default new A('haixing',new House('xian'))

