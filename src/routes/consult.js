const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/insert/:user_id").post(controllers.consult.insert);

router.route("/").get(controllers.consult.findAllConsult);

router
  .route("/:id")
  .get(controllers.consult.findConsult)
  .patch(controllers.consult.update)
  .delete(controllers.consult.delete);

module.exports = router;
