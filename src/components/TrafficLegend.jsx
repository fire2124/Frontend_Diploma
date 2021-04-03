import React from "react";
import styled from "styled-components";


const Text = styled.p`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
  margin-left: -50%;
  white-space: initial;
  @media (max-width: 1200px) {
    margin-left: -2rem;
  }
  @media (max-width: 1000px) {
    margin-left: -1rem;
  }
`;

const images = [
  {
    label: "Najmenší výskyt",
    alt: "mhd_purple",
    value: "../../img/markers/traffic_blue.svg",
  },
  {
    label: "",
    alt: "traffic_green",
    value: "../../img/markers/traffic_green.svg",
  },
  {
    label: "Stredný výskyt",
    alt: "traffic_yellow",
    value: "../../img/markers/traffic_yellow.svg",
  },
  {
    label: "",
    alt: "traffic_orange",
    value: "../../img/markers/traffic_orange.svg",
  },
  {
    label: "Najvačší výskyt",
    alt: "traffic_red",
    value: "../../img/markers/traffic_red.svg",
  }
 
];
const TrafficLegend = () => {
  return (
    <div className="flex justify-start">
      <div className="grid grid-cols-1 ">
        {images.map((e, i) => {
          return (
            <div key={i} className="mt-2 grid grid-cols-2">
              <img src={e.value} alt={e.alt} />
              <Text>{e.label}</Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLegend;
