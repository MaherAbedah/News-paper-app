import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase'; 
import myImage from '../images/myImage.jpg';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop:30,
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

export default function Profile (props){
	const classes = useStyles();
	
	const userInfo = (current_user) =>{
	  fetch(`api/Usaedata/current_user`, { 
	  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' }},)
	    .then(res => res.json())
	    .then(data => data.user)
	}


	return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="user personal photo " src={myImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  User Name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  user e-mail adddress
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  other information 
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Edit
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">20 days left</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

