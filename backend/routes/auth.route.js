const authRouter = require('express').Router();
const { getAuth, singup, singin } = require('../controllers/auth.controller');

authRouter.get('/', getAuth);

authRouter.post('/singup', singup);
authRouter.post('/singin', singin);

module.exports = authRouter;
