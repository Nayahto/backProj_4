const cors = require('cors');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const dataBase = require('./dataBase/userDatabase');

const router = require('./Users/User.routes');
const authrouter = require('./auth/authRoute');

dataBase();

app.use(express.json());
app.use(cors());

app.use('/users', router);
app.use('/auth', authrouter);
app.listen(port, () =>
    console.log(`servidor rodando em http://localhost:${port}`),
);
