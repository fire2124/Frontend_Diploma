import React from "react";

export const Dropdown = ({ dropdownItems, name, register }) => {
  return <select name={name} id={name} ref={register} className="my-5">
        {dropdownItems
          ? dropdownItems.map(({label, value}, key) => (
              <option value={value} key={key}>
                {label}
              </option>
            ))
          : null}
      </select>
};
