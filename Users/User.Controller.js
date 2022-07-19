const Serv = require('./User.service');
const authSrvc = require('../auth/authSrvc');
const user = require('./Users');

const newuser = async (req, res) => {
    const { name, username, email, password, avatar } = req.body;

    if (!name || !username || !email || !password || !avatar) {
        return res.status(400).send({
            message:
                "Alguns campos estão faltando. Os campos são: 'username', 'name', email, 'password' ou 'avatar'",
        });
    }

    const ServEmail = await Serv.findUser(email);

    if (ServEmail) {
        return res.status(400).send({
            message: 'Usuário já existe!',
        });
    }

    const user = await Serv.createUser(req.body).catch(err =>
        console.log(err, { message: 'erro' }),
    );
    if (!user) {
        return res.status(400).send({
            message: 'Erro ao criar Usuário!',
        });
    }
    const token = authSrvc.gentoken(user.id);

    res.status(201).send({
        user: { id: user.id, name, username, email, avatar },
        token,
    });
};

const findAllUserCtrl = async (req, res) => {
    const allUser = await Serv.findAllUser();
    if (allUser.length === 0) {
        return res.status(400).send({
            message: 'Não existem usuários cadastrados!',
        });
    }
    res.send(allUser);
};
module.exports = { newuser, findAllUserCtrl };
