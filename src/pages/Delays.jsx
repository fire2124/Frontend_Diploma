import React, { Component } from "react";
import { matchPath } from "react-router";
import { getDelay, getChange_of_delay } from "../services/AggregationsServices";


class Delays extends Component {

  handleDownload_Delay = async () => {
    try {
      let res15min = await getDelay("MHD", '15min')
      let res1hour = await getDelay("MHD", '1hour')
      let res3hours = await getDelay("MHD", '3hours')
      
      let res1418 = await getDelay("MHD", '14-18')
      let res1day = await getDelay("MHD", '1day')
      let res1week = await getDelay("MHD", '1week')
      let res1month = await getDelay("MHD", '1month')
      let res59 = await getDelay("MHD", '5-9')

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

  handleDownload_Change_of_delay = async () => {
    try {
      
      let res15min = await getChange_of_delay("MHD", '15min')
      let res1hour = await getChange_of_delay("MHD", '1hour')
      let res3hours = await getChange_of_delay("MHD", '3hours')
      
      let res1418 = await getChange_of_delay("MHD", '14-18')
      let res1day = await getChange_of_delay("MHD", '1day')
      let res1week = await getChange_of_delay("MHD", '1week')
      let res1month = await getChange_of_delay("MHD", '1month')
      let res59 = await getChange_of_delay("MHD", '5-9')

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
    const isNews = !!matchPath(
      this.props.location.pathname,
      '/'
    );
    console.log(isNews)
    return (
      <div className="background"> Delays / change_of_delay
        <div className="whiteBackground">
          <div className="text_name">Delays</div>
          <div>
            <button
              onClick={() => {
                this.handleDownload_Delay();
              }}
            >
              Delay
          </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.handleDownload_Change_of_delay();
              }}
            >
              Change_of_delay
          </button>
          </div>

          {/* <div className="map my-2">
            <MyMap />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Delays;