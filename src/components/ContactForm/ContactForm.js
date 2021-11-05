import React, { useContext } from "react";
import { Formik } from "formik";
import {ButtonSubmit} from '../ButtonSubmit/ButtonSubmit'
import { ContactFormStyled } from "./styles/ContactFormStyled";
import { DefaultInputsForm } from "../FormFields/DefaultInputsForm/DefaultInputsForm.js";
import { EmployeesContext } from "../../store/employees.context";

export const  ContactForm = () => {
  const [data,setData] = useContext(EmployeesContext)

  return (
    <Formik
    initialValues={{
      name:'',
      age: null,
      gender: '',
      company: '',
      isActive: null,
    }}
      onSubmit={(values) => {
        setData((previous)=>{
          const newIndex = (previous[0].index)+1
          return [  
            {index: newIndex,...values},
            ...previous
          ]
        })
      }}>
      {(props) => (
        <ContactFormStyled
          onReset={props.handleReset}
          onSubmit={props.handleSubmit}>
          <DefaultInputsForm values={props.values} />
          <ButtonSubmit />
        </ContactFormStyled>
      )}
    </Formik>
  );
};


