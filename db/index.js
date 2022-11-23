const connection = require('./connection')



class DB {
    constructor(connection) {
    this.connection = connection
}



findAllEmployees() {
    return this.connection.promoise().query(
        "Select employee.id, employee.first_name join depatemrnt"
    )
}

}


module.exports = new DB(connection);