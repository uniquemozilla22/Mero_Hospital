import axios from "axios";

const axios_base = axios.create({
  baseURL: "https://merohealthbackend.herokuapp.com/",
});

export default axios_base;
