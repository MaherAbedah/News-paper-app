import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SampleData from '../test-data/sampleData';
import Article from './article';
import SwipeableViews from 'react-swipeable-views';

import { ReactComponent as KlLogo } from '../svg/kauppalehti.svg';
import { ReactComponent as HsLogo } from '../svg/Helsinginsanomat.svg';
import { ReactComponent as KslmLogo } from '../svg/keskisuomalainen.svg';
import { ReactComponent as TsLogo } from '../svg/Turunsanomat.svg';
import { ReactComponent as SsLogo } from '../svg/savonsanomat.svg';

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
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow:'none'
  },
  header:{
    width: '100%',
    display:'flex',
    flexWrap:'nowrap'
  },
  login:{
    textAlign:'right',
    margin :'auto',
    
  },
  title:{
    textAlign:'center',
    width:'100%'
  },
  list: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  image:{
    paddingLeft:'5%',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    backgroundColor:'green'
  },
  /*payment section styles*/
  PaymentSec: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1000,
    margin:'auto',
    textAlign:'center'

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  form : {
    display: 'flex',
    flexWrap: 'wrap',
    width:'100%'
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function FrontPage() {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  function handleChangeValue(event, newValue) {
    setValue(newValue);
    console.log(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.header}>
           <div className={classes.title}>
            <Typography  variant="h2">
                   FINN+
            </Typography>
            <Typography  variant="h5">
                  The national newspaper subscription service in Finland
            </Typography>
                
              </div>
              <div className={classes.login}>
                
                <Button variant="contained" color="secondary" href='/signin' >
               LOGIN
            </Button>

           </div>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={6}>
          <Paper className={classes.paper}>
            <img className={classes.image} alt="woman reading newspaper"  src='https://media2.s-nbcnews.com/j/newscms/2018_27/2487506/180705-woman-reading-news-dk_5c79d65a34a99f47e3fce86bbefe01dd.fit-2000w.jpg'/>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={6}>
          <Paper className={classes.paper}>
          <Typography textAlign='left' variant="h4">
            <Box textAlign="justify">
                  Benefits of FINN+
            </Box>
          </Typography>
          
            <List className={classes.list}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                Access all Finnish online newspapers in one place.
              </Typography>}  />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                Select from three payment options that suits you best!
              </Typography>}  />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                No advertisement.
              </Typography>} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                Access content on any devices.
              </Typography>}  />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                Cancel at any time on a monthly basis.
              </Typography>} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <div className={classes.PaymentSec}>
            <Typography style={{color:'#2D2D46FF', fontSize:'16pt',margin:'10px'}} component="div">
              Choose your favorite subsciption type here ,or you can do it later in the payment page! 
            </Typography>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChangeValue}
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
             {/* this is the design with one registration button 
              <form method="POST" action="/signup" className={classes.button}>
              <Button  variant="outlined" color="secondary" href={'/signup?method='+value} className={classes.button}>
                Continue to Registration 
              </Button>
              <input type="hidden" id="pay-method" name="pay-method" value= {value} />
              <input type="hidden" id="payment_token" name="csrf_token" value= {window.csrf_token} />
              </form>*/}
              <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={value}
                  onChangeIndex={handleChangeIndex}
              >
                  <TabContainer dir={theme.direction}>
                    <form method="POST" action="/signup" className={classes.button}>
                      <Button  variant="outlined" color="secondary" href={'/signup?method='+value} className={classes.button}>
                        Continue to Registration 
                      </Button>
                      <input type="hidden" id="pay-method" name="pay-method" value= {value} />
                      <input type="hidden" id="payment_token" name="csrf_token" value= {window.csrf_token} />
                    </form>
                  </TabContainer>
                  <TabContainer dir={theme.direction}>
                    <form method="POST" action="/signup" className={classes.button}>
                      <Button  variant="outlined" color="secondary" href={'/signup?method='+value} className={classes.button}>
                        Continue to Registration 
                      </Button>
                      <input type="hidden" id="pay-method" name="pay-method" value= {value} />
                      <input type="hidden" id="payment_token" name="csrf_token" value= {window.csrf_token} />
                    </form>
                   </TabContainer>
                  <TabContainer dir={theme.direction}>
                    <form method="POST" action="/signup" className={classes.button}>
                      <Button  variant="outlined" color="secondary" href={'/signup?method='+value} className={classes.button}>
                        Continue to Registration 
                      </Button>
                      <input type="hidden" id="pay-method" name="pay-method" value= {value} />
                      <input type="hidden" id="payment_token" name="csrf_token" value= {window.csrf_token} />
                    </form>                  
                  </TabContainer>
              </SwipeableViews>
            </div>
            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
          {
            SampleData.map(tile => <Article data={tile} />)
          }
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <HsLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <TsLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <KlLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <KslmLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <SsLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
