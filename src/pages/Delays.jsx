import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { DelayForm } from "../components/forms/DelayForm";
import { Card } from "../components/Card";
import Heatmap from "../components/map/Heatmap";
import { getData } from "../services/Delays";
import { TrafficIntervalForm } from "../components/forms/TrafficIntervalForm";
import styled from "styled-components";
import { Scafolding } from "../components/Scafolding"
import { Title } from "../components/Title"

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 5rem 0;
  flex: 1;
`

const Delays = () => {
  const [delay, setDelay] = useState(`delay`);
  const [vehicle, setVehicle] = useState(`MHD`);
  const [trafficInterval, setTrafficInterval] = useState(`15min`);
  const [data, setData] = useState({});

  const delayFormChange = async (form) => {
    setVehicle(form.vehicle);
    setDelay(form.delay);
    const res = await getData(form.delay, form.vehicle, trafficInterval);
    setData(res);
  };

  const trafficIntervalFormChange = async (v) => {
    setTrafficInterval(v.interval);
    const res = await getData(delay, vehicle, v.interval);
    setData(res);
  };

  return (
    <Scafolding sidePanelTitle={"Filter zobrazenia"} sidePanelContent={<DelayForm onChange={delayFormChange} />}>
    <Card className="mr-20 flex-column flex-grow p-5">
      <Title as={`h1`}>Meškania / vytváranie meškaní</Title>
      <div className="map">
        <Heatmap data={data.features} />      
      </div>
      <TrafficIntervalForm onChange={trafficIntervalFormChange} />
    </Card>
  </Scafolding>
  );
};

export default Delays;
