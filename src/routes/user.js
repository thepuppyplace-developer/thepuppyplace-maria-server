const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/signup").post(controllers.user.signup);

router
  .route("/updateuser/:id")
  .patch(controllers.user.updateUser)
  .delete(controllers.user.deleteUser);

router.route("/emailcheck").post(controllers.user.emailcheck);

router.route("/nicknamecheck").post(controllers.user.nicknamecheck);

router.route("/").get(controllers.user.findAllUser);

module.exports = router;
