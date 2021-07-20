import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom'
import Divider from "@material-ui/core/Divider";
import { FormattedMessage } from "react-intl";
import { createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ul:{
      listStyle:'none',
      margin:0,
      padding:0
  },
  footer:{
      padding: theme.spacing(8,0)
  },
  credit:{
      padding: theme.spacing(4,0,0,0)
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item xs={6} sm={3}>
          <Typography variant="body1" component="h2">
            Code Bytes
          </Typography>
          <ul className={classes.ul}>
            <li>
              <Link component={RouterLink} variant="body2" color="textSecondary" to="/about">
              <FormattedMessage
          id="footer.about"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
            <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
            <FormattedMessage
          id="footer.careers"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
              <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
              <FormattedMessage
          id="footer.blog"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
            <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
            <FormattedMessage
          id="footer.forum"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Typography variant="body1" component="h2">
        <FormattedMessage
          id="footer.catalog"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
          </Typography>
          <ul className={classes.ul}>
            <li>
              <Link component={RouterLink} variant="body2" color="textSecondary" to="/about">
              <FormattedMessage
          id="footer.webdev"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
            <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
            <FormattedMessage
          id="footer.compsci"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
              <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
              <FormattedMessage
          id="footer.machLearn"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
            <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
            <FormattedMessage
          id="footer.dataSci"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
          </ul>
          </Grid>
        <Grid item xs={6} sm={3}>
        <Typography variant="body1" component="h2">
        <FormattedMessage
          id="footer.social"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
          </Typography>
          <ul className={classes.ul}>
            <li>
              <Link component={RouterLink} variant="body2" color="textSecondary" to="/about">
              <FormattedMessage
          id="footer.about"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
            <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
            <FormattedMessage
          id="footer.careers"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
              <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
              <FormattedMessage
          id="footer.blog"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
            <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
            <FormattedMessage
          id="footer.forum"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
          </ul>
          </Grid>
        <Grid item xs={6} sm={3}>

        <Typography variant="body1" component="h2">
        <FormattedMessage
          id="footer.resc"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
          </Typography>
          <ul className={classes.ul} >
            <li>
              <Link component={RouterLink} variant="body2" color="textSecondary" to="/about">
              <FormattedMessage
          id="footer.about"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
            <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
            <FormattedMessage
          id="footer.careers"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
              <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
              <FormattedMessage
          id="footer.blog"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
            <li>
            <Link component={RouterLink} variant="body2" color="textSecondary" to="/">
            <FormattedMessage
          id="footer.forum"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>

      <Typography className={classes.credit} variant="body2" component="p" color="textSecondary">
      <FormattedMessage
          id="footer.credit"
          defaultMessage="Something went wrong"
        ></FormattedMessage>
      </Typography>
    </footer>
  );
}
