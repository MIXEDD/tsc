export {}
let message = 'Hello World';

console.log(message);

// variable declaration
const isBeginner: boolean = true;
const total: number = 0;
const name: string = 'Vishwas';
const n: null = null;
const u: undefined = undefined;
const isNew: boolean = null;
const myName: string = undefined;
const anything: any = 'any';

// array different declarations
const list1: number[] = [1,2,3];
const list2: Array<number> = [1,2,3];

// tuple array
const persion1: [string, number, boolean] = ['Chris', 22, true];

// enum
enum Color {Red = 5, Green, Blue};
const c: Color = Color.Green;

let randomvalue: any = 10;
randomvalue = true;
randomvalue = 'Vishwas';

// let myVariable: unknown = 10;

// console.log(myVariable.name);
// myVariable();
// (myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

// let b = 20;
// b = true;

let multiType: number | boolean;
multiType = 20;
multiType = true;

// num2 parameter is optional
function add(num1: number, num2: number = 5): number {
     return num1 + num2;
}

const add_arrow = (num1: number, num2: number = 5): number => {
    return num1 + num2;
}

const res1 = add(5,10);
const res2 = add(5);

const res1_arrow = add(5,10);
const res2_arrow = add(5);

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

const p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);

class Employee {
    private employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log('Good morning ' + this.employeeName);
    }
}

const emp1 = new Employee('Vishwas');
emp1.greet();

// super keyword launches base class (Employee) constructor
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating task`);
    }
}

const m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
// m1.employeeName;

// namespace StudentCalc {
//     export function AnnualFeeCalc(feeAmount: number, term: number): number {
//         return feeAmount * term;
//     }
// }

/// <reference path='.' 




