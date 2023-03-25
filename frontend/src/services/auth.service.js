import axios from "axios";

//register user
export const registerUser = (payload) => axios.post("/register", payload);

//login user
export const loginUser = (payload) => axios.post("/login", payload);

//set user in local storage
export const setUserToLocalStorage = (payload) =>
  localStorage.setItem("donutsUser", JSON.stringify(payload));

//remove user from local storage
export const removeUserToLocalStorage = () =>
  localStorage.removeItem("donutsUser");

//activate account
export const activateAccount = (id) => axios.put(`/user/activateAccount/${id}`);
