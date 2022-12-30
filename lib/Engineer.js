const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  getSpecial() {
    return `<p>Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></p>`;
  }
}

module.exports = Engineer;
