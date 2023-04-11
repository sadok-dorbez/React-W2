import axios from "axios";
const url ="http://localhost:3000/products"
export const getProductById = async (id) =>{
    return axios.get(`${url}/${id}`).then(response => response.data);
    }