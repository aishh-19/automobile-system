function Automobile(name, model, manuDate, price) {
    this.name = name;
    this.model = model;
    this.manuDate = manuDate;
    this.price = price;
}

Automobile.prototype.start = function() {
    console.log("Car is starting...");
};

Automobile.prototype.stop = function() {
    console.log("Car is stopping...");
};

function FourWheeler(name, model, manuDate, price) {
    Automobile.call(this, name, model, manuDate, price);
}

FourWheeler.prototype = Object.create(Automobile.prototype);
FourWheeler.prototype.constructor = FourWheeler;

FourWheeler.prototype.drive = function() {
    console.log(`Driving ${this.name}...`);
};

let myCar = new FourWheeler("Toyota", "Fortuner", 2020, "20L");
console.log(myCar);
myCar.drive();
let newCar = new FourWheeler("xyz","yzx",2021 , "20L")
newCar.stop();