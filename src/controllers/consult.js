const { Consult } = require("../models/index");

module.exports = {
  async insert(req, res, next) {
    try {
      const consult = new Consult(req.body);
      consult.save();
      return res.status(201).json({
        message: "insert-consult",
        consult: consult,
      });
    } catch (error) {
      return next(error);
    }
  },

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const consult = await Consult.findOne({
        where: id,
      });
      if (consult) {
        consult.update(req.body);
        return res.status(200).json({
          message: `updated-consult-${id}`,
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
      const consult = await Consult.destroy({ where: id });
      if (consult) {
        return res.status(200).json({
          message: `deleted-consult-${id}`,
          consult: consult,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },
};
