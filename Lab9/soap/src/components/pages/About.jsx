import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AboutGraphic from "../about.svg";

import Grid from "@material-ui/core/Grid";
import courseList from "../../mockData";

const useStyles = makeStyles((theme) => ({
  instructors: {
    height: 150,
    width: 150,
    borderRadius: "100%",
    objectFit: "cover",
    margin: theme.spacing(0, 0, 2, 0),
  },
  section: { padding: theme.spacing(4, 0) },
}));

export default function About() {
  const classes = useStyles();

  const RenderTeam = () => {
    return courseList.map((course) =>  {return (
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              alignItems: "center",
            }}
          >
            <img className={classes.instructors} src={course.avatar}></img>
            <Typography variant="h5" component="h2">
              {course.author}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              Instructor
            </Typography>
          </Paper>
        </Grid>
      )})
    
  };

  return (
    <div>
      <div class={classes.section}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <div>
              <Typography variant="h2" component="h2">
                About Us
              </Typography>
              <Typography variant="body1" component="h2">
                We understand that in day and age, exciting new technologies
                emerge every day at break-neck speeds. Keep ahead of the curve
                with bytes sized courses that take days not weeks
              </Typography>
            </div>
          </Grid>
          <Grid item xs={false} sm={6}>
            <img src={AboutGraphic} style={{ width: "100%" }}></img>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" component="h2">
              Quantity over quality
            </Typography>
            <Typography variant="body1" component="h2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a mollitia illum unde itaque inventore blanditiis velit provident beatae dolorum praesentium illo modi recusandae hic, voluptatem dolores voluptate incidunt ea perferendis, aspernatur minima, ipsum fugit nisi laudantium. Cupiditate, quae sapiente?
            </Typography>
          </Grid>
          <Grid item xs={false} sm={4}></Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Grid container>
          <Grid item xs={false} sm={4}></Grid>
          <Grid item xs={12} sm={8} style={{ textAlign: "right" }}>
            <Typography variant="h4" component="h2">
              World wide accessible education
            </Typography>
            <Typography variant="body1" component="h2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perferendis harum labore hic amet, possimus, quas aliquid quae repellat aliquam, ullam corrupti quisquam beatae esse inventore quo. Ducimus qui est, cupiditate consequuntur officia quas eligendi quasi aperiam eius sint dignissimos.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography
          style={{ margin: "0 0 1rem 0" }}
          variant="h4"
          component="h2"
        >
          Meet the team
        </Typography>

        <Grid item container spacing={2}>
          <RenderTeam></RenderTeam>
        </Grid>
      </div>
    </div>
  );
}
