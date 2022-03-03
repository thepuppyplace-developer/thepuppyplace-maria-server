const { User } = require("../models/index");
require("dotenv").config();

module.exports = {
  async emailcheck(req, res, next) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (user) {
        return res.status(400).json({ message: "already-user-email" });
      } else {
        return res.status(200).json({ message: "can-use-email" });
      }
    } catch (error) {
      return next(error);
    }
  },

  async nicknamecheck(req, res, next) {
    try {
      const user = await User.findOne({
        where: { nickname: req.body.nickname },
      });
      if (user) {
        return res.status(400).json({ message: "already-user-nickname" });
      } else {
        return res.status(200).json({ message: "can-use-nickname" });
      }
    } catch (error) {
      return next(error);
    }
  },

  async signup(req, res, next) {
    try {
      var user = await User.findOne({ where: { email: req.body.email } });
      if (user) {
        return res.status(401).json({ message: "already-use-email" });
      } else {
        user = await User.findOne({ where: { nickname: req.body.nickname } });
        if (user) {
          return res.status(400).json({ message: "already-use-nickname" });
        } else {
          user = new User(req.body);
          user.save();
          return res.status(201).json({ message: "sign-up", user: user });
        }
      }
    } catch (error) {
      return next(error);
    }
  },

  async updateUser(req, res, next) {
    try {
      const id = req.params.id;
      await User.findOne({ where: { id } }).then((result) =>
        result
          ? result
              .update(req.body)
              .then((user) => res.status(user ? 200 : 400).json({ user }))
          : res.status(204).json()
      );
    } catch (error) {
      return next(error);
    }
  },

  findAllUser(req, res, next) {
    try {
      return User.findAll().then((userList) =>
        res.status(userList ? 200 : 204).json({ userList })
      );
    } catch (error) {
      return next(error);
    }
  },

  deleteUser(req, res, next) {
    try {
      const id = req.params.id;
      return User.destroy({ where: { id } }).then((result) => {
        return res.status(result ? 200 : 204).json({ deleteCount: result });
      });
    } catch (error) {
      return next(error);
    }
  },
};