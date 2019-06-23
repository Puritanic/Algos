const findMissingNumberInRange = require("./find_missing_number_in_range");

describe("findMissingNumberInRange: ", () => {
  test("returns missing number from range", () => {
    const result = findMissingNumberInRange([1, 2, 3, 5, 6]);

    expect(result).toBe(4);
  });

  test("returns zero if no missing number", () => {
    const result = findMissingNumberInRange([1, 2, 3, 4, 5, 6]);

    expect(result).toBe(0);
  });
});
