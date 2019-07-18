import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase'; 
import myImage from '../images/myImage.jpg';

const testObj = {
  name:'maher',
  email: 'maher@example.com',
  end_date: '18.08.2019',
  bought:[]

};
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
	let myObj = testObj ;

  if(window.obj !== undefined)
    myObj = window.obj;
 
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
                  {myObj.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {myObj.email}
                </Typography>
                
                  {myObj.end_date !== null ? 
                  	<Typography variant="body2" color="textSecondary"> Monthly subscription
                  	</Typography> : myObj.bought.length !== null ? 
                  	<Typography variant="body2" color="textSecondary"> Package subscription
                  	</Typography> : <Typography variant="body2" color="textSecondary"> Not subscriped!
                  	</Typography>
                  } 
                
              </Grid>
              <Grid item>
                <Button variant="body2" style={{ cursor: 'pointer' }}>
                  Edit
                </Button>
              </Grid>
            </Grid>
            <Grid item>
            	{myObj.end_date !== null ? 
                  	<Typography variant="subtitle1" color="textSecondary"> ends {myObj.end_date}
                  	</Typography> : myObj.bought.length !== null ? 
                  	<Typography variant="subtitle1" color="textSecondary"> {myObj.prepaid} left 
                  	</Typography> : <Typography variant="subtitle1" color="textSecondary"> Non!
                  	</Typography>
                  }
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

