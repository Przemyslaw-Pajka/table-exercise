import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { deleteSelectedEmployee } from "../../utils/deleteSelectedEmployee";
import { EmployeesContext } from "../../store/employees.context";
import { ModalContext } from "../../store/modal.context";

export const ModalConfirmationToDeleteEmployee = (props) => {
  const [data, setData, itemToDelete] = useContext(EmployeesContext)
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext)

  return (
    <Modal show={props.isOpenModal} onHide={setIsModalOpen}>
      <Modal.Header closeButton>
        <Modal.Title>Usunięcie pracownika</Modal.Title>
      </Modal.Header>
      <Modal.Body>Czy chcesz usunąć tego pracownika z listy?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => { setIsModalOpen(!isModalOpen); deleteSelectedEmployee(data, setData, itemToDelete) }}>
          Tak
        </Button>
        <Button variant="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
          Nie
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
