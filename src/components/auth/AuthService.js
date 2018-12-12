import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/auth",
      withCredentials: true
    })
  }

  signup = (user) => {
    // axios.post("http://localhost:5000/api/auth/signup", {user}, {withCredentials: true})
    const formData = new FormData();
    Object.keys(user).forEach(key => formData.append(key, user[key]));

    return this.service.post('/signup', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
    })
    .then(response => response.data)
  }

  login = (user) => {
    // axios.post("http://localhost:5000/api/auth/login", {user}, {withCredentials: true})
    return this.service.post('/login', user)
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data);
  }

  logout = () => {
    return this.service.get('/logout')
    .then(response => response.data);
  }
}

export default AuthService;