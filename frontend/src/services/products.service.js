import axios from "axios";

export const getTopProducts = () => axios.get("/products/top");
