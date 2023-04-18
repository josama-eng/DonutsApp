import axios from "axios";

export const getTopProducts = () => axios.get("/products/top");

export const productDetails = (id) => axios.get(`/productDetails/${id}`);

export const getAllProducts = () => axios.get("/products/all");

export const initPayment = (payload) => axios.post("/payment", payload);
