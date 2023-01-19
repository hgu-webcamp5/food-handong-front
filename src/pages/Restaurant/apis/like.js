import axios from "axios";

export const addLike = async (userId, restaurantId) => {
    const response = await axios.post(`http://localhost:8080/api/restaurant/like`, {
        userId, restaurantId
    });

    return response.status;
};

export const unlike = async (userId, restaurantId) => {
    const response = await axios.patch(`http://localhost:8080/api/restaurant/unlike`, {
        userId, restaurantId
    });

    return response.status;
};

export const checkLike = async (userId, restaurantId) => {
    const response = await axios.get(`http://localhost:8080/api/restaurant?userId=${userId}`);

    const restaurants = response.data;

    let isLike = false;
    console.log(restaurants)
    restaurants.forEach(restaurant => {
        if (restaurant.id === +restaurantId
            && !restaurant.cancelled) {
            isLike = true;
        } else {
            isLike = false;
        }
    })

    return isLike;
};