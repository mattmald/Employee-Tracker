const connection = require('../server.js');

class Querys {
constructor(connection) {
    this.connection = connection
}
 findAllEmployees(){ 
    return this.connection.promise().query('SELECT COUNT(id) AS total_count FROM employees_db GROUP BY department');
 }
}

module.exports = new Querys(connection);