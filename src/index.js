import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import SignUp from './component/signUpForm';
import SignIn from './component/signInForm';

class App extends Component {
    render() {
    return(
        <Router>
            <div className="App">
            <div className="App__Aside"></div>
            <div className="App__Form">
                <div className="PageSwitcher">
                    <NavLink to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
                    <NavLink exact to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
            </div>
            </div>
      </Router>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));