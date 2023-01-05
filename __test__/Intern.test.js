const { default: expect } = require("expect");
const Intern = require("../lib/Intern");

test("Intern instance", () => {
  const i = new Intern("Stephanie", 777, "stephanie@gmail.com");
  expect(typeof i).toBe("object");
});

test("get school method", () => {
  const i = new Intern("Stephanie", 777, "stephanie@gmail.com");
  const school = this.school;
  expect(i.getSchool()).toBe(school);
});

test("getRole", () => {
  const role = "Intern";
  const i = new Intern("Stephanie", 777, "stephanie@gmail.com");
  // expect(i.getRole()).toBe("Intern");
  expect(i.getRole()).toBe(role);
});

test("get special returns school", () => {
  const spec = `<p>School: ${this.school}</p>`;
  const i = new Intern("Stephanie", 777, "stephanie@gmail.com");
  expect(i.getSpecial()).toBe(spec);
});
