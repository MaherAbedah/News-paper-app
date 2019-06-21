import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import SearchAppBar from './AppBar';
import SignUp from './signUp';
import SignIn from './components/signIn';
import UserDashboard from './components/userDashboard'


function App()  {
  
    return (
      <div>
      
      		<div>
		      	<Router>
		      		<Switch>
		      			<Route exact path='/' component={SearchAppBar} />
		      			<Route  path='/dashboard' component={UserDashboard} />
		      			<Route path='/signin' component={SignIn} />
		      			<Route path='/signup' component={SignUp}/>
		      			
		      		</Switch>      
		        </Router>
		    </div>
	
      </div>
    )
  
}

export default App
