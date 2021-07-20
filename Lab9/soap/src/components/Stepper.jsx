import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import FeaturedCourses from "./FeaturedCourses";
import Divider from "@material-ui/core/Divider";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
    padding: "3rem 5rem"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
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

function getSteps() {
  return ["", "", ""];
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
        <>
        <Typography
          style={{ marginBottom: "1rem" }}
          variant="body1"
          component="h2"
        >
          Do you prefer visual or technical work?
        </Typography>
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Visual
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Technical
          </Button>
        </div>
      </>);
      case 1:
        return (
          <>
            <Typography
              style={{ marginBottom: "1rem" }}
              variant="body1"
              component="h2"
            >
              Do you enjoy creative art like painting graphic design?
            </Typography>
            <div style={{ display: "flex", marginBottom: "1rem" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Yes
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                No
              </Button>
            </div>
          </>
        );
      case 2:
        return (<>

        <Typography
          style={{ marginBottom: "1rem" }}
          variant="body1"
          component="h2"
        >
          Do you like tinkering with hardware?
        </Typography>
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Yes
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            No
          </Button>
        </div>
      </>);
      default:
        return "Unknown step";
    }
  }

  const isStepOptional = (step) => {
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
       {activeStep != steps.length && ( <>
         <Typography style={{padding:"2rem 0 1rem 0"}} variant="h5" component="h2">
         Lets get to know you better.
       </Typography>
          <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
       </>)}
      
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography style={{padding:"2rem 0 1rem 0"}} variant="h4" component="h2">
              You could be a Web Developer!
            </Typography>
              <Divider></Divider>
            <Typography style={{padding:"2rem 0 1rem 0"}} variant="h5" component="h2">
        Here's some courses you might like...
      </Typography>

            <FeaturedCourses></FeaturedCourses>

            <Button style={{margin:"1rem 0.5rem 1rem 0"}} variant="contained" color={"primary"} onClick={handleReset} >
              Try again
            </Button>

            <Button component={RouterLink} to="/catalog" style={{margin:"1rem 0 1rem 0"}} variant="outlined" color={"primary"} onClick={handleReset} >
              Catalog
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
