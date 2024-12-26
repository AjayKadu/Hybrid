class Employee {
     
    no:number;
    name : string;
    address: string;

    constructor(No: number, Name:string, Address: string) {

         this.no = No;
         this.name = Name;
         this.address = Address;
    }

    Print() : string
    {
        return this.no + this.name + this.address;
    }
}


var emp = new Employee(100, "hitesh", "baroda");
var reply = emp.Print();
console.log('====================================');
console.log(reply);
console.log('====================================');