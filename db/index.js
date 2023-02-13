const connection = require('../server.js');

class Querys {
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees() {
        return this.connection.promise().query('SELECT COUNT(id) AS total_count FROM employees_db GROUP BY department');
    }

    findEmployees(){
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, department.department_name, employee_role.title, employee_role.salary, employee.manager_id FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id LEFT JOIN department ON employee_role.department_id = department.id')
    }

    findRole() {
        return this.connection.promise().query('SELECT employee_role.id, employee_role.title, department.department_name, employee_role.salary FROM employee_role LEFT JOIN department ON employee_role.department_id = department.id;');
    }

    findDeparment() {
        return this.connection.promise().query('SELECT * FROM employees_db.department');
    }

    addEmployee() {
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('${first_name}', '${last_name}', ${role_id}, ${manager_id}`);
    }

    addRole() {
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('${first_name}', '${last_name}', ${role_id}, ${manager_id})`);
    }

    addDeparment() {
        return this.connection.promise().query(`INSERT INTO department (department_name) VALUES("${department_name}")`)
    }

    updaterole() {
        return this.connection.promise().qurey(`UPDATE employee SET role_id = ${updateRole} WHERE id = ${employID}`)
    }
    
}

module.exports = new Querys(connection);