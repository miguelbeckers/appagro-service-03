import http from "../../config-01";

class UserService {

  hello() {
    return http.get("/user/hello");
  }

  login(data) {
    return http.post("/login", data);
  }

  getAllUsers() {
    return http.get("/user");
  }

  getUserByUsername(username) {
    return http.get(`/user/username/${username}`);
  }

  getUserByToken() {
    return http.get("/user/token");
  }

  getUserById(id) {
    return http.get(`/user/${id}`);
  }

  createUser(data) {
    return http.post("/user", data);
  }

  updateUser(id, data) {
    return http.put(`/user/${id}`, data);
  }

  deleteUser(id) {
    return http.delete(`/user/${id}`);
  }
}

export default new UserService();
