type Admin = {
    name: string
    priviledges:string[];
};
type Employee = {
    name:string;
    startingDate:Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name:'Aman',
    priviledges:['create-server'],
    startingDate: new Date()
}
const e2:ElevatedEmployee = {
    name:'Admin',
    priviledges:['database'],
    startingDate: new Date()
}

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addValue(a:Combinable,b:Combinable) {
    if(typeof a ==='string' || typeof b === 'string') {  // here typeof is works as type Guard
        return a.toString() + b.toString();
    }
    return a+b;
}
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp:UnknownEmployee) {
    console.log(`Name ${emp.name}`);

    if('priviledges' in emp) {
        console.log(`Priviledges ${emp.priviledges}`);
    }
    if('startingDate' in emp) console.log(`Starting Date ${emp.startingDate}`)
}
printEmployeeInformation(e1);
printEmployeeInformation(e2);

class Car {
    drive() {
        console.log('driving');
    }
}
class Truck {
    drive() {
        console.log('driving a truck...');
    }

    loadCargo(amount:number) {
        console.log(`loading cargo amount ${amount}`);
    }
}
type Vehicle = Truck | Car;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle:Vehicle) {
    vehicle.drive();
    if('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);