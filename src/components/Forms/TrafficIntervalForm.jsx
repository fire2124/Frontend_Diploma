import React, {Fragment} from "react";
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
  padding: 0 1rem 0.5rem;
  display: inline-block;
  transition: border-color 0.2s ease-in-out;
  border-top: 0.75rem solid transparent;
  &:hover{
    cursor: pointer;
  }
  input:checked + & {
    border-color: #7e7bff;
    div {
      background-color: #7e7bff;
    }
  }
`

const LineDivider = styled.div`
  width: 100%;
  background-color: #ccc;
  border-radius: 0.35rem;
  height: 0.7rem;
  margin-bottom: -0.7rem;
`
const VDivider  = styled.div`
  height: 0.5rem;
  position: relative;
  top: 0;
  left: 50%;
  margin-left: -0.2rem;
  width: 0.2rem;
  background-color: #ccc;
`

export const TrafficIntervalForm = ({ onChange }) => {
  const { register, getValues } = useForm({
    defaultValues: {
      interval: fields[3].value,
    },
  });
  return (
    <form onChange={() => onChange(getValues())} className={`mt-5 pt-5 mx-auto text-center`}>
      <LineDivider/>
      {fields.map(({ label, value }, i) => {
        return (
            <Fragment key={i}>
              <input
                name="interval"
                type="radio"
                ref={register}
                value={value}
                id={i}
                style={{display:'none'}}
              />
              
            <Label as={`label`} for={i}>
     
              <VDivider/>
              {label}
       
            </Label>
          </Fragment>
        );
      })}
    </form>
  );
};

TrafficIntervalForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
