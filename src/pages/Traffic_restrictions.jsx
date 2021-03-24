import React, { Component } from "react";
import { getTraffic_queries } from "../services/AggregationsServices";

class Traffic_restrictions extends Component {
  handleDownload_Traffic = async () => {
    try {
      let res15min = await getTraffic_queries('15min')
      let res1hour = await getTraffic_queries('1hour')
      let res3hours = await getTraffic_queries('3hours')

      let res1418 = await getTraffic_queries('14-18')
      let res1day = await getTraffic_queries('1day')
      let res1week = await getTraffic_queries('1week')
      let res1month = await getTraffic_queries('1month')
      let res59 = await getTraffic_queries('5-9')
      
      console.log(res15min);
      console.log(res1hour);
      console.log(res3hours);
      console.log(res1418);
      console.log(res1day);
      console.log(res1week);
      console.log(res1month);
      console.log(res59);
    } catch (error) {}
  }
  render() {
    return (
      <div> Traffic_restrictions
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