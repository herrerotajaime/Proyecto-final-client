import { Link } from "react-router-dom";
import React, { Component } from 'react'
import AuthService from '../../auth/AuthService';


 
class Search extends Component {
  constructor(props){
    super(props);
   
    this.state = { username: '', password: '', email: '', address: '', zipCode: '', lat: '', lng: '', user:props.user};
    this.authService = new AuthService();
  }

  render () {
      
    return (
      <div>
        <h1>Encuentra otras personas!</h1>
        <Link to={'/'}><button onClick={this.authService.logout}>Log Out</button></Link>
      </div>
        
     )
}
}
      
        export default Search;