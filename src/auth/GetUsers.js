import axios from 'axios';

class GetUsers {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    });
    this.service = service;
  }
  Getusers = () => {
    return this.service.get('User')
    .then(response => response.data)
  }
}


export default GetUsers