import axios from "axios";

export const sendContactMail = (payload) =>
  axios.post("/mail/sendContact", payload);
