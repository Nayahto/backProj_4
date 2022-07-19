const user = require('../Users/Users');
const jwt = require('jsonwebtoken');

const loginSrvc = email => {
    return user.findOne({ email: email }).select('+password');
};

const gentoken = id => {
    return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 84600 });
};

module.exports = { loginSrvc, gentoken };
