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

import SampleData from './sampleData';
import Article from './article';

import { ReactComponent as KlLogo } from '../svg/kauppalehti.svg';
import { ReactComponent as HsLogo } from '../svg/Helsinginsanomat.svg';
import { ReactComponent as KslmLogo } from '../svg/keskisuomalainen.svg';
import { ReactComponent as TsLogo } from '../svg/Turunsanomat.svg';
import { ReactComponent as SsLogo } from '../svg/savonsanomat.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none'
  },
  header:{
    width: '100%',
    display:'flex',
    flexWrap:'nowrap'
  },
  login:{
    textAlign:'right',
    margin :'auto',
    textDecoration :'none'
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

export default function FrontPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.header}>
           <div className={classes.title}>
            <Typography  variant="h2">
                   FINN+
            </Typography>
            <Typography  variant="h5">
                  The national newspaper subscription service in Finland
            </Typography>
                
              </div>
              <div className={classes.login}>
                <Link className={classes.link} href='/signin'>
                <Button variant="contained" color="secondary" >
               LOGIN
            </Button>
            </Link>
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          {
            SampleData.map(tile => <Article data={tile} />)
          }
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <HsLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <TsLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <KlLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <KslmLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Link className={classes.link} href='/signin'>
              <SsLogo width={80} height={70}/>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
