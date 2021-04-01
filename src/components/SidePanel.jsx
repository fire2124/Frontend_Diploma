import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card } from "./Card";
import { Title} from "./Title";

const InsideWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const OutsideWrapper = styled(Card)`
  display: flex;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  white-space: nowrap;
  flex-shrink: 2;
  margin-right: 5rem;
  will-change: max-width;
  transition: max-width ease 1.2s;
  
  max-width: ${(props) => (props.isOpen ? "100%" : 0)}; 
`;

const ToggleButton = styled.div`
  display: flex;
  position: relative;
  color: #7e7bff;
  height: 100%;
  outline: none;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  transition: transform ease 1.2s ;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isOpen ? "none" : 'rotateY(180deg)')};
`;

export const SidePanel = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <OutsideWrapper isOpen={isOpen}>
      <InsideWrapper>
          {title && <Title as={`h3`}>{title}</Title>}
          {children}
      </InsideWrapper>
        <ToggleButton
          as={`button`}     
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          >
          {`<<`}
        </ToggleButton>
    </OutsideWrapper>
  );
};

SidePanel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
