import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';



export default class Profile extends Component {
  constructor(props){
    super(props);
   
    this.state = { username: '', password: '', email: '', address: '', zipCode: '', lat: '', lng: '', user:props.user};
    this.authService = new AuthService();
  }
  
  render() {
    
    return (
      
      <div>
        hola  {this.props.username} este es tu perfil
        <Link to={`/edit/`}><button>Edit my Profile</button></Link>
       
        <Link to={'/'}><button onClick={this.authService.logout}>Log Out</button></Link>
        

      </div>
    )
  }
}
