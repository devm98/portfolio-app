import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import PortInput from "../forms/PortInput";
import PortDate from "../forms/PortDate";
import dayjs from "dayjs";
import Link from 'next/link';

const validateInputs = (values) => {
  const errors = {};
  for (const key in values) {
    const value = values[key];
    if (key !== "startDate" && key !== "endDate") {
      if (!value) {
        errors[key] = `Field ${key} is required !`;
      }
    }
  }

  const { startDate, endDate } = values;
  if (startDate && endDate && dayjs(endDate).isBefore(dayjs(startDate))) {
    errors.endDate = "End date can't be before start date";
  }

  return errors;
};

function PortfolioCreateForm() {
  const INIT_VALUES = {
    title: "",
    company: "",
    location: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Card className="create-portfolio border-radius">
      <CardBody>
        <h1>Create portfolio</h1>
        <hr />
        <Formik initialValues={INIT_VALUES} validate={validateInputs} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="title" label="Title" component={PortInput} />
              <Field type="text" name="company" label="Company" component={PortInput} />
              <Field type="text" name="location" label="Location" component={PortInput} />
              <Field type="text" name="position" label="Position" component={PortInput} />
              <Field type="textarea" name="description" label="Description" component={PortInput} />
              <Field name="startDate" label="Start Date" component={PortDate} />
              <Field name="endDate" label="End Date" canBeDisabled component={PortDate} />
              <hr />
              <div className="d-flex justify-content-end">
                <Button type="submit" color="success" disabled={isSubmitting} className="me-3">
                  Submit
                </Button>
                <Link href="/portfolios">
                  <Button type="button" color="danger" outline disabled={isSubmitting}>
                    Close
                  </Button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}

export default PortfolioCreateForm;
