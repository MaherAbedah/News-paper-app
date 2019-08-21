import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewsSection from './newsSection';
import TestObj from './test-data/testObj';
import Divider from '@material-ui/core/Divider';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import DashboardUserArticles from './components/profile-files/dashboardUserArticles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  news:{
    display:'flex',
    flexWrap:'Wrap'
  },
  paper: {
    maxWidth: 800,
    maxHeight: '100%',
    boxShadow:'none',
  },
  paperHead: {
    height: 100,
    width: 400,
    padding: 10,
  },
  paperSide: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    maxHight:'100%',
    marginTop:'30px',
    boxShadow:'none',
  },
  control: {
    padding: theme.spacing(1),
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },}
}));

let myObj = TestObj.user ;
if(window.obj !== undefined)
    myObj = window.obj.user ;

export default function Content(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} spacing={1}>
      <Grid item xs={2} className={classes.sectionMobile}>
      </Grid>
      <Grid item xs={7} justify="center">
        <Grid container justify="center" spacing={spacing} className={classes.news}>
          {[props.category].map(value => (
            <Grid key={value} item xs={11}>
              <Typography  variant="h6" noWrap>
                {value} 
              </Typography>
              <Paper className={classes.paper}>
                <NewsSection name = {value}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
       <Grid item xs={3} justify="center" className={classes.sectionMobile}>
          <Paper className={classes.paperSide}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h6">
                   Welcome {myObj.name}
              </Typography>
              {myObj.subscription_end !== null ? 
                <Typography variant="body2" color="textSecondary"> Monthly subscription
                </Typography> : myObj.package_end > 0 ? 
                <Typography variant="body2" color="textSecondary"> Package subscription
                </Typography> : <Typography variant="body2" color="textSecondary"> Single Payment
                </Typography>
              }
              {myObj.subscription_end !== null ? 
                <Typography variant="subtitle1" color="textSecondary"> ends {myObj.subscription_end}
                </Typography> : myObj.package_end > 0 ? 
                <Typography variant="subtitle1" color="textSecondary"> {myObj.package_end} left 
                </Typography> : <Typography variant="subtitle1" color="textSecondary"> {myObj.tokens} left
                </Typography>
              }
              
              
            </Grid>
            <Grid item xs={12}>
              <ReactWeather
                forecast="5days"  
                apikey="700581923f804c73962204056191308"
                type="auto"
                

              />
              <br/>
            </Grid>
            
           {/*<Typography style={{textAlign:'left'}} gutterBottom variant="h6">
                   Recent Activities
              </Typography>
              <DashboardUserArticles />*/}
            
          </Grid>
          </Paper>
        </Grid>

    </Grid>
  );
}
