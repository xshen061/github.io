import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: theme.spacing(2), width: "100%" },
  inputs: {
    paddingTop: theme.spacing(1),
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" component="h2">
      <FormattedMessage
          id="login.title"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
      </Typography>
      <form noValidate>
        <div className={classes.inputs}>
          <TextField label="Email" variant="outlined"></TextField>
        </div>
        <div className={classes.inputs}>
          <TextField label="Password" variant="outlined"></TextField>
        </div>
        <div className={classes.inputs}>
          <Button variant="contained" color="primary">
          <FormattedMessage
          id="login.button"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
          </Button>
        </div>
      </form>
    </div>
  );
}
