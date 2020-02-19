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
var Person = /** @class */ (function () {
    function Person(namef, age) {
        this.namef = "";
        this.age = "";
        this.namef = namef;
        this.age = age;
    }
    Person.prototype.name = function () {
        return "My name is " + this.namef + " and I am " + this.age + " years old";
    };
    Person.prototype.whoAreYou = function () {
        return "Hello there , " + this.name();
    };
    return Person;
}());
//i had problems when I used class Workerm maybe it is a protected name
var Workera = /** @class */ (function (_super) {
    __extends(Workera, _super);
    function Workera(namef, age, jobTitle) {
        var _this = _super.call(this, namef, age) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Workera.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " , and I am a " + this.jobTitle;
    };
    return Workera;
}(Person));
var workern = new Workera("Max Mustermann", "30", "programmer");
document.write(workern.whoAreYou());
var Sworker = /** @class */ (function (_super) {
    __extends(Sworker, _super);
    function Sworker(namef, age, jobTitle, salery, jobLocation) {
        var _this = _super.call(this, namef, age, jobTitle) || this;
        _this.salery = salery;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Sworker.prototype.nextended = function () {
        return _super.prototype.whoAreYou.call(this) + " , and I get " + this.salery + " every month, and I work in " + this.jobLocation;
    };
    return Sworker;
}(Workera));
var jonny = new Sworker("John Mustermann", "40", "programmer", "4000", "Vienna");
console.log(jonny.nextended());
