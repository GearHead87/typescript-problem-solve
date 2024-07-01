"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return `Your car model is: ${this.year} ${this.brand} ${this.model}`;
    }
}
// Sample Input:
const toyotaCar = new Car('Toyota', 'Corolla', 2020);
console.log(toyotaCar.displayInfo());
// Sample Output:
// ('Your car model is:  2020 Toyota Corolla');
