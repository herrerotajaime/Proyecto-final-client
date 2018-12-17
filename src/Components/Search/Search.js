import { Link } from "react-router-dom";
import React, { Component } from 'react'
import AuthService from '../../auth/AuthService';


 
class Search extends Component {
  constructor(props){
    super(props);
   
    this.state = { username: '', email: '', user:props.user};
    this.authService = new AuthService();
  }
  componentDidMount(){
    
  }

  render () {
      
    return (
      <div>
        <h1>Encuentra otras personas!</h1>
        <Link to={'/'}><button onClick={this.authService.logout}>Log Out</button></Link>
        <p></p>
        
      </div>
        
     )
}
}
      
        export default Search;