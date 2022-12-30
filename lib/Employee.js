class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee'
    }
    sayHi() {
        return `Hello my name is ${this.name}`
    }
}

module.exports = Employee;
