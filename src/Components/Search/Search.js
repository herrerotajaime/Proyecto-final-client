import { Link } from "react-router-dom";
import React, { Component } from "react";
import GetUsers from "../../auth/GetUsers";
import AuthService from "../../auth/AuthService";
import '../Search/Modelo.scss'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
    this.GetUsers = new GetUsers();
    this.authService = new AuthService();
  }
  takeUsers = () => {
    this.GetUsers.Users().then(data =>
      this.setState({ ...this.state, user: data })
    );
  };

  componentWillMount() {
    this.takeUsers();
  }

  render() {
    if (this.state.user) {
      return (
          // <h1>Encuentra otras personas!</h1>
          // <Link to={"/"}>
          //   <button onClick={this.authService.logout}>Log Out</button>
          // </Link>
        <div className="cards-container">
          {/* <Link to={"/profile"}><button onClick={}></button> </Link> */}
          {/* <p>{this.state.user}</p> */}
          {console.log(this.state.user)}

          {this.state.user.map(element => {
            return (
              <div >
            <div id="contentBoxApp" ng-app="contentBoxApp">
      <article className="grid-item content-box" ng-repeat="(gridKey, gridItem) in gridItems | filter:filterBySearch">
        <div className="inner">
        <img className="content-box-thumb"src={element.pictureUrl} alt="tech image" />
        <h1 className="content-box-header">
          <b>{element.name}{" "}{element.surname} </b>
        </h1>
        <p className="content-box-blurb">
          {element.description}
          </p> <br></br>
          <p><b>Idioma Nativo: </b>{element.idiom1} <br></br>
          <b>Segundo Idioma:</b>{element.idiom2}</p>
         
        <a className="button is-primary" href=''> 
          <p>Contacta</p></a>
          
        </div>
      </article>

</div>
            </div>
            )
            
          })}
        </div>
      );
    }else{
      return <p>Loading...</p>
    }
  }
}

export default Search;




{/* <h3 className= "subtitle is-3" >{element.name}{" " + element.surname}</h3>
            <p>{element.description}</p>
            <p>{element.city}</p>
            <p>{element.idiom1}</p>
            <p>{element.idiom2}</p>
            </div> */}