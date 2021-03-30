import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card } from "./Card";

const buttonArrow = (isOpen) =>
  isOpen ? (
    <div className="font-extrabold">{`<<`}</div>
  ) : (
    <div className="font-extrabold">{`>>`}</div>
  );

const SidePanelTitle = styled.h3`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;

const InsideWrapper = styled(Card)`
  border-radius: 0px 24px 0px 0px;
  display: flex;
  padding: 34px;
  margin: 118px 0;
  height: calc(100% - 236px);
`;

const OutsideWrapper = styled.div`
  transition: max-width ease-in-out 1s;
  max-width: ${(props) => (props.isOpen ? "342px" : "47px")};
  overflow: hidden;
`;

const ToggleButton = styled.div`
  position: relative;
  color: #7e7bff;
  bottom: 20%;
  right: 0%;
`;

export const SidePanel = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <OutsideWrapper className="flex-initial pr-20" isOpen={isOpen}>
      <InsideWrapper isOpen={isOpen}>
        <div className="pr-2">
          {title && <SidePanelTitle className="pb-5">{title}</SidePanelTitle>}
          {children}
        </div>
        <ToggleButton
          as={`button`}
          className="pt-40"
          onClick={() => setIsOpen(!isOpen)}
        >
          {buttonArrow(isOpen)}
        </ToggleButton>
      </InsideWrapper>
    </OutsideWrapper>
  );
};

SidePanel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
