const usersRouter = require('express').Router();
const { test } = require('../controllers/user.controller');

usersRouter.get('/', test);

module.exports = usersRouter;
