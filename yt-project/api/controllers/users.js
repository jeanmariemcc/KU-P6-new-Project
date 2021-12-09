const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");

module.exports = {
	get: (req, res, next) => {
		models.Users.find()
			.then((users) => res.send(users))
			.catch(next);
	},

	post: {
		register: (req, res, next) => {
			const { email, password, admin } = req.body;
			models.Users.create({ email, password, admin })
				.then((createdUsers) => res.send(createdUsers))
				.catch(next);
		},

		login: (req, res, next) => {
			const { email, password } = req.body;
			models.Users.findOne({ email })
				.then((user) =>
					Promise.all([user, user.matchPassword(password)])
				)
				.then(([user, match]) => {
					if (!match) {
						res.status(401).send("Invalid password");
						return;
					}
					console.log("logged In!");
					const token = utils.jwt.createToken({ id: user._id });
					res.setHeader("Access-Control-Allow-Origin", "*");
					res.cookie(config.authCookieName, token, {
						maxAge: 9000000000,
						httpOnly: true,
						SameSite: true,
					}).send({ user, token });
				})
				.catch(next);
		},

		logout: (req, res, next) => {
			const token = req.cookies[config.authCookieName];
			console.log("-".repeat(100));
			console.log(token);
			console.log("-".repeat(100));
			models.TokenBlacklist.create({ token })
				.then(() => {
					res.clearCookie(config.authCookieName).send({
						message: "Logout successfully!",
					});
				})
				.catch(next);
		},
	},

	put: (req, res, next) => {
		const id = req.params.id;
		const { email, password } = req.body;
		models.Users.update({ _id: id }, { email, password })
			.then((updatedUser) => res.send(updatedUser))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Users.deleteOne({ _id: id })
			.then((removedUser) => res.send(removedUser))
			.catch(next);
	},
};
