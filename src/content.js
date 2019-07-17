import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewsSection from './newsSection';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 600,
    minHeight: 800,
  },
  paperHead: {
    height: 100,
    width: 400,
    padding: 10,

  },
  paperSide: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHight:600,
    marginTop:'30px'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Content() {
  const [spacing] = React.useState(6);
  const classes = useStyles();



  return (
    <Grid container className={classes.root} spacing={2}>
      
      <Grid item xs={9}>
        <Grid container justify="center" spacing={spacing}>
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
       <Grid item xs={3}>
          <Paper className={classes.paperSide}>User Information</Paper>
        </Grid>
    </Grid>
  );
}
