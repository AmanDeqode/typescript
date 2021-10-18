"use strict";
class MainDepartment {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //public name:string
        this.employees = [];
        //this.name = n;
    }
    describe() {
        console.log(`MainDepartment ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
const _accounting = new MainDepartment('d1', '_Accounting');
_accounting.addEmployee('Aman');
_accounting.addEmployee('Hemant');
console.log(_accounting);
_accounting.printEmployeeInformation();
_accounting.describe();
// const _accountingCopy = {name: 'Dummy',describe: _accounting.describe};
// console.log(_accountingCopy.describe);
// _accountingCopy.describe()
