const user = require('./Users');

const findUser = email => {
    return user.findOne({ email: email });
};

const createUser = body => user.create(body);

const findAllUser = () => user.find();

const findUserMdwe = id => {
    user.findById(id);
};

module.exports = { findUser, createUser, findAllUser, findUserMdwe };
