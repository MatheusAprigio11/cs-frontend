import axios from "axios"; 

const instance = axios.create({
  baseURL : 'http://10.109.71.8:8000/api/v1/'
  // baseURL : 'http://10.21.166.53:8000/api/v1/'
});

export default instance;