import axios from 'axios';

export const getReviews = async () => {
  const response = await axios.get('http://localhost:8080/api/review');
  console.log(response.data);
  return response.data;
};

export const getReviewById = async (id) => {
  const response = await axios.get(`http://localhost:8080/api/review/${id}`);
  console.log(response.data);
  return response.data;
};

export const addReview = async (review) => {
  const response = await axios.post(`http://localhost:8080/api/review`, review);

  return response.status;
};
