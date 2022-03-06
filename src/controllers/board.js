const { Board } = require("../models/index");

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
};
