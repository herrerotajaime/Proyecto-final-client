import axios from 'axios';

class GetMeeting {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    });
    this.service = service;
  }
  meeting = () => {
    return this.service.get('meeting')
    .then(response => response.data)
  }
}


export default GetMeeting