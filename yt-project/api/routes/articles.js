const controllers = require("../controllers");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.articles.get.getall);

// router.get('/OneArticle/:id', auth(), controllers.articles.get.getone);
router.get("/:id", auth(), controllers.articles.get.getone);

router.post("/", auth(), controllers.articles.post);

router.put("/:id", auth(), controllers.articles.put);

router.delete("/:id", auth(), controllers.articles.delete);

module.exports = router;
