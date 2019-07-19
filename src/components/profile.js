import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase'; 
import myImage from '../images/myImage.jpg';

const testObj = {
  name:'maher',
  email: 'maher@example.com',
  end_date: '18.08.2019',
  bought:[],
  latestArticles:[
    {
      title: 'STOCK EXCHANGE: Wall Street opened its bill on Wednesday',
      link: 'https://www.kauppalehti.fi/uutiset/porssit-wall-street-avasi-laskuun-keskiviikkona/1932d477-26d9-4585-ac79-e4cfb6aed90a',
    },
    {
      title: 'Kasil Classes Sent Satellite to the Stratosphere - Steam Summer School Trained Future Science Experts',
      link: 'https://www.ts.fi/uutiset/paikalliset/4607509/Kasiluokkalaiset+lahettivat+satelliitin+stratosfaariin++Steamkesakoulussa+koulittiin+tulevaisuuden+tiedeosaajia',
    },
    {
      title: 'EK tyrmää kaavaillun perhevapaauudistuksen: "Emme ymmärrä, miksi työkykyisiä ihmisiä kannustetaan olemaan poissa töistä"',
      link: 'https://www.ksml.fi/kotimaa/EK-tyrm%C3%A4%C3%A4-kaavaillun-perhevapaauudistuksen-Emme-ymm%C3%A4rr%C3%A4-miksi-ty%C3%B6kykyisi%C3%A4-ihmisi%C3%A4-kannustetaan-olemaan-poissa-t%C3%B6ist%C3%A4/1389516',
    },
    {
      title: 'Saksa murskasi Viron peräti 8–0 EM-karsinnoissa, Islanti kaatoi Turkin',
      link: 'https://www.hs.fi/urheilu/art-2000006139642.html',
    },
    {
      title: 'Yli 400 mielenosoittajaa pidätetty Moskovassa – "Oletteko unohtaneet perustuslain?"',
      link: 'https://www.savonsanomat.fi/ulkomaat/Yli-400-mielenosoittajaa-pid%C3%A4tetty-Moskovassa-%E2%80%93-Oletteko-unohtaneet-perustuslain/1389553',
    },
    
  ],

};
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
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

let myObj = testObj ;

  if(window.obj !== undefined)
    myObj = window.obj;

  function Profile (props){
	const classes = useStyles();
	
 
	return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="user personal photo " src={myImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {myObj.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {myObj.email}
                </Typography>
                
                  {myObj.end_date !== null ? 
                  	<Typography variant="body2" color="textSecondary"> Monthly subscription
                  	</Typography> : myObj.bought.length !== null ? 
                  	<Typography variant="body2" color="textSecondary"> Package subscription
                  	</Typography> : <Typography variant="body2" color="textSecondary"> Not subscriped!
                  	</Typography>
                  } 
                
              </Grid>
              <Grid item>
                <Button variant="body2" style={{ cursor: 'pointer' }}>
                  Edit
                </Button>
              </Grid>
            </Grid>
            <Grid item>
            	{myObj.end_date !== null ? 
                  	<Typography variant="subtitle1" color="textSecondary"> ends {myObj.end_date}
                  	</Typography> : myObj.bought.length !== null ? 
                  	<Typography variant="subtitle1" color="textSecondary"> {myObj.prepaid} left 
                  	</Typography> : <Typography variant="subtitle1" color="textSecondary"> Non!
                  	</Typography>
                  }
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export {Profile, myObj} 

