const medianOf2SortedArrays = require("./medianFrom2Arrays");

describe("medianOf2SortedArrays: ", () => {
  const arr1 = [2, 5, 10, 13, 15];
  const arr2 = [1, 3, 7, 11];

  const arr3 = [2, 5, 10, 13];
  const arr4 = [1, 3, 7, 11];

  const arr5 = [1, 2, 3, 4, 5];
  const arr6 = [1, 2, 3, 4, 5, 6];

  test("finds median value of the two sorted arrays", () => {
    const res = medianOf2SortedArrays(arr1, arr2);
    const res1 = medianOf2SortedArrays(arr3, arr4);
    const res2 = medianOf2SortedArrays(arr5, arr6);

    expect(res).toBe(7);
    expect(res1).toBe(6);
    expect(res2).toBe(3);
  });
});
