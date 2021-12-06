const controllers = require("../controllers");
const router = require("express").Router();

router.get('/', controllers.users.get);

router.post("/register", controllers.users.post.register);

router.post("/login", controllers.users.post.login);

router.post("/logout", controllers.users.post.logout);

router.put("/:id", controllers.users.put);

router.delete("/:id", controllers.users.delete);

module.exports = router;
