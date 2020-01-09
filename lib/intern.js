const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }

    getSchool() {
        return this.school;
    }

    // getRole() {
    //     return "Intern"
    // }
    appendHTML() {
        return `<div class="card bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h3 class="card-title text-white">${this.name}</h3>
            <h4 class="card-title text-white"><i class="fas fa-graduation-cap"></i> ${this.role}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item">School: ${this.school}</li>
            </ul>
        </div>
    </div>`
    }
}

module.exports = Intern;