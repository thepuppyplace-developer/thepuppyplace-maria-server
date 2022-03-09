const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/insert").post(controllers.consult.insert);

router
  .route(":/id")
  .patch(controllers.consult.update)
  .delete(controllers.consult.delete);

module.exports = router;
