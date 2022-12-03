import axios from "axios";

// const url = "https://absencemanagerapi.azurewebsites.net";
const url = "http://localhost:8080";

export default axios.create({
    baseURL: url,
    timeout: 10000,
    headers: {
        "Content-type": "application/json"
    }
});