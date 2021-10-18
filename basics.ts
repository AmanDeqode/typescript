//==============  Basic Types
const id:number = 5;
const company:string = 'Deqode';
const isPublished: boolean = true;
const x: any = 'Hello'

const ids:number[] = [1,2,3,4,5,6,7,8,9];
const arr: any[] = [1,2,3,'Aman',true,function(){console.log('function')}];

// Tuple
const person: [number,boolean,string] = [12,true,'Aman'];

// Tuple Array
const employee:[string,number,boolean][] = [
    ['Aman',384,true],
    ['Nitin',184,true],
    ['Shivam',310,true]
]

// Union
let pid: number | string = 22;
pid = 'Aman'

// enumration
enum Direction {
    UP='Up',
    DOWN='Down',
    LEFT='Left',
    RIGHT='Right'
}
console.log(Direction.DOWN);

// Objects
type User = {
    id:number,
    name:string
}

const user: User = {
    id:1,
    name:'Aman'
}

// Functions
function addNum(x:number, y:number):number {
    return x+y;
}

// Void
function log(message: string | number): void {
    console.log(message)
}

// Classes

interface PersonInterface {
    id:number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id:number, name:string) {
        this.id = id,
        this.name = name
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const aman = new Person(1,'Aman Chaudhary');
const hemant = new Person(2,'Hemant Singh');

console.log(aman);
console.log(hemant);

console.log(aman.register());

// Sub class
class Employee extends Person {
    position:string

    constructor(id:number, name:string,position:string) {
        super(id,name);
        this.position = position;
    }
}

const emp = new Employee(3,'Shawn','Developer');

console.log(emp);
console.log(emp.register());

// Generics
function getArray<T>(items:T[]): T[] {
    return new Array().concat(items);
}

const numArray = getArray<number>([1,2,3,4]);
const strArray = getArray<string>(['aman','bihari','shivam']);

strArray.push('hello');


/* const person = {
    name:'Aman',
    age:30,
    hobbies:['Chess','Table tennis']
};
console.log(person);
console.log(typeof person);
 */

// ============    union-literals-aliases

/* type Combinable = number | string

function combine(input1:Combinable,input2:number|string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number')
    {
        result = input1 + input2;
        return result;
    }
    result = input1.toString() + input2.toString();
    return result;
}

const combinedAges = combine(30,26);
console.log(combinedAges);

const combineNames = combine('abc','def');
console.log(combineNames); */

// ======================    Function return type and void
/* function add(n1:number, n2:number) {
    return n1 + n2;
}
function printResult(num:number):undefined {
    console.log('Result : ', num, typeof num);
    return;
}

console.log(printResult(add(5,10))); */

/* let userInput:unknown;
let userName:string;

userInput = 5;
userInput = 'Aman';
if(userInput === 'string') userName = userInput;


function generateError(message:string, code:number) {
    throw {message:message,code:code}
}

console.log(generateError('Unhandled Exceptions',500)); */

function add(n1:number, n2:number, showResult:boolean,phrase:string) {

    if(showResult)
    {
        console.log(`${phrase} = ${n1+n2}`);
        return;
    }
    n1+n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is : '

const result = add(number1,number2,printResult,resultPhrase);
//console.log(result);


