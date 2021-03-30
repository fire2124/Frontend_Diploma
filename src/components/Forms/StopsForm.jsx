import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Dropdown } from "./common/Dropdown";
import { IntervalFormFields } from "./OnStopIntervalForm";
import mhdStops from "../../json/mhdStops.json";
import mhdVehicles from "../../json/mhdVehicles.json";
import sadStops from "../../json/sadStops.json";
import sadVehicles from "../../json/sadVehicles.json";

const SwitchText = styled.p`
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
    value: "mhd",
  },
  {
    label: "SAD",
    value: "sad",
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
  <p>{select === `selectStop` ? description1 : description2}</p>
));

const mapStopsVehicles = (select) => (items) => items.map(item => {
  const label = select === `selectStop` ? item.currentStop : item.ROUTE_NUMBER
  return {
    label,
    value: label,
  }
})

const getItemsVehicleTypeId = (select, vehicleType) => {
    const mapItems = mapStopsVehicles(select)
    switch (vehicleType) {
      case "mhd":
        return select === `selectStop` ? mapItems(mhdStops) : mapItems(mhdVehicles)
      case "sad":
        return select === `selectStop` ? mapItems(sadStops) : mapItems(sadVehicles)
      default:
        throw new Error("Uknown type of transportation.")
        break;
    }
}



export const StopForm = ({ onChange }) => {
 
  const { register, watch, getValues } = useForm({
    defaultValues: {
      select: "selectStop",
      vehicleType: "mhd",
    },
  });

  const { select, vehicleType } = watch();

  return (
    <form  onChange={() => onChange(getValues())}>

       { 
       // TODO: make switch component
       }
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
        dropdownItems={fields}
        name="vehicleType"
        register={register}
      />
      <Dropdown dropdownItems={getItemsVehicleTypeId(select, vehicleType)} name={`vehicleTypeId`} register={register} />
      <IntervalFormFields register={register} />
    </form>
  );
};

StopForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
