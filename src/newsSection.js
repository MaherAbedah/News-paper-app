import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TestArticles from './test-data/articles';
import Typography from '@material-ui/core/Typography';
import Article from './components/article'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: 800,
    minHeight: '100%', 

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  image: {
    maxWidth: 240,
    maxHight: 160,
  },
  wrapper: {
    '& p' : {
      position:'absolute',
      top:-10,
      paddingLeft:4,
      visibility:'hidden',
      color:'white',
      backgroundColor: '#727272BB',
      textDecoration: 'none',
    },
    '&:hover':{
      '& p':{ visibility: 'visible'}
    }
  }
}));

let Articles = TestArticles;
  if(window.obj !== undefined)
    Articles = window.obj.articles ;

export default function NewsSection(props) {
  const classes = useStyles();
  
  function renderSection () {
    if (props.name === 'All News') {
      console.log(`name= ${props.name} , Articles= ${Articles}`);
      return(
        Articles.map(tile =>{ return [<Typography style={{height:40}}  variant="h6" > {tile.name} </Typography> , tile.content.map(content => (  <Article data = {content}/>)     
            )]})
      )
    }else if(props.name === 'Politics') {
      console.log(`name= ${props.name} , Articles= ${Articles}`);
      return(
        Articles.filter(tile => tile.name === 'politics')[0].content.map(content => (  <Article data = {content}/> 
     ))
      )
    }
    else if (props.name === 'Sports') {
      return(
        Articles.filter(tile => tile.name === 'sports')[0].content.map(tile => ( <Article data = {tile}/>
             ))
      )
    } else if (props.name === 'Economy'){
      return(
        Articles.filter(tile => tile.name === 'economy')[0].content.map(tile => ( <Article data = {tile}/>
                ))
      )
    }
    else if (props.name === 'Technology'){
      return(
        Articles.filter(tile => tile.name === 'technology')[0].content.map(tile => ( <Article data = {tile}/>
        ))
      )
    }
    else if (props.name === 'Health'){
      return(
        Articles.filter(tile => tile.name === 'health')[0].content.map(tile => ( <Article data = {tile}/>
        ))
      )
    }
    else if (props.name === 'Entertainment'){
      return(
        Articles.filter(tile => tile.name === 'entertainment')[0].content.map(tile => ( <Article data = {tile}/>
        ))
      )
    }
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {renderSection()}
      </GridList>
    </div>
  );
}