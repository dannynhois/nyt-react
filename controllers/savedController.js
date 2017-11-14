const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Article.find({}).then(data => {
      console.log(data);
      res.json(data);
    });
  },
  create: (req, res) => {
    console.log(req.body);
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteArticle: (req, res) => {
    db.Article
      .findOneAndRemove({ _id: req.body.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
