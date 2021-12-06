const router = require("../routes/");

module.exports = (app) => {
	app.use("/atlas/users", router.users);

	app.use("/atlas/articles", router.articles);

	app.use("*", (req, res, next) =>
		res.send(
			"<h1>Something went wrong. Try again. Invalid database route </h1>"
		)
	);
};
