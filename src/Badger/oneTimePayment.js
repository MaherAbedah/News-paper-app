import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

export default function OneTimePayment(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
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

  const paymentSuccess = (amount) =>
  {
    setState({ ...state, open: false });
    fetch("/api/paytokens",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({"amount": amount, "url": "url"})
    }).then(res => console.log(res))  
}

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color='primary'>Top-up your account</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle> choose payment method </DialogTitle>
        <DialogContent>
          <form className={classes.container}>
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
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={paymentSuccess} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}