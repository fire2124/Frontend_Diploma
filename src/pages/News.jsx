import React, { Component } from "react";
import {
  getPresovStreets,
  getMhdStops,
  getSadStops,
  getTrainStops,
} from "../services/staticDataService";

import MyMap from "../components/map";
import "leaflet/dist/leaflet.css";

class News extends Component {
  handleDownload = async () => {
    await getPresovStreets().then((res) => {
      console.log(res);
    });
    await getMhdStops().then((res) => {
      console.log(res);
    });
    await getSadStops().then((res) => {
      console.log(res);
    });
    await getTrainStops().then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="background">
        {" "}
        News
        <div className="whiteBackground">
          <div className="text_name">Aktuálne dopravné informácie</div>
          <button
            onClick={() => {
              this.handleDownload();
            }}
          >
            Download
          </button>
          <div className="map my-2">
            <MyMap />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
