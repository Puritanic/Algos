const {
  flatten,
  iterativeFlatten,
  reduceFlatten
} = require("./deepFlattenArray");

describe("deepFlattenArray: ", () => {
  test("flatten flattens passed array", () => {
    const flat = flatten([[1, 2, [3, [4]]]]);

    expect(flat).toEqual([1, 2, 3, 4]);
  });

  test("iterativeFlatten flattens passed array", () => {
    const flat = iterativeFlatten([[1, 2, [3, [4]]]]);

    expect(flat).toEqual([1, 2, 3, 4]);
  });

  test("reduceFlatten flattens passed array", () => {
    const flat = reduceFlatten([[1, 2, [3, [4]]]]);

    expect(flat).toEqual([1, 2, 3, 4]);
  });
});
