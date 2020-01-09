const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
            super(name, id, email);
            this.officeNumber = officeNumber;
            this.role = "Manager"
        }
        // getRole() {
        //     return "Manager"
        // }

    getOfficeNumber() {
        return this.officeNumber
    }

    appendHTML() {
        return `<div class="card bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h3 class="card-title text-white">${this.name}</h3>
            <h4 class="card-title text-white"><i class="fas fa-laptop-code"></i> ${this.role}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item">Office Number: ${this.role}</li>
            </ul>
        </div>
    </div>`

    }
}

module.exports = Manager;