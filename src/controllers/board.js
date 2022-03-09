const {
  Board,
  BoardComment,
  BoardLike,
  BoardCommentComment,
  BoardCommentLike,
  User,
  UserPhoto,
} = require("../models/index");

module.exports = {
  async insert(req, res, next) {
    try {
      const board = new Board(req.body);
      board.save();
      return res.status(201).json({
        message: "insert-board",
        board: board,
      });
    } catch (error) {
      return next(error);
    }
  },

  async insertBoardComment(req, res, next) {
    try {
      const comment = new BoardComment(req.body);
      comment.board_id = req.params.board_id;
      comment.save();
      return res.status(201).json({
        message: `insert-comment-board: ${req.params.board_id}`,
        comment: comment,
      });
    } catch (error) {
      return next(error);
    }
  },

  async insertBoardCommentComment(req, res, next) {
    try {
      const comment = new BoardCommentComment(req.body);
      comment.board_id = req.params.board_id;
      comment.board_comment_id = req.params.board_comment_id;
      comment.save();
      return res.status(201).json({
        message: `insert-comment_of_comment: ${req.params.board_comment_id}, board: ${req.params.board_id}`,
        comment: comment,
      });
    } catch (error) {
      return next(error);
    }
  },

  async likeBoard(req, res, next) {
    try {
      const like = new BoardLike(req.body);
      like.board_id = req.params.board_id;
      like.save();
      return res.status(201).json({
        message: `like-board: ${req.params.board_id}`,
        like: like,
      });
    } catch (error) {
      return next(error);
    }
  },

  async likeBoardComment(req, res, next) {
    try {
      const like = new BoardCommentLike(req.body);
      like.board_id = req.params.board_id;
      like.board_comment_id = req.params.board_comment_id;
      like.save();
      return res.status(201).json({
        message: `like-board_comment: ${req.body.board_comment_id}, board: ${req.body.board_id}`,
        like: like,
      });
    } catch (error) {
      return next(error);
    }
  },

  async findAllBoard(req, res, next) {
    try {
      const boardList = await Board.findAll({
        include: [
          {
            model: User,
            attributes: ["nickname"],
            include: [
              {
                model: UserPhoto,
                attributes: ["photo_url"],
              },
            ],
          },
        ],
        order: [["title", "DESC"]],
      });
      return res.status(200).json({
        message: "found-all-board",
        data: boardList,
      });
    } catch (error) {
      return next(error);
    }
  },
};
