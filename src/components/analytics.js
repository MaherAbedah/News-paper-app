import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
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
import DevicesTable from './analytics-files/devicesTable'
import TestObj from '../test-data/testObj'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  plot: {
  	marginLeft:'10%'
  },
  list:{
  	width: '100%',
    backgroundColor: theme.palette.background.paper,

  },
  header:{
  	width: '100%',
  	display:'flex',
  	flexWrap:'nowrap'
  },
  logout:{
  	textAlign:'right'
  },
  title:{
  	textAlign:'center',
  	width:'100%'
  }
}));

export default function Analytics() {
	const classes = useStyles();
  let myObj = TestObj;
  if(window.obj !== undefined)
    myObj = window.obj ;
	const articlesData = [
    {
      x: 1,
      y: myObj.top_articles[0].total_reads,
      name: myObj.top_articles[0].title,
      color:'#00137FFF',
      link:myObj.top_articles[0].link,
      monthly_percent:myObj.top_articles[0].monthly_percent,
      package_percent:myObj.top_articles[0].package_percent,
      single_percent:myObj.top_articles[0].single_percent
    },
    {
      x: 2,
      y: myObj.top_articles[1].total_reads,
      name: myObj.top_articles[1].title,
      color:'#0013D4FF',
      link:myObj.top_articles[1].link,
      monthly_percent:myObj.top_articles[1].monthly_percent,
      package_percent:myObj.top_articles[1].package_percent,
      single_percent:myObj.top_articles[1].single_percent
    },
    {
      x: 3,
      y: myObj.top_articles[2].total_reads,
      name: myObj.top_articles[2].title,
      color:'#0074FFFF',
      link:myObj.top_articles[2].link,
      monthly_percent:myObj.top_articles[2].monthly_percent,
      package_percent:myObj.top_articles[2].package_percent,
      single_percent:myObj.top_articles[2].single_percent
    },
   /* {
      x: 4,
      y: myObj.articles[3].hits,
      name: myObj.articles[3].name,
      color:'#00DBFFFF'
    }*/
  ];
  /*//this is used to add lebles to the chart bars if needed 
  const articleLabel = [
  {
      x: 1,
      y: myObj.articles[0].hits,
      label: myObj.articles[0].name,
      rotation: 90, 
    },
    {
      x: 2,
      y: myObj.articles[1].hits,
      label: myObj.articles[1].name,
      rotation: 90, 
      
    },
    {
      x: 3,
      y: myObj.articles[2].hits,
      label: myObj.articles[2].name,
      rotation: 90, 
      
    },
    {
      x: 4,
      y: myObj.articles[3].hits,
      label: myObj.articles[3].name,
      rotation: 90, 
      
    },
  ];*/

  const percentageData = [
  	{
  		angle0: 0, angle: Math.PI * 2 * myObj.payment_percent.monthly , radius: 4, radius0: 3, color:'#2AD46FFF'
  	},
  	{
  		angle0: Math.PI * 2 * myObj.payment_percent.monthly , angle: Math.PI * 2 * myObj.payment_percent.monthly + Math.PI * 2 * myObj.payment_percent.package , radius: 4, radius0: 3, color:'#EDDB11FF'

  	},
  	{
  		angle0: Math.PI * 2 * myObj.payment_percent.monthly + Math.PI * 2 * myObj.payment_percent.package , angle: Math.PI * 2 * myObj.payment_percent.monthly + Math.PI * 2 * myObj.payment_percent.package + Math.PI * 2 * myObj.payment_percent.single , radius: 4, radius0: 3, color:'#FF41FCFF'

  	}
  ];



  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
	        <div className={classes.header}>
			     <div className={classes.title}>
		          	<h2> {myObj.name} Analytics </h2>
		          	<h3> Most Read Articles and subscription types </h3>
	          	</div>
	          	<div className={classes.logout}>
		          	
		          	<Button href='/logout' variant="contained" color="secondary" >
				       Logout
				    </Button>
				    
			     </div>
	        </div>
          	
          	<List className={classes.list}>
			      <ListItem>
			        <ListItemAvatar>
			          <Avatar>
			            <PercentageIcon style={{color:'#000000FF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="Percentage of total revenue % " secondary={myObj.percent_of_total_revenue * 100 } />
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
				{articlesData.map((item) =>
          <Grid container spacing={2}>
            <Grid item xs={6}>
  			      <ListItem button >
  			        <ListItemAvatar>
  			          <Avatar>
  			            <BookIcon style={{color:item.color}}/>
  			          </Avatar>
  			        </ListItemAvatar>
                <Link href={item.link} style={{color:'gray'}} rel="noopener noreferrer" target="_blank">
  			        <ListItemText primary={item.name} secondary={item.y} />

                </Link>
  			      </ListItem>
              </Grid>
            <Grid item xs={6}>
                <table style={{width:'80%', fontSize:11}}>
                  <tr>
                    <th>Monthly %</th>
                    <th>Package %</th> 
                    <th>One-time %</th>
                  </tr>
                  <tr>
                    <td>{item.monthly_percent}</td>
                    <td>{item.package_percent}</td> 
                    <td>{item.single_percent}</td>
                  </tr>
                </table>
            </Grid>
          </Grid>)}
			     
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
			        <ListItemText primary="monthly subscription %" secondary={myObj.payment_percent.monthly * 100} />
			      </ListItem>
			      <ListItem >
			        <ListItemAvatar>
			          <Avatar>
			            <PackagePaymentIcon style={{color:'#EDDB11FF'}}/>
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="Package Subscription %" secondary={myObj.payment_percent.package * 100} />
			      </ListItem>
			      <ListItem >
			        <ListItemAvatar >
			          <Avatar>
			            <OnePaymentIcon  style={{color:'#FF41FCFF'}} />
			          </Avatar>
			        </ListItemAvatar>
			        <ListItemText primary="One Time Payment %" secondary={myObj.payment_percent.single * 100} />
			      </ListItem>
			</List>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <DevicesTable />
        </Grid>
      </Grid>
    </div>
  );
}
