import React from "react";

import { useParams } from "react-router-dom";

import courseList from "../../mockData";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  section: { padding: theme.spacing(0, 0 , 4, 0) },
  paper: {
    padding: theme.spacing(2),
  },
  survey: {
    textAlign: "center",
    padding: theme.spacing(4),
  },
}));

export default function Course() {
  const classes = useStyles();
  let { id } = useParams();
  let course = courseList[id];

  return (
    <div>
      <Typography style={{padding:"2rem 0 1rem 0"}}variant="h4" component="h2">
        {course.title}
      </Typography>

      <Paper className={classes.paper} style={{margin:"0 0 2rem 0"}}>
        <div className={classes.section}>
          <Grid container spacing={10}>
            <Grid item xs={false} sm={6}>
              <img src={course.thumbnail} style={{ width: "100%", height:'350px', objectFit:"cover" }}></img>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="h2">
                Instructor: {course.author}
              </Typography>
              <Typography variant="h5" component="h2">
                Difficulty: {course.difficulty}
              </Typography>

              <Typography variant="h5" component="h2">
                Languages: {course.languages}
              </Typography>

              <Typography variant="h6" component="h2">
                Course Description
              </Typography>

              <Typography variant="body1">{course.description}</Typography><br></br>

              <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae officia illo delectus cumque, ad odio necessitatibus vero fugit error molestias, soluta eligendi eos molestiae quod quidem explicabo qui architecto eius! Qui voluptates quo quos asperiores.</Typography>
              <Button
               style={{margin:"1rem 0 0 0"}}
                variant="contained"
                color="primary"
                component={RouterLink}
                to={`/checkout/${id}`}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </div>

        <div >
        {course.units.map((unit, index) => {
          return (
            <Paper className={classes.paper} style={(index !== course.units.length-1) ?{margin: "0 0 1rem 0"}:{}} >
              <Typography variant="h5" component="h2">
                {index + 1}. {unit}
              </Typography>
            </Paper>
          );
        })}
        </div>
      </Paper>
    </div>
  );
}
