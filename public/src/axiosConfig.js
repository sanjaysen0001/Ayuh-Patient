import axios from "axios";

const instance = axios.create({
  baseURL: "http://174.138.68.198:4000",
  // baseURL: "https://nodejsbackend.astrologically.in",
  // baseURL: "https://nodejsbackend.astrologically.in",
  // baseURL: "http://43.205.241.133:4000"
});

export default instance;
