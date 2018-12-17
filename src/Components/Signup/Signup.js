import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Link, Redirect } from 'react-router-dom'; 



class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '', address: '', zipCode: '', lat: '', lng: '', redirect: false};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username         = this.state.username;
    const password         = this.state.password;
    const email            = this.state.email;
    const address          = this.state.address;
    const zipCode          = this.state.zipCode;
    const lat              = this.state.lat;
    const lng              = this.state.lng;

    this.service.signup(username, password, email, address, zipCode, lat, lng)
    .then( response => {
        this.setState({
            ...this.state,
            username: "", 
            password: "",
            email: "",
            address: "",
            zipCode: "",
            lat: "",
            lng: "",

            redirect: true
        });
        this.props.getUser(response)

    })
    .catch( error => console.log(error) )
  }
  handleChange = (event) => {  
    const {name, value} = event.target;
    if(name === ""){
     this.setState({[name]: event.target.checked});
    }
    else{
      this.setState({[name]: value});
    }

  }
  
  render(){
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }
    return(
      <div>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input  type="password"  name="password"  value={this.state.password} onChange={ e => this.handleChange(e)} />

          <label>Email:</label>
          <input name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          
          <label>Address:</label>
          <input name="address" value={this.state.address} onChange={ e => this.handleChange(e)} />

          <label>Zip Code:</label>
          <input name="zipCode" value={this.state.zipCode} onChange={ e => this.handleChange(e)} />
          
      
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
  
      </div>
    )
  }
  
}

export default Signup;
