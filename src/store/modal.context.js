import { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <ModalContext.Provider value={[isOpenModal, setIsOpenModal]}>
      {props.children}
    </ModalContext.Provider>
  );
};
