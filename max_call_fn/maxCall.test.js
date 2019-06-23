const maxCall = require("./maxCall");

describe("maxCall: ", () => {
  test("", () => {
    const fn = jest.fn();
    const func = maxCall(fn, 3);

    func();
    func();
    func();
    func();
    func();

    expect(fn).toHaveBeenCalledTimes(3);
  });
});
