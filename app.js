var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//==============  Basic Types
var id = 5;
var company = 'Deqode';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr = [1, 2, 3, 'Aman', true, function () { console.log('function'); }];
// Tuple
var person = [12, true, 'Aman'];
// Tuple Array
var employee = [
    ['Aman', 384, true],
    ['Nitin', 184, true],
    ['Shivam', 310, true]
];
// Union
var pid = 22;
pid = 'Aman';
// enumration
var Direction;
(function (Direction) {
    Direction["UP"] = "Up";
    Direction["DOWN"] = "Down";
    Direction["LEFT"] = "Left";
    Direction["RIGHT"] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.DOWN);
var user = {
    id: 1,
    name: 'Aman'
};
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id,
            this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var aman = new Person(1, 'Aman Chaudhary');
var hemant = new Person(2, 'Hemant Singh');
console.log(aman);
console.log(hemant);
console.log(aman.register());
// Sub class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp);
console.log(emp.register());
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
