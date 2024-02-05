const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');

mongoose
	.connect(config.MONGODB_URL)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch(err => console.error(err));

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
