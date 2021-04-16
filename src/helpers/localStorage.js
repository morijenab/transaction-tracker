export const saveData = (data, id) => {
  const dataBase = readData() ?? [];

  //update a record
  if (id) {
    const otherRecords = dataBase.filter((item) => item.id !== id);
    return saveToLocalStorage([
      ...otherRecords,
      { ...data, id, transactionDate: new Date() },
    ]);
  }

  //create a new records
  saveToLocalStorage([
    ...dataBase,
    { ...data, id: dataBase.length, transactionDate: new Date() },
  ]);
};

/**
 *
 * @param {array} data
 */
export const saveToLocalStorage = (data) => {
  localStorage.setItem("transactions", JSON.stringify(data));
};

/**
 *
 * @returns array of objects
 */
export const readData = () => {
  return JSON.parse(localStorage.getItem("transactions"));
};
