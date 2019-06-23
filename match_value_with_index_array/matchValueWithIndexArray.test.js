const specialIndex = require("./matchValueWithIndexArray");

describe("matchValueWithIndexArray: ", () => {
  test("return special index value (if value at index is the same as index)", () => {
    const res = specialIndex([-22, -11, 0, 3, 5, 7]);

    expect(res).toEqual(3);
  });
});
