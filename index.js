const { prompt } =  require("inquirer");
const db = require("./db/index");
const fs = require('fs');
require("console.table");
const connection = require("./server");

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
            },
            {
                name: 'Add Empolyee',
                value: 'ADD_EMPOLYEE'
            },
            {
                name: 'Remove Empolyee',
                value: 'REMOVE_EMPLOYEE'
            },
            {
                name: 'Update Empolyee',
                value: 'UPDATE_EMPOLYEE'
            },
            {
                name: 'Add Role',
                value: 'ADD_ROLE'
            },
            {
                name: 'End',
                value: 'END'
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

            case "Add Employee":
                addEmployee();
                break;
      
              case "Remove Employees":
                removeEmployees();
                break;
      
              case "Update Employee Role":
                updateEmployeeRole();
                break;
      
              case "Add Role":
                addRole();
                break;
      
              case "End":
                connection.end();
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

