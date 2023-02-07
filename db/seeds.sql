USE employees_db;

INSERT INTO department (department_name)
VALUES ("Sales");
INSERT INTO department (department_name)
VALUES ("Engineering");
INSERT INTO department (department_name)
VALUES ("Finance");
INSERT INTO department (department_name)
VALUES ("Legal");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Sales Lead", 100, 1);
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Lead Engineer", 200, 2);
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Software Engineer", 300, 2);
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Accountant", 400, 3);
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Legal Team Lead", 500, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Maldonado", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elon", "Musks", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeff", "Bezos", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Cruise", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("king", "Hairy", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Yeet", "Yeeter", 1, 2);