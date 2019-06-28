import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import GuestDashboard from './AppBar';
import SignUp from './signUp';
import SignIn from './components/signIn';
import UserDashboard from './components/userDashboard';
import Profile from './components/profile';
import TurunSanomat from './components/TurunSanomat';
import Analytics from './components/analytics'


function App()  {
  
    return (
      <div>
      
      		<div>
		      	<Router>
		      		<Switch>
		      			<Route exact path='/' component={GuestDashboard} />
		      			<Route  path='/dashboard' component={UserDashboard} />
		      			<Route path='/signin' component={SignIn} />
		      			<Route path='/signup' component={SignUp}/>
		      			<Route path='/logout' component={GuestDashboard} />
		      			<Route path='/profile' component={Profile} />
		      			<Route path='/analytics' component={Analytics} />
		      			<Route path='/ts' component={TurunSanomat} />

		      			
		      		</Switch>      
		        </Router>
		    </div>
	
      </div>
    )
  
}

export default App
