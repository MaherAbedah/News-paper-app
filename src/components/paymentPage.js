import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PaymentSection from './paymentSection'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none'
  },
  paymentPaper: {
    padding: theme.spacing(4),
    paddingLeft:'20%',
    paddingRight:'20%',
    color: theme.palette.text.secondary,
    boxShadow:'none',
    backgroundColor: '#F7F7F7FF', 
    [theme.breakpoints.down('sm')]: {
      paddingLeft:2,
      paddingRight:2,
    },
  },
  header:{
    width: '100%',
    display:'flex',
    flexWrap:'nowrap'
  },
  home:{
    padding: theme.spacing(2),
    textAlign:'right',
    margin :'auto',
    
  },
  title:{
    textAlign:'center',
    width:'100%'
  },
  list: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  image:{
   paddingLeft:'5%',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    backgroundColor:'green'
  },
}));

export default function PaymentPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.header}>
            <div className={classes.home}>
               
                <Button variant="contained" color="primary" href='/dashboard'>
               Home
            </Button>
            
           </div>
             <div className={classes.title}>
              <Link href="/dashboard" style={{textDecoration:'none', color: '#777777FF'}}>
                <Typography  variant="h2">
                       FINN+
                </Typography>
              </Link>
              <Typography  variant="h5">
                    Choose your favorite subscription and payment method! 
              </Typography>
                  
              </div>
              
          </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <img className={classes.image} alt="woman reading newspaper"  src='https://media2.s-nbcnews.com/j/newscms/2018_27/2487506/180705-woman-reading-news-dk_5c79d65a34a99f47e3fce86bbefe01dd.fit-2000w.jpg'/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography textAlign='left' variant="h4">
            <Box textAlign="justify">
                  Benefits of FINN+
            </Box>
          </Typography>
          
            <List className={classes.list}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                Access all Finnish online newspapers in one place.
              </Typography>}  />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                Select from three payment options that suits you best!
              </Typography>}  />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                No advertisement.
              </Typography>} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                Access content on any devices.
              </Typography>}  />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography
                component="span"
                variant="h7"
                className={classes.listText}
                color="textPrimary"
              >
                Cancel at any time on a monthly basis.
              </Typography>} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paymentPaper}>
            <Typography variant="h5"
                  component="div"
                  className={classes.listText}
                  color="textPrimary" >
                The new subscription will start after your current one ends!
              </Typography>
            <PaymentSection />
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
