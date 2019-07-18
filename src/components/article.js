import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
    
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Article(props) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <a href={props.data.link} rel="noopener" target="_blank" >
                <img className={classes.img} alt="complex" src={props.data.img} />
              </a>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <a href={props.data.link} rel="noopener" target="_blank" >
                  <Typography gutterBottom variant="subtitle1">
                    {props.data.title}
                  </Typography>
                </a>
                <Typography variant="body2" gutterBottom>
                  By {props.data.author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  date of article
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}