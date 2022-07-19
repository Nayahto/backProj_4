const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectDb = () => {
    console.log('conectando ao banco');

    mongoose
        .connect('mongodb://localhost:27017/User', {
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('conectado ao mongoDb');
        })
        .catch(err => {
            return console.log(`erro ao logar no mongo ${err}`);
        });
};

module.exports = connectDb;
