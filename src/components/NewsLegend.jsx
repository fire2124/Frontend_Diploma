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
    label: "Mhd Prešov",
    alt: "mhd_purple",
    value: "../../img/markers/mhd_purple.png",
  },
  {
    label: "Sad Prešov",
    alt: "sad_purple",
    value: "../../img/markers/sad_purple.png",
  },
  {
    label: "Vlaky",
    alt: "train_purple",
    value: "../../img/markers/train_purple.png",
  },
  {
    label: "Zastávky MHD",
    alt: "mhd_stop",
    value: "../../img/markers/mhd_stop.png",
  },
  {
    label: "Zastávky SAD",
    alt: "sad_stop",
    value: "../../img/markers/sad_stop.png",
  },
  {
    label: "Vlaková zastávka",
    alt: "train_stop",
    value: "../../img/markers/train_stop.png",
  },
  {
    label: "Meškania",
    alt: "delay",
    value: "../../img/markers/delay.png",
  },
];
const NewsLegend = () => {
  return (
    <div className="flex justify-start">
      <div className="grid grid-cols-3 ">
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

export default NewsLegend;
