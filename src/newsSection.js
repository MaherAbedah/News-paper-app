import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MrData from './mostReadData';
import TrData from './trendingData';
import LtData from './latestData';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 360,
    height: 440,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  image: {
    maxWidth: 240,
    maxHight: 160,
  }
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();

  function renderSection () {
    if (props.name === 'Most Read') {
      return(
        MrData.map(tile => (  
              <GridListTile key={tile.img}>
                <Link href={tile.link} target="_blank" rel="noopener">
                  <img src={tile.img} alt={tile.title} className={classes.image} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </Link>
              </GridListTile>
              
            ))
      )
    }
    else if (props.name === 'Trending') {
      return(
        TrData.map(tile => (
            <GridListTile key={tile.img}>
              <Link href={tile.link} target="_blank" rel="noopener">
                <img src={tile.img} alt={tile.title} className={classes.image} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </Link>
            </GridListTile>
          ))
      )
    } else {
      return(
        LtData.map(tile => (
            <GridListTile key={tile.img}>
              <Link href={tile.link} target="_blank" rel="noopener">
                <img src={tile.img} alt={tile.title} className={classes.image} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
                </Link>
            </GridListTile>
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