import React, { Component } from "react";
import { getTraffic_queries } from "../services/AggregationsServices";

class Traffic_restrictions extends Component {
  state = {
    res15min: null,
    res1hour: null,
    res3hours: null,
    res1418: null,
    res1day: null,
    res1week: null,
    res1month: null,
    res59: null,
  };
  handleDownload_Traffic = async () => {
    let res15min = await getTraffic_queries("15min");
    let res1hour = await getTraffic_queries("1hour");
    let res3hours = await getTraffic_queries("3hours");

    let res1418 = await getTraffic_queries("14-18");
    let res1day = await getTraffic_queries("1day");
    let res1week = await getTraffic_queries("1week");
    let res1month = await getTraffic_queries("1month");
    let res59 = await getTraffic_queries("5-9");

    this.setState({
      res15min: res15min.features,
      res1hour: res1hour.features,
      res3hours: res3hours.features,
      res1418: res1418.features,
      res1day: res1day.features,
      res1week: res1week.features,
      res1month: res1month.features,
      res59: res59.features,
    });
  };
  render() {
    console.log(this.state)
    return (
      <div>
        {" "}
        Traffic_restrictions
        <div>
          <button
            onClick={() => {
              this.handleDownload_Traffic();
            }}
          >
            Download_Traffic
          </button>
        </div>
      </div>
    );
  }
}

export default Traffic_restrictions;
