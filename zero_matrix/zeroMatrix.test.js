const zeroMatrix = require("./zeroMatrix");

describe("zeroMatrix: ", () => {
  test("zeroMatrix doesn't mutate arrays with no zeroes", () => {
    const nonZero = zeroMatrix([[1, 2], [3, 4], [5, 6]]);

    expect(nonZero).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test("zeroMatrix mutate only arrays with zeroes", () => {
    const nonZero = zeroMatrix([[1, 2, 0], [3, 4, 0], [5, 6, 3], [3, 4, 0]]);

    expect(nonZero).toEqual([[0, 0, 0],
                             [0, 0, 0],
                             [5, 6, 0],
                             [0, 0, 0]
    ]);
  });
});
