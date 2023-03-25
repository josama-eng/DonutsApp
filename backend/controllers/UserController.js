const User = require("../models/User");
const mailTemplate = require("../template/mail.template");
const mailService = require("../services/mail.service");

//register user
async function registerUser(req, res) {
  try {
    //check if email already exists in db
    const posibleUser = await User.findOne({ email: req.body.email });
    if (posibleUser) {
      return res
        .status(412)
        .send("User with this email address already exist.");
    } else {
      const newUser = await User.create(req.body);
      newUser.save();
      //activate account
      const activationEmail = mailTemplate.htmlActivation(
        `http://localhost:3000/user/activateAccount/${newUser?._id}`
      );
      mailService
        .activateMail(newUser.email, "Activation account", activationEmail)
        .then((response) => {
          res.status(220).send("User registred");
        })
        .catch((err) => {
          res.send(err);
        });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
}

//log user
async function logUser(req, res) {
  try {
    User.findOne(req.body)
      .then((data) => {
        if (!data) {
          res.status(215).send("Bad credentials.");
        } else if (!data.isActive) {
          res.status(216).send("Not active user.");
        } else {
          res.status(217).send(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(420).send(err);
    console.log(err);
  }
}

//activate
async function activate(req, res) {
  let { id } = req.params;
  try {
    const response = await User.updateOne(
      { _id: id },
      { $set: { isActive: true } }
    )
      .then((response) => {
        res.status(210).send("ok");
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(410).send(err);
  }
}

module.exports = {
  registerUser,
  logUser,
  activate,
};
