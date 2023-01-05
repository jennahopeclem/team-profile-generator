const { default: expect } = require("expect");
const Engineer = require("../lib/Engineer");
// const { test } = require("picomatch");

test("Engineer instance", () => {
  const E = new Engineer();
  expect(typeof E).toBe("object");
});

test("get github returns github", () => {
  const github = "jennahopeclem";
  const E = new Engineer(
    "Jenna",
    23,
    "jennahopeclem@gmail.com",
    "jennahopeclem"
  );
  expect(E.getGithub()).toBe("jennahopeclem");
});

test("get role method", () => {
  const role = "Engineer";
  const E = new Engineer("Jenna", 444, "jennahopeclem@gmail.com");
  expect(E.getRole()).toBe("Engineer");
  // or expect(E.getRole()).toBe(role);
});

test("get special returns github profile url", () => {
  // const spec = `https://github.com/${this.github}`;
  const spec =
    "<p>Github: <a href='https://github.com/jennahopeclem' target='_blank'>jennahopeclem</a></p>";
  const E = new Engineer(
    "Jenna",
    444,
    "jennahopeclem@gmail.com",
    "jennahopeclem"
  );
  expect(E.getSpecial()).toBe(spec);
});
