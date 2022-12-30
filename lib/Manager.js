const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getRole() {
    return "Manager";
  }
  getSpecial() {
    return `<p>Office Number: ${this.officeNum}</p>`;
  }
}

module.exports = Manager;
