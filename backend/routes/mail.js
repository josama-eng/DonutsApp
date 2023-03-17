require("dotenv").config();

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");

const mailUser = process.env.MAIL_USER;
const mailPass = process.env.MAIL_PASS;

router.post("/mail/sendContact", async (req, res) => {
  const { email, subject, textarea } = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  });

  let mailOptions = {
    from: email,
    to: `"Donuts" ${mailUser}`,
    subject: subject,
    text: "Hi",
    html: `
        <h2 style="font-size:20px;color: darkred;">Message from ${email}</h2>
        <p style="text-align:center;color: #292929; font-size: 18px;">${textarea}</p>
        
    `,
    // attachments: [
    //   {
    //     filename: "logo.png",
    //     path: path.resolve(__dirname, "../public/images/logo.png"),
    //     cid: "unique@nodemailer.com",
    //   },
    // ],
  };
  transporter
    .sendMail(mailOptions)
    .then((response) => {
      res.status(220).send(response);
    })
    .catch((err) => {
      res.status(420).send(err);
    });
  //   <a href="http://localhost:3000" target="_blank" style="text-decoration: none; font-size: 18px; color: #292929;">Go to WebSite</a>
  //    <img src="cid:unique@nodemailer.com"></img>
});

module.exports = router;
