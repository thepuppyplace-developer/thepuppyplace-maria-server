const { Consult } = require("../models/index");

module.exports = {
  async insert(req, res, next) {
    try {
      const consult = new Consult(req.body);
      consult.user_id = req.params.user_id;
      consult.save();
      return res.status(201).json({
        message: "insert-consult",
        data: consult,
      });
    } catch (error) {
      return next(error);
    }
  },

  async findConsult(req, res, next) {
    try {
      const consult = await Consult.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (consult) {
        return res.status(200).json({
          message: "get-consult",
          data: consult,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async findAllConsult(req, res, next) {
    try {
      const consultList = await Consult.findAll();
      if (consultList) {
        return res.status(200).json({
          message: "get-all-consult",
          data: consultList,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async update(req, res, next) {
    try {
      const consult = await Consult.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (consult) {
        consult.update(req.body);
        return res.status(200).json({
          message: `updated-consult-${req.params.id}`,
          data: consult,
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
      const id = req.params.id;
      const consult = await Consult.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (consult) {
        return res.status(200).json({
          message: `deleted-consult-${id}`,
          data: consult,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },
};
