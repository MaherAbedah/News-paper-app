import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewsSection from './newsSection';
import {myObj} from './components/profile';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  news:{
    display:'flex',
    flexWrap:'noWrap'
  },
  paper: {
    maxWidth: 700,
    minHeight: 800,
    boxShadow:'none'
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
      
      <Grid item xs={9} className={classes.news}>
        <Grid container justify="center" spacing={spacing}>
          {['Headlines', 'Trending', 'Latest'].map(value => (
            <Grid key={value} item >
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
          <Paper className={classes.paperSide}>
            <Typography gutterBottom variant="h6">
                 Welcome {myObj.name}
            </Typography>
            {myObj.end_date !== null ? 
              <Typography variant="body2" color="textSecondary"> Monthly subscription
              </Typography> : myObj.bought.length !== null ? 
              <Typography variant="body2" color="textSecondary"> Package subscription
              </Typography> : <Typography variant="body2" color="textSecondary"> Not subscriped!
              </Typography>
            }
            {myObj.end_date !== null ? 
              <Typography variant="subtitle1" color="textSecondary"> ends {myObj.end_date}
              </Typography> : myObj.bought.length !== null ? 
              <Typography variant="subtitle1" color="textSecondary"> {myObj.prepaid} left 
              </Typography> : <Typography variant="subtitle1" color="textSecondary"> Non!
              </Typography>
            }
            <Typography gutterBottom variant="h6">
                 Your latest reads
            </Typography>

            {
              myObj.latestArticles.map(data => 
                <div>
                <Link href={data.link}>
                  <Typography style={{textAlign:'left', fontSize:'10pt'}} variant='subtitle1'>
                    {data.title}
                  </Typography>
                </Link>
                <Divider /></div>)
            }
          </Paper>
        </Grid>
    </Grid>
  );
}
