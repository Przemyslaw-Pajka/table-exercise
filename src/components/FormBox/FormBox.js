import { FormBoxStyled } from "./styles/FormBoxStyled.js";

export const FormBox = (props) => {

  return (
    <FormBoxStyled >
      {props.children}
    </FormBoxStyled>
  );
};
