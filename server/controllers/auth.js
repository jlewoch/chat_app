const { findByEmail, createUser } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    let user = await findByEmail(email);
    if (user.length) throw Error('Email already registered');
    const encryptedPass = await bcrypt.hash(password, 15);
    user = await createUser({ email, name, encryptedPass });
    res.status(201).json({ error: false, message: 'Account registered' });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await findByEmail(email);
    if (!user) throw Error('Authentication Error');
    const passcheck = await bcrypt.compare(password, user.password);
    if (!passcheck) throw Error('Authentication Error');
    const token = jwt.sign({ uid: user.uid, ia: Date.now() });
    res
      .status(200)
      .json({ error: false, data: { token, name: user.name, email } });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

module.exports = { signup, login };
