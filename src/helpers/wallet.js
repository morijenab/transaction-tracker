import { INCOME, EXPENSE } from "../utilities/constants";
/**
 *
 * @param {array} data
 * @returns number
 */
export const aggregateWallet = (data = []) => {
  if (!data || !Array.isArray(data) || data.length < 1) return 0;

  const aggregate = data.reduce((acc, curr) => {
    if (curr?.type === INCOME) return acc + curr?.amount;
    return acc - curr.amount;
  }, 0);

  return aggregate;
};

/**
 *
 * @param {number} wallet
 * @param {string} type
 * @param {number} value
 * @returns boolean
 */
export const isTransactionValid = (wallet, type, value) => {
  if (typeof wallet !== "number" || !type || typeof value !== "number")
    return false;
  if (type === INCOME) return true;
  if (type === EXPENSE && value > wallet) return false;
  return true;
};
