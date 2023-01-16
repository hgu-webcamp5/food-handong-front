import axios from "axios";

export const getRestaurants = async ()=>{
    const response = await axios.get("http://localhost:8080/api/restaurant");

    return response.data;
}
