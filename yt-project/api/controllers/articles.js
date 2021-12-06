const models = require("../models");

module.exports = {
	get: {
		getall: (req, res, next) => {
			models.Articles.find()
				.then((articles) => res.send(articles))
				.catch(next);
		},

		getone: (req, res, next) => {
			const id = req.params.id;
			// console.log(`getone line 13 id ${id}`);
			models.Articles.findById(id)
				.then((article) => {
					// console.log(article);
					res.send(article);
				})
				.catch(next);
		},
	},

	post: (req, res, next) => {
		const dateCreated = new Date().toLocaleDateString();
		const { description, title, imageURL } = req.body;
		// console.log(req.body);

		// console.log(`articles.js dateCreated ${dateCreated}`);

		models.Articles.create({ description, imageURL, title, dateCreated })
			.then((createdArticle) => res.send(createdArticle))
			.catch(next);
	},

	put: (req, res, next) => {
		const id = req.params.id;
		const { description, imageURL, title } = req.body;
		models.Articles.updateOne({ _id: id }, { description, imageURL, title })
			.then((updatedArticles) => res.send(updatedArticles))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Articles.deleteOne({ _id: id })
			.then((removedArticles) => res.send(removedArticles))
			.catch(next);
	},
};
