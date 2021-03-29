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
    value: "MHD",
  },
  {
    label: "SAD",
    value: "SAD"
  },
  {
    label: "Vlaky",
    value: "Train",
  },
];

const description1 = `Táto heatmapa zobrazuje naakumulované meškanie spojov za určité časové obdobie`
const description2 = `Táto heatmapa zobrazuje, kde konkrétne vozidlá vytvárajú meškanie`

const Description = React.memo(({ delay }) => <p>
  {delay === `delay` ? description1 : description2}
</p>
)

export const DelayForm = ({ onChange }) => {
  const { register, watch, handleSubmit } = useForm(
    {
      defaultValues: {
        vehicle: 'MHD',
        delay: 'delay'
      }
    }
  )

  const delay = watch('delay')

  return (
    <form onSubmit={handleSubmit(onChange)}>
      <label>
        <input name="delay" type="radio" ref={register} value="delay" className="hidden" />
        Meškanie
      </label>
      {" | "}
      <label>
        <input name="delay" type="radio" ref={register} value="delayChange" className="hidden" />
        Vytváranie meškaní
      </label>
      <Description delay={delay} />
      <SidePanelTitle className="pt-5">
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
      <div className="pt-5">
        <input type="submit" />
      </div>

    </form>
  );
};

DelayForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
