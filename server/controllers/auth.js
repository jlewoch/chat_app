const { findByEmail, createUser } = require('../models/user');
const { allRooms } = require('../models/room');
const bcrypt = require('bcrypt');
const { jwtSign } = require('../middleware/jwt');
const signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    let user = await findByEmail(email);
    if (user.length) throw Error('Email already registered');
    const encryptedPass = await bcrypt.hash(password, 15);
    user = await createUser({ email, name, password: encryptedPass });
    res.status(201).json({ error: false, message: 'Account registered' });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await findByEmail(email);
    user = user[0];
    if (!user) throw Error('Authentication Error');
    const passcheck = await bcrypt.compare(password, user.password);
    if (!passcheck) throw Error('Authentication Error');
    const token = jwtSign(user._id);
    const rooms = await allRooms();
    res
      .status(200)
      .json({ error: false, data: { token, name: user.name, email, rooms } });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: true, message: error.message });
  }
};

module.exports = { signup, login };
