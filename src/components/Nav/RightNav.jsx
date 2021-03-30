import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #7e7bff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
  }
`;

const Text = styled.text`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #aeaeae;
  text-decoration: none;
  &:hover {
    color: #7e7bff;
    font-weight: bold;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #7e7bff;
  }
`;

const Text2 = styled.text`
  font-family: Baloo 2;
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
  text-decoration: none;
  color: #7e7bff;
  font-weight: bold;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: #7e7bff;
`;

const navbarValues = [
  {
    to: "/",
    label: "Aktuality",
  },
  {
    to: "/delays",
    label: "Meškania",
  },
  {
    to: "/traffic_restrictions",
    label: "Dopravné obmedzenia",
  },
  {
    to: "/occupancy_of_stops",
    label: "Vyťaženosť zastávok",
  },
  // {
  //   to: "/predictions_of_delays",
  //   label: "Predikcie meškaní",
  // },
  // {
  //   to: "/statistics",
  //   label: "Štatistiky",
  // },
];

const RightNav = ({ open }) => {
  // TODo fix padding of links

  return (
    <Ul
      open={open}
      className="
      flex
      xl:justify-center xl:text-center
      lg:justify-center lg:text-center"
    >
      {navbarValues.map(({ to, label }, i) => {
        return (
          <li key={i}>
            <Link
              to={to}
              className="text-xl md:text-base sm:text-base text-center justify-center xl:px-10 lg:px-10 inline-block pt-8"
            >
              <Text>{label}</Text>
            </Link>
          </li>
        );
      })}
    </Ul>
  );
};

export default RightNav;
