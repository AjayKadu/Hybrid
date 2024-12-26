var Employee = /** @class */ (function () {
    function Employee(No, Name, Address) {
        this.no = No;
        this.name = Name;
        this.address = Address;
    }
    Employee.prototype.Print = function () {
        return this.no + this.name + this.address;
    };
    return Employee;
}());
var emp = new Employee(100, "hitesh", "baroda");
var reply = emp.Print();
console.log('====================================');
console.log(reply);
console.log('====================================');
