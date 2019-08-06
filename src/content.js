import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewsSection from './newsSection';
import {myObj} from './components/profile';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHight:'100%',
    marginTop:'30px'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Content(props) {
  const [spacing] = React.useState(6);
  const classes = useStyles();
  if(window.obj !== undefined)
    myObj = window.obj.user ;


  return (
    <Grid container justify="center" className={classes.root} spacing={2}>
      
      <Grid item xs={9} justify="center">
        <Grid container justify="center" spacing={spacing} className={classes.news}>
          {[props.category].map(value => (
            <Grid key={value} item xs={9}>
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
       <Grid item xs={3} justify="center">
          <Paper className={classes.paperSide}>
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
            <br/>
            <Typography style={{textAlign:'left'}} gutterBottom variant="h6">
                 Your latest reads
            </Typography>
            
            {/*choosing the last 5 articles added to the latestarticles to show in the main dashboard*/
              myObj.latestArticles.slice(0,5).map(data => 
                <div>
                <a href={data.link} rel="noopener noreferrer" target="_blank" >
                  <Typography  style={{textAlign:'left', fontSize:'10pt'}} variant='subtitle1'>
                    {data.title}
                  </Typography>
                </a>
                <Typography  style={{textAlign:'right', fontSize:'8pt'}} variant="body2" color="textSecondary" >
                     accessed {data.accessed}
                </Typography>
                <Divider /></div>)
            }
          </Paper>
        </Grid>
    </Grid>
  );
}
