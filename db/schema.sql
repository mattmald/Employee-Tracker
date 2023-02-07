DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

SELECT DATABASE();

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
  PRIMARY KEY (id)
);

CREATE TABLE employee_role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL, 
  department_id INT NULL,
  salary DECIMAL(1.2) NOT NULL,
  FOREIGN KEY (department_id)
   REFERENCES  department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  role_id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  FOREIGN KEY (role_id) 
  REFERENCES employee_role(id),
  manager_id INT  REFERENCES employee
);