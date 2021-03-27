import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";
import {Dropdown} from "./common/Dropdown"

const SideText = styled.div`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;

export const StopForm = ({ onChange }) => {
  const { register, control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onChange)}>
      <Dropdown/>
      <input type="submit" className="pt-2"/>
    </form>
  );
};

StopForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
