const inquirer = require("inquier");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/manager");
const Manager = require("./lib/intern");
const Manager = require("./lib/engineer");
const writeFileAsync = util.promisify(fs.writeFile);

const employeeArray = [];