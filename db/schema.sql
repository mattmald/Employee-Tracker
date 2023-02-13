DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_role (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL, 
  department_id INT NOT NULL,
  salary DECIMAL NOT NULL,
  FOREIGN KEY (department_id)
   REFERENCES  department(id)
   ON DELETE SET NULL,
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  role_id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id) 
  REFERENCES employee_role(id),
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);