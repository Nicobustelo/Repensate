const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const usersRouter = require('./routes/user.route');

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

app.use('/api/user', usersRouter);
