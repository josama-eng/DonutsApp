import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

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
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
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
                <Field name="password" />
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
