import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: theme.spacing(2), width: "100%" },
  inputs: {
    paddingTop: theme.spacing(1),
  },
  wrapper: {
    padding: theme.spacing(2),
    width: "auto",
  },
}));

function handleSubmit() {}

export default function SignUpForm() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [open, setOpen] = React.useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();

    let emailValidate = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    if(!emailValidate.test(email)){
      setEmailError(true);
    }
    if(password.length<5){
      setPasswordError(true);
    }

    if(emailValidate.test(email) && password.length>=5){
      setOpen(true);
      setPasswordError(false);
      setEmailError(false);
    }
    
    
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <div>
      <Typography variant="h4" component="h2">
        <FormattedMessage
          id="signup.title"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
      </Typography>
      <Typography
        variant="subtitle1"
        component="h2"
        style={{ maxWidth: "20rem" }}
      >
        <FormattedMessage
          id="signup.subtitle"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className={classes.inputs}>
          <TextField
            label={<FormattedMessage
              id="signup.email"
              defaultMessage="Something went wrong"
            ></FormattedMessage>}
            variant="outlined"
            error={emailError}
            id="outlined-error-helper-text"
            helperText={emailError?<FormattedMessage
              id="signup.emailErr"
              defaultMessage="Something went wrong"
            ></FormattedMessage>:""}
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
          ></TextField>
        </div>
        <div className={classes.inputs}>
          <TextField 
          label={<FormattedMessage
            id="signup.password"
            defaultMessage="Something went wrong"
          ></FormattedMessage>} 
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          error={passwordError}
          helperText={passwordError?<FormattedMessage
            id="signup.passwordErr"
            defaultMessage="Something went wrong"
          ></FormattedMessage>:""}
          type="password"
          ></TextField>
        </div>
        <div className={classes.inputs}>
     
            <Button variant="contained" type="submit" color="primary">
            <FormattedMessage
          id="signup.button"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
            </Button>
   
        </div>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        <FormattedMessage
          id="signup.alert"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
        </Alert>
      </Snackbar>

    </div>
  );
}
