import { useField, Field } from "formik";
import { MyOwnFieldStyled, Label } from "./styles/MyOwnField.styled";

export const MyOwnField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <MyOwnFieldStyled>
      <Label
        htmlFor={props.id || props.name}>
        {label}
      </Label>
      <Field
        as={props.as}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </MyOwnFieldStyled>
  );
};
