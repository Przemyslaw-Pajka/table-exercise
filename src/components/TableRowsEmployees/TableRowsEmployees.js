import { v4 } from "uuid";
import { ButtonDeleteEmployee } from "../ButtonDeleteEmployee/ButtonDeleteEmployee";

export const TableRowsEmployees = (props) => {
  return (
    props.employees
      ? props.employees.map((item) => (
        <tr key={v4()}>
          {
            Object.values(item).map(currentValue => <td key={v4()}>{String(currentValue)}</td>)
          }
          <td>
            <ButtonDeleteEmployee item={item} handleShow={props.handleShow} />
          </td>
        </tr>
      ))
      : null

  )
}