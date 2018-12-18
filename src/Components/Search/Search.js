import { Link } from "react-router-dom";
import React, { Component } from "react";
import GetUsers from "../../auth/GetUsers";
import AuthService from "../../auth/AuthService";

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
        <div>
          <h1>Encuentra otras personas!</h1>
          <Link to={"/"}>
            <button onClick={this.authService.logout}>Log Out</button>
          </Link>
          {/* <p>{this.state.user}</p> */}
          {console.log(this.state.user)}

          {this.state.user.map(element => {
            return (
              <div>
            <h2>{element.name}</h2>
            <h3>{element.surname}</h3>
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
