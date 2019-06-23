const { vowels, vowels2 } = require("./index");

describe("Vowels: ", () => {
  test("returns the number of vowels used", () => {
    expect(vowels("aeiou")).toEqual(5);
    expect(vowels2("aeiou")).toEqual(5);
  });

  test("returns the number of vowels used", () => {
    expect(vowels("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
    expect(vowels2("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
  });

  test("returns the number of vowels used", () => {
    expect(vowels("bcdfghjkl")).toEqual(0);
    expect(vowels2("bcdfghjkl")).toEqual(0);
  });
});
