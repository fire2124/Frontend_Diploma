import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { StopForm } from "../components/forms/StopsForm";
import { Card } from "../components/Card";
import { getData } from "../services/onStop";
import { MyPlot } from "../components/forms/common/Plot";
import { Statistics } from "../components/forms/common/Statistics";
import styled from "styled-components";
import { Scafolding } from "../components/Scafolding"
import { Title } from "../components/Title"

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 5rem 0;
  flex: 1;
`
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
    const res = await getData(
      formData.select,
      formData.vehicleTypeId,
      formData.interval
    );
    setData(res);
  };

  return (
     <Scafolding sidePanelTitle={"Filter zobrazenia"} sidePanelContent={<StopForm onChange={buttonFormChange} />}>
     <div className="flex-column flex-grow pr-20">
      <Card className="flex-column flex-grow">
        <Title as={`h1`}>Vyťaženosť zastávok</Title>
        <MyPlot data={data} />
      </Card>
      <Card className="flex-column flex-grow mt-20">
        <Title as={`h2`}>Štatistiky</Title>
        <Statistics data={data}/>
      </Card>
     </div>
   </Scafolding>
  );
};

export default Occupancy_of_Stops;
