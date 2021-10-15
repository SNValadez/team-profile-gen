// Need to add inquirer
const fs = require("fs");
const inquirer = require("inquirer");

let manager; 
let teamTitle;

const Employee = require("./lib/Employee1");
const Engineer = require("./lib/Engineer1");
const Intern = require("./lib/Intern1");
const Manager = require("./lib/Manager1");

const teamMates = [];

