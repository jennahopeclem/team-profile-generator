const { default: expect } = require("expect");
const Manager = require("../lib/Manager");

test("Manager instance", () => {
  const M = new Manager();
  expect(typeof M).toBe("object");
});

test("get role method", () => {
  const role = "Manager";
  const M = new Manager("Jared", 555, "jared@email.com");
  expect(M.getRole()).toBe("Manager");
});

test("get special returns office number", () => {
  const spec = `<p>Office Number: ${this.officeNum}</p>`;
  const M = new Manager("Jared", 555, "jared@email.com");
  expect(M.getSpecial()).toBe(spec);
});
