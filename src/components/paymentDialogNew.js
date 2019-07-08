import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


export default function PaymentDialogNew(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    method:'',
    payWith: '',
    amount:'',
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: Number(event.target.value) });
  };

  function handleClickOpen() {
    setState({ ...state, open: true });
  }

  function handleClose() {
    setState({ ...state, open: false });
  }

  const paymentSuccess = (method,amount) =>
  {
    setState({ ...state, open: false });
    fetch("/api/paytokens",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({"amount": amount, "method": method})
    }).then(res => console.log(res))  
}

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        payment options
      </Button>
      <Dialog open={state.open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-slide-title">{"Choose your favorite payment method"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Monthly subscription: full access to the content for one month.<br/>
            Package subscription: access to 15 articles per payment.<br/>
            Or top up your account to use the one-time payment.
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="method-simple">Method</InputLabel>
              <Select
                value={state.method}
                onChange={handleChange('method')}
                input={<Input id="method-simple" />}
              >
                <MenuItem value={1}>Monthly</MenuItem>
                <MenuItem value={2}>Package</MenuItem>
                <MenuItem value={3}>One-time</MenuItem>
              </Select>
            </FormControl>
            {state.method === 3 ? <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="payWith-native-simple">Pay with</InputLabel>
              <Select
                native
                value={state.payWith}
                onChange={handleChange('payWith')}
                input={<Input id="payWith-native-simple" />}
              >
                <option value="" />
                <option value={1}>Credit Card</option>
                <option value={2}>Bank Payment</option>
                
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="amount-simple">Amount €</InputLabel>
              <Select
                value={state.amount}
                onChange={handleChange('amount')}
                input={<Input id="amount-simple" />}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl> </div> : <br/>}
            <Button onClick={paymentSuccess} color="primary" type="submit">
            Ok
            </Button>
            <Button onClick={handleClose} color="primary">
            Cancel
            </Button>
          
          </form>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}