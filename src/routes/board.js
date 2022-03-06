const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/insertboard").post(controllers.board.insertBoard);

router.route("/").get(controllers.board.findAllBoard);

module.exports = router;
