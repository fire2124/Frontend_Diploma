import React, { Component } from "react";
import { matchPath } from "react-router";
import { getMhdPoBusses, getSadPoBusses, getTrains, getTraffic } from "../services/liveDataService";
import { getMhdStops, getSadStops, getTrainStops } from "../services/staticDataServices";
import MyMap from "../components/Map";
import "leaflet/dist/leaflet.css";
import { SidePanel } from "../components/SidePanel"
import { NewsForm } from "../components/Forms/NewsForm"
import { Card } from "../components/Card"
class News extends Component {
  handleDownload = async () => {

    
  };

  render() {
    return (
      <div className="flex my-20 h-full">


        <SidePanel title={"Filter zobrazenia"} >
          <NewsForm onChange={() => {
            this.handleDownload()
          }} />
        </SidePanel>
        <Card className="mr-20 flex flex-grow">
          <div className="text_name">Aktuálne dopravné informácie</div>

          <div className="map my-2">
            <MyMap />
          </div>
        </Card>
      </div>
    );
  }
}

export default News;
