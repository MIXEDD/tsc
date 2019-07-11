function echo<T>(arg: T): T {
    return arg;
}

const myStr: string = echo('1');

class Person {
    firstname: string;

    constructor(firstname: string) {
        this.firstname = firstname;
    }

    greet(): void {
        console.log(this.firstname);
    }
}

class Admin extends Person {

    test(): void {
        console.log('test');
    }
};

const admin = new Admin('admin');

function personEcho<T extends Person>(person: T): T {

    return person;
}

const res1 = personEcho(admin);


function personEcho2(person: Admin): Person {
    person.test();
    return person;
}

const res2 = personEcho2(admin);
