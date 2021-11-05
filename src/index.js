import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { EmployeesContextProvider } from "./store/employees.context";
import { ModalContextProvider } from './store/modal.context'

ReactDOM.render(
  <React.StrictMode>
    <EmployeesContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </EmployeesContextProvider>
  </React.StrictMode>,
  document.getElementById("container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
