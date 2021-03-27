import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { useForm, useWatch } from "react-hook-form";

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



export const NewsForm = ({onChange}) => {
  const { register, control, handleSubmit} = useForm();

  return (
  <form onSubmit={handleSubmit(onChange)}>
    {/* register your input into the hook by invoking the "register" function */}
    {fields.map(({ name, label }, i) => {
      return (
        <div className="pt-2" key={i}>
          <label >
            <input type="checkbox" name={name} ref={register}/>
            {" "}{label}
          </label>
        </div>
      );
    })}

    <input type="submit" />
  </form>
  );
}

NewsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
