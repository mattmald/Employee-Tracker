const { prompt } =  require("inquirer");
const db = require("./db/index");
const fs = require('fs');
require("console.table");
// const connection = require("./connection");

init()


function init() {
    console.log('i am here')
    start()
}

function start(){
    console.log('i am here 2')
    prompt([ 
        {
          type: 'list',
          message: 'What would you like to do?',
          name: 'choice',
          choices: [
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: 'View Roles',
                value: 'VIEW_Roles'
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

