const { prompt } =  require("inquirer");
const db = require("./db");
require("console.table");

init()


function init() {
    start()
}

function start(){
    prompt([ 
        {
          type: 'list',
          message: 'What would you like to do?',
          name: 'choice',
          choice: [
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: 'View All Employees By Department',
                value: 'VIEW_EMPLOYEES_BY_DEPARTMENT'
            }
          ]
        }
    ]).then(view => {
        let choice = view.choice
        switch(choice){
            case "VIEW_EMPLOYEES":
                viewEmployees()
            break;

            case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                viewEmployeesByDepartment()
            break;
        }
    }) 
}

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;

        console.table(employees);
    })
}

