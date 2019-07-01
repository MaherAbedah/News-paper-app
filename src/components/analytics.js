import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BookIcon from '@material-ui/icons/Book';
import OnePaymentIcon from '@material-ui/icons/LooksOne';
import MonthlyPaymentIcon from '@material-ui/icons/Forward30';
import PackagePaymentIcon from '@material-ui/icons/Redeem';
import PercentageIcon from '@material-ui/icons/AspectRatio';

import {XYPlot, XAxis, YAxis, ArcSeries, VerticalBarSeries, LabelSeries} from 'react-vis';
import TestObj from './testObj'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  plot: {
  	marginLeft:'10%'
  },
  list:{
  	width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,

  }
}));

export default function Analytics() {
	const classes = useStyles();
	const articlesData = [
    {
      x: 1,
      y: window.obj.articles[0].hits,
      color:'#00137FFF'
    },
    {
      x: 2,
      y: window.obj.articles[1].hits,
      color:'#0013D4FF'
    },
    {
      x: 3,
      y: window.obj.articles[2].hits,
      color:'#0074FFFF'
    },
    {
      x: 4,
      y: window.obj.articles[3].hits,
      color:'#00DBFFFF'
    }
  ];
  /*//this is used to add lebles to the chart bars if needed 
  const articleLabel = [
  {
      x: 1,
      y: window.obj.articles[0].hits,
      label: window.obj.articles[0].name,
      rotation: 90, 
    },
    {
      x: 2,
      y: window.obj.articles[1].hits,
      label: window.obj.articles[1].name,
      rotation: 90, 
      
    },
    {
      x: 3,
      y: window.obj.articles[2].hits,
      label: window.obj.articles[2].name,
      rotation: 90, 
      
    },
    {
      x: 4,
      y: window.obj.articles[3].hits,
      label: window.obj.articles[3].name,
      rotation: 90, 
      
    },
  ];*/

  const percentageData = [
  	{
  		angle0: 0, angle: Math.PI * 2 * window.obj.payment_percent.monthly , radius: 4, radius0: 3, color:'#2AD46FFF'
  	},
  	{
  		angle0: Math.PI * 2 * window.obj.payment_percent.monthly , angle: Math.PI * 2 * window.obj.payment_percent.monthly + Math.PI * 2 * window.obj.payment_percent.package , radius: 4, radius0: 3, color:'#EDDB11FF'

  	},
  	{
  		angle0: Math.PI * 2 * window.obj.payment_percent.monthly + Math.PI * 2 * window.obj.payment_percent.package , angle: Math.PI * 2 * window.obj.payment_percent.monthly + Math.PI * 2 * window.obj.payment_percent.package + Math.PI * 2 * window.obj.payment_percent.single , radius: 4, radius0: 3, color:'#FF41FCFF'

  	}
  ];



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          	<h2> {window.obj.name} Analytics </h2>
          	<h3> Most Read Articles and subscription types </h3>
          	<List className={classes.list}>
			      <ListItem>
			        <ListItemAvatar>
			          <Avatar>
			            <PercentageIcon style={{color:'#000000FF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="Percentage of all read article % " secondary={window.obj.revenue * 100 } />
			      </ListItem>
			</List>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          	<h3> Most Read Articles </h3>
          	<XYPlot
           		width={300}
           		height={300}
           		
           		colorType={'literal'}
           		>
           		<XAxis/>
           		<YAxis/>
           		<VerticalBarSeries
           			colorType={'literal'}
           		    data={articlesData}/>
           		{/*<LineSeries
           		    data={articlesData}/>*/}
           		{/*<LabelSeries  data={articleLabel} />*/}
        	</XYPlot>
          	<div>
				<List className={classes.list}>
			      <ListItem button>
			        <ListItemAvatar>
			          <Avatar>
			            <BookIcon style={{color:'#00137FFF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary={window.obj.articles[0].name} secondary={window.obj.articles[0].hits} />
			      </ListItem>
			      <ListItem button>
			        <ListItemAvatar>
			          <Avatar>
			            <BookIcon style={{color:'#0013D4FF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary={window.obj.articles[1].name} secondary={window.obj.articles[1].hits} />
			      </ListItem>
			      <ListItem button >
			        <ListItemAvatar >
			          <Avatar>
			            <BookIcon  style={{color:'#0074FFFF'}} />
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary={window.obj.articles[2].name} secondary={window.obj.articles[2].hits} />
			      </ListItem>
			      <ListItem button>
			        <ListItemAvatar>
			          <Avatar>
			            <BookIcon style={{color:'#00DBFFFF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary={window.obj.articles[3].name} secondary={window.obj.articles[3].hits} />
			      </ListItem>
    			</List>
			</div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          	<h3> subscription Types </h3>
			<XYPlot
			  xDomain={[-8, 8]}
			  yDomain={[-8, 8]}
			  width={300}
			  height={300}>
			  
			  <ArcSeries
			    animation
			    
			    center={{x: 0, y: 0}}
			    data={percentageData}
			    colorType={'literal'}/>
			</XYPlot>
			<List className={classes.list}>
			      <ListItem >
			        <ListItemAvatar>
			          <Avatar>
			            <MonthlyPaymentIcon style={{color:'#2AD46FFF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="monthly subscription %" secondary={window.obj.payment_percent.monthly * 100} />
			      </ListItem>
			      <ListItem >
			        <ListItemAvatar>
			          <Avatar>
			            <PackagePaymentIcon style={{color:'#EDDB11FF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="Package Subscription %" secondary={window.obj.payment_percent.package * 100} />
			      </ListItem>
			      <ListItem >
			        <ListItemAvatar >
			          <Avatar>
			            <OnePaymentIcon  style={{color:'#FF41FCFF'}} />
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="One Time Payment %" secondary={window.obj.payment_percent.single * 100} />
			      </ListItem>
			</List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
