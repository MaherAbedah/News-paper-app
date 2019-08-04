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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import doubleCheckIcon from '../images/double-tick-48.png';
import BoxCheckIcon from '../images/tick-box-48.png';
import ShareMenu from './shareMenu';


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
    maxWidth: '100%',
    boxShadow:'none'
    
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
  const [state, setState] = React.useState({
    fav: props.data.fav,
});

  function addToFavorite(event){
    event.stopPropagation();
    setState({ ...state, fav: !state.fav });
    fetch("/favtoggle",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({"url": props.data.link ,"fav":state.fav})
    }).then(res => console.log(res))  

  };
  

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
                      {props.data.date}
                    </Typography>
                    <IconButton 

                    color={state.fav === false? 'inherete' : 'secondary'}
                    onClick={addToFavorite}
                    aria-label="Add to favorites" 
                    spacing={2}>
                      <FavoriteIcon />
                    </IconButton>
                    <ShareMenu url={props.data.link} />
                    {props.data.read &&
                    <IconButton style={{color:'green'}} aria-label="done" spacing={2}>
                      <DoneIcon />
                    </IconButton>
                  }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          
           </ExpansionPanelSummary>
        <ExpansionPanelDetails>
         <Typography>
            {props.data.preview} 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Paper>
    </div>
  );
}