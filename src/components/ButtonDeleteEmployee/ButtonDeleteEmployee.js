import { EmployeesContext } from "../../store/employees.context";
import { useContext } from "react";
import { ModalContext } from "../../store/modal.context";
import { ButtonDeleteEmployeeStyled } from "./styles/ButtonDeleteEmployeeStyled";

export const ButtonDeleteEmployee = ({item,handleShow}) => {
    const [data,setData,itemToDelete,setItemToDelete] = useContext(EmployeesContext)
    const [isOpenModal,setIsOpenModal] = useContext(ModalContext)

    return (
        <ButtonDeleteEmployeeStyled 
       onClick={()=>{
         handleShow(data,setData,item); 
         setItemToDelete(item);
        setIsOpenModal(!isOpenModal)}} >
        DELETE
      </ButtonDeleteEmployeeStyled>
    )
}