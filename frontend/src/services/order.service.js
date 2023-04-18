import axios from "axios";

export const placeOrder = (payload) => axios.post("/order", payload);
