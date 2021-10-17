// Need to add inquirer
const fs = require("fs");
const inquirer = require("inquirer");

let manager; 
let teamName;

const Employee = require("./lib/Employee1");
const Engineer = require("./lib/Engineer1");
const Intern = require("./lib/Intern1");
const Manager = require("./lib/Manager1");

const teamMembers = [];

function managerData() {
    inquirer.prompt([
        {   // Fill html with teamName.
            type: "input",
            message: "What is the name of this team?",
            name: "teamName"
        },
        {   // There is only 1 manager for a team.
            type: "input",
            message: "Who is the manager?",
            name: "managerName"
        },
        {   
            type: "input",
            message: "What is manager ID?",
            name: "managerID"
        },
        {  
            type: "input",
            message: "What is manager email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What's the manager's office number?",
            name: "officeNumber"
        }]).then(managerAnswers => {
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamName = managerAnswers.teamName;
            console.log("Other employee information needed.")
            otherEmployeeData();
        });
    }

    function otherEmployeeData() {
        inquirer.prompt([
            {
                type: "list",
                message: "What's the employee's role?",
                name: "employeeRole",
                choices: ["Intern", "Engineer"]
            },
            {
                type: "input",
                message: "What's employee name?",
                name: "employeeName"
            },
            {
                type: "input",
                message: "What's employee's ID?",
                name: "employeeId"
            },
            {
                type: "input",
                message: "What's employee email?",
                name: "employeeEmail"
            },
            {
                type: "input",
                message: "What's the Engineer's Github?",
                name: "github",
                when: (userInput) => userInput.employeeRole === "Engineer"
            },
            {
                type: "input",
                message: "What's the Intern's school?",
                name: "school",
                when: (userInput) => userInput.employeeRole === "Intern"
            },
            {
                type: "confirm",
                name: "newEmployee",
                message: "Would you like to add more team members?"
            }
        ]).then(answers => {
            if (answers.employeeRole === "Intern") {
                const employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
                teamMembers.push(employee);
            } else if (answers.employeeRole === "Engineer") {
                
                teamMembers.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
            }
            if (answers.newEmployee === true) {
                otherEmployeeData();
            } else {
                var main = fs.readFileSync("./generateHTML/index.html");
                

            console.log("The html has been generated.");
               
        }
    });
};

managerData();