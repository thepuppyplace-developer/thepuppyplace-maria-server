const { Board, BoardComment, User } = require("../models/index");

module.exports = {
  async insertBoard(req, res, next) {
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
            where: {
              id: 1,
            },
            attributes: ["email"],
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
};
