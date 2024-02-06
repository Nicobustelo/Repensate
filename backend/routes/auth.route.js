const authRouter = require('express').Router();
const { getAuth, singup } = require('../controllers/auth.controller');

authRouter.get('/', getAuth);

authRouter.post('/singup', singup);

module.exports = authRouter;
