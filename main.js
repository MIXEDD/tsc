"use strict";
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
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
// variable declaration
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var anything = 'any';
// array different declarations
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple array
var persion1 = ['Chris', 22, true];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var randomvalue = 10;
randomvalue = true;
randomvalue = 'Vishwas';
// let myVariable: unknown = 10;
// console.log(myVariable.name);
// myVariable();
// (myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
// let b = 20;
// b = true;
var multiType;
multiType = 20;
multiType = true;
// num2 parameter is optional
function add(num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    return num1 + num2;
}
var add_arrow = function (num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    return num1 + num2;
};
var res1 = add(5, 10);
var res2 = add(5);
var res1_arrow = add(5, 10);
var res2_arrow = add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good morning ' + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
emp1.greet();
// super keyword launches base class (Employee) constructor
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
// m1.employeeName;
// namespace StudentCalc {
//     export function AnnualFeeCalc(feeAmount: number, term: number): number {
//         return feeAmount * term;
//     }
// }
/// <reference path='.' 
