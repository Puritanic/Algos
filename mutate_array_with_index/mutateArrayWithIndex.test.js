const { mutate, mutateArray } = require("./mutateArrayWithIndex");

describe("mutateArrayWithIndex: ", () => {
  test("mutate returns a mutated array with the indices from the 2nd array", () => {
    const res = mutate(["a", "b", "c", "d", "e"], [2, 0, 1, 4, 3]);

    expect(res).toEqual(["b", "c", "a", "e", "d"]);
  });

  test("mutateArray returns a mutated array with the indices from the 2nd array", () => {
    const res = mutateArray(["a", "b", "c", "d", "e"], [2, 0, 1, 4, 3]);

    expect(res).toEqual(["b", "c", "a", "e", "d"]);
  });
});
