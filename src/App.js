import React, { Component } from "react";
import "./App.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Message from "./components/Message";
import AuthService from "./components/auth/AuthService";
import { Route, Link } from "react-router-dom";
import "bulma/css/bulma.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };

    this.authService = new AuthService();

    this.fetchUser();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  getUser = user => {
    this.setState({ ...this.state, user });
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  render() {
    const welcome = this.state.user ? (
      <div>
        <p>Hola {this.state.user.username}</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/">Home</Link> - <Link to="/signup">Signup</Link> -{" "}
        <Link to="/login">Login</Link>
      </div>
    );

    return (
      <div className="App">
        {welcome}
        <Message user={this.state.user} />
        <Route
          path="/signup"
          render={() => <Signup getUser={this.getUser} />}
        />
        <Route path="/login" render={() => <Login getUser={this.getUser} />} />

        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            
          </InfoWindow>
        </Map>

      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDRivfQDKbdyJeeXPj9ed6oP9QU-_wXJeg")
})(App)