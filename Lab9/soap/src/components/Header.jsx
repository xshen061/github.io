import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";
import { createMuiTheme } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import { Context } from "../providers/LanguageProvider";

import { FormattedMessage } from "react-intl";

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  },
  logo: {
    color: "white",
    margin: theme.spacing(0, 3, 0, 0),
  },
  link: {
    color: "white",
    margin: theme.spacing(0, 1.5, 0, 0),
  },

  select: {
    color: "white",
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "white",
  },
}));

export default function Header() {
  const classes = useStyles();
  const context = useContext(Context);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#1a202c" }}>
        <Toolbar>
          <Sidebar></Sidebar>
          <Link
            component={RouterLink}
            underline="none"
            className={classes.logo}
            to="/"
            variant="h5"
          >
            &lt;Lab9&gt;
          </Link>

          {matches && (<>
            <ul className={classes.ul}>
            <li>
              <Link
                className={classes.link}
                component={RouterLink}
                to="/catalog"
                variant="body1"
              >
                <FormattedMessage
                  id="nav.catalog"
                  defaultMessage="Something went wrong"
                ></FormattedMessage>
              </Link>
            </li>
            <li>
              <Link
                className={classes.link}
                component={RouterLink}
                to="/about"
                variant="body1"
              >
                <FormattedMessage
                  id="nav.about"
                  defaultMessage="Something went wrong"
                ></FormattedMessage>
              </Link>
            </li>
          </ul>

          <div className={classes.spacer}></div>

          <FormControl className={classes.formControl}>
            <Select
              className={classes.select}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={context.locale}
              onChange={context.changeLang}
            >
              <MenuItem value={"en-US"}>English</MenuItem>
              <MenuItem value={"fr-CA"}>Francois</MenuItem>
            </Select>
          </FormControl>

          <Button component={RouterLink} to="/login" style={{ color: "white" }}>
            <FormattedMessage
              id="nav.login"
              defaultMessage="Something went wrong"
            ></FormattedMessage>
          </Button>
          <Button
            component={RouterLink}
            to="/register"
            style={{ color: "white" }}
          >
            <FormattedMessage
              id="nav.signup"
              defaultMessage="Something went wrong"
            ></FormattedMessage>
          </Button>
          
          </>)}

          
        
        </Toolbar>
      </AppBar>
    </div>
  );
}
