class Camera {
    constructor() {

    }
    shot(car) {
        console.log(`摄像头拍到：车牌号${car.number},进入时间${car.inTime}`)
    }
}

class Screem {
    constructor() {

    }
    showCar(floors) {
        
    }
    showEmpty(floors) {
        for (let i = 0; i < floors.length; i++) {
            const floor = floors[i];
            const emptyPlaces = floor.places.filter((item) => {
                return !item.car
            })
            console.log(`第${i}层空车位数量位${emptyPlaces.length}`);
        }
    }
}

class Park {
    constructor(floors, camera, screem) {
        this.floors = floors;
        this.camera = camera;
        this.screem = screem;
    }
    beforeIn() {
        const floors = this.floors;
        this.screem.showEmpty(floors)
    }
    in(car) {
        this.camera.shot(car)
        // 进一层
        this.floors[0].in(car)
    }
    out() {

    }
}

class Floor {
    constructor(places, index) {
        this.places = places;
        this.index = index
    }

    in(car){
        // 进第一个车位
        this.places[0].in(car)
    }

    out() {

    }

    emptyPlaceNumber() {

    }
}

class Place {
    constructor(index) {
        this.car = null;
        this.index = index;
    }

    in(car) {
        this.car = car
        console.log(`车牌号${car.number}进来了，时间${Date.now()}`)
    }
    out() {
        this.car = null
    }
}

class Car {
    constructor(number, inTime){
        this.number = number;
        this.inTime = inTime;
    }
}

const places = []
for (let i = 0; i < 50; i++) {
    const place = new Place(i);
    places.push(place);
}
const floor1 = new Floor(places, 0)
const floor2 = new Floor(places, 1)

const park = new Park([floor1, floor2], new Camera(), new Screem());

const car1 = new Car('A1', Date.now())
park.beforeIn(car1);
park.in(car1);
const car2 = new Car('A2', Date.now())
park.beforeIn(car2);
park.in(car2);


