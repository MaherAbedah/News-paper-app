import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import Movie from '@material-ui/icons/Movie';
import Devices from '@material-ui/icons/Devices';
import Pool from '@material-ui/icons/Pool';
import LocalHospital from '@material-ui/icons/LocalHospital';
import AttachMoney from '@material-ui/icons/AttachMoney';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AllNewsIcon from '@material-ui/icons/Ballot';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

import AccountBalance from '@material-ui/icons/AccountBalance';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';

import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { ReactComponent as KlLogo } from '../svg/kauppalehti.svg';
import { ReactComponent as HsLogo } from '../svg/Helsinginsanomat.svg';
import { ReactComponent as KslmLogo } from '../svg/keskisuomalainen.svg';
import { ReactComponent as TsLogo } from '../svg/Turunsanomat.svg';
import { ReactComponent as SsLogo } from '../svg/savonsanomat.svg';


import Content from '../content.js';




const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  /*menuButton: {
    marginRight: theme.spacing(2),
  },*/
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth -50,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: -180,
  },
  gridContent: {
    padding: theme.spacing(2),
    marginTop: '10px',
  },
  clickedList:{
    color:'#0094FFC4'
  },
  notClickedList:{
    color:'inherit'
  }

}));

function UserDashboard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [contentNews, setContentNews] = React.useState('All News');
  const [listColor, setListColor] =React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //adding drawer consts
  const theme = useTheme();
  //fixed drawer: changed false to true
  const [open, setOpen] = React.useState(true);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  //adding handleDrawer function
   function handleDrawerOpen() {
    setOpen(true);
  }
// fixed drawer: changed false to true 
  function handleDrawerClose() {
    setOpen(false);
  }
   function handleListColor(event){
    let listItems = document.getElementById('categoryList').children;
    let listDivider = document.getElementById('listDiv')
    for (let i=0;i<listItems.length;i++)
      listItems[i].style.backgroundColor='white'
    listDivider.style.backgroundColor = '#E0E0E0FF'
    //event.target.setListColor(!listColor);
    //event.target.classList.add('classes.clickedList')
  }
  function handleContent(cat,event){
    handleListColor()
    setContentNews(cat);
    event.currentTarget.style.backgroundColor='#00C6FFC4'
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem >
          <Link href='/profile'><IconButton
            aria-label="Account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
           <span> My profile </span> </Link>
        </MenuItem>
      <MenuItem >
          <Link href='/logout'><IconButton
            aria-label="logout current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <PowerSettingsNew />
          </IconButton>
           <span>Logout</span> </Link>
        </MenuItem>      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem >
        <Link href='/profile'><IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
         <span> My profile </span> </Link>
      </MenuItem>
      <MenuItem >
        <Link href='/logout'> <IconButton
          aria-label="logout current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PowerSettingsNew />
        </IconButton>
         <span>Logout</span> </Link>
      </MenuItem>
    </Menu>
  );


  
  return (
    <div className={ classes.root }>
      <CssBaseline />
      <AppBar position="fixed" 
      className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/*<span Wrap>
            <img src={Logo} alt="Finn+ logo" width="200px"/> 
          </span>*/}
          <Typography  variant="h3">
                   FINN+
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
          <div className={classes.grow} />
          {/* change from the popup payment dialog to a separated payment page
          <PaymentDialogNew />*/}
          <Button variant="contained" color="secondary" href="/payment">
        Go To Payment
      </Button>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
         
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider/>
        <Divider/>
        <List  id='categoryList'>
          {/*['All News','Politics', 'Sports', 'Economy', 'Technology' , 'Health' , 'Entertainment','Favorites', 'Recent Reads'].map((text, index) => (
            <ListItem button className={listColor ? classes.clickedList: classes.notClickedList}  onClick={(event) => handleContent(text,event)} key={text}>
              <ListItemIcon  >{index % 7 === 0 ? <AllNewsIcon /> :index % 7 === 1 ? <AccountBalance /> : index % 7 === 2 ? <Pool/> : index % 7 === 3 ? <AttachMoney/> : index % 7 === 4 ? <Devices/> : index % 7 === 5 ? <LocalHospital/> :index % 7 === 6 ? <Movie/> :index % 7 === 7 ? <FavoriteIcon/> : <HistoryIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))*/}
          <ListItem button   onClick={(event) => handleContent('All News',event)} key='All News'>
             <ListItemIcon  >
            <AllNewsIcon />
            </ListItemIcon>
            <ListItemText primary='All News' />
          </ListItem>
          <ListItem button   onClick={(event) => handleContent('Politics',event)} key='Politics'>
             <ListItemIcon  >
            <AccountBalance />
            </ListItemIcon>
            <ListItemText primary='Politics' />
          </ListItem>
          <ListItem button   onClick={(event) => handleContent('Sports',event)} key='Sports'>
             <ListItemIcon  >
            <Pool/>
            </ListItemIcon>
            <ListItemText primary='Sports' />
          </ListItem>
          <ListItem button   onClick={(event) => handleContent('Economy',event)} key='Economy'>
             <ListItemIcon  >
            <AttachMoney/>
            </ListItemIcon>
            <ListItemText primary='Economy' />
          </ListItem>
          <ListItem button   onClick={(event) => handleContent('Technology',event)} key='Technology'>
             <ListItemIcon  >
            <Devices/>
            </ListItemIcon>
            <ListItemText primary='Technology' />
          </ListItem>
          <ListItem button   onClick={(event) => handleContent('Health',event)} key='Health'>
             <ListItemIcon  >
            <LocalHospital/>
            </ListItemIcon>
            <ListItemText primary='Health' />
          </ListItem>
          <ListItem button   onClick={(event) => handleContent('Entertainment',event)} key='Entertainment'>
             <ListItemIcon  >
            <Movie/>
            </ListItemIcon>
            <ListItemText primary='Entertainment' />
          </ListItem>
          <Divider/>
          <Divider id="listDiv"/>
          <ListItem button   onClick={(event) => handleContent('Recent Reads',event)} key='Recent Reads'>
             <ListItemIcon >
            <HistoryIcon/>
            </ListItemIcon>
            <ListItemText primary='Recent Reads' />
          </ListItem>
          <ListItem button   onClick={(event) => handleContent('Favorites',event)} key='Favorites'>
             <ListItemIcon  >
            <FavoriteIcon/>
            </ListItemIcon>
            <ListItemText primary='Favorites' />
          </ListItem>
          
        </List>
        <Divider/>
        <Divider/>
        <List>
          {[{name:'Helsingin Sonomat',link:'http://127.0.0.1:8000/hs/'}, {name:'Kauppalehti',link:'http://127.0.0.1:8000/kl/'}, {name:'Keskisuomalainen',link:'http://127.0.0.1:8000/ks/'} ,{name:'Savon Sanomat',link:'http://127.0.0.1:8000/ss/'} , {name:'Turun Sanomat', link:'http://127.0.0.1:8000/ts/'}].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 5 === 0 ? <HsLogo width={40} height={50} /> : index % 5 === 1 ? <KlLogo width={40} height={50}/> : index % 5 === 2 ? <KslmLogo width={40} height={50}/> : index % 5 === 3 ? <SsLogo width={40} height={50}/> : <Link href="http://127.0.0.1:8000/ts/"><TsLogo width={40} height={50}/></Link> }</ListItemIcon>
             <Link style={{textDecoration:'none', color:'black'}} href={text.link}> <ListItemText primary={text.name} /></Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.gridContent}>
          <Content category={contentNews} />
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;