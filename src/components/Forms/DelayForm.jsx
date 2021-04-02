import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const SwitchText = styled.span`
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
const Text = styled.p`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
  margin-top: 1.25rem;
  white-space: initial;
`;

const SidePanelTitle = styled(Text)`
  font-weight: 500;
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

const description1 = `Táto heatmapa zobrazuje naakumulované meškanie spojov za určité časové obdobie`
const description2 = `Táto heatmapa zobrazuje, kde konkrétne vozidlá vytvárajú meškanie`

const Description = React.memo(({ delay }) => (
  <Text>{delay === `delay` ? description1 : description2}</Text>
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
      <SidePanelTitle as={`h4`}>Čo popisuje daná heatmapa?</SidePanelTitle>
      <Description delay={delay} />
      <SidePanelTitle as={`h4`}>
        Vyberte typ dopravného prostriedku, na ktorom chcete zistiť meškanie
      </SidePanelTitle>
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
