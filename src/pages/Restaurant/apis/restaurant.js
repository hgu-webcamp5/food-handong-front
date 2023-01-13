import axios from "axios"

export const getRestaurantById = async(id)=> {
    const response = await axios.get(`http://localhost:8080/api/restaurant/${id}`)
    console.log(response.data)
    return response.data;
}
