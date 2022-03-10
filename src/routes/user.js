const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/signup").post(controllers.user.signup);

router
  .route("/:id")
  .get(controllers.user.findUser)
  .patch(controllers.user.update)
  .delete(controllers.user.delete);

router.route("/emailcheck").post(controllers.user.emailcheck);

router.route("/nicknamecheck").post(controllers.user.nicknamecheck);

router.route("/").get(controllers.user.findAllUser);

module.exports = router;
