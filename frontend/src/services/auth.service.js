import axios from "axios";

export const registerUser = (data) => axios.post("/register", data);
