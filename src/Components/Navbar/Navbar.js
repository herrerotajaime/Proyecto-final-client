import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Link, Redirect} from 'react-router-dom';


class NavBar extends Component {

  render(){
    return (<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="">
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545309112/Banderas/Intentodelogo.jpg" width="210" height="210"/>
      </a>
  
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          Inicio
        </a>
  
        <a className="navbar-item" href="/profile">
          Encuenta Eventos
        </a>
          <a className="navbar-item" href="/search">
            Encuentra a usuarios
          </a>
          <a className="navbar-item" href="/usuario">
            Mi perfil
          </a>

      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {/* <a className="button is-primary" href='./signup'>
              <strong>Sign up</strong>
            </a> */}
            <a className="button is-light"  href='/Login'>
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>)
  

  }
}

export default NavBar;