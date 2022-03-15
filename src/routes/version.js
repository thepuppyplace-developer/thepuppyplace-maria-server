const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/:version").get(controllers.version.check);

module.exports = router;
