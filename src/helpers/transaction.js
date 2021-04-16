import { readData, saveToLocalStorage } from "./localStorage";

/**
 *
 * @param {number} id
 */
export const deleteTransaction = (id) => {
  if (typeof id !== "number") return;

  const records = readData();

  if (!records || !Array.isArray(records) || records.length < 1) return;

  const otherRecords = records.filter((item) => item.id !== id);

  saveToLocalStorage(otherRecords);
};

/**
 *
 * @param {array} arr
 * @returns array
 */
export const sortByDate = (arr = []) => {
  if (!Array.isArray(arr) || arr.length < 1) return arr;
  return arr.sort((a, b) => a?.transactionDate - b?.transactionDate);
};
