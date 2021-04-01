import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card } from "./Card";
import { Title} from "./Title";



const buttonArrow = (isOpen) => isOpen ? `<<` : `>>`

const InsideWrapper = styled(Card)`
  border-radius: 0px 24px 0px 0px;
  display: flex;
  overflow: hidden;
  padding: 2rem;
`;

const OutsideWrapper = styled.div`
  transition: max-width ease-in-out 1s;
  will-change: max-width;
  max-width: ${(props) => (props.isOpen ? "355px" : "47px")};
  white-space: nowrap;
`;

const ToggleButton = styled.div`
  position: relative;
  color: #7e7bff;
  height: 100%;
`;

export const SidePanel = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <OutsideWrapper className="flex-1 pr-20" isOpen={isOpen}>
      <InsideWrapper isOpen={isOpen}>
        <div>
          {title && <Title as={`h3`}>{title}</Title>}
          {children}
        </div>
        <div className={`pt-5 pl-5`}>
        <ToggleButton
          as={`button`}
          className="font-extrabold"
          onClick={() => setIsOpen(!isOpen)}
          >
          {buttonArrow(isOpen)}
        </ToggleButton>
        </div>
      </InsideWrapper>
        
    </OutsideWrapper>
  );
};

SidePanel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
