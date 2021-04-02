import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const SwitchText = styled.text`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #aeaeae;
  text-decoration: none;
  &:hover {
    color: #7e7bff;
    font-weight: bold;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #7e7bff;
  }
`;
const Text = styled.text`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;

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
    value: "MHD",
  },
  {
    label: "SAD",
    value: "SAD",
  },
  {
    label: "Vlaky",
    value: "Train",
  },
];

const description1 = <Text>Táto heatmapa zobrazuje naakumulované meškanie spojov za určité časové obdobie</Text>
const description2 = <Text>Táto heatmapa zobrazuje, kde konkrétne vozidlá vytvárajú meškanie</Text>

const Description = React.memo(({ delay }) => (
  <p>{delay === `delay` ? description1 : description2}</p>
));

export const DelayForm = ({ onChange }) => {
  const { register, watch, getValues } = useForm({
    defaultValues: {
      vehicle: "MHD",
      delay: "delay",
    },
  });

  const delay = watch("delay");

  return (
    <form onChange={() => onChange(getValues())}>
      <label>
        <input
          name="delay"
          type="radio"
          ref={register}
          value="delay"
          className="hidden"
        />
        <SwitchText>Meškanie</SwitchText>
      </label>
      {" | "}
      <label>
        <input
          name="delay"
          type="radio"
          ref={register}
          value="delayChange"
          className="hidden"
        />
        <SwitchText>Vytváranie meškaní</SwitchText>
      </label>
      <div className="pt-5">
        <SidePanelTitle>Čo popisuje daná heatmapa?</SidePanelTitle>
      </div>
      <Description delay={delay} />
      <div className="pt-5">
        <SidePanelTitle>
          Vyberte typ dopravného prostriedku, na ktorom chcete zistiť meškanie
        </SidePanelTitle>
      </div>

      {fields.map(({ label, value }, i) => {
        return (
          <label key={i}>
            <input name="vehicle" type="radio" ref={register} value={value} />{" "}
            {label}{" "}
          </label>
        );
      })}
    </form>
  );
};

DelayForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
