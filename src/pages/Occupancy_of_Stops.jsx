import React, { Component } from "react";
import { getTimeOnCurrentStop, getTimeOnStopsByCurrentBus } from "../services/AggregationsServices"

class Occupancy_of_Stops extends Component {
  handleGetTimeOnCurrentStop = async () => {
    try {
      let hours = 0;
      let minutes = 0;
      let sec = 0;
      let week = 0;
      let day = 1;
      let currentStop = "Prešov,,AS "
      //, { week, day, hours, minutes, sec }
      let res = await getTimeOnCurrentStop(currentStop, { week, day, hours, minutes, sec })

      console.log(res);
    } catch (error) { }
  }

  handleGetTimeOnStopsByCurrentBus = async () => {
    try {
      let hours = 0;
      let minutes = 0;
      let sec = 0;
      let week = 0;
      let day = 1;
      let ROUTE_NUMBER = 701402
      //, { week, day, hours, minutes, sec }
      let res = await getTimeOnStopsByCurrentBus(ROUTE_NUMBER, { week, day, hours, minutes, sec })

      console.log(res);
    } catch (error) { }
  }

  render() {
    return (
      <div className="background"> Occupancy_of_Stops
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
  }
}

export default Occupancy_of_Stops;