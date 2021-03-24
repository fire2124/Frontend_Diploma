import React, { useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from './Card'




const buttonArrow = (isOpen) => isOpen ? `<<` : `>>`


const SidePanelTitle = styled.h4`
font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7E7D7D;
  
  `


const InsideWrapper = styled(Card)`
    border-radius: 0px 24px 0px 0px;
    display: flex;
    padding: 34px;
    margin: 118px 0;
    height: calc(100% - 236px);
`


const OutsideWrapper = styled.div`

    transition: max-width ease-in-out 1s;
    max-width: ${props => props.isOpen ? "342px" : "47px"};
    overflow: hidden;

`

const ToggleButton = styled.div`
    position: relative;
    color: #7E7BFF;
    bottom: 20%;
    right: 0%;

`



export const SidePanel = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(true)

    return <OutsideWrapper className="flex-initial"  isOpen={isOpen} className="pr-20">
        <InsideWrapper isOpen={isOpen}>
            {
                title && <SidePanelTitle>{title}</SidePanelTitle>
            }
            {children}
            <ToggleButton as={`button`} onClick={() => setIsOpen(!isOpen)}>{buttonArrow(isOpen)}</ToggleButton>
        </InsideWrapper>
    </OutsideWrapper>
}

SidePanel.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}