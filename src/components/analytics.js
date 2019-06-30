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
  ];

  const percentageData = [
  	{
  		angle0: 0, angle: Math.PI * 2 * window.obj.payment_percent.monthly ,  radius: 3, radius0: 2, color:'#2AD46FFF',
  	},
  	{
  		angle0: 0 , angle: -Math.PI * 2 * window.obj.payment_percent.package,  radius: 3, radius0: 2, color:'#EDDB11FF'

  	},
  	{
  		angle0: Math.PI * 2 * window.obj.payment_percent.monthly ,  angle: Math.PI * 2 * (window.obj.payment_percent.monthly + window.obj.payment_percent.single),  radius: 3, radius0: 2, color:'#FF41FCFF'

  	}
  ];



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          	<h2> HelsiginSanomat Analytics </h2>
          	<h3> Most Read Articles and subscription types </h3>
          	<List className={classes.list}>
			      <ListItem>
			        <ListItemAvatar>
			          <Avatar>
			            <PercentageIcon style={{color:'#000000FF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="Provider percentage of all read article" secondary="50 %" />
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
           		<LabelSeries  data={articleLabel} />
        	</XYPlot>
          	<div>
				<List className={classes.list}>
			      <ListItem button>
			        <ListItemAvatar>
			          <Avatar>
			            <BookIcon style={{color:'#00137FFF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="article1" secondary={window.obj.articles[0].hits} />
			      </ListItem>
			      <ListItem button>
			        <ListItemAvatar>
			          <Avatar>
			            <BookIcon style={{color:'#0013D4FF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="article2" secondary="210 reads" />
			      </ListItem>
			      <ListItem button >
			        <ListItemAvatar >
			          <Avatar>
			            <BookIcon  style={{color:'#0074FFFF'}} />
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="article3" secondary="150 reads" />
			      </ListItem>
			      <ListItem button>
			        <ListItemAvatar>
			          <Avatar>
			            <BookIcon style={{color:'#00DBFFFF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="article4" secondary="80 reads" />
			      </ListItem>
    			</List>
			</div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          	<h3> subscription Types </h3>
			<XYPlot
			  xDomain={[-6, 6]}
			  yDomain={[-6, 6]}
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
			        <ListItemText primary="monthly subscription" secondary="50 %" />
			      </ListItem>
			      <ListItem >
			        <ListItemAvatar>
			          <Avatar>
			            <PackagePaymentIcon style={{color:'#EDDB11FF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="Package Subscription" secondary="25 %" />
			      </ListItem>
			      <ListItem >
			        <ListItemAvatar >
			          <Avatar>
			            <OnePaymentIcon  style={{color:'#FF41FCFF'}} />
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="One Time Payment" secondary="25 %" />
			      </ListItem>
			</List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
