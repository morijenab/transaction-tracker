export const saveData = (dataBase, data, id) => {
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
