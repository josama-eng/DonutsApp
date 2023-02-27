import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//validate form
const RegisterSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  username: Yup.string().required("Username is required"),
});

const RegisterComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="formContainer">
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          username: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          registerUser(values)
            .then((response) => {
              console.log(response.data);
              toast.success(
                "Successfully registered. Please check you mail box."
              );
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
              toast.error(error?.response.data);
            });
        }}
      >
        {({ error, touched }) => {
          return (
            <Form>
              <div className="inputWrapper">
                <h2>Register</h2>
                <Field name="email" placeholder="Email" />
                <ErrorMessage name="email" />

                <Field name="firstName" placeholder="First name" />
                <ErrorMessage name="firstName" />

                <Field name="lastName" placeholder="Last name" />
                <ErrorMessage name="lastName" />

                <Field
                  className="form-control"
                  name="username"
                  placeholder="User name"
                />
                <ErrorMessage name="username" />

                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" />

                <button type="submit">Register</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterComponent;
