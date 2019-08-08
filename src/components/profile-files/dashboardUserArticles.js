import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HistoryIcon from '@material-ui/icons/History';
import TestObj from '../../test-data/testObj'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '100%',
    
  },
}));

let myObj = TestObj.user ;

  if(window.obj !== undefined)
    myObj = window.obj.user;

export default function DashboardUserArticles() {
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
          centered
          aria-label="full width tabs example"
        >
          <Tab  icon={<HistoryIcon />}  {...a11yProps(0)} />
          <Tab  icon={<FavoriteIcon />}  {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ul>
            {
              myObj.latestArticles.slice(0,5).map(data => 
                <div>
                <a href={data.link} rel="noopener noreferrer" target="_blank" >
                 <li> <Typography  style={{textAlign:'left', fontSize:'10pt'}} variant='subtitle1'>
                    {data.title}
                  </Typography>
                </li></a>
                <Typography  style={{textAlign:'right', fontSize:'8pt'}} variant="body2" color="textSecondary" >
                     accessed {data.accessed}
                </Typography>
                <Divider /></div>)
            }
            </ul>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ul>
            {
              myObj.favoriteArticles.slice(0,5).map(data => 
                <div>
                <a href={data.link} rel="noopener noreferrer" target="_blank" >
                 <li> <Typography  style={{textAlign:'left', fontSize:'10pt'}} variant='subtitle1'>
                    {data.title}
                  </Typography>
                </li></a>
                
                <Divider /></div>)
            }
            </ul>
        </TabPanel>
        
      </SwipeableViews>
    </div>
  );
}
