const router = require('express').Router();
const authCtrl = require('./authCtrl');
const swaggerui = require('swagger-ui-express');
const swagger = require('../swagger.json');

router.use('/api-docs', swaggerui.serve);
router.get('/api-docs', swaggerui.setup(swagger));

router.post('/login', authCtrl.loginCtrl);

module.exports = router;
