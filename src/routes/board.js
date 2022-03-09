const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/insert").post(controllers.board.insert);

router
  .route("/:board_id/insertcomment")
  .post(controllers.board.insertBoardComment);

router
  .route("/:board_id/:board_comment_id/insertcomment")
  .post(controllers.board.insertBoardCommentComment);

router.route("/:board_id/like").post(controllers.board.likeBoard);

router
  .route("/:board_id/:board_comment_id/likecomment")
  .post(controllers.board.likeBoardComment);

router.route("/").get(controllers.board.findAllBoard);

module.exports = router;
