import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, ThemeProvider, Button } from "@material-ui/core";
import SignUpForm from "../SignUpForm";
import FeaturedCoures from "../FeaturedCourses";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Link} from 'react-router-dom';
import Hero from "../hero.svg";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { Theme } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%",padding:theme.spacing(4,0,0,0) },
  section: { padding: theme.spacing(4,0) },
  paper: {
    padding: theme.spacing(2),
  },
  survey:{
    textAlign:'center',
    padding: theme.spacing(4)
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>

     
      <div class={classes.section}>
        <Grid container spacing={10}>
          <Grid item xs={false} sm={7} ><img src={Hero} style={{width:"100%"}}></img></Grid>
          <Grid item xs={12} sm={5}>
            <SignUpForm></SignUpForm>
          </Grid>
        </Grid>
      </div>
      <div className={classes.section}>
      <Typography variant="h5" component="h2" style={{margin:"0 0 0.5rem 0"}}>
      <FormattedMessage
          id="home.featured"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
      </Typography>
        <FeaturedCoures></FeaturedCoures>
      </div>

      <div className={classes.section}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" component="h2">
            <FormattedMessage
          id="home.opt"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
            </Typography>
            <Typography variant="body1" component="h2">
            <FormattedMessage
          id="home.optDesc"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
            </Typography>
          </Grid>
          <Grid item xs={false} sm={4}></Grid>
        </Grid>
      </div>


    
      <Divider style={{margin:'2rem 0'}}></Divider>

      <div className={classes.section}>
        <Grid container>
        <Grid item xs={false}sm={4}></Grid>
          <Grid item xs={12} sm={8} style={{textAlign: 'right'}} >
            <Typography variant="h4" component="h2">
            <FormattedMessage
          id="home.prof"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
            </Typography>
            <Typography variant="body1" component="h2">
            <FormattedMessage
          id="home.profDesc"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
            </Typography>
          </Grid>
          
        </Grid>
      </div>

      <div className={classes.section}>
        <Paper className={classes.survey} style={{backgroundColor:"#1a202c"}}>
        <Typography variant="h4" component="h2" style={{color:'#fff'}}>
        <FormattedMessage
          id="home.surv"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
            </Typography>
            <Link to="/onboarding">
            <Button variant="contained" color="primary" style={{margin:"0.5rem 0 0 0"}}> <FormattedMessage
          id="home.survButton"
          defaultMessage="Something went wrong"
        ></FormattedMessage></Button>
            </Link>
            
        </Paper>
      </div>

      </Container>
    </div>
  );
}
