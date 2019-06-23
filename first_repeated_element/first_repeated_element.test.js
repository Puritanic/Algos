const firstRepeatedElement = require("./first_repeated_element");

describe("firstRepeatedElement: ", () => {
  test("finds first repeated element", () => {
    const res = firstRepeatedElement([5, 3, 4, 5, 6, 23, 41]);
    const res1 = firstRepeatedElement([5, 3, 4, 12, 6, 23, 41, 3, 4, 12]);
    const res2 = firstRepeatedElement([5, 3, 4, 12, 4, 5]);

    expect(res).toBe(5);
    expect(res1).toBe(3);
    expect(res2).toBe(5);
  });
});
