"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    get allproduct() {
        return this._objects;
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: "Product1", price: 1000 });
store.add({ name: "Product2", price: 2000 });
store.add({ name: "Product3", price: 3000 });
store.find("name", "Product1");
store.find("price", 100);
let product = {
    name: "A",
    price: 100,
};
function printName(obj) {
    console.log(obj.name);
}
//# sourceMappingURL=generic.js.map