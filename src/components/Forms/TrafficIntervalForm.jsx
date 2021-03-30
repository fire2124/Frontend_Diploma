import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

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

export const TrafficIntervalForm = ({ onChange }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      interval: fields[3].value,
    },
  });
  return (
    <form onSubmit={handleSubmit(onChange)}>
      {fields.map(({ label, value }, i) => {
        return (
            <label key={i} className="px-5">
              <input
                name="interval"
                type="radio"
                ref={register}
                value={value}
              />{" "}
              {label}
              {"  "}
            </label>
        );
      })}
      <div className="pt-5">
        <input type="submit" />
      </div>
    </form>
  );
};

TrafficIntervalForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
