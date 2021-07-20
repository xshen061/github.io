import React from "react";
import { useParams } from "react-router-dom";

import courseList from "../../mockData";
import CheckoutForm from "../CheckoutForm";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { FormattedMessage } from "react-intl";



const useStyles = makeStyles((theme) => ({
  root: { width: "100%", padding: theme.spacing(4, 0, 0, 0) },
  section: { padding: theme.spacing(2, 0) },
  paper: {
    padding: theme.spacing(2),
  },
  survey: {
    textAlign: "center",
    padding: theme.spacing(4),
  },
}));

export default function Checkout() {

  const classes = useStyles();



  let { courseId } = useParams();
  console.log(courseId)
  let course = courseList[courseId];

  return (
    <>
      <div class={classes.section}>
        <Typography variant="h4" component="h2">
        <FormattedMessage
              id="checkout.title"
              defaultMessage="Something went wrong"
            ></FormattedMessage>
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} sm={7}>
            <CheckoutForm></CheckoutForm>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Summary</Typography>
              <Typography variant="body1">Course: {course.title}</Typography>
              <Typography variant="body1">Price: {course.price}</Typography>
              <Divider></Divider>
              <Typography variant="body1">Subtotal: {course.price}</Typography>
              <Typography variant="body1">Estimated Tax: $0.00</Typography>

              <Typography variant="h6">Total: {course.price} </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
