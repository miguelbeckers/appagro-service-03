import http from "../../config-02";

class DeviceService {

  hello() {
    return http.get("/device/hello");
  }

  getAllDevices() {
    return http.get("/device");
  }
  
  getDeviceById(id) {
    return http.get(`/device/${id}`);
  }

  createDevice(data, id) {
    return http.post(`/device/${id}`, data);
  }

  updateDevice(id, data) {
    return http.put(`/device/${id}`, data);
  }

  deleteDevice(id) {
    return http.delete(`/device/${id}`);
  }
}

export default new DeviceService();
