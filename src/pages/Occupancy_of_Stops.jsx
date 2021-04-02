import React, { useState } from "react";
import { StopForm } from "../components/forms/StopsForm";
import { Card } from "../components/Card";
import { getData } from "../services/onStop";
import { MyPlot } from "../components/forms/common/Plot";
import { Statistics } from "../components/forms/common/Statistics";
import { Scafolding } from "../components/Scafolding";
import { Title } from "../components/Title";
import { Legend } from "../components/Legend";

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
    <Scafolding
      sidePanelTitle={"Filter zobrazenia"}
      sidePanelContent={<StopForm onChange={buttonFormChange} />}
    >
      <div className="flex-column flex-grow pr-20">
        <Card className="flex-column flex-grow">
          <Title as={`h1`}>Vyťaženosť zastávok</Title>
          <MyPlot data={data} />
        </Card>
        <Card className="flex-column flex-grow mt-20">
          <div>
            <Title as={`h2`}>Štatistiky</Title>
            <Statistics data={data} />
          </div>
          <div className="pt-5">
            <Title as={`h2`}>Legenda</Title>
            <Legend data={data} />
          </div>
        </Card>
      </div>
    </Scafolding>
  );
};

export default Occupancy_of_Stops;
