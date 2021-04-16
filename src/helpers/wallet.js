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
