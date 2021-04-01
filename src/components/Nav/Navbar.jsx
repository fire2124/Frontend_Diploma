import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Logo from "../../images/logo.svg";


const Nav = styled.nav`
  // padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  background: #fff;
`;

const Navbar = () => {
  return (
    <Nav className="px-5">
      <a href="/" >
        <img
          src={Logo}
          alt="Logo"
          width="200px"
          className="py-3"
        />
      </a>
      <Burger/>
    </Nav>
  );
};

export default Navbar;