const { Version } = require("../models/index");

module.exports = {
  async check(req, res, next) {
    try {
      const version = await Version.findOne({
        where: {
          version: req.params.version,
        },
      });
      if (version) {
        return res.status(200).json({
          message: "version-check",
          data: version,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },
};
