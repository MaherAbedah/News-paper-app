import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';





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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RssEdit() {
  const classes = useStyles();
  /*function handleSubmit (event){
    alert("working");
    event.preventDefault();
  };*/

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link href='/analytics'>
          <Avatar className={classes.avatar}>
            <HomeIcon />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          Edit your Rss-feed 
        </Typography>
        <form className={classes.form} method="POST">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="rssUrl"
            label="RSS Feed URL"
            name="rssUrl"
            autoFocus
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          
            Save
          </Button>
          <Button
            
            fullWidth
            variant="contained"
            color="secondary"
            href="/analytics"
          >
          
            Cancel
          </Button>
          <input type="hidden" id="csrf_token" name="csrf_token" value={window.csrf_token} />
        </form>
      </div>
    </Container>
  );
}