import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';
import GoogleApiWrapper from "../Map/Map"



export default class Profile extends Component {
  constructor(props){
    super(props);
   
    this.state = { username: '', password: '', email: '', address: '', user:props.user};
    this.authService = new AuthService();
  }
  
  render() {
    
    return (
      
      <div className="divPadre">
         
        <div className="Mapa">
          <GoogleApiWrapper></GoogleApiWrapper>
        </div>
        <div className="row">
        <div className="column">
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545382679/Banderas/georgia.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545382679/Banderas/philippines.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545382679/Banderas/jamaica.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545382679/Banderas/united-arab-emirates.svg" alt="banderas" width="115 px" height="115px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545386472/Banderas/turkey.svg" alt="banderas" width="115 px" height="115px" />

        </div>
        <div className="column">
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301985/Banderas/spain.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301984/Banderas/portugal.svg" alt="banderas" width="115 px" height="115px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/japan.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/netherlands.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545386472/Banderas/india.svg" alt="banderas" width="115 px" height="115px" />

        </div>
        <div className="column">
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/china.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/france.svg" alt="banderas" width="115 px" height="115px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/south-korea.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/italy.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545382679/Banderas/united-arab-emirates.svg" alt="banderas" width="115 px" height="115px" />

        </div>
        <div className="column">
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545385582/Banderas/greece.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545385582/Banderas/slovenia.svg" alt="banderas" width="115 px" height="115px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545385582/Banderas/norway.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545385582/Banderas/bulgaria.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545386472/Banderas/thailand.svg" alt="banderas" width="115px" height="115 px" />
        </div>
        <div className="column">
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545386474/Banderas/sweden_1.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545386474/Banderas/taiwan.svg" alt="banderas" width="115 px" height="115px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545386472/Banderas/malaysia.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545386473/Banderas/switzerland.svg" alt="banderas" width="115px" height="115 px" />
        <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545386896/Banderas/iran.svg" alt="banderas" width="115px" height="115 px" />

        </div>
       </div>
      </div>
      
    )
  }
}


// Mi perfil <br></br>
// <Link to={`/edit/`}><button>Edita</button></Link>

// <Link to={'/'}><button onClick={this.authService.logout}>Log Out</button></Link>

// <Link to={'/search'}><button> Search</button> </Link>
