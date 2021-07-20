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

export default function CheckoutForm() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("")
  const [secCode, setSecCode] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [cardNumErr, setCardNumErr] = useState(false);
  const [secCodeErr, setSecCodeErr] = useState(false);

  const [open, setOpen] = React.useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();

    let card = new RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$")

    if(name === ""){
        setNameErr(true);
    }else{
        setNameErr(false);
    }
    
    if(!card.test(cardNum)){
      setCardNumErr(true);
    }else{
        setCardNumErr(false);
    }

    if(secCode.length!=4){
      setSecCodeErr(true);
    }else if( secCode.length===4){
        
      setSecCodeErr(false);
    }
    console.log(secCode.length);
    if(name !== "" && card.test(cardNum) && secCode.length===4){

      setOpen(true);
      
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
    
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className={classes.inputs}>
          <TextField
            label={<FormattedMessage
              id="checkout.name"
              defaultMessage="Something went wrong"
            ></FormattedMessage>}
            variant="outlined"
            error={nameErr}
            id="outlined-error-helper-text"
            helperText={nameErr?<FormattedMessage
              id="checkout.nameErr"
              defaultMessage="Something went wrong"
            ></FormattedMessage>:""}
            onChange={(e) => {setName(e.target.value)}}
            value={name}
          ></TextField>
        </div>
        <div className={classes.inputs}>
          <TextField 
          label={<FormattedMessage
            id="checkout.cardNum"
            defaultMessage="Something went wrong"
          ></FormattedMessage>} 
          variant="outlined"
          onChange={(e) => setCardNum(e.target.value)}
          value={cardNum}
          error={cardNumErr}
          helperText={cardNumErr?<FormattedMessage
            id="checkout.cardNumErr"
            defaultMessage="Something went wrong"
          ></FormattedMessage>:""}
          ></TextField>
        </div>

        <div className={classes.inputs}>
          <TextField 
          label={<FormattedMessage
            id="checkout.secCode"
            defaultMessage="Something went wrong"
          ></FormattedMessage>} 
          variant="outlined"
          onChange={(e) => setSecCode(e.target.value)}
          value={secCode}
          error={secCodeErr}
          helperText={secCodeErr?<FormattedMessage
            id="checkout.secCodeErr"
            defaultMessage="Something went wrong"
          ></FormattedMessage>:""}
          ></TextField>
        </div>

        <div className={classes.inputs}>
     
            <Button variant="contained" type="submit" color="primary">
            <FormattedMessage
              id="checkout.complete"
              defaultMessage="Something went wrong"
            ></FormattedMessage>
            </Button>
   
        </div>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        <FormattedMessage
              id="checkout.courseReg"
              defaultMessage="Something went wrong"
            ></FormattedMessage>
        </Alert>
      </Snackbar>

    </div>
  );
}
