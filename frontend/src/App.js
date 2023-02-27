import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
// import { useDispatch } from "react-redux";
import NavComponent from "./components/nav/Nav.Component";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <>
      <ToastContainer />
      <NavComponent />
      <Outlet />
    </>
  );
}

export default App;
