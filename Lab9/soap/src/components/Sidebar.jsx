import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Link to="/">
          <ListItem button >
            <ListItemIcon> <HomeIcon /></ListItemIcon>
            <ListItemText primary={(<FormattedMessage
          id="nav.home"
          defaultMessage="Something went wrong"
        ></FormattedMessage>)} />
          </ListItem>
          </Link>
      <Link to="/about">
          <ListItem button >
            <ListItemIcon> <InfoIcon /></ListItemIcon>
            <ListItemText primary={(<FormattedMessage
          id="nav.about"
          defaultMessage="Something went wrong"
        ></FormattedMessage>)} />
          </ListItem>
          </Link>
          <Link to="/catalog">
          <ListItem button >
            <ListItemIcon> <LibraryBooksIcon /></ListItemIcon>
            <ListItemText primary={(<FormattedMessage
          id="nav.catalog"
          defaultMessage="Something went wrong"
        ></FormattedMessage>)} />
          </ListItem>
          </Link>

          <Link to="/login">
          <ListItem button >
            
            <ListItemText primary={(<FormattedMessage
          id="nav.login"
          defaultMessage="Something went wrong"
        ></FormattedMessage>)} />
          </ListItem>
          </Link>

          <Link to="/register">
          <ListItem button >
            
            <ListItemText primary={(<FormattedMessage
          id="nav.signup"
          defaultMessage="Something went wrong"
        ></FormattedMessage>)} />
          </ListItem>
          </Link>
      </List>
    </div>
  );
  const anchor = "left";
  return (
    <div>
          <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
    </div>
  );
}
