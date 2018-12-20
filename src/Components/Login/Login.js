import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Link, Redirect} from 'react-router-dom';




class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', redirect: false };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "", redirect: true});
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    if(this.state && this.state.redirect) {
      return <Redirect to="/profile" />
    }
    return(
      <div><div className="login">
      <form onSubmit={this.handleFormSubmit}>
      <div className="field">
    <p className="control has-icons-left has-icons-right">
    <input className="input" type="text" placeholder="Nombre de usuario" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input className="input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)}/>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control">
    <button className="button is-success" value="Login">
      Login
    </button>
    <p>Don't have account? 
    <Link to={"/signup"}> Signup</Link>
     </p>
  </p>
</div>
</form>
</div>  </div>
    
    )
  }
}

export default Login;







//  <div>
//         <form onSubmit={this.handleFormSubmit}>
//           <label>Username:</label>
//           <input className="input is-rounded" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
//           <label>Password:</label>
//           <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
//           <input type="submit" value="Login" />
//         </form>
//         <p>Don't have account? 
//             <Link to={"/signup"}> Signup</Link>
//         </p>

//       </div> 