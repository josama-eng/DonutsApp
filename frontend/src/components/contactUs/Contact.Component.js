import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { sendContactMail } from "../../services/mail.service";
import { AiOutlinePhone, AiOutlineMail, AiFillHome } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//validate form
const ContactSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  textarea: Yup.string().required("Text is required"),
});

const ContactComponent = () => {
  const navigate = useNavigate();
  return (
    // <div className="contactWrapper">
    <Formik
      initialValues={{
        email: "",
        subject: "",
        textarea: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values) => {
        console.log(values);
        sendContactMail(values)
          .then((response) => {
            if (response.data.accepted) {
              toast.success(
                "Your message has been successfully sent. Thank you for getting in touch."
              );
              navigate("/");
            }
          })
          .catch((err) => {
            toast.error("Something went wrong.Please try later.");
          });
      }}
    >
      {({ error, touched }) => {
        return (
          <Form>
            <div className="wrapper">
              <h2>get in touch</h2>
              <p>
                <AiOutlinePhone className="icon" /> Phone: +2(02) 2737 6748
              </p>
              <p>
                <AiOutlineMail className="icon" /> Email: donuts22srb@gmail.com
              </p>
              <p>
                <AiFillHome className="icon" /> Address: Bulevar Oslobodjenja
                22, Novi Sad
              </p>
              <div className="row">
                <Field name="email" placeholder="Email" />
                <p>
                  <ErrorMessage name="email" />
                </p>

                <Field name="subject" placeholder="Subject" />
                <p>
                  <ErrorMessage name="subject" />
                </p>
                <Field
                  name="textarea"
                  as="texarea"
                  placeholder="Message"
                  component="textarea"
                />
                <p>
                  <ErrorMessage name="textarea" />
                </p>
              </div>
              <button type="submit">Send message</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactComponent;
