import axios from "axios";

const axios_base = axios.create({
  baseURL: "http://192.168.1.17:8000",
});

export default axios_base;
