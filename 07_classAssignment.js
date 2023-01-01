class Vehicle {
    constructor(Vehicle,color,speed,model){
        this.Vehicle = Vehicle;
        this.color = color;
        this.speed = speed;
        this.model = model;
    }
}
let bikecs = new Vehicle("bike", "green", 150, "CS134");
let bikecr = new Vehicle("bike", "blue", 170, "CR144");
console.log(bikecs);
console.log(bikecr);