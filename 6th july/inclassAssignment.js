
const vehicle = {

    name: "",

    type: "",

    wheelCount: "",

    // Some more members and methods

    ...

}

// makeCar() - It accepts two parameters name and wheelCount and returns an object with name, wheelCount, and type properties and inherits from the vehicle object. The type property must be set to "Car" (case-sensitiv

// 2. makeBike() - It accepts two parameters name and wheelCount and returns an object with name, wheelCount and type properties and inherits from the vehicle object. The type property must be set to "Bike" (case-sensitive).

// Hint - Check __proto__

function makeCar(name, wheelCount) {
    let car = {
        name: name,
        type: 'Car',
        wheelCount: wheelCount,
        __proto__: vehicle
    }
    return car
}

function makeBike(name, wheelCount) {
    let bike = {
        name: name,
        type: 'Bike',
        wheelCount: wheelCount,
        __proto__: vehicle
    }
    return bike
}