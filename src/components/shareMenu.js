import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton, } from 'react-share';
  import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon, } from 'react-share';

const useStyles = makeStyles(theme => ({
  root:{
    display:'inline', 
  }
}));

export default function ShareMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }

  function handleClose(event) {
    event.stopPropagation();
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <IconButton aria-label="Share-menu" spacing={2} onClick={handleClick}>
        <ShareIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <FacebookShareButton url={props.url}>
            <FacebookIcon size={32} round={true}/>
          </FacebookShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TwitterShareButton url={props.url}>
            <TwitterIcon size={32} round={true}/>
          </TwitterShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EmailShareButton url={props.url}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </MenuItem>
      </Menu>
    </div>
  );
}
