import React from "react";
import { Formik, Field, Form } from "formik";
import PropTypes from "prop-types";

const fields = [
    {
        label: "Meškanie",
        name: "delay",
        features:[
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
        ]
    },
    {
        label: "Získavanie meškania",
        name: "changeOfDelay",
        features:[
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
        ]
    }
  
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
