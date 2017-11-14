const router = require("express").Router();
const articlesController = require("../controllers/articlesController");
const savedController = require("../controllers/savedController");
const path = require("path");

//api articles route
router.route("/api/articles/:query?")
  .get(articlesController.getArticles)
  .post(articlesController.saveArticles)
  .put(articlesController.putArticles);

router.route("/api/saved")
  .get(savedController.findAll)
  .post(savedController.create)
  .delete(savedController.deleteArticle)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
