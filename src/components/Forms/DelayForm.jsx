import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";
import { Switch } from "./common/Switch";
import { RadioButtons } from "./common/Radio";

const SidePanelTitle = styled.h4`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;
const fields = [
  {
    label: "MHD",
    name: "mhdPresov",
    checked: "a",
    value: "a",
    inputProps: "A",
  },
  {
    label: "SAD",
    name: "sadPresov",
    checked: "b",
    value: "b",
    inputProps: "B",
  },
  {
    label: "Vlaky",
    name: "trains",
    checked: "c",
    value: "c",
    inputProps: "C",
  },
];

const fieldsButton = [
  {
    label: "Meškanie",
    name: "getDelay",
    description: `Táto heatmapa zobrazuje naakumulované meškanie spojov za určité časové obdobie`,
  },
  {
    label: "Vytváranie meškaní",
    name: "getChange_of_delay",
    description: `Táto heatmapa zobrazuje, kde konkrétne vozidlá vytvárajú meškanie`,
  },
];


export const DelayForm = ({ onChange }) => {
  const { register, control, handleSubmit } = useForm();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit(onChange)}>
      <Switch
        onChange={handleChange}
        fields={fieldsButton}
        textTitle={`Čo popisuje daná heatmapa?`}
      />
      <SidePanelTitle className="pt-5">
        Vyberte typ dopravného prostriedku, na ktorom chcete zistiť meškanie
      </SidePanelTitle>
      {fields.map(({ name, label, checked, value, inputProps }, i) => {
        return (
          <div>
            <RadioButtons
              checked={selectedValue === checked}
              onChange={handleChange}
              value={value}
              inputProps={inputProps}
              label={label}
            />
            {label}
          </div>
        );
      })}

      <input type="submit" />
    </form>
  );
};

DelayForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
