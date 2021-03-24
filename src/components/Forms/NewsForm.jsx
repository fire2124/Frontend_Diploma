import React from "react";
import { Formik, Field, Form } from "formik";
import PropTypes from "prop-types";

const fields = [
  {
    label: "MHD Prešov",
    name: "mhdPresov",
  },
  {
    label: "SAD Prešov",
    name: "sadPresov",
  },
  {
    label: "Vlaky",
    name: "trains",
  },
  {
    label: "Dopravné obmedzenia",
    name: "traffic",
  },
  {
    label: "Zastávky MHD",
    name: "mhdStops",
  },
  {
    label: "Zastávky SAD",
    name: "sadStops",
  },
  {
    label: "Zastávky vlakov",
    name: "trainStops",
  },
];

export const NewsForm = ({ onChange }) => (
  <Formik
    initialValues={{}}
    handleChange={async (v) => {
      console.log(v);
    }}
    onSubmit={async (values) => {
      console.log(values);
      onChange(values);
    }}
  >
    <Form>
      {fields.map(({ name, label }, i) => {
        return (
          <div className="pt-2">
            <label key={i}>
              <Field type="checkbox" name={name} />
              {label}
            </label>
          </div>
        );
      })}
      <button type="submit" className="pt-10 pl-5">
        Submit
      </button>
    </Form>
  </Formik>
);

NewsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
