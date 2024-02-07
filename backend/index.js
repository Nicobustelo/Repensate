const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
const usersRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');

mongoose
	.connect(config.MONGODB_URL)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch(err => console.error(err));

const app = express();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

app.use(middleware.requestLogger);

app.use('/api/user', usersRouter);
app.use('/api/auth', authRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
