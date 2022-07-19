const authSrvc = require('./authSrvc');
const bcrypt = require('bcryptjs');
const { serve } = require('swagger-ui-express');

const loginCtrl = async (req, res) => {
    const { email, password } = req.body;

    const user = await authSrvc.loginSrvc(email);
    if (!user) {
        res.status(400).send({ message: 'usuário não encontrado' });
    }

    const validpass = await bcrypt.compare(password, user.password);

    if (!validpass) {
        res.send({ message: 'senha incorreta' });
    }

    const token = authSrvc.gentoken(user.id);
    console.log(token);
    res.send(token);
};

module.exports = { loginCtrl };
