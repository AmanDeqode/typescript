function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString());
}
greet("Aman", new Date());
var names = ['alpha', 'beta', 'gamma'];
names.forEach(function (name) {
    console.log(name.toUpperCase());
});
function printCoord(pt) {
    console.log("The x coordinate " + pt.x);
    console.log("The y coordinate " + pt.y);
}
printCoord({ x: 3, y: 5 });
function printName(obj) {
    console.log("Firstname " + obj.firstname + " " + obj.lastname);
}
printName({ firstname: 'Aman' });
printName({ firstname: 'Hemant', lastname: 'Singh' });
function unionType(uid) {
    console.log("your id is " + uid + " and typeof " + typeof uid + " ");
    if (uid === 'string')
        console.log(uid.toUpperCase());
}
unionType(101);
unionType('121');
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log(x);
    }
    else {
        console.log("Welcome " + x);
    }
}
welcomePeople(['Aman', 'Hemant']);
welcomePeople('Aman');
function getFirstThree(input) {
    return input.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5, 6]));
console.log(getFirstThree('Aman'));
function printCoordd(pt) {
    console.log("x coordinates " + pt.x);
    console.log("y coordinates " + pt.y);
}
printCoordd({ x: 30, y: 100 });
function getBear(bear) {
    console.log("bear name " + bear.name);
    console.log("bear likes honey " + bear.honey);
}
getBear({ name: 'bhallo', honey: true });
function getNewBear(bear) {
    console.log("bear name " + bear.name);
    console.log("bear likes honey " + bear.honey);
}
getNewBear({ name: 'BadaBhallo', honey: true });
var MySingleton = /** @class */ (function () {
    function MySingleton() {
        console.log("constructor called!");
    }
    MySingleton.getInstance = function () {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    };
    MySingleton.prototype.logic = function () {
        console.log("my logic!");
    };
    return MySingleton;
}());
var createInstace = MySingleton.getInstance();
