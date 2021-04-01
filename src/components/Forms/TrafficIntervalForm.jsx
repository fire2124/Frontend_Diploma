import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const fields = [
  {
    label: "5:00-9:00",
    value: "5-9",
  },
  {
    label: "14:00-18:00",
    value: "14-18",
  },
  {
    label: "15 minút",
    value: "15min",
  },
  {
    label: "1 hodina",
    value: "1hour",
  },
  {
    label: "3 hodiny",
    value: "3hours",
  },
  {
    label: "1 deň",
    value: "1day",
  },
  {
    label: "1 týždeň",
    value: "1week",
  },
  {
    label: "1 mesiac",
    value: "1month",
  },
];


const Label = styled.div`
  white-space: nowrap;
  padding: 0.5rem 1rem;
  &:hover{
    cursor: pointer;
  }
  input:checked + & {
    border-top: 0.75rem solid #7e7bff;
  }
`

export const TrafficIntervalForm = ({ onChange }) => {
  const { register, getValues } = useForm({
    defaultValues: {
      interval: fields[3].value,
    },
  });
  return (
    <form onChange={() => onChange(getValues())} className={`mt-5 pt-5 mx-auto text-center`}>
      {fields.map(({ label, value }, i) => {
        return (
            <>
                <input
                name="interval"
                type="radio"
                ref={register}
                value={value}
                id={i}
                style={{visibility:'hidden'}}
              />
            <Label as={`label`} key={i} for={i}>
     
              {label}
       
            </Label>
          </>
        );
      })}
    </form>
  );
};

TrafficIntervalForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
