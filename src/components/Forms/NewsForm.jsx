import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Label = styled.div`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;

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
  const { register, getValues} = useForm();

  return (
  <form onChange={() => onChange(getValues())}>
    {/* register your input into the hook by invoking the "register" function */}
    {fields.map(({ name, label }, i) => {
      return ( <Label as={`label`} className="pt-2 block" key={i} >
            <input type="checkbox" name={name} ref={register}/>
            {" "}{label}
          </Label>
      );
    })}
  </form>
  );
}

NewsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
