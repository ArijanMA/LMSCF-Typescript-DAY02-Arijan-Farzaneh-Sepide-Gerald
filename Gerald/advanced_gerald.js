var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(type, name, baseprice) {
        this.type = type;
        this.name = name;
        this.baseprice = baseprice;
    }
    Vehicles.prototype.vname = function () {
        return "My type is " + this.type + " and I have the following name " + this.name;
    };
    return Vehicles;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(type, name, baseprice, horsepower, fueltype) {
        var _this = _super.call(this, type, name, baseprice) || this;
        _this.horsepower = horsepower;
        _this.fueltype = fueltype;
        return _this;
    }
    Motor.prototype.calcpricem = function () {
        var pricem = Number(this.baseprice + this.horsepower * 10);
        console.log(pricem);
        return pricem;
    };
    return Motor;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(type, name, baseprice, seats, kilometers, age) {
        var _this = _super.call(this, type, name, baseprice) || this;
        _this.seats = seats;
        _this.kilometers = kilometers;
        _this.age = age;
        return _this;
    }
    Truck.prototype.calcpricet = function () {
        var price = Number(this.baseprice + this.seats * 1000 - this.kilometers * 0.5 - this.age * 1000);
        console.log(price);
        return price;
    };
    return Truck;
}(Vehicles));
var truck1 = new Truck("truck", "truck1", 30000, 3, 10000, 6); //30000+3000-5000-6000=22k
$("#pricediv").append(truck1.calcpricet() + "<br>");
var truck2 = new Truck("truck", "truck2", 40000, 5, 6000, 8); //40000+5000-3000-8000=34k
$("#pricediv").append(truck2.calcpricet() + "<br>");
var truck3 = new Truck("truck", "truck3", 50000, 4, 5000, 6);
$("#pricediv").append(truck3.calcpricet() + "<br>");
var truck4 = new Truck("truck", "truck4", 35000, 6, 20000, 6);
$("#pricediv").append(truck4.calcpricet() + "<br>");
var motor1 = new Motor("motor", "motor1", 5000, 150, "diesel");
$("#pricediv").append(motor1.calcpricem() + "<br>");
var motor2 = new Motor("motor", "motor2", 6000, 200, "gasoline");
$("#pricediv").append(motor2.calcpricem() + "<br>");
