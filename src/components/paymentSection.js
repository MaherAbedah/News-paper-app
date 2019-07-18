import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 800,

  },
}));

export default function PaymentSection() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
        >
          <Tab label={<div>
            <Typography style={{color:'black'}} component="div">Monthly subscription </Typography>
            <Typography style={{color:'red', fontSize:'14pt'}} component="div">29.99 € per month </Typography>
            <Typography style={{color:'gray'}} component="span"> </Typography>
            <ul style={{color:'gray'}}>
              <li>Unlimited access to all Finnish online newspapers</li>
              <li>Read on any device</li>
              <li>Cancel at any time</li>
            </ul>
              </div>} />
          <Tab label={<div>
            <Typography style={{color:'black'}} component="div">Package subscription </Typography>
            <Typography style={{color:'red', fontSize:'14pt'}} component="div"> 5 € per month </Typography>
            <Typography style={{color:'gray'}} component="span"> </Typography>
            <ul style={{color:'gray'}}>
              <li>Access 15 articles from all Finnish online newspapers</li>
              <li>Read on any device</li>
              <li>Cancel at any time</li>
            </ul>
              </div>} />
          <Tab label={<div>
            <Typography style={{color:'black'}} component="div"> Single Payment </Typography>
            <Typography style={{color:'red', fontSize:'14pt'}} component="div">50 Cents per article </Typography>
            <Typography style={{color:'gray'}} component="span"> </Typography>
            <ul style={{color:'gray'}}>
              <li>Access articles from all Finnish online newspapers</li>
              <li>Read on any device</li>
              
            </ul>
              </div>} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>Item One</TabContainer>
        <TabContainer dir={theme.direction}>Item Two</TabContainer>
        <TabContainer dir={theme.direction}>Item Three</TabContainer>
      </SwipeableViews>
    </div>
  );
}
