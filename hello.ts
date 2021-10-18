function greet(person:string,date:Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
greet("Aman",new Date())


const names:string[] = ['alpha','beta','gamma'];

names.forEach(function (name:string) {
    console.log(name.toUpperCase());
});

function printCoord(pt: { x:number; y:number}) {
    console.log(`The x coordinate ${pt.x}`);
    console.log(`The y coordinate ${pt.y}`);
}

printCoord({x:3,y:5});

function printName(obj:{firstname:string, lastname?: string}) {
    console.log(`Firstname ${obj.firstname} ${obj.lastname}`);
}
printName({firstname:'Aman'});
printName({firstname:'Hemant', lastname:'Singh'});

function unionType(uid: number | string) {
    console.log(`your id is ${uid} and typeof ${typeof uid} `);
    if(uid === 'string') console.log(uid.toUpperCase());
}

unionType(101);
unionType('121');

function welcomePeople(x:string[]|string) {
    if(Array.isArray(x)) {
        console.log(x);
    }
    else {
        console.log(`Welcome ${x}`);
    }
}

welcomePeople(['Aman','Hemant']);
welcomePeople('Aman');

function getFirstThree(input:number[]|string) {
    return input.slice(0,3)
}
console.log(getFirstThree([1,2,3,4,5,6]));
console.log(getFirstThree('Aman'));

type Point = {
    x:number;
    y:number;
};

function printCoordd(pt:Point) {
    console.log(`x coordinates ${pt.x}`);
    console.log(`y coordinates ${pt.y}`);
}

printCoordd({x:30,y:100});

interface Animal {
    name:string
}
interface Bear extends Animal {
    honey:boolean
}

function getBear(bear:Bear) {
    console.log(`bear name ${bear.name}`)
    console.log(`bear likes honey ${bear.honey}`)
}

getBear({name:'bhallo',honey:true});

type Animal1 = {
    name:string
}

type Bear1 = Animal1 & {
    honey: boolean
}

function getNewBear(bear:Bear1) {
    console.log(`bear name ${bear.name}`)
    console.log(`bear likes honey ${bear.honey}`)
}

getNewBear({name:'BadaBhallo', honey:true});

class MySingleton {

    static instance: MySingleton;

    private constructor() {
        console.log("constructor called!");
    }

    public static getInstance(): MySingleton {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }

    public logic() {
        console.log("my logic!");
    }
}

MySingleton.getInstance()
