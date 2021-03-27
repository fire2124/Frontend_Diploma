import React from "react";
import Radio from "@material-ui/core/Radio";

export const RadioButtons = ({
  checked,
  onChange,
  value,
  inputPropsLetter,
  label,
}) => {
  console.log(`${checked} ${label}`);
  return (
    <Radio
      checked={checked}
      onChange={onChange}
      className={"#7E7BFF"}
      value={value}
      name="radio-button-demo"
      inputProps={{ "aria-label": { inputPropsLetter } }}
    />
  );
};
