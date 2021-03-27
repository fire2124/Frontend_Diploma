import React, { useState } from "react";
import MyMap from "../components/map/Map";
import { SidePanel } from "../components/SidePanel";
import { getData } from "../services/Traffic";
import { Card } from "../components/Card";
import { TrafficForm } from "../components/forms/TrafficForm";

const initState = {
  res15min: null,
  res1hour: null,
  res3hours: null,
  res1418: null,
  res1day: null,
  res1week: null,
  res1month: null,
  res59: null,
};

const Traffic_restrictions = () => {
  const [state, setState] = useState(initState);

  const handleDownload = async (values) => {
    const response = await getData(values);
    setState(response);
  };

  return (
    <div className="flex my-20 h-full">
      <SidePanel title={"Podrobnosti"} className="pr-2">
        <TrafficForm onChange={handleDownload} />
      </SidePanel>{" "}
      <Card className="mr-20 flex flex-grow">
        <div className="text_name py-5 px-5">Dopravné obmedzenia</div>
        <div className="map my-2">
          <MyMap data={state} />
        </div>
      </Card>
    </div>
  );
};

export default Traffic_restrictions;
