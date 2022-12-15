import http from "../../config-02";

class MeasurementService {

  hello() {
    return http.get("/measurement/hello");
  }

  getAllMeasurements() {
    return http.get("/measurement");
  }
  
  getMeasurementById(id) {
    return http.get(`/measurement/${id}`);
  }

  createMeasurement(data, id) {
    return http.post(`/measurement/${id}`, data);
  }

  updateMeasurement(id, data) {
    return http.put(`/measurement/${id}`, data);
  }

  deleteMeasurement(id) {
    return http.delete(`/measurement/${id}`);
  }
}

export default new MeasurementService();
