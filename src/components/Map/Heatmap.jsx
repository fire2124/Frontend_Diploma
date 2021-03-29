import React, { useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";

const Heatmap = ({ data }) => {

  const position = [48.99, 21.244];
  let finalData = [];
  if (data !== undefined) {
    try {
      data.map((e) => {
        let array = [];
        array.push(e.geometry.coordinates[1]);
        array.push(e.geometry.coordinates[0]);
        array.push(e.properties.sum);
        finalData.push(array);
      });
      console.log(finalData);
    } catch (error) {}
  }

  useEffect(() => {
    let container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }
    let map = L.map("map").setView(position, 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    let points = finalData
      ? finalData.map((p) => {
          return [p[0], p[1]];
        })
      : [];
    L.heatLayer(points, { radius: 30 }).addTo(map);
  }, []);

  return (
    <div
      id="map"
      scrollWheelZoom="true"
      dragging="true"
      className="rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg control"
      style={{ height: "95%", width: "150%" }}
    ></div>
  );
};

export default Heatmap;
