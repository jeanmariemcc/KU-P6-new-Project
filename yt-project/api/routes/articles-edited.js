const controllers = require("../controllers");
const router = require("express").Router();
// const { auth } = require('../utils');

router.get("/", controllers.articles.get);

router.get("/OneArticle/:id", controllers.articles.get);

router.post("/", controllers.articles.post);

router.put("/:id", controllers.articles.put);

router.delete("/:id", controllers.articles.delete);

module.exports = router;
