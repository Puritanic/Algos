const { capitalize, capitalize2 } = require("./index");

describe("Capitalize algorithm: ", () => {
  test("capitalizes the first letter of every word in a sentence", () => {
    expect(capitalize("hi there, how is it going?")).toEqual(
      "Hi There, How Is It Going?"
    );
    expect(capitalize2("hi there, how is it going?")).toEqual(
      "Hi There, How Is It Going?"
    );
  });

  test("capitalizes the first letter", () => {
    expect(capitalize("i love breakfast at bill miller bbq")).toEqual(
      "I Love Breakfast At Bill Miller Bbq"
    );
    expect(capitalize2("i love breakfast at bill miller bbq")).toEqual(
      "I Love Breakfast At Bill Miller Bbq"
    );
  });
});
