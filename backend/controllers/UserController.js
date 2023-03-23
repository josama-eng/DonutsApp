const User = require("../models/User");

//register user
async function registerUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    newUser.save();
  } catch (err) {
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
        } else {
          res.status(200).send(data);
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

module.exports = {
  registerUser,
  logUser,
};
