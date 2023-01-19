import axios from "axios";
import {getRestaurantById} from "../../Restaurant/apis/restaurant";

export const getLikeRestaurants = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/restaurant?userId=${userId}`);

    let unique = [];
    let list = [];
    const filterData = response.data.filter(item => !item.cancelled);
    filterData.forEach(item => {
        if (!unique.includes(item.id)) {
            unique.push(item.id);
            list.push(item)
        }
    })

    return list;
};