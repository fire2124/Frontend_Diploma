import React from "react";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const SideText = styled.div`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;

const SidePanelTitle = styled.h4`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;
// TODO: 1. vybrat switch
// TODO: 2.Description podla toho co stlacim

export const Switch = ({ fields, textTitle, onChange }) => {
  return (
    <div>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        {fields.map((e) => {
          return (
            <div>
              <Button onChange={onChange}>{e.label}</Button>
            </div>
          );
        })}
      </ButtonGroup>
      <div className="pr-2">
        <SidePanelTitle className="pt-5">{textTitle}</SidePanelTitle>
      </div>
      <SideText className="pt-5">{fields[0].description}</SideText>
    </div>
  );
};
