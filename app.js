const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const writeFileAsync = util.promisify(fs.writeFile);

const employeeArray = [];
var employee;


function newEmployee() {
    inquirer.prompt([{
            type: "input",
            message: "What is your name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your ID",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email",
            name: "email"
        },
        {
            type: "list",
            message: "What is your role",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then(function(response) {
        if (response.role === "Manager") {
            managerRole(response);
        } else if (response.role === "Engineer") {
            engineerRole(response);
        } else if (response.role === "Intern") {
            internRole(response);
        }
    }).catch(function(err) {
        console.log(err);
    })
}

function managerRole(response) {
    inquirer.prompt([{
        type: "input",
        message: "What is your office number",
        name: "officeNumber"
    }]).then(function(officeNumber) {
        const manager = new Manager(response.name, response.id, response.email, officeNumber.officeNumber);

        employeeArray.push(manager.appendHTML());

        nextEmployee();
    })
}


function engineerRole(response) {
    inquirer.prompt([{
        type: "input",
        message: "What is your github",
        name: "github"
    }]).then(function(github) {
        const engineer = new Engineer(response.name, response.id, response.email, github.github);

        employeeArray.push(engineer.appendHTML());

        nextEmployee();
    })
}

function internRole(response) {
    inquirer.prompt([{
        type: "input",
        message: "What is your school",
        name: "school"
    }]).then(function(school) {
        const intern = new Intern(response.name, response.id, response.email, school.school);

        employeeArray.push(intern.appendHTML());

        nextEmployee();
    })
}

function nextEmployee() {
    inquirer.prompt([{
        type: "list",
        message: "Do you want to add another employee?",
        name: "addEmployee",
        choices: ["yes", "no"]
    }]).then(function(response) {
        if (response.addEmployee === "yes") {
            newEmployee()
        } else {
            employee = employeeArray.join("");
            generateHTML()
        }
    })
}

function generateHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/7f4d2b3b23.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <div class="jumbotron">
            <h1 class="text-center">My Team</h1>
        </div>
        <div class="container">
        <div class="row row-cols-1 row-cols-md-3 justify-content-around">
            ${employee}
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
        </script>
    
    </body>
    
    </html>`
    writeFileAsync("./output/team.html", html, "utf8");
};

newEmployee();