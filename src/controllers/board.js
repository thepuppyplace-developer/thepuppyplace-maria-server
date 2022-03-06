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

  async findAllBoard(req, res, next) {
    try {
      return Board.findAll().then((boardList) => {
        res.status(200).json({ boardList });
      });
    } catch (error) {
      return next(error);
    }
  },
};
