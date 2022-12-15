import http from "../../config-01";

class AreaService {

  hello() {
    return http.get("/area/hello");
  }

  getAllAreas() {
    return http.get("/area");
  }

  getAreasByUser(id) {
    return http.get(`/area/user/${id}`);
  }
  
  getAreaById(id) {
    return http.get(`/area/${id}`);
  }

  createArea(data, id) {
    return http.post(`/area/${id}`, data);
  }

  updateArea(id, data) {
    return http.put(`/area/${id}`, data);
  }

  deleteArea(areaId, userId) {
    return http.delete(`/area/${areaId}/user/${userId}`);
  }
}

export default new AreaService();
