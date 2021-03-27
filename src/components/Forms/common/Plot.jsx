import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Plot from "react-plotly.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Plot
    data={[
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "red" },
      },
      { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
    ]}
    layout={{ width: 800, height: 500, title: "A Fancy Plot" }}
  />
  );
}
