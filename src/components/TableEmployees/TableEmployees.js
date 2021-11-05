import { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { EmployeesContext } from "../../store/employees.context";
import ReactPaginate from "react-paginate";
import { itemsPerPage } from "../../utils/itemsPerPage";
import { handlePageClick } from "../../utils/handlePageClick";
import { useReactPaginate } from "../../hooks/useReactPaginate";
import { TableHeadersEmployeesKeys } from "../TableHeadersEmployeesKeys/TableHeaders";
import { TableRowsEmployees } from "../TableRowsEmployees/TableRowsEmployees";

const TableEmployee = (props) => {
  const [data, setData] = useContext(EmployeesContext);
  const [keys, setKeys] = useState();
  const [order, setOrder] = useState("asc");
  const [employees, setEmployees] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  
  useReactPaginate(itemOffset,itemsPerPage,data,setEmployees,setPageCount)


  useEffect(() => {
    if (data) {
      setKeys(Object.keys(data[0]));
    }
  }, [data]);

  return (
    <>
      <Table responsive="xl">
        <thead>
          <tr>
            <TableHeadersEmployeesKeys keys={keys} order={order} setOrder={setOrder} data={data} setData={setData}/>
          </tr>
        </thead>
        <tbody>
         <TableRowsEmployees employees={employees} handleShow={props.handleShow}/>
        </tbody>
      </Table>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={(event)=>handlePageClick(event,data,setItemOffset)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default TableEmployee;