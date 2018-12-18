import axios from 'axios';

class GetUsers {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    });
    this.service = service;
  }
  Users = () => {
    return this.service.get('user')
    .then(response => response.data)
  }
}


export default GetUsers