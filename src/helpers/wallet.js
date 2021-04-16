/**
 *
 * @param {array} data
 * @returns number
 */
export const aggregateWallet = (data = []) => {
  if (!data || !Array.isArray(data) || data.length < 1) return 0;

  const aggregate = data.reduce((acc, curr) => {
    if (curr?.type === "income") return acc + curr?.amount;
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
  if (!wallet || !type || typeof type !== "number") return false;
  if (type === "income") return true;
  if (type === "expense" && value > wallet) return false;
  return true;
};
