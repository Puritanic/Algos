const { reverse, reverse2, reverse3 } = require("./index");

describe("Reverse string", () => {
  test("Reverse reverses a string", () => {
    expect(reverse("abcd")).toEqual("dcba");
    expect(reverse2("abcd")).toEqual("dcba");
    expect(reverse3("abcd")).toEqual("dcba");
  });

  test("Reverse reverses a string", () => {
    expect(reverse("  abcd")).toEqual("dcba  ");
    expect(reverse2("  abcd")).toEqual("dcba  ");
    expect(reverse3("  abcd")).toEqual("dcba  ");
  });
});
