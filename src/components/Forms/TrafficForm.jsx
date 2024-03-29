import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SideText = styled.div`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;

export const TrafficForm = ({ onChange }) => {
  const { handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onChange)}>
      <SideText>
        Vyberte si konkrétnu líniu dopravného obmedzenia. Po zakliknutí sa
        zobrazia podrobnosti.
      </SideText>
      {onChange ? <input type="submit" className="pt-2" /> : null}
    </form>
  );
};

TrafficForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
