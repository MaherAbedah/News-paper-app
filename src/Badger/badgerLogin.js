import React, { Component } from 'react'
import CashId from 'react-cashid'
import './App.css';

class BadgerLogin extends Component {
	render(){	
		return (
			<div>
				<CashId
				    domain="domain.com"
				    path="/api/test"
				    action="login"
				    data="newsletter"
				    metadata={{
				      required: {
				        identity: ['name', 'family'],
				        position: ['country'],
				        contact: ['email']
				      },
				      optional: {
				        identity: ['age', 'gender'],
				        position: ['city']
				      }
				    }}
				    color="orange"
				    qr={false}
				    callback={() => console.log(`login succeeded`)}
		    	/>
		    </div>
	    )
	}
}

export default BadgerLogin