import React, { Component } from "react";
import { matchPath } from "react-router";
import { getData } from "../services/News";
import MyMap from "../components/Map/Map";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Icon, Popup } from "leaflet";

import "leaflet/dist/leaflet.css";
import { SidePanel } from "../components/SidePanel";
import { NewsForm } from "../components/Forms/NewsForm";
import { Card } from "../components/Card";
import { layerGroup } from "leaflet";

const geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

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

  countryStyle = {
    fillColor: "red",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  onEachCountry = (country, layer) => {
    console.log(country);
    layer.bindPopup();
  };
  handleDownload = async () => {
    let response = await getData();
    console.log(response);
    this.setState({
      mhdPresov: response.markersMhd,
      sadPresov: response.markersSad,
      trains: response.markersTrains,
      traffic: response.markersTraffic,
      mhdStops: response.markersMhdStops,
      sadStops: response.markersSadStops,
      trainStops: response.markersTrainStops,
    });
  };

  //TODO: traffic: response.markersTraffic,

  render() {
    console.log(this.state);
    
    //const {data}  = this.state.mhdPresov
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
          <div className="text_name py-5 px-5">
            Aktuálne dopravné informácie
          </div>
          <div className="map my-2">
           
             {/*<MyMap data={data}/>*/}
              
          </div>
        </Card>
      </div>
    );
  }
}

export default News;
