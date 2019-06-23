const recursiveRange = require("./recursive_range");

describe("recursiveRange: ", () => {
  test("returns non-inclusive range between passed integer arguments", () => {
    const res = recursiveRange(1, 10);
    const res1 = recursiveRange(45, 50);

    expect(res).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    expect(res1).toEqual([46, 47, 48, 49]);
  });
});
