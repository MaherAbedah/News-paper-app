import React from 'react';
import { useState, useEffect } from "react";
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
  const [newsCategory, setnewsCategory] = React.useState(props.name);
  const [favList, setFavList]= useState([]);
  const [latestList, setLatestList]= useState([]);
  useEffect(() => {
      fetch('/user_activities')
         .then(res => res.json())
         .then(data => {setFavList(data.favoriteArticles);
                        setLatestList(data.latestArticles)});
  
  }, []);
  function renderSection () {
    if (newsCategory === 'All News') {
      console.log(`name= ${props.name} , Articles= ${Articles}`);
      return(
        Articles.map(tile =>{ return [<Typography style={{height:40}}  variant="h6" > {tile.name} </Typography> , tile.content.map(content => (  <Article data = {content}/>)     
            )]})
      )
    }else if(newsCategory === 'Politics') {
      console.log(`name= ${newsCategory} , Articles= ${Articles}`);
      return(
        Articles.filter(tile => tile.name === 'politics')[0].content.map(content => (  <Article data = {content}/> 
     ))
      )
    }
    else if (newsCategory === 'Sports') {
      return(
        Articles.filter(tile => tile.name === 'sports')[0].content.map(tile => ( <Article data = {tile}/>
             ))
      )
    } else if (newsCategory === 'Economy'){
      return(
        Articles.filter(tile => tile.name === 'economy')[0].content.map(tile => ( <Article data = {tile}/>
                ))
      )
    }
    else if (newsCategory === 'Technology'){
      return(
        Articles.filter(tile => tile.name === 'technology')[0].content.map(tile => ( <Article data = {tile}/>
        ))
      )
    }
    else if (newsCategory === 'Health'){
      return(
        Articles.filter(tile => tile.name === 'health')[0].content.map(tile => ( <Article data = {tile}/>
        ))
      )
    }
    else if (newsCategory === 'Entertainment'){
      return(
        Articles.filter(tile => tile.name === 'entertainment')[0].content.map(tile => ( <Article data = {tile}/>
        ))
      )
    }
    else if (newsCategory === 'Favorites'){
      return( 
        favList.map(tile => ( <Article data = {tile}/>))
      )
      
   // /* this solution needs the page to be refreshed to include the favorited articles in the favorits section 
    // return(
    //  Articles.map(data => data.content.filter(item => item.fav === true).map(tile => ( <Article data = {tile}/>
    //    )))
    // )*/
    }
    else if (newsCategory === 'Recent Reads'){
      return( 
        latestList.map(tile => ( <Article data = {tile}/>))
      )

      // /* this solution needs the page to be refreshed to include the favorited articles in the favorits section 
      //return( 
        //fetch('/user_activities')
         //.then(res => res.json())
         //.then(data => data.latestArticles.map(tile => ( <Article data = {tile}/>)))
      //)

      /* this solution needs the page to be refreshed to include the favorited articles in the favorits section 
      return(
        Articles.map(data => data.content.filter(item => item.read === true).map(tile => ( <Article data = {tile}/>
        )))
      )*/
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