const { default: expect } = require("expect");
const Employee = require("../lib/Employee");

test("Employee instance", () => {
  const E = new Employee();
  expect(typeof E).toBe("object");
});

test("Setting name of employee", () => {
  const name = "Jenna";
  const E = new Employee(name);
  expect(E.name).toBe(name);
});

test("Testing employee id", () => {
  const id = "12345";
  const E = new Employee("name", id);
  expect(E.id).toBe(id);
});

test("Employee email", () => {
  const email = "email";
  const E = new Employee("name", "id", email);
  expect(E.email).toBe(email);
});

test("get name method", () => {
  const name = "Jeremy";
  const E = new Employee(name);
  expect(E.getName()).toBe(name);
});

test("get id method", () => {
  const id = 1234;
  const E = new Employee("Jeremy", id);
  expect(E.getId()).toBe(id);
});

test("get email method", () => {
  const email = "email@email.com";
  const E = new Employee("Jeremy", 444, email);
  expect(E.getEmail()).toBe(email);
});

test("get role method", () => {
  const role = "Employee";
  const E = new Employee("Jeremy", 444, "jeremy@email.com");
  expect(E.getRole()).toBe(role);
});
