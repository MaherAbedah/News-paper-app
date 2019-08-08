import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase'; 
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import TestObj from '../test-data/testObj';
import UserArticles from './profile-files/userArticles'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop:30,
    margin: 'auto',
    maxWidth: 700,
  },
  image: {
    maxWidth: 140,
    maxHeight: 160,

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    cursor:'pointer'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  editButton:{
    margin: theme.spacing(2),
    width:'30%'
  },
  headPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none'
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
    textDecoration :'none'
  },
   title:{
    textAlign:'center',
    width:'100%'
  },
  input:{
    display:'none',

  },
}));

let myObj = TestObj.user ;

  if(window.obj !== undefined)
    myObj = window.obj.user;

  export default function Profile (props){
	const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    name:myObj.name,
    email:myObj.email,
    image:myObj.image,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: (event.target.value) });
    
  };
  function handleClickOpen() {
    setState({ ...state, open: true });
  }

  function handleClose() {
    setState({ ...state, open: false });
  }

  function editSuccess(){
    if (state.name !==myObj.name || state.email !==myObj.email){
      setState({ ...state, open: false });
    }
    console.log(`name=${state.name} , Oname=${myObj.name}`)
  }

  const handleImageChange = name=> event => {
    

    //console.log( document.getElementById("profile-photo-file").files[0]);
    let imageFile = document.getElementById("profile-photo-file").files[0];
    
    
    let reader = new FileReader();
    let formData = new FormData();
    formData.append("file",event.target.files[0]);
    console.log(event.target.files[0]);
    
    
    reader.onload = function (event) {
        document.getElementById("profile-photo").src = event.target.result;
    };
    
    reader.readAsDataURL(document.getElementById("profile-photo-file").files[0]);
    console.log(imageFile)
    fetch("/edit",
    {
      headers: {
        'Content-Type':'multipart/form-data',
        'X-CSRFToken': window.csrf_token
      },
      method: "POST",
      body: {imageFile}
    }).then(res => console.log(res))
  }

  
	
 
	return (
    <div className={classes.root}>
    
        <Grid item xs={12}>
            <Paper className={classes.headPaper}>
              <div className={classes.header}>
              <div className={classes.home}>
                 
                  <Button variant="contained" color="primary" href='/dashboard'>
                 Home
              </Button>
              
             </div>
               <div className={classes.title}>
                <Typography  variant="h2">
                       FINN+
                </Typography>
                <Typography  variant="h5">
                      User Profile page  
                </Typography>
                    
                </div>
                
            </div>
            </Paper>
          </Grid>
       
      <Paper className={classes.paper}>  
        <Grid container spacing={2}>  
          <Grid item>
            <form method="POST" action="/edit">
            <ButtonBase className={classes.image}>
            <input onChange={handleImageChange('image')} accept="image/*" encType="multipart/form-data" className={classes.input} id="profile-photo-file" type="file" />
              <label htmlFor="profile-photo-file">
            
                <img id="profile-photo" className={classes.img} alt="user personal photo " src={state.image} />
              
              </label>
            </ButtonBase>
            
            </form>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {state.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {state.email}
                </Typography>
                
                  
                
              </Grid>
              <Grid item>
                <div>
                  <Button variant="outlined" color="primary" style={{ cursor: 'pointer' }} onClick={handleClickOpen}>
                    Edit
                  </Button>
                  <Dialog open={state.open} onClose={handleClose}>
                    <DialogTitle id="alert-dialog-slide-title">{"Edit your personal information"}</DialogTitle>
                    <DialogContent>
                  
                    </DialogContent>
                    <DialogContent>
                      <form method="POST" action="/edit" className={classes.container}>
                        <FormControl className={classes.formControl}>
                          
                          <TextField
                            name="firstName"
                            variant="outlined"
                            onChange={handleChange('name')}
                            fullWidth
                            id="firstName"
                            label="Name"
                            autoFocus
                          />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                          
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="email"
                            name="email"
                            onChange={handleChange('email')}
                          />
                        </FormControl>
                        <Button variant="outlined" onClick={editSuccess} color="primary" type="submit" className={classes.editButton}>
                          Save
                        </Button>
                        <Button variant="outlined" onClick={handleClose} color="secondary" className={classes.editButton}>
                          Cancel
                        </Button>
                      <input type="hidden" id="edit_token" name="csrf_token" value={window.csrf_token} />
                      </form>
                    </DialogContent>
                
                  </Dialog>
                </div>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"> Your Plan</Typography>
              {myObj.subscription_end !== null ? 
                    <Typography variant="subtitle1" color="textPrimary"> Monthly subscription
                    </Typography> : myObj.package_end > 0 ? 
                    <Typography variant="body2" color="textSecondary"> Package subscription
                    </Typography> : <Typography variant="body2" color="textSecondary"> Single Payment
                    </Typography>
                  } 
            	{myObj.subscription_end !== null ? 
                  	<Typography variant="subtitle1" color="textSecondary"> ends {myObj.subscription_end}
                  	</Typography> : myObj.package_end > 0 ? 
                  	<Typography variant="subtitle1" color="textSecondary"> {myObj.package_end} left 
                  	</Typography> : <Typography variant="subtitle1" color="textSecondary"> {myObj.tokens} left
                  	</Typography>
                  }
              
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>  
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>

            <UserArticles />
            </Grid>
          </Grid>
        </Paper>
     
    </div>
  );
};



