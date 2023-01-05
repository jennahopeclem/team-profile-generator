const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const team = [];
const fs = require("fs");
const pt = require("./src/page-template");
const Employee = require("./lib/Employee");
const generateHTML = require("./utils/generateHTML");
const { getHeapSnapshot } = require("v8");

const questions = {
  init: {
    type: "list",
    name: "role",
    message: "Which employee would you like to create?",
    choices: ["Manager", "Engineer", "Intern", "I'm done"],
  },
  addEmp: [
    {
      type: "input",
      name: "name",
      message: "What is this employee's name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is this employee's id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is this employee's email?",
    },
  ],
  Manager: [
    {
      type: "number",
      name: "officeNumber",
      message: "What is this employee's office number?",
    },
  ],
  Engineer: [
    {
      type: "input",
      name: "github",
      message: "What is this employee's gitHub username?",
    },
  ],
  Intern: [
    {
      type: "input",
      name: "school",
      message: "Where did this Intern attend school?",
    },
  ],
};

function initQuestions() {
  inquirer
    .prompt(questions.init)
    .then((initAns) => {
      if (initAns.role === "I'm done") {
        createHTML();
      } else {
        inquirer.prompt(questions.addEmp).then((genAns) => {
          inquirer.prompt(questions[initAns.role]).then((followUpAns) => {
            console.log(genAns);
            console.log(followUpAns);
            if (initAns.role === "Manager") {
              const employee = new Manager(
                genAns.name,
                genAns.id,
                genAns.email,
                followUpAns.officeNumber
              );
              team.push(employee);
            }
            if (initAns.role === "Engineer") {
              const employee = new Engineer(
                genAns.name,
                genAns.id,
                genAns.email,
                followUpAns.github
              );
              team.push(employee);
            }
            if (initAns.role === "Intern") {
              const employee = new Intern(
                genAns.name,
                genAns.id,
                genAns.email,
                followUpAns.school
              );
              team.push(employee);
            }
            initQuestions();
          });
        });
      }
    })

    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}

function createHTML() {
  fs.writeFile("./dist/index.html", generateHTML(team), (err) =>
    console.log(err)
  );
}

initQuestions();
