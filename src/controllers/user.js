const { User } = require("../models/index");
require("dotenv").config();

module.exports = {
  async emailcheck(req, res, next) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email },
        paranoid: false,
      });
      if (user) {
        return res
          .status(401)
          .json({ message: "already-user-email", data: false });
      } else {
        return res.status(200).json({ message: "can-use-email", data: true });
      }
    } catch (error) {
      return next(error);
    }
  },

  async nicknamecheck(req, res, next) {
    try {
      const user = await User.findOne({
        where: { nickname: req.body.nickname },
        paranoid: false,
      });
      if (user) {
        return res
          .status(401)
          .json({ message: "already-user-nickname", data: false });
      } else {
        return res
          .status(200)
          .json({ message: "can-use-nickname", data: true });
      }
    } catch (error) {
      return next(error);
    }
  },

  async signup(req, res, next) {
    try {
      var user = await User.findOne({
        where: { email: req.body.email },
        paranoid: false,
      });
      if (user) {
        return res.status(401).json({ message: "already-use-email" });
      } else {
        user = await User.findOne({
          where: { nickname: req.body.nickname },
          paranoid: false,
        });
        if (user) {
          return res.status(401).json({ message: "already-use-nickname" });
        } else {
          user = new User(req.body);
          user.save();
          return res.status(201).json({ message: "sign-up", data: user });
        }
      }
    } catch (error) {
      return next(error);
    }
  },

  async findOneUser(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (user) {
        return res.status(200).json({
          message: `found-user-${req.params.id}`,
          data: user,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },

  async findAllUser(req, res, next) {
    try {
      var userList = await User.findAll({
        order: [["createdAt", "ASC"]],
      });
      if (userList) {
        return res.status(200).json({
          message: "found-all-user",
          data: userList,
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
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (user) {
        user.update(req.body);
        return res.status(200).json({
          message: `updated-user-${req.params.id}`,
          data: user,
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
      const user = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (user) {
        return res.status(200).json({
          message: `deleted-user-${req.params.id}`,
          data: user,
        });
      } else {
        return res.status(204).json();
      }
    } catch (error) {
      return next(error);
    }
  },
};
