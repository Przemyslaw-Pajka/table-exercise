export const deleteSelectedEmployee = (data,setData,item) => {
    const newArrayOfEmployees= data.filter((currentItem) => {
        return currentItem.index !== item.index;
      });

    setData(newArrayOfEmployees);
}