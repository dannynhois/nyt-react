const router = require("express").Router();
const articlesController = require("../controllers/articlesController");

//api articles route
router.route("/api/articles/:query?")
  .get(articlesController.getArticles)
  .post(articlesController.saveArticles)
  .put(articlesController.putArticles);

router.use("/", (req, res) => {
  res.send("home route");
});

module.exports = router;
