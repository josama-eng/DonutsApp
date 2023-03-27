import axios from "axios";

export const getCategories = () => axios.get("/categories");

export const categoryProducts = (id) => axios.get(`/shop/${id}`);
