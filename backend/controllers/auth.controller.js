const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAuth = async (req, res) => {
	res.json({
		message: 'got auth route working',
	});
};

const singup = async (req, res, next) => {
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
		next(error);
	}
};

const singin = async (req, res, next) => {
	console.log('got here 3');
	const { email, password } = req.body;
	try {
		// checks if user exists
		const validUser = await User.findOne({ email });
		console.log('validUser', validUser);
		if (!validUser) return next('User not found');
		// checks if password is correct
		const validPassword = bcryptjs.compareSync(password, validUser.password);
		console.log('validPassword', validPassword);
		if (!validPassword) return next('wrong credentials');
		// creates token for user
		const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
		// remove the password from user
		const { password: hashedPassword, ...rest } = validUser._doc;
		// send token to the cookies of the page
		// this token only works for each session
		res
			.cookie('access_token', token, { httpOnly: true })
			.status(200)
			.json(rest);
	} catch (error) {
		enxt(error);
	}
};

module.exports = { getAuth, singup, singin };
