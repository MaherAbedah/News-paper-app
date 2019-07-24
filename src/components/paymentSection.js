import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    maxWidth: '100%',

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

export default function PaymentSection() {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    method:'',
    payWith: '',
    amount:'',
  });
  const [value, setValue] = React.useState(0);

  function handleChangeValue(event, newValue) {
    setValue(newValue);
    console.log(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: Number(event.target.value) });
    console.log(`value= ${value} , pay-with= ${state.payWith} , amount= ${state.amount}`)
  };

  const paymentSuccess = (method,amount) =>
  {
    
    fetch("/topup",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({"amount": state.amount, "method": value})
    }).then(res => console.log(res))  
}

  return (
    <div className={classes.root}>
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
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <form method="POST" action="/topup" className={classes.form}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="payWith-native-simple">Pay with</InputLabel>
              <Select
                
                value={state.payWith}
                onChange={handleChange('payWith')}
                input={<Input  name='pay-with' id="payWith-simple" />}
              >
                <MenuItem value={1}>Credit Card</MenuItem>
                <MenuItem value={2}>Bank Payment</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={paymentSuccess} variant="contained" color="secondary" type="submit">
              Order
            </Button>
            <input type="hidden" id="payment_token" name="csrf_token" value='0' />
          </form>
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <form method="POST" action="/topup" className={classes.form}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="payWith-native-simple">Pay with</InputLabel>
              <Select
                
                value={state.payWith}
                onChange={handleChange('payWith')}
                input={<Input  name='pay-with' id="payWith-simple" />}
              >
                <MenuItem value={1}>Credit Card</MenuItem>
                <MenuItem value={2}>Bank Payment</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={paymentSuccess} variant="contained" color="secondary" type="submit">
              Order
            </Button>
            <input type="hidden" id="payment_token" name="csrf_token" value='1' />
          </form>
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <form method="POST" action="/topup" className={classes.form}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="payWith-native-simple">Pay with</InputLabel>
              <Select
                
                value={state.payWith}
                onChange={handleChange('payWith')}
                input={<Input  name='pay-with' id="payWith-simple" />}
              >
                <MenuItem value={1}>Credit Card</MenuItem>
                <MenuItem value={2}>Bank Payment</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="amount-simple">Amount €</InputLabel>
              <Select
                value={state.amount}
                onChange={handleChange('amount')}
                input={<Input name="amount" id="amount-simple" />}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl> 
            <Button onClick={paymentSuccess} variant="contained" color="secondary" type="submit">
              Order
            </Button>
            <input type="hidden" id="payment_token" name="csrf_token" value='2' />
          </form>
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
