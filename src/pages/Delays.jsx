import React, { Component } from "react";
import { matchPath } from "react-router";
import { SidePanel } from "../components/SidePanel";
import { NewsForm } from "../components/Forms/NewsForm";
import { Card } from "../components/Card";
import MapExample from "../components/Map/Heatmap";

import { getDelay, getChange_of_delay } from "../services/AggregationsServices";

class Delays extends Component {
  state = { // dat aj typ ? ci sa bude prepisovat aktualny ? ja by som dal ze sa bude prepisovat
    delay: {
      res15min: null,
      res1hour: null,
      res3hours: null,
      res1418: null,
      res1day: null,
      res1week: null,
      res1month: null,
      res59: null,
    },
    changeOfDelay: {
      res15min: null,
      res1hour: null,
      res3hours: null,
      res1418: null,
      res1day: null,
      res1week: null,
      res1month: null,
      res59: null,
    },
  };

  handleDownload_Delay = async () => {
    try {
      let res15min = await getDelay("MHD", "15min");
      let res1hour = await getDelay("MHD", "1hour");
      let res3hours = await getDelay("MHD", "3hours");

      let res1418 = await getDelay("MHD", "14-18");
      let res1day = await getDelay("MHD", "1day");
      let res1week = await getDelay("MHD", "1week");
      let res1month = await getDelay("MHD", "1month");
      let res59 = await getDelay("MHD", "5-9");

      console.log(res15min);
      console.log(res1hour);
      console.log(res3hours);
      console.log(res1418);
      console.log(res1day);
      console.log(res1week);
      console.log(res1month);
      console.log(res59);
    } catch (error) {}
  };

  handleDownload_Change_of_delay = async () => {
    try {
      let res15min = await getChange_of_delay("MHD", "15min");
      let res1hour = await getChange_of_delay("MHD", "1hour");
      let res3hours = await getChange_of_delay("MHD", "3hours");

      let res1418 = await getChange_of_delay("MHD", "14-18");
      let res1day = await getChange_of_delay("MHD", "1day");
      let res1week = await getChange_of_delay("MHD", "1week");
      let res1month = await getChange_of_delay("MHD", "1month");
      let res59 = await getChange_of_delay("MHD", "5-9");

      console.log(res15min);
      console.log(res1hour);
      console.log(res3hours);
      console.log(res1418);
      console.log(res1day);
      console.log(res1week);
      console.log(res1month);
      console.log(res59);
    } catch (error) {}
  };
  render() {
    return (
      <div>
        {" "}
        Delays / change_of_delay
        <SidePanel
          title={"Čo popisuje daná heatmapa?"}
          className="pr-2"
        ></SidePanel>
        <Card className="mr-20 flex flex-grow">
          <Card className="mr-20 flex flex-grow">
            <div className="text_name py-5 px-5">
              Aktuálne dopravné informácie
            </div>
            <div className="map my-2">
              {/* data={this.state}*/}
              <MapExample />
            </div>
          </Card>

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
        </Card>
      </div>
    );
  }
}

export default Delays;
