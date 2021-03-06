const config = require("./config/config");
const dbConnection = require("./config/database");

const app = require("express")();
// connect to mongoose DB using dbConnection from config/database
dbConnection()
	.then(() => {
		require("./config/express")(app);

		require("./config/routes")(app);

		app.use(function (err, req, res, next) {
			console.error(err);
			res.status(500).send(err.message);
			console.log("*".repeat(50));
		});

		app.listen(
			config.port,
			console.log(`Listening on port ${config.port}!`)
		);
	})
	.catch(console.error);
