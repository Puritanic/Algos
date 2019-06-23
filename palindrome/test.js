const { palindrome, palindrome1 } = require("./index");

describe("Palindrome", () => {
  test('"aba" is a palindrome', () => {
    expect(palindrome("aba")).toBeTruthy();
    expect(palindrome1("aba")).toBeTruthy();
  });

  test('" aba" is not a palindrome', () => {
    expect(palindrome(" aba")).toBeFalsy();
    expect(palindrome1(" aba")).toBeFalsy();
  });

  test('"aba " is not a palindrome', () => {
    expect(palindrome("aba ")).toBeFalsy();
    expect(palindrome1("aba ")).toBeFalsy();
  });

  test('"greetings" is not a palindrome', () => {
    expect(palindrome("greetings")).toBeFalsy();
    expect(palindrome1("greetings")).toBeFalsy();
  });

  test('"1000000001" a palindrome', () => {
    expect(palindrome("1000000001")).toBeTruthy();
    expect(palindrome1("1000000001")).toBeTruthy();
  });

  test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome("Fish hsif")).toBeFalsy();
    expect(palindrome1("Fish hsif")).toBeFalsy();
  });

  test('"pennep" a palindrome', () => {
    expect(palindrome("pennep")).toBeTruthy();
    expect(palindrome1("pennep")).toBeTruthy();
  });
});
