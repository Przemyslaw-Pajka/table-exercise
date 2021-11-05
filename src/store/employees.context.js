import { useState, createContext, useEffect } from "react";
import getData from "../utils/getData";

export const EmployeesContext = createContext();

export const EmployeesContextProvider = (props) => {
  const [data, setData] = useState(localStorage.getItem('employees')? JSON.parse(localStorage.getItem('employees')) : null );
  const [itemToDelete,setItemToDelete] = useState(null)
 
  useEffect(() => {
    if(!localStorage.getItem('dataWasFetched')) {
    async function fetchData() {
      const dat = await getData();
      setData(dat);
      localStorage.setItem('dataWasFetched',true)
    }
    fetchData();
  }
  }, []);

  useEffect(() => {
    if(data){
      localStorage.setItem('employees',JSON.stringify(data))
    }
  }, [data]);

  return (
    <EmployeesContext.Provider value={[data, setData,itemToDelete,setItemToDelete]}>
      {props.children}
    </EmployeesContext.Provider>
  );
};
