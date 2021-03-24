import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';


const fields = [
  {
    label: 'MHD Prešov',
    name: 'mhdPresov',
  },
  {
    label: 'SAD Prešov',
    name: 'sadPresov',
  },
  {
    label: 'Vlaky',
    name: 'vlaky',
  },
  {
    label: 'Dopravné obmedzenia',
    name: 'traffic',
  },
  {
    label: 'Zastávky MHD',
    name: 'mhdStops',
  },
  {
    label: 'Zastávky SAD',
    name: 'sadStops',
  },
  {
    label: 'Zastávky vlakov',
    name: 'trainStops',
  }
]



export const NewsForm = ({onChange}) => (

    <Formik
      initialValues={{}}
      handleChange={(v) => {
        debugger
        console.log(v)
      }}
      onSubmit={async (values) => {
        onChange(values)
      }}
    >
      <Form>
        {
          fields.map(({name, label}, i) => {
            return <label key={i}>
            <Field type="checkbox" name={name}/>
            {label}
            </label>
          })
        }
        <button type="submit">Submit</button>
      </Form>
    </Formik>
)

NewsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
}