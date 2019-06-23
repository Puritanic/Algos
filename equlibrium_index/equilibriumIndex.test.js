const {
  equilibriumIndexA,
  equilibriumIndexB,
  eqIndices
} = require("./equilibriumIndex");

describe("equilibriumIndex: ", () => {
  const arr = [-1, 3, -4, 5, 1, -6, 2, 1];
  const arr1 = [-7, 1, 5, 2, -4, 3, 0];

  test("equilibriumIndexA returns equlibrium index", () => {
    const res = equilibriumIndexA(arr);
    const res1 = equilibriumIndexA(arr1);

    expect(res).toEqual(1);
    expect(res1).toEqual(3);
  });
  test("equilibriumIndexB returns equlibrium index", () => {
    const res = equilibriumIndexB(arr);
    const res1 = equilibriumIndexB(arr1);

    expect(res).toEqual(1);
    expect(res1).toEqual(3);
  });

  test("eqIndices returns all equlibrium indices", () => {
    const res = eqIndices(arr);
    const res1 = eqIndices(arr1);

    expect(res).toEqual([1, 3, 7]);
    expect(res1).toEqual([3, 6]);
  });
});
