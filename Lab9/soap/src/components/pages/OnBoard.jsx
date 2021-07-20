import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Stepper from "../Stepper";

const useStyles = makeStyles((theme) => ({
  surveyBtn: {
    width: "8rem",
    height: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    marginRight: "1rem",
  },
}));

export default function OnBoard() {
  const [value, setValue] = useState(1);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      

      <Stepper></Stepper>
    </div>
  );
}
