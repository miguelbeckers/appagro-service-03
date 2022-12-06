import http from "../../config";


class UserServices {

  hello() {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    }
    return http.get("/user/hello", config);
  }

  login(data) {
    return http.post("/login", data);
  }

  getAllUsers() {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    }
    return http.get("/user", config);
  }

  getUserByUsername(username) {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    }
    return http.get(`/user/${username}`, config);
  }

  getUserByToken() {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    }
    return http.get("/user/token", config);
  }

  getUserById(id) {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    }
    return http.get(`/user/${id}`, config);
  }

  createUser(data) {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    }
    return http.post("/user", data, config);
  }

  updateUser(id, data) {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    }
    return http.put(`/user/${id}`, data, config);
  }

  deleteUser(id) {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    }
    return http.delete(`/user/${id}`, config);
  }
}

export default new UserServices();
