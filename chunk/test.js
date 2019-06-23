const { chunk, chunk2, chunk3 } = require("./index");

describe("Chunk algo: ", () => {
  test("chunk divides an array of 10 elements with chunk size 2", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunk(arr, 2);
    const chunked2 = chunk2(arr, 2);
    const chunked3 = chunk3(arr, 2);

    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
    expect(chunked2).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
    expect(chunked3).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  test("chunk divides an array of 3 elements with chunk size 1", () => {
    const arr = [1, 2, 3];
    const chunked = chunk(arr, 1);
    const chunked2 = chunk2(arr, 1);
    const chunked3 = chunk3(arr, 1);

    expect(chunked).toEqual([[1], [2], [3]]);
    expect(chunked2).toEqual([[1], [2], [3]]);
    expect(chunked3).toEqual([[1], [2], [3]]);
  });

  test("chunk divides an array of 5 elements with chunk size 3", () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunk(arr, 3);
    const chunked2 = chunk2(arr, 3);
    const chunked3 = chunk3(arr, 3);

    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
    expect(chunked2).toEqual([[1, 2, 3], [4, 5]]);
    expect(chunked3).toEqual([[1, 2, 3], [4, 5]]);
  });

  test("chunk divides an array of 13 elements with chunk size 5", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = chunk(arr, 5);
    const chunked2 = chunk2(arr, 5);
    const chunked3 = chunk3(arr, 5);

    expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
    expect(chunked2).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
    expect(chunked3).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
  });
});
