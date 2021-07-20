import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import courseList from '../mockData';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function FeaturedCourses() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6} md={4} >
            <Card {...courseList[0]}></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Card {...courseList[1]}></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Card {...courseList[2]}></Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
