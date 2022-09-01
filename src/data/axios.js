import axios from "axios";

const production = "https://merohealthbackend.herokuapp.com/";
const axios_base = axios.create({
  baseURL: production || "http://192.168.0.100:8000/",
});

export default axios_base;
