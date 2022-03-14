const {
  Board,
  BoardComment,
  BoardLike,
  BoardCommentComment,
  BoardCommentLike,
  BoardPhoto,
  BoardCategory,
  User,
} = require("../models/index");

const Op = require("sequelize").Op;

module.exports = {
  async insert(req, res, next) {
    try {
      const board = new Board(req.body);
      board.user_id = req.params.user_id;
      board.save();
      if (board) {
        return res.status(201).json({
          message: "insert-board",
          data: board,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async insertBoardComment(req, res, next) {
    try {
      const comment = new BoardComment(req.body);
      comment.user_id = req.params.user_id;
      comment.board_id = req.params.board_id;
      comment.save();
      if (comment) {
        return res.status(201).json({
          message: `insert-board-comment`,
          data: comment,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async insertBoardCommentComment(req, res, next) {
    try {
      const comment = new BoardCommentComment(req.body);
      comment.user_id = req.params.user_id;
      comment.board_id = req.params.board_id;
      comment.board_comment_id = req.params.board_comment_id;
      comment.save();
      if (comment) {
        return res.status(201).json({
          message: `insert-comment-of-comment`,
          data: comment,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async deleteBoardComment(req, res, next) {
    try {
      const comment = await BoardComment.destroy({
        where: {
          board_id: req.params.board_id,
          id: req.params.id,
          user_id: req.body.user_id,
        },
      });
      if (comment) {
        return res.status(200).json({
          message: `deleted-board-comment-${req.params.id}`,
          data: comment,
        });
      } else {
        return res.status(204);
      }
    } catch (error) {
      return next(error);
    }
  },

  async updateBoardComment(req, res, next) {
    try {
      const comment = await BoardComment.findOne({
        where: {
          board_id: req.params.board_id,
          id: req.params.id,
          user_id: req.body.user_id,
        },
      });
      if (comment) {
        comment.update(req.body);
        return res.status(200).json({
          message: `updated-board-comment-${req.params.id}`,
          data: comment,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async likeBoard(req, res, next) {
    try {
      const check = await BoardLike.findOne({
        where: {
          board_id: req.params.board_id,
          user_id: req.params.user_id,
        },
      });
      if (check) {
        return res.status(204).json();
      } else {
        const like = new BoardLike(req.body);
        like.user_id = req.params.user_id;
        like.board_id = req.params.board_id;
        like.save();
        if (like) {
          return res.status(201).json({
            message: `like-board`,
            data: like,
          });
        } else {
          return res.status(204).json();
        }
      }
    } catch (error) {
      return next(error);
    }
  },

  async unlikeBoard(req, res, next) {
    try {
      const check = await BoardLike.findOne({
        where: {
          board_id: req.params.board_id,
          user_id: req.params.user_id,
        },
      });
      if (check) {
        const like = await BoardLike.destroy({
          where: {
            board_id: req.params.board_id,
            user_id: req.params.user_id,
          },
        });
        if (like) {
          return res.status(200).json({
            message: `unlike-board-${req.params.board_id}`,
            data: like,
          });
        } else {
          return res.status(204).json();
        }
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async likeBoardComment(req, res, next) {
    try {
      const check = await BoardCommentLike.findOne({
        where: {
          board_id: req.params.board_id,
          board_comment_id: req.params.board_comment_id,
          user_id: req.params.user_id,
        },
      });
      if (check) {
        return res.status(204).json();
      } else {
        const like = new BoardCommentLike(req.body);
        like.user_id = req.params.user_id;
        like.board_id = req.params.board_id;
        like.board_comment_id = req.params.board_comment_id;
        like.save();
        return res.status(201).json({
          message: `like-board-comment: ${req.params.board_comment_id}`,
          data: like,
        });
      }
    } catch (error) {
      return next(error);
    }
  },

  async unlikeBoardComment(req, res, next) {
    try {
      const check = await BoardCommentLike.findOne({
        where: {
          board_id: req.params.board_id,
          board_comment_id: req.params.board_comment_id,
          user_id: req.params.user_id,
        },
      });
      if (check) {
        const like = await BoardCommentLike.destroy({
          where: {
            board_id: req.params.board_id,
            board_comment_id: req.params.board_comment_id,
            user_id: req.params.user_id,
          },
        });
        if (like) {
          return res.status(200).json({
            message: `unlike-board-comment-${req.params.board_comment_id}`,
            data: like,
          });
        } else {
          return res.status(204).json();
        }
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async findBoard(req, res, next) {
    try {
      const board = await Board.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: User,
            attributes: ["nickname", "photo_url"],
          },
          {
            model: BoardPhoto,
            attributes: ["photo_url"],
          },
          {
            model: BoardComment,
            attributes: ["comment", "createdAt"],
            include: [
              {
                model: User,
                attributes: ["nickname", "photo_url"],
                include: [
                  {
                    model: BoardCommentComment,
                    attributes: ["comment"],
                    include: [
                      {
                        model: User,
                        attributes: ["nickname", "photo_url"],
                      },
                    ],
                    order: [["createdAt", "DESC"]],
                  },
                ],
                order: [["createdAt", "DESC"]],
              },
            ],
            order: [["createdAt", "DESC"]],
          },
          {
            model: BoardLike,
            include: [
              {
                model: User,
                attributes: ["nickname", "photo_url"],
              },
            ],
            order: [["createdAt", "DESC"]],
          },
          {
            model: BoardCommentLike,
            include: [
              {
                model: User,
                attributes: ["nickname", "photo_url"],
              },
            ],
            order: [["createdAt", "DESC"]],
          },
          {
            model: BoardCategory,
            order: [["category", "DESC"]],
          },
        ],
      });
      if (board) {
        return res.status(200).json({
          message: `found-baord-${req.params.id}`,
          data: board,
        });
      } else {
        return res.status(204).json();
      }
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
            attributes: ["nickname", "photo_url"],
          },
          {
            model: BoardPhoto,
            attributes: ["photo_url"],
          },
          {
            model: BoardComment,
            attributes: ["comment", "createdAt"],
            include: [
              {
                model: User,
                attributes: ["nickname", "photo_url"],
                include: [
                  {
                    model: BoardCommentComment,
                    attributes: ["comment"],
                    include: [
                      {
                        model: User,
                        attributes: ["nickname", "photo_url"],
                      },
                    ],
                    order: [["createdAt", "DESC"]],
                  },
                ],
                order: [["createdAt", "DESC"]],
              },
            ],
            order: [["createdAt", "DESC"]],
          },
          {
            model: BoardLike,
            include: [
              {
                model: User,
                attributes: ["nickname", "photo_url"],
              },
            ],
            order: [["createdAt", "DESC"]],
          },
          {
            model: BoardCommentLike,
            include: [
              {
                model: User,
                attributes: ["nickname", "photo_url"],
              },
            ],
            order: [["createdAt", "DESC"]],
          },
          {
            model: BoardCategory,
            order: [["category", "DESC"]],
          },
        ],
      });
      return res.status(200).json({
        message: "found-all-board",
        data: boardList,
      });
    } catch (error) {
      return next(error);
    }
  },

  async update(req, res, next) {
    try {
      const board = await Board.findOne({
        where: {
          id: req.params.id,
          user_id: req.body.user_id,
        },
      });
      if (board) {
        board.update(req.body);
        return res.status(200).json({
          message: `updated-board-${req.params.id}`,
          data: board,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const board = await Board.destroy({
        where: {
          id: req.params.id,
          user_id: req.body.user_id,
        },
      });
      if (board) {
        return res.status(200).json({
          message: `deleted-board-${req.params.id}`,
          data: board,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async searchBoard(req, res, next) {
    try {
      const boardList = await Board.findAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.like]: "%" + req.params.keyword + "%",
              },
            },
            {
              description: {
                [Op.like]: "%" + req.params.keyword + "%",
              },
            },
          ],
        },
        include: [
          {
            model: User,
            attributes: ["nickname", "photo_url"],
          },
          {
            model: BoardPhoto,
            attributes: ["photo_url"],
          },
          {
            model: BoardComment,
            attributes: ["user_id"],
          },
          {
            model: BoardCommentComment,
            attributes: ["user_id"],
          },
          {
            model: BoardLike,
            attributes: ["user_id"],
          },
          {
            model: BoardCommentLike,
            attributes: ["user_id"],
          },
        ],
      });
      if (boardList) {
        return res.status(200).json({
          message: `found-board-${req.params.keyword}`,
          data: boardList,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },
};
