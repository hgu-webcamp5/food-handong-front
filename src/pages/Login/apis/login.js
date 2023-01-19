import axios from 'axios';

export const loginWithId = async (id) => {
  const response = await axios.get(`http://localhost:8080/api/user/${id}`);

  return response.data;
};

export const loginWithPassword = async (id, password) => {
  const response = await axios.get(`http://localhost:8080/api/user/${id}/${password}`);

  return response.data;
};

export const join = (data) => {
  const response = axios.post('http://localhost:8080/api/user', data);

  return response;
};
