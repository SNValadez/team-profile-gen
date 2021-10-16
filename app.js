// Need to add inquirer
const fs = require("fs");
const inquirer = require("inquirer");

let manager; 
let teamTitle;

const Employee = require("./lib/Employee1");
const Engineer = require("./lib/Engineer1");
const Intern = require("./lib/Intern1");
const Manager = require("./lib/Manager1");

const teamMembers = [];

function managerData() {
    inquirer.prompt([
        {   // Fill html with teamName.
            type: "input",
            message: "What is the name of this team/project?",
            name: "teamTitle"
        },
        {   // There is only 1 manager for a team.
            type: "input",
            message: "Who is the manager?",
            name: "managerName"
        },
        {   // Employee ID.
            type: "input",
            message: "What is manager ID?",
            name: "managerID"
        },
        {   // Employee Email.
            type: "input",
            message: "What is manager email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }]).then(managerAnswers => {
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamTitle = managerAnswers.teamTitle;
            console.log("Now we will ask for employee information.")
            lesserEmployeeData();
        });
    }