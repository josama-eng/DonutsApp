import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./redux/user.slicer";

//pages and components
import RegisterPageComponent from "./pages/RegisterPageComponent";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/LoginPage";
import ShopPage from "./pages/ShopPage";
import CategoryShop from "./pages/CategoryShop";
import ActivationPage from "./pages/ActivationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPageComponent />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <CategoryShop />,
      },
      {
        path: "/user/activateAccount/:id",
        element: <ActivationPage />,
      },
    ],
  },
]);

const store = configureStore({
  reducer: {
    userStore: userSlicer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
