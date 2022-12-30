// import manager, engineer, intern files with require()
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// import inquirer with require()
const inquirer = require("inquirer");
// import path with require()

// const path = require('./lib')
const team = [];
// import fs with require()
const fs = require("fs");
// import page-template.js from subfoler src with require
const pt = require("./src/page-template"); // and assign it to a variable to be called later to render html
const Employee = require("./lib/Employee");
// const { default: inquirer } = require('inquirer');
const generateHTML = require("./utils/generateHTML");
const { getHeapSnapshot } = require("v8");

// 3.
// create variable to hold the path to dist subfolder using path lib resolve method

// create variable to hold the path to team.html using path lib join method
const questions = {
  init:
    /* Pass your questions in here */
    {
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
      // Use user feedback for... whatever!!
      // conditional statements on roles or 'i'm done' -> then creates HTML
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function createHTML() {
  fs.writeFile("./dist/index.html", generateHTML(team), (err) =>
    console.log(err)
  );
  //[smp,emp,emp,emp]
  //fsmodule to build html
}

initQuestions();

// wrap();
// wrap inquirer.prompt in a function so you can recall it later
// import classes and create new instance of class using user feedback

// create new variable to create object with ke

// 4.
// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns

// employeeMember[''];

// create an empty employee id array to store the employee ids

// employeeId[''];

// 5.
// print user of usage

// 6.
// make call to create manager function to start the main process

// 7.
// create manager function

// - ask the questions for name, id, email, office number for manager using inquirer

// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor

// - push the manager object to the employee member array

// - push the manager id to the employee id array

// - make call to the create team function

// 8.
// create team function

// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team

// - in .then callback function check what the user choice is and make call to the corresponding functions respectively

// - make call to add-engineer-function if the choice is engineer

// - make call to add-intern-function if choice is intern

// - make call to build-team function if choice is end of adding employee

// 8.
// add engineer function

// - prompt user with questions for engineer name, id, email, and github name

// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor

// - push engineer object to employee member array

// - push engineer id to employee id array

// - make call to create team function

// 9.
// add intern function

// - prompt user with questions for intern name, id, email, and school

// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor

// - push intern object to employee member array

// - push intern id to employee id array

// - make call to create team function

// 10.
// build team function

// - check existing of dist subfolder

// - if not exist, create the dist subfolder

// - make call to imported render function passing employee member array as argument and assign returned html to a variable

// - make call to fs write file function passing the html file path, html variable

// [
//     /* Pass your questions in here */
//     {
//         type: "list",
//         name: "role",
//         message: "Which employee would you like to create?",
//         choices: ["Manager", "Engineer", "Intern", "I'm done"]
//     },
//     {
//         type: "input",
//         name: "name",
//         message: "What is this employee's name?",
//     },
//     {
//         type: "number",
//         name: "number",
//         message: "What is this employee's id number?",
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is this employee's email?",
//     },

//     // every employee has the above questions

//     // Manager additional question
//     {
//         type: "number",
//         name: "office number",
//         message: "What is this employee's office number?",
//     },

//     // Engineer additional question
//     {
//         type: "input",
//         name: "github",
//         message: "What is this employee's gitHub username?",
//     },

//     // Intern additional question
// {
//     type: "input",
//     name: "school",
//     message: "Where did this Intern attend school?",
// },

// ]
