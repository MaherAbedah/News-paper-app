import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewsSection from '../newsSection';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 600,
    width: 360,
  },
  paperHead: {
    minHeight: 100,
    maxWidth: 1200,
    padding: 10,

  },
  control: {
    padding: theme.spacing(4),
  },
}));

export default function GuestContent() {
  const [spacing] = React.useState(6);
  const classes = useStyles();



  return (
    <Grid container className={classes.root} spacing={4}>
      
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        <Grid item >
            <Paper className={classes.paperHead} style={{backgroundColor: 'green', color: 'white'}}>
              <Typography  variant="h5" Wrap>
                  Are you a big fan of news? congratulations FINN+ is the place for news lovers.<a href='/signup'>Register</a> for the service and choose your favorit payment option. 
                </Typography>
                <Typography  variant="h6" Wrap style={{color:'#3FBFAFFF'}}>
                  Already a FINN+ user! well you know how to  <a href='/signin'>Login</a>! 
                </Typography>
            </Paper>
        </Grid>
       {/* <Grid item >
        <Paper className={classes.paperHead} style={{backgroundColor: 'green', color: 'white'}}>
              <Typography  variant="h4" Wrap>
                  FINN+ user! please <a href='/signin'>Login</a> here. 
                </Typography>
            </Paper>
        </Grid>*/}
          {['Most Read', 'Trending', 'Latest'].map(value => (
            <Grid key={value} item>
              <Typography  variant="h6" noWrap>
                {value} 
              </Typography>
              <Paper className={classes.paper} >
                <NewsSection name = {value}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
