class MainDepartment {
    //public name:string
    private employees: string[] = []
    
    constructor(private readonly id:string,public name:string) {
        //this.name = n;
    }
    describe(this:MainDepartment) {
        console.log(`MainDepartment ${this.id}: ${this.name}`);
    }
    addEmployee(employee:string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}

const _accounting = new MainDepartment('d1','_Accounting');

_accounting.addEmployee('Aman');
_accounting.addEmployee('Hemant');

console.log(_accounting);
_accounting.printEmployeeInformation();
_accounting.describe();

// const _accountingCopy = {name: 'Dummy',describe: _accounting.describe};

// console.log(_accountingCopy.describe);

// _accountingCopy.describe()
