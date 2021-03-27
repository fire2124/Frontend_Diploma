import React, { useEffect } from "react";
import {
  getTimeOnCurrentStop,
  getTimeOnStopsByCurrentBus,
} from "../services/AggregationsServices";
import { SidePanel } from "../components/SidePanel";
import { StopForm } from "../components/forms/StopsForm";

export const Occupancy_of_Stops = ({ onChange }) => {
  const handleGetTimeOnCurrentStop = async () => {
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
    // this.setState({
    //   ocOnStop: res.features,
    //   ocByBus: this.state.ocByBus,
    // });
  };

  const handleGetTimeOnStopsByCurrentBus = async () => {
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
    // this.setState({
    //   ocOnStop: this.state.ocOnStop,
    //   ocByBus: res.features,
    // });
  };

  // if (this.state.ocOnStop != null)
  //   this.state.ocOnStop.map((e) => console.log(e.properties));
  // if (this.state.ocByBus != null)
  //   this.state.ocByBus.map((e) => console.log(e.properties));

  return (
    <div>
      <SidePanel title={"Vyberte konkrétnu zastávku a interval"} className="pr-2">
        <StopForm />
        {/* <StopForm onChange={formChange} /> */}
      </SidePanel>{" "}
      Occupancy_of_Stops
      <div>
        <button
          onClick={() => {
            this.handleGetTimeOnCurrentStop();
          }}
        >
          Download_TimeOnCurrentStop
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            this.handleGetTimeOnStopsByCurrentBus();
          }}
        >
          Download_TimeOnStopsByCurrentBus
        </button>
       
      </div>
    </div>
  );
};

export default Occupancy_of_Stops;
