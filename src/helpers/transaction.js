import { readData, saveToLocalStorage } from "./localStorage";

/**
 *
 * @param {number} id
 */
export const deleteTransaction = (id) => {
  if (!id) return;

  const records = readData();

  if (!records || !Array.isArray(records) || records.length < 1) return;

  const otherRecords = records.filter((item) => item.id !== id);

  saveToLocalStorage(otherRecords);
};
