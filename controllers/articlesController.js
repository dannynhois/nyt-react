const axios = require("axios");

module.exports = {
  getArticles: (req, res) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.NYT_KEY}&q=${req.params.query}`;
    axios
      .get(url)
      .then(response => {
        res.json(response.data.response.docs);
      })
      .catch(err => {
        res.json(err);
      });

  },
  saveArticles: (req, res) => {
    const data = {};
    Object.assign(data, req.body);
    data.tag = "Danny got here";
    console.log(process.env.NYT_KEY);
    res.json(data);
  },
  putArticles: (req, res) => {
    const data = { response: "put" };
    res.json(data);
  }
};
