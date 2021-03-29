import React, { useEffect } from "react";
import {
  getTimeOnCurrentStop,
  getTimeOnStopsByCurrentBus,
} from "../services/AggregationsServices";
import { SidePanel } from "../components/SidePanel";
import { StopForm } from "../components/forms/StopsForm";
import { Card } from "../components/Card";

export const Occupancy_of_Stops = () => {
  const handleGetTimeOnCurrentStop = async (v) => {
    let hours = 0;
    let minutes = 0;
    let sec = 0;
    let week = 0;
    let day = 1;
    let currentStop = "Prešov,,AS ";
    let res = await getTimeOnCurrentStop(currentStop, {
      week,
      day,
      hours,
      minutes,
      sec,
    });
    console.log(res);
  };

  const handleGetTimeOnStopsByCurrentBus = async (v) => {
    let hours = 0;
    let minutes = 0;
    let sec = 0;
    let week = 0;
    let day = 1;
    let ROUTE_NUMBER = `701402`;
    let res = await getTimeOnStopsByCurrentBus(ROUTE_NUMBER, {
      week,
      day,
      hours,
      minutes,
      sec,
    });
    console.log(res);
  };

  return (
    <div>
      <div className="flex my-20 h-full">
        <SidePanel
          title={"Vyberte konkrétnu zastávku a interval"}
          className="pr-2"
        >
          <StopForm />
          {/* <StopForm onChange={formChange} /> */}
        </SidePanel>{" "}
        <Card className="mr-20 flex flex-grow">
          <div className="text_name py-5 px-5">Vyťženosť zastávok</div>
          <div className="map my-2">
            <button
              onClick={() => {
                handleGetTimeOnCurrentStop();
              }}
            >
              Download_TimeOnCurrentStop
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                handleGetTimeOnStopsByCurrentBus();
              }}
            >
              Download_TimeOnStopsByCurrentBus
            </button>
          </div>
        </Card>
      </div>
      <Card>Štatistika</Card>
    </div>
  );
};

export default Occupancy_of_Stops;
