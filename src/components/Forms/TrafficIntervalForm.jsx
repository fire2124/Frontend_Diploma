import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";
import { Switch } from "./common/Switch";
import { RadioButtons } from "./common/Radio";

const SidePanelTitle = styled.h4`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;


const fields = [
    {
        label: "5:00-9:00",
        value: "5-9",
    }, {
        label: "14:00-18:00",
        value: "14-18",
    },
    {
        label: "15min",
        value: "15min",
    },
    {
        label: "1hour",
        value: "1hour"
    },
    {
        label: "3hours",
        value: "3hours",
    },
    {
        label: "1day",
        value: "1day",
    },
    {
        label: "1week",
        value: "1week",
    },
    {
        label: "1month",
        value: "1month",
    },
];



export const TrafficIntervalForm = ({ onChange }) => {
    const { register, handleSubmit } = useForm(
        {
            defaultValues: {
                interval: fields[3].value,
            }
        }
    )
    return (
        <form onSubmit={handleSubmit(onChange)}>
            {fields.map(({ label, value }, i) => {
                return (
                    <label key={i}>
                        <input name="interval" type="radio" ref={register} value={value} />{" "}
                        {label}{" "}
                    </label>
                );
            })}
            <div className="pt-5">
                <input type="submit" />
            </div>
        </form>
    );
};

TrafficIntervalForm.propTypes = {
    onChange: PropTypes.func.isRequired,
};
