const { steps, steps2 } = require("./index");

describe("Steps: ", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("steps called with n = 1", () => {
    steps(1);
    expect(console.log.mock.calls[0][0]).toEqual("#");
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("steps2 called with n = 1", () => {
    steps2(1);
    expect(console.log.mock.calls[0][0]).toEqual("#");
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("steps called with n = 2", () => {
    steps(2);
    expect(console.log.mock.calls[0][0]).toEqual("# ");
    expect(console.log.mock.calls[1][0]).toEqual("##");
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test("steps2 called with n = 2", () => {
    steps2(2);
    expect(console.log.mock.calls[0][0]).toEqual("# ");
    expect(console.log.mock.calls[1][0]).toEqual("##");
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test("steps called with n = 3", () => {
    steps(3);
    expect(console.log.mock.calls[0][0]).toEqual("#  ");
    expect(console.log.mock.calls[1][0]).toEqual("## ");
    expect(console.log.mock.calls[2][0]).toEqual("###");
    expect(console.log.mock.calls.length).toEqual(3);
  });

  test("steps2 called with n = 3", () => {
    steps2(3);
    expect(console.log.mock.calls[0][0]).toEqual("#  ");
    expect(console.log.mock.calls[1][0]).toEqual("## ");
    expect(console.log.mock.calls[2][0]).toEqual("###");
    expect(console.log.mock.calls.length).toEqual(3);
  });
});
