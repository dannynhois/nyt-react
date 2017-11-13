const db = require("../models")

module.exports = {
    findAll: (req,res) => {
        res.send("find all");
    },
    create: (req,res) => {
        console.log(req.body);
        db.Article
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
}