import axios from 'axios';
export const post = (path, data) =>
  axios.post('http://localhost:3000/' + path, data);
