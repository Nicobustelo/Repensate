const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');

const getAuth = async (req, res) => {
	res.json({
		message: 'got auth route working',
	});
};

const singup = async (req, res) => {
	const { email, username, password } = req.body;

	const saltRounds = 10;
	const hashedPassword = await bcryptjs.hash(password, saltRounds);

	const newUser = new User({ email, username, password: hashedPassword });

	try {
		await newUser.save();
		res.status(201).json({
			message: 'user created succesfully',
		});
	} catch (error) {
		res.json(error.message);
	}
};

module.exports = { getAuth, singup };