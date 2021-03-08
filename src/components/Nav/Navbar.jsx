import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Logo from "../../images/PO-TOK-Logo.png";


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav className="xl:my-3 allWidth">
      <a href="/" >
        <img
          src={Logo}
          alt="Logo"
          width="200px"
          className=" xl:ml-2 lg:my-2"
        />
      </a>
      <Burger/>
    </Nav>
  );
};

export default Navbar;