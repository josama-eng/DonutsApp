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

module.exports = {
  registerUser,
};
