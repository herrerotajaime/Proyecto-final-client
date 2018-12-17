import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Link, Redirect } from 'react-router-dom'; 



class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '', city: '', name: '', surname: '',  description: '', redirect: false};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username         = this.state.username;
    const password         = this.state.password;
    const email            = this.state.email;
    const city             = this.state.city;
    const name             = this.state.name;
    const surname          = this.state.surname;
    const description      = this.state.description
    const idiom1           = this.state.idiom1
    const idiom2           = this.state.idiom2



    this.service.signup(username, password, email, city, name, surname, description, idiom1, idiom2)
    .then( response => {
        this.setState({
            ...this.state,
            username: "", 
            password: "",
            email: "",
            city: "",
            name: "",
            surname: "",
            description: "",
            idiom1: "",
            idiom2: "",

            redirect: true
        });
        this.props.getUser(response)

    })
    .catch( error => console.log(error) )
  }
  handleChange = (event) => {  
    const {name, value} = event.target;
  
     this.setState({[name]: event.target.checked});
    
      this.setState({[name]: value});
    

  }
  
  render(){
    
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }
    return(
      <div>

        <form onSubmit={this.handleFormSubmit}>
          <label>Usuario:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Contraseña:</label>
          <input  type="password"  name="password"  value={this.state.password} onChange={ e => this.handleChange(e)} />

          <label>Email:</label>
          <input name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />

            <br></br>

          <label>Nombre:</label>
          <input name="name" value={this.state.name} onChange={ e => this.handleChange(e)} />
          
          <label>Apellidos:</label>
          <input name="surname" value={this.state.surname} onChange={ e => this.handleChange(e)} />

            <br></br>

          <label>Ciudad:</label>
          <input name="city" value={this.state.city} onChange={ e => this.handleChange(e)} />

          <label>Descripción personal:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />

          <label>Idioma primario:</label>
          <input name="idiom1" value={this.state.idiom1} onChange={ e => this.handleChange(e)} />

          <label>Idioma secundario:</label>
          <input name="idiom2" value={this.state.idiom2} onChange={ e => this.handleChange(e)} />

          
      
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
