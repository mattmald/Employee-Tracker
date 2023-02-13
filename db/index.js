const connection = require('../connection.js');

class Querys {
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees() {

        return this.connection.promise().query('SELECT * FROM employees_db.employee');
    }

    findEmployees(){
        return this.connection.promise().query(`SELECT * FROM employees_db.employee WHERE id = ${id}`);
    }

    findRole() {
        return this.connection.promise().query('SELECT * FROM employees_db.employee_role');
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