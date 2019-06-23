const recurseElement = (grid, x, y) => {
  if (
    x < 0 ||
    x >= grid[0].length ||
    y < 0 ||
    y >= grid.length ||
    grid[x][y] === 0
  ) {
    return;
  }

  grid[x][y] = 0;

  recurseElement(grid, x + 1, y);
  recurseElement(grid, x - 1, y);
  recurseElement(grid, x, y + 1);
  recurseElement(grid, x, y - 1);
};

const numIslands = grid => {
  let counter = 0;

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        recurseElement(grid, i, j);
        counter++;
      }
    }
  }

  return counter;
};

module.exports = numIslands;
