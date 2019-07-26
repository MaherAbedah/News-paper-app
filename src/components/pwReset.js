import React, {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import FormHelperText from '@material-ui/core/FormHelperText';





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
}));

export default function ResetPW() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    matched: false ,
    password:'',
    rPassword:'',
});
  /*function handleSubmit (event){
    alert("working");
    event.preventDefault();
  };*/
const handleMatch = name => event => {
    setState({ ...state, [name]: event.target.value});
    
    console.log(`password = ${state.password} ,rPassword= ${state.rPassword} ,matched= ${state.matched}`)
  };

  useEffect(() => {
    // checking the password and the confirm password all the time.
    if(state.password === state.rPassword)
      setState({ ...state, matched: true});
    else 
      setState({ ...state, matched: false});
},[state]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link href='/'>
          <Avatar className={classes.avatar}>
            <HomeIcon />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form className={classes.form} method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
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
          </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          
            Change Password
          </Button>
          
          <input type="hidden" id="reset_token" name="csrf_token" value={window.csrf_token} />
        </form>
      </div>
    </Container>
  );
}