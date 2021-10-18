"use strict";
// type Greetable  = {
//     name:string,
//     age:number
//     greet(phrase:string):void
// }
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(`phrase ${this.name}`);
    }
}
const user = {
    name: 'Aman',
    age: 23,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
user.greet('Hey What\'s up');
//user.name = 'Hemant'
