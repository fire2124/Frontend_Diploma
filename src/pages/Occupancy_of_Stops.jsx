import React, { Component } from "react";
import {
  getTimeOnCurrentStop,
  getTimeOnStopsByCurrentBus,
} from "../services/AggregationsServices";
import Plot from "react-plotly.js";

class Occupancy_of_Stops extends Component {
  state = {
    ocOnStop: null,
    ocByBus: null,
  };
  
  handleGetTimeOnCurrentStop = async () => {
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
    this.setState({
      ocOnStop: res.features,
      ocByBus: this.state.ocByBus,
    });
  };

  handleGetTimeOnStopsByCurrentBus = async () => {
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
    this.setState({
      ocOnStop: this.state.ocOnStop,
      ocByBus: res.features,
    });
  };

  render() {
    if (this.state.ocOnStop != null)
      this.state.ocOnStop.map((e) => console.log(e.properties));
    if (this.state.ocByBus != null)
      this.state.ocByBus.map((e) => console.log(e.properties));

    return (
      <div>
        {" "}
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
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
              { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 800, height: 500, title: "A Fancy Plot" }}
          />
        </div>
      </div>
    );
  }
}

export default Occupancy_of_Stops;
