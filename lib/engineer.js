const Employee = require("./employee");

class Manager extends Engineer {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer"
    }
    appendHTML() {
        return `<div class="card bg-primary mb-3 justify-content" style="max-width: 18rem;">
        <div class="card-header">
            <h3 class="card-title text-white"${this.name}</h3>
            <h4 class="card-title text-white"><i class="fas fa-laptop-code"></i> ${getRole()}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">${this.email}</li>
                <li class="list-group-item">${this.github}</li>
            </ul>
        </div>
    </div>`
    }
}

module.exports = Engineer;