import axios from "axios";

export const getTopProducts = () => axios.get("/products/top");

export const productDetails = (id) => axios.get(`/productDetails/${id}`);
