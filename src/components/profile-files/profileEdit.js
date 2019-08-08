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
import IconButton from '@material-ui/core/IconButton';
import PhotoIcon from '@material-ui/icons/Face';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TestObj from '../../test-data/testObj'

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
  },
  input: {
    display: 'none',
  },
}));

let myObj = TestObj.user ;

  if(window.obj !== undefined)
    myObj = window.obj.user;


export default function ProfileEdit() {
  const [state, setState] = React.useState({
    matched: false ,
    password:'',
    rPassword:'',
    
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
        <Link href='/profile'><Avatar className={classes.avatar}>
          <HomeIcon /> 
        </Avatar></Link>
        <Typography component="h1" variant="h5">
          Edit your information
        </Typography>
        <form className={classes.form} method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                
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
                
                fullWidth
                value={state.password}
                name="password"
                label="New Password"
                type="password"
                id="password"
                onChange={handleMatch('password')}
              />
            </Grid>
            <Grid item xs={12}>
             
              <TextField
                error= {!state.matched}
                variant="outlined"
                
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
            <Grid item xs={12}>
              <Typography variant="h6" component="span"> Choose profile photo </Typography>
            
            
              <input accept="image/*" className={classes.input} id="photo-file" type="file" />
                <label htmlFor="photo-file">
                  <IconButton
                    color="primary"
                    className={classes.button}
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoIcon />
                  </IconButton>
                </label>
            
            </Grid>
          </Grid>
          
            <Button

              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save 
            </Button>
            <Button  fullWidth variant="contained" color="secondary" href="/profile">
              cancel
            </Button>
                   <input type="hidden" id="edit_token" name="csrf_token" value={window.csrf_token} />
        </form>
      </div>
      
    </Container>
  );
}