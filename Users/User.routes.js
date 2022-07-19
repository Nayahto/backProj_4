const router = require('express').Router();
const userControll = require('./User.Controller');

const swaggerui = require('swagger-ui-express');
const swagger = require('../swagger.json');

router.use('/api-docs', swaggerui.serve);
router.get('/api-docs', swaggerui.setup(swagger));

router.post('/create', userControll.newuser);
router.get('/users', userControll.findAllUserCtrl);

module.exports = router;
