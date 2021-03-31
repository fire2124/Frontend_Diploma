import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { StopForm } from "../components/forms/StopsForm";
import { Card } from "../components/Card";
import { getData } from "../services/onStop";
import { MyPlot } from "../components/forms/common/Plot";
import { Statistics } from "../components/forms/common/Statistics";
import styled from "styled-components";


const SidePanelTitle = styled.h4`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;


export const Occupancy_of_Stops = () => {
  const [data, setData] = useState({});

  const buttonFormChange = async (formData) => {
    //console.log(formData);
    const res = await getData(
      formData.select,
      formData.vehicleTypeId,
      formData.interval
    );
    setData(res);
  };

  return (
    <div>
      <div className="flex my-20 h-full">
        <SidePanel className="pr-2">
          <StopForm onChange={buttonFormChange} />
        </SidePanel>{" "}
        <Card className="mr-20 flex flex-grow">
          <div className="text_name py-5 px-5">Vyťaženosť zastávok</div>
          <MyPlot data={data} />
        </Card>
      </div>
      <Card>
        <SidePanelTitle> Štatistika</SidePanelTitle>
       
        <Statistics data={data}></Statistics>
      </Card>
    </div>
  );
};

export default Occupancy_of_Stops;
