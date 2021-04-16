import { isTransactionValid } from "./wallet";

describe("wallet", () => {
  test("should return false in missing argument conditions", () => {
    expect(isTransactionValid()).toBe(false);
  });

  test("should returns true when the type is `income`", () => {
    expect(isTransactionValid(0, "income", 0)).toBe(true);
  });

  test("should return false when the expense is greater than wallet", () => {
    expect(isTransactionValid(100, "expense", 150)).toBe(false);
  });

  test("should returns true when the expense is lower than wallet", () => {
    expect(isTransactionValid(200, "expense", 150)).toBe(true);
  });
});
