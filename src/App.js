import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import GuestDashboard from './AppBar';
import SignUp from './signUp';
import SignIn from './components/signIn';
import UserDashboard from './components/userDashboard';
import Profile from './components/profile';
import ForgotPW from './components/forgotPW';
import Analytics from './components/analytics';
import FrontPage from './components/guestDashboardNew';
import PaymentPage from './components/paymentPage';
import ResetPW from './components/pwReset';



function App()  {
  
    return (
      <div>
      
      		<div>
		      	<Router>
		      		<Switch>
		      			<Route exact path='/' component={FrontPage} />
		      			<Route  path='/dashboard' component={UserDashboard} />
		      			<Route path='/signin' component={SignIn} />
		      			<Route path='/signup' component={SignUp}/>
		      			<Route path='/logout' component={FrontPage} />
		      			<Route path='/profile' component={Profile} />
		      			<Route path='/analytics' component={Analytics} />
		      			<Route path='/forgotpw' component={ForgotPW} />
		      			<Route path='/payment' component={PaymentPage} />
		      			<Route path='/resetpw/:userId' component={ResetPW} />


		      			
		      		</Switch>      
		        </Router>
		    </div>
	
      </div>
    )
  
}

export default App
