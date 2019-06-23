const { moveZerosToEnd, moveZeroes1, moveZeroes2 } = require("./move_zeros");

describe("moveZerosToEnd: ", () => {
  test.skip("moveZerosToEnd moves zeroes to the end of the array", () => {
    const res = moveZerosToEnd([1, 2, 0, 3, 4, 0, 5, 6, 0]);

    expect(res).toEqual([1, 2, 3, 4, 5, 6, 0, 0, 0]);
  });

  test("moveZeroes1 moves zeroes to the end of the array", () => {
    const res = moveZeroes1([1, 2, 0, 3, 4, 0, 5, 6, 0]);

    expect(res).toEqual([1, 2, 3, 4, 5, 6, 0, 0, 0]);
  });

  test("moveZeroes2 moves zeroes to the end of the array", () => {
    const res = moveZeroes2([1, 2, 0, 3, 4, 0, 5, 6, 0]);

    expect(res).toEqual([1, 2, 3, 4, 5, 6, 0, 0, 0]);
  });
});
