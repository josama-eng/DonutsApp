import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, setUserToLocalStorage } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/user.slicer";

const LoginSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        loginUser(values)
          .then((response) => {
            if (response.status === 215) {
              toast.error(
                "Warning: Only registered users can log in. Please register to access your account."
              );
              navigate("/register");
            } else if (response.status === 216) {
              toast.info("Not active user.Please activate your account.");
            } else if (response.status === 217) {
              setUserToLocalStorage(response.data);
              dispatch(saveUser(response.data));
              toast.success("Successfuly loged in.");
              navigate("/shop");
            }
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }}
    >
      {({ error, touched }) => {
        return (
          <div className="login-box">
            <Form>
              <div className="user-box">
                <Field name="email" />
                <label htmlFor="email">Email</label>
                <p>
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className="user-box">
                <Field name="password" type="password" />
                <label htmlFor="password">Password</label>
                <p>
                  <ErrorMessage name="password" />
                </p>
              </div>
              <button type="submit" className="loginBtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
              </button>
            </Form>
            <p>
              Don't have an account?
              <Link to="/register" className="linkReset login">
                Sign up
              </Link>
            </p>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginComponent;
