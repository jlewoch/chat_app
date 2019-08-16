const jwt = require('jsonwebtoken');
const jwtVerify = token => jwt.verify(token, process.env.JWT);
const jwtSign = uid => jwt.sign({ uid }, process.env.JWT, { expiresIn: '24h' });
module.exports = { jwtVerify, jwtSign };
