const jwt = require('jsonwebtoken');
const verify = () => jwt.verify(token, process.env.JWT);
