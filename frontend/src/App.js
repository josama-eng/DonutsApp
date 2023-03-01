import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
// import { useDispatch } from "react-redux";
import NavComponent from "./components/nav/Nav.Component";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div>
      <ToastContainer />
      <NavComponent />
      <Outlet />
    </div>
  );
}

export default App;
