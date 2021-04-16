export const saveData = (data, id) => {
  const dataBase = readData() ?? [];

  //update DB
  if (id) {
    const otherRecords = dataBase.filter((item) => item.id !== id);
    return saveToLocalStorage([...otherRecords, { ...data, id: id }]);
  }

  //create a new records
  saveToLocalStorage([...dataBase, { ...data, id: dataBase.length }]);
};

const saveToLocalStorage = (data) => {
  localStorage.setItem("transactions", JSON.stringify(data));
};

/**
 *
 * @returns array of objects
 */
export const readData = () => {
  return JSON.parse(localStorage.getItem("transactions"));
};
