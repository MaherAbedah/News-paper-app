import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
    
  },
  image: {
    width: 128,
    height: 128,
    top:0,
    paddingBottom:50
  },
  img: {
    
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
     top:0
  },
}));

export default function Article(props) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      
      <Paper className={classes.paper}>
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{marginTop:100}} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <a href={props.data.link} rel="noopener noreferrer" target="_blank" >
                    <img className={classes.img} alt="complex" src={props.data.img} />
                  </a>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <a href={props.data.link} rel="noopener noreferrer" target="_blank" >
                      <Typography gutterBottom variant="subtitle1">
                        {props.data.title}
                      </Typography>
                    </a>
                    <Typography  variant="body2" gutterBottom >
                      By {props.data.author}
                    </Typography>
                    <Typography  component='span' variant="body2" color="textSecondary" >
                      date of article
                    </Typography>
                    <IconButton aria-label="Add to favorites" spacing={2}>
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share" spacing={2}>
                      <ShareIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          
           </ExpansionPanelSummary>
        <ExpansionPanelDetails>
         <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Paper>
    </div>
  );
}