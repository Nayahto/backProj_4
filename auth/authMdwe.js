/*require('dotenv').config();
const jwt = require('jsonwebtoken');
const userSrvc = require('../Users/User.service');
const user = require('../Users/Users');

module.exports = (req, res, next) => {
    const authHeaders = req.headers.authorization;
    if (!authHeaders) {
        return res.status(401).send({ message: 'o token nao foi informado' });
    }
    const parts = authHeaders.split(' ');
    if (parts.length !== 2) {
        res.status(401).send({ message: 'token invalido' });
    }
    const [scheme, token] = parts;
    if (!/^Bearer^/i.test(scheme)) {
        res.status(401).send({ message: 'token mal formatado' });
    }
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        const user = await userSrvc.findUserMdwe(decoded.id);
    });
    if (err || !user || !user.id) {
        res.status(401).send({ message: 'token invalido' });
    }
    req.userId = user.id;
    return next();
};*/
