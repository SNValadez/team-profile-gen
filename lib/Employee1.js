// class Employee {

// }

// let array = [1, 2, 3];
// array.length
// array.push()
class Employee {
    constructor(name, ID, email) {
     
        this.name = name;
        this.ID = ID;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    
    getID() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }
}

let employee = new Employee("Jesse", 201, "01@gmail.com");
console.log(employee);
console.log(employee.getEmail());

module.exports = Employee;