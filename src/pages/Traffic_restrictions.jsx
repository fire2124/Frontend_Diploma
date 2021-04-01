import React, { useState } from "react";
import MyMap from "../components/map/Map";
import Heatmap from "../components/map/Heatmap";
import { SidePanel } from "../components/SidePanel";
import { getData } from "../services/Traffic";
import { Card } from "../components/Card";
import { TrafficForm } from "../components/forms/TrafficForm";
import { TrafficIntervalForm } from "../components/forms/TrafficIntervalForm";
import styled from "styled-components";
import { Scafolding } from "../components/Scafolding"
import { Title } from "../components/Title"

const Traffic_restrictions = () => {
  const [trafficData, setTrafficData] = useState({});

  const trafficIntervalFormChange = async (v) => {
    const res = await getData(v.interval);
    setTrafficData(res);
  };

  return (<Scafolding sidePanelTitle={"Podrobnosti"} >
      <Card className="mr-20 flex-column flex-grow p-5">
        <Title as={`h1`}>Dopravné obmedzenia</Title>
        <MyMap data={trafficData} />
        <TrafficIntervalForm onChange={trafficIntervalFormChange} />
      </Card>
    </Scafolding>
  );
};

export default Traffic_restrictions;
