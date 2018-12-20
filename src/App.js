import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import AuthService from './auth/AuthService';
import Search from './Components/Search/Search';
import 'bulma/css/bulma.css';
import NavBar from './Components/Navbar/Navbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.authService = new AuthService();
    this.fetchUser();
  }
  fetchUser = () => {
    this.authService
      .loggedin()
      .then(loggedInUser => this.setState({ ...this.state, loggedInUser }));
  };

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
  render() {
    return (
      <div className="App">
         <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
          <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
          <Route exact path='/profile' render={() => <Profile user={this.state.loggedInUser} getUser={this.getTheUser}/>}/>
          <Route exact path='/search' render={() => <Search user={this.state.loggedInUser} getUser={this.getTheUser}/>}/>

        </Switch>
     
      </div>
    );
  }
}

export default App;
