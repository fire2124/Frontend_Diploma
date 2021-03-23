import React, { Component } from "react";
import { matchPath } from "react-router";
import { getMhdPoBusses, getSadPoBusses, getTrains, getTraffic } from "../services/liveDataService";
import { getMhdStops, getSadStops, getTrainStops } from "../services/staticDataServices";
import MyMap from "../components/map";
import "leaflet/dist/leaflet.css";
let isNews;

class News extends Component {
  handleDownload = async () => {

    await getMhdStops().then((res) => {
      console.log(res);
    });

    await getSadStops().then((res) => {
      console.log(res);
    });

    await getTrainStops().then((res) => {
      console.log(res);
    });

    await getMhdPoBusses().then((res) => {
      console.log(res);
      setInterval(async function () {
        await getMhdPoBusses().then((res2) => {
          console.log(res2);
        })
      }, 15000)
    });

    await getSadPoBusses().then((res) => {
      console.log(res);
      setInterval(async function () {
        await getSadPoBusses().then((res2) => {
          console.log(res2);
        })
      }, 15000)
    });

    await getTrains().then((res) => {
      console.log(res);
      setInterval(async function () {
        await getTrains().then((res2) => {
          console.log(res2);
        })
      }, 15000)
    });

    await getTraffic().then((res) => {
      console.log(res);
      setInterval(async function () {
        await getTraffic().then((res2) => {
          console.log(res2);
        })
      }, 900000)
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
          {/* <div className="map my-2">
            <MyMap />
          </div> */}
        </div>
      </div>
    );
  }
}

export default News;
