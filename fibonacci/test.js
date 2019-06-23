const { fib, fibonacci } = require("./index");

describe("Fibonacci: ", () => {
  test("calculates correct fibonacci value for 1", () => {
    expect(fib(1)).toEqual(1);
    expect(fibonacci(1)).toEqual(1);
  });

  test("calculates correct fibonacci value for 2", () => {
    expect(fib(2)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
  });

  test("calculates correct fibonacci value for 3", () => {
    expect(fib(3)).toEqual(2);
    expect(fibonacci(3)).toEqual(2);
  });

  test("calculates correct fibonacci value for 4", () => {
    expect(fib(4)).toEqual(3);
    expect(fibonacci(4)).toEqual(3);
  });

  test("calculates correct fibonacci value for 15", () => {
    expect(fib(39)).toEqual(63245986);
    expect(fibonacci(39)).toEqual(63245986);
  });
});
