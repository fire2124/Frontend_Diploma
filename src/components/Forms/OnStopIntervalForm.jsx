import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const fields = [
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


export const IntervalFormFields = ({register}) => fields.map(({ label, value }, i) => {
  return (
    <div className="pt-5" key={i}>
      <label>
        <input
          name="interval"
          type="radio"
          ref={register}
          value={value}
        />{" "}
        {label}
        {"  "}
      </label>
    </div>
  );
})


export const OnStopIntervalForm = ({ onChange }) => {
  const { register, getValues } = useForm({
    defaultValues: {
      interval: fields[3].value,
    },
  });
  return (
    <form onChange={() => onChange(getValues())} className="pt-5">
      <IntervalFormFields register={register}/>
    </form>
  );
};

OnStopIntervalForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
