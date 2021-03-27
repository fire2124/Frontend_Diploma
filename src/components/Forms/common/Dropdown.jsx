import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Dropdown = ({props,label}) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-readonly-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-readonly-label"
        id="demo-simple-select-readonly"
        value={age}
        onChange={handleChange}
        inputProps={{ readOnly: true }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {/* {props.map(item=>{
          <MenuItem value={10}>{item}</MenuItem>
        })} */}
        
        
      </Select>
      <FormHelperText>Read only</FormHelperText>
    </FormControl>
  );
};
