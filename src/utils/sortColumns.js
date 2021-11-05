export const sortColumns = (e,order,setOrder,data,setData) => {
    const key = e.target.dataset.buttonType;
    
    const sortedArray = data.slice(0).sort(function (a, b) {
      if (order === "asc") {
        setOrder("des");
        return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
      } else if (order === "des") {
        setOrder("asc");
        return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      }
    });

    setData(sortedArray);
  };