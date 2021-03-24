import React, { Component } from "react";
import { matchPath } from "react-router";
import { getData } from "../services/News";
import MyMap from "../components/Map/Map";
import "leaflet/dist/leaflet.css";
import { SidePanel } from "../components/SidePanel";
import { NewsForm } from "../components/Forms/NewsForm";
import { Card } from "../components/Card";

class News extends Component {
  state = {
    mhdPresov: null,
    sadPresov: null,
    trains: null,
    traffic: null,
    mhdStops: null,
    sadStops: null,
    trainStops: null,
  };

  handleDownload = async () => {
    let response = await getData();
    this.setState({
      mhdPresov: response.markersMhd,
      sadPresov:response.markersSad ,
      trains: response.markersTrains,
      mhdStops: response.markersMhdStops,
      sadStops: response.markersSadStops,
      trainStops: response.markersTrainStops,
  });
  };
 //TODO: traffic: response.markersTraffic,

  render() {
    //console.log(this.state.mhdPresov)
    return (
      <div className="flex my-20 h-full">
        <SidePanel title={"Filter zobrazenia"} className="pr-2">
          <NewsForm
            onChange={() => {
              this.handleDownload();
            }}
          />
        </SidePanel>
        <Card className="mr-20 flex flex-grow">
          <div className="text_name py-5 px-5">Aktuálne dopravné informácie</div>
          <div className="map my-2">
            <MyMap data={this.state}/>
          </div>
        </Card>
      </div>
    );
  }
}

export default News;
