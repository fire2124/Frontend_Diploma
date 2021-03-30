import React from "react";

export const Dropdown = ({ props, type }) => {
  switch (type) {
    case "stops":
      return (
        <div className="pt-5">
          <select name={`${type}`} id={`${type}`}>
            {props
              ? props.map((item) => (
                  <option value={`${item.currentStop}`}>
                    {item.currentStop}
                  </option>
                ))
              : null}
          </select>
          <div className="pt-5">
            <input type="submit" />
          </div>
        </div>
      );
    case "vehicles":
      return (
        <div className="pt-5">
          <select name={`${type}`} id={`${type}`}>
            {props
              ? props.map((item) => (
                  <option value={`${item.ROUTE_NUMBER}`}>
                    {item.ROUTE_NUMBER}
                  </option>
                ))
              : null}
          </select>
          <div className="pt-5">
            <input type="submit" />
          </div>
        </div>
      );
    case "type":
      return (
        <div className="pt-5">
          <select name={`${type}`} id={`${type}`}>
            {props
              ? props.map((item) => (
                  <option value={`${item.label}`}>{item.label}</option>
                ))
              : null}
          </select>
          <div className="pt-5">
            <input type="submit" />
          </div>
        </div>
      );
    default:
      break;
  }
};
