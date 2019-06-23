const isMatrixIsland = require("./isMatrixIsland");

const grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0]
];

const grid2 = [
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 1, 1]
];

describe("isMatrixIsland: ", () => {
  test("counts numbers of islands", () => {
    const res = isMatrixIsland(grid);
    const res1 = isMatrixIsland(grid2);

    expect(res).toBe(3);
    expect(res1).toBe(4);
  });
});
