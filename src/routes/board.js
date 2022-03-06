const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/insertboard").post(controllers.board.insertBoard);

module.exports = router;
