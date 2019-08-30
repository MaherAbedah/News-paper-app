import React ,{useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  }
}));
//getting the payment plan choosed by user in front page using URL 
let myparams = (new URL(document.location)).searchParams;
let type = myparams.get('method');

export default function SignUp() {
  const [state, setState] = React.useState({
    matched: false ,
    password:'',
    rPassword:'',
    method:type,
    payWith: '',
    amount:'',
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
    
    //console.log(`method = ${state.method}, href=${window.location.search}`);
  };

  const handleMatch = name => event => {
    setState({ ...state, [name]: event.target.value});
    
    //console.log(`password = ${state.password} ,rPassword= ${state.rPassword} ,matched= ${state.matched}`)
  };
//get the chosen subscription type from the frontpage

useEffect(() => {
    // checking the password and the confirm password all the time.
    if(state.password === state.rPassword)
      setState({ ...state, matched: true});
    else 
      setState({ ...state, matched: false});
},[state]);



  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link href='/'><Avatar className={classes.avatar}>
          <HomeIcon /> 
        </Avatar></Link>
        <Typography component="h1" variant="h5">
          Register with FINN+
        </Typography>
        <form className={classes.form} method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={state.password}
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleMatch('password')}
              />
            </Grid>
            <Grid item xs={12}>
             
              <TextField
                error= {!state.matched}
                variant="outlined"
                required
                fullWidth
                value={state.rPassword}
                name="rPassword"
                label="Repeat Password"
                type="password"
                id="rPassword" 
                onChange={handleMatch('rPassword')}
              />
             
              {!state.matched &&<FormHelperText>password not matched </FormHelperText>}
            </Grid>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="method-simple">Subscription type</InputLabel>
              <Select
                name='pay-method'
                value={state.method}
                onChange={handleChange('method')}
                input={<Input name='pay-method' id="method-simple" />}
              >
                <MenuItem value={0}>Monthly</MenuItem>
                <MenuItem value={1}>Package</MenuItem>
                <MenuItem value={2}>One-time</MenuItem>
              </Select>
            </FormControl>
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

           
              {state.method === 2 || state.method ==='2' ? <div className={classes.formControl}>
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
            </FormControl> </div> : <br/>}

            <FormControlLabel
            control={<Checkbox value="policy" required color="primary" />}
            label={<span> I agree to your <a rel="noopenerp" target="_blank" href="https://finn-terms-and-policy.gitbook.io/finn-terms-of-use-and-privacy-policy/">Terms of use and Privacy Policy</a></span>}
          />
            
          </Grid>
          
            <Button

              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
          <input type="hidden" id="signup_token" name="csrf_token" value={window.csrf_token} />
        </form>
      </div>
      
    </Container>
  );
}