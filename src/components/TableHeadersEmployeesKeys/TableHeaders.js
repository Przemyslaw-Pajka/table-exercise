import { v4 } from "uuid";
import { sortColumns } from "../../utils/sortColumns";
import { EmployeesContext } from "../../store/employees.context";
import { useContext } from "react";

export const TableHeadersEmployeesKeys = ({keys,order,setOrder}) => {
  const [data,setData] = useContext(EmployeesContext)
  
  return (
        keys
            ? keys.map((keyHeader) => (
                <th key={v4()}>
                  <button
                    type="button"
                    data-button-type={keyHeader}
                    onClick={(e) => sortColumns(e,order,setOrder,data,setData)}>{`${keyHeader}`}</button>
                </th>
              ))
            : null
    );
        }



