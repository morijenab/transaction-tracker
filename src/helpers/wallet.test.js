import { isTransactionValid, aggregateWallet } from "./wallet";
import { INCOME, EXPENSE } from "../utilities/constants";

const mockRecords1 = [
  { type: INCOME, amount: 100, note: "100 ", date: "2021-04-16", id: 0 },
  { type: INCOME, amount: 200, note: "100 ", date: "2021-04-16", id: 1 },
];

const mockRecords2 = [
  { type: INCOME, amount: 300, note: "100 ", date: "2021-04-16", id: 0 },
  { type: EXPENSE, amount: 100, note: "100 ", date: "2021-04-16", id: 1 },
];

describe("wallet", () => {
  test("should return false in missing argument conditions", () => {
    expect(isTransactionValid()).toBe(false);
  });

  test("should returns true when the type is `income`", () => {
    expect(isTransactionValid(0, INCOME, 0)).toBe(true);
  });

  test("should return false when the expense is greater than wallet", () => {
    expect(isTransactionValid(100, EXPENSE, 150)).toBe(false);
  });

  test("should returns true when the expense is lower than wallet", () => {
    expect(isTransactionValid(200, EXPENSE, 150)).toBe(true);
  });
});

describe("aggregation", () => {
  test("should return 0 in a case of missing props", () => {
    expect(aggregateWallet()).toBe(0);
  });

  test("should returns 0 when the array is empty", () => {
    expect(aggregateWallet([])).toEqual(0);
  });

  test("should returns 300 for mock data", () => {
    expect(aggregateWallet(mockRecords1)).toEqual(300);
  });

  test("should returns 200 for mock data", () => {
    expect(aggregateWallet(mockRecords2)).toEqual(200);
  });
});
