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
function echo(arg) {
    return arg;
}
var myStr = echo('1');
var Person = /** @class */ (function () {
    function Person(firstname) {
        this.firstname = firstname;
    }
    Person.prototype.greet = function () {
        console.log(this.firstname);
    };
    return Person;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.test = function () {
        console.log('test');
    };
    return Admin;
}(Person));
;
var admin = new Admin('admin');
function personEcho(person) {
    return person;
}
var res1 = personEcho(admin);
function personEcho2(person) {
    person.test();
    return person;
}
var res2 = personEcho2(admin);
