import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";
import { Dropdown } from "./common/Dropdown";
import { OnStopIntervalForm } from "./OnStopIntervalForm";
import mhdStops from "../../json/mhdStops.json";
import mhdVehicles from "../../json/mhdVehicles.json";
import sadStops from "../../json/sadStops.json";
import sadVehicles from "../../json/sadVehicles.json";

const SwitchText = styled.text`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: bold;
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
];

const description1 = (
  <SidePanelTitle className="pb-5">
    {"Vyberte konkrétnu zastávku a interval"}
  </SidePanelTitle>
);

const description2 = (
  <SidePanelTitle className="pb-5">
    {`Vyberte konkrétnu autobusovú linku a interval`}
  </SidePanelTitle>
);

const Description = React.memo(({ select }) => (
  <p>{select === `select` ? description1 : description2}</p>
));

export const StopForm = ({ onChange }) => {
  const [itemType, setItemType] = useState(fields[0].label);

  const [dropItem, setDropItem] = useState(mhdStops);

  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      select: "select",
    },
  });

  const select = watch("select");

  const handleType = async (type, v) => {
    console.log(v);
    if (type === "vehicles") {
      switch (v) {
        case "MHD":
          setDropItem(mhdVehicles);
          break;
        case "SAD":
          setDropItem(sadVehicles);
          break;
        default:
          break;
      }
    } else {
      switch (v) {
        case "MHD":
          setDropItem(mhdStops);
          break;
        case "SAD":
          setDropItem(sadStops);
          break;
        default:
          break;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onChange)}>
      <label>
        <input
          name="select"
          type="radio"
          ref={register}
          value="selectStop"
          className="hidden"
        />
        <SwitchText>Zastávka</SwitchText>
      </label>
      {" | "}
      <label>
        <input
          name="select"
          type="radio"
          ref={register}
          value="selectBus"
          className="hidden"
        />
        <SwitchText> Autobusová linka</SwitchText>
       
      </label>
      <Description select={select} />
      <Dropdown
        props={fields}
        type="type"
        ref={register}
        onChange={handleType}
      />

      {/*<Dropdown props={dropItem} type={`${itemType}`} ref={register} />*/}
      <Dropdown props={mhdVehicles} type={`vehicles`} ref={register} />
      <OnStopIntervalForm onChange={onChange} />

      {/* <div className="pt-5">
        <input type="submit" />
      </div> */}
    </form>
  );
};

// TODO: 1. radio swich musia zmenit type na stop / vehicles
// TODO: 2. (1. dropdown) musi zmenit druhy aby sa mohlo z neho ptm vybrat
// TODO: 3. pridat interval a odoslat
StopForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
