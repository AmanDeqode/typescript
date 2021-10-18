interface Named {
    readonly name:string;
    age?: number;
}

interface Greetable extends Named {
    greet(phrase:string):void
}
// type Greetable  = {
//     name:string,
//     age:number

//     greet(phrase:string):void
// }
class Person implements Greetable {
    constructor(public name:string) {

    }

    greet(phrase:string) {
        console.log(`phrase ${this.name}`)
    }
}
const user:Greetable = {
    name: 'Aman',
    age:23,
    greet(phrase:string) {
        console.log(`${phrase} ${this.name}`);
    }
}

user.greet('Hey What\'s up')
//user.name = 'Hemant'
