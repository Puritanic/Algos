const shiftArray = require("./shiftArray");

describe("Shift/Rotate array", () => {
  test("rotates passed array", () => {
    const arr = [5, 6, 7, 8];

    const res = shiftArray(arr);

    expect(res).toEqual([8, 7, 6, 5]);
  });
});
