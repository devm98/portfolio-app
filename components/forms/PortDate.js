import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Button, FormGroup, Label } from "reactstrap";
import vi from "date-fns/locale/vi";
registerLocale("vi", vi);

function PortDate({ label, maxDate, canBeDisabled, ...rest }) {
  const {
    field,
    form: { touched, errors },
  } = rest;
  const [date, setDate] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  const setFieldValueAndTouched = (value, touched) => {
    const { setFieldValue, setFieldTouched } = rest.form;
    const { name } = rest.field;
    setFieldValue(name, value);
    setFieldTouched(name, touched, true);
  };

  const handleChange = (value) => {
    setDate(value);
    setFieldValueAndTouched(value, true)
  };

  const toggleDate = (value) => {
    setIsHidden(!isHidden);
     setFieldValueAndTouched(value, true);
  };

  return (
    <FormGroup>
      <Label>{label}</Label>
      <div className="input-group">
        {!isHidden && (
          <DatePicker
            locale="vi"
            dateFormat="dd/MM/yyyy"
            selected={date}
            showMonthDropdown
            showYearDropdown
            maxDate={new Date()}
            onChange={handleChange}
            className="form-control"
          />
        )}
      </div>
      {!isHidden && canBeDisabled && <Button onClick={() => toggleDate(null)}>Still Working Here ...</Button>}

      {canBeDisabled && isHidden && (
        <>
          <span>Still Working Here ...</span>
          <Button onClick={() => toggleDate(date)}>Set End Date</Button>
        </>
      )}

      {touched[field.name] && errors[field.name] && <div className="error text-danger">{errors[field.name]}</div>}
    </FormGroup>
  );
}

export default PortDate;
