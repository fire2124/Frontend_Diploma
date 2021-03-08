import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 20;
  li {
    padding: 5px 10px;
  }
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

const RightNav = ({ open }) => {
  return (
    <Ul
      open={open}
      className="
      xl:justify-center xl:text-center
      lg:justify-center lg:text-center"
    >
      <Link
        to="/"
        className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3"
      >
        Aktuality
      </Link>
      <Link
        to="/delays"
        className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2"
      >
        {" "}
        Meškania
      </Link>
      <Link
        to="/traffic_restrictions"
        className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2"
      >
        Dopravné obmedzenia
      </Link>
      <Link
        to="/occupancy_of_stops"
        className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2"
      >
        Vyťaženosť zastávok
      </Link>
      <Link
        to="/predictions_of_delays"
        className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2"
      >
        Predikcie meškaní
      </Link>
      <Link
        to="/statistics"
        className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2"
      >
        Štatistiky
      </Link>
    </Ul>
  );
};

export default RightNav;
