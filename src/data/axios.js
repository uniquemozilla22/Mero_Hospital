import axios from "axios";

const axios_base = axios.create({
  baseURL: "http://192.168.1.100:8000",
});

export default axios_base;
