import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function PortInput({
  label,
  type,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type={type} {...field} {...props} />
      {touched[field.name] && errors[field.name] && <div className="error text-danger">{errors[field.name]}</div>}
    </FormGroup>
  );
}

export default PortInput;
