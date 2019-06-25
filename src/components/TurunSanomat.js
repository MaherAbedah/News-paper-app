import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Link from '@material-ui/core/Link';


import image1 from '../images/TS/image1.jpg';
import image2 from '../images/TS/image2.jpg';
import image3 from '../images/TS/image3.jpg';
import image4 from '../images/TS/image4.jpg';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 550,
    height: 850,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
   image: {
    maxWidth: 400,
    maxHight: 200,
  },
  icon: {
    color: 'white',
  },
}));

  const TSData = [
    {
      img: image1,
      title: 'Poliisilla työntäyteinen juhannus Turun seudulla',
      author: 'Lennart Holmberg',
      link: 'http://127.0.0.1:8000/ts/article/0',
      featured:true,
    },
    {
      img: image2,
      title: 'Kahvi aktivoi elimistön "hyvän" ruskean rasvan',
      author: 'Ilkka Timonen',
      link: 'http://127.0.0.1:8000/ts/article/1',
    },
    {
      img: image3,
      title: 'Tanskalainen SP Group osti laitilalaisen Coreplastin',
      author: 'Timo Jakonen',
      link: 'http://127.0.0.1:8000/ts/article/2',
    },
    {
      img: image4,
      title: 'Korkeasaaren eläintarhaan muutti margai – pikkukissa kiipeää kuin orava',
      author: 'Heidi Kouhia',
      link: 'http://127.0.0.1:8000/ts/article/3',
    },
  ];

export default function TurunSanomat() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={10} className={classes.gridList}>
        {TSData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <Link href={tile.link} target="_blank" rel="noopener" className={classes.wrapper}>
            <img src={tile.img} alt={tile.title}  />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            </Link >
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
