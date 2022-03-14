const router = require("express").Router();
const controllers = require("../controllers/index");

router.route("/insert/:user_id").post(controllers.board.insert);

router
  .route("/:board_id/insertcomment/:user_id")
  .post(controllers.board.insertBoardComment);

router
  .route("/:board_id/:id")
  .patch(controllers.board.updateBoardComment)
  .delete(controllers.board.deleteBoardComment);

router
  .route("/:board_id/:board_comment_id/insertcomment/:user_id")
  .post(controllers.board.insertBoardCommentComment);

router.route("/:board_id/like/:user_id").post(controllers.board.likeBoard);

router
  .route("/:board_id/unlike/:user_id")
  .delete(controllers.board.unlikeBoard);

router
  .route("/:board_id/:board_comment_id/likecomment/:user_id")
  .post(controllers.board.likeBoardComment);

router
  .route("/:board_id/:board_comment_id/unlikecomment/:user_id")
  .delete(controllers.board.unlikeBoardComment);

router.route("/").get(controllers.board.findAllBoard);

router
  .route("/:id")
  .get(controllers.board.findBoard)
  .patch(controllers.board.update)
  .delete(controllers.board.delete);

router.route("/search/:keyword").get(controllers.board.searchBoard);

module.exports = router;
