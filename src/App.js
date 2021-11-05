import { useContext, useState } from "react";
import TableEmployees from "./components/TableEmployees/TableEmployees";
import { ContactForm } from './components/ContactForm/ContactForm'
import { FormBox } from './components/FormBox/FormBox'
import { MainHeading } from "./components/MainHeading/MainHeading";
import { ModalConfirmationToDeleteEmployee } from "./components/ModalConfirmationToDeleteEmployee/ModalConfirmationToDeleteEmployee";
import { ModalContext } from './store/modal.context'
import { ButtonOpenTable } from "./components/ButtonOpenTable/ButtonOpenTable";

function App() {
  const [isOpenTable, setIsOpenTable] = useState(false)
  const [isOpenModal, setIsOpenModal] = useContext(ModalContext)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <MainHeading />
      <FormBox>
        <ContactForm />
      </FormBox>
      <ButtonOpenTable isOpenTable={isOpenTable} setIsOpenTable={setIsOpenTable} />
      {isOpenModal ? <ModalConfirmationToDeleteEmployee isOpenModal={isOpenModal} show={show} handleShow={handleShow} /> : null}
      {isOpenTable ? <TableEmployees handleShow={handleShow} /> : null}
    </div>
  );
}

export default App;
