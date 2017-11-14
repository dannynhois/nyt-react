import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import DisplayArticles from "./components/DisplayArticles";
import SavedArticles from "./components/SavedArticles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      savedArticles:[]
    };
    this.getNewArticles = this.getNewArticles.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.getSavedArticles = this.getSavedArticles.bind(this);
    this.deleteSavedArticles = this.deleteSavedArticles.bind(this);
  }
  componentWillMount() {
    this.getSavedArticles();
  }

  getNewArticles(query) {
    fetch(`/api/articles/${query}`)
      .then(response => response.json())
      .then(data => this.setState({ articles: data }));
  }
  saveArticle(article) {
    console.log("saving article...");
    const data = { title: article.headline.main, url: article.web_url };
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    };
    console.log("fetch options: ", fetchOptions);
    fetch("/api/saved", fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log("added: ", data);
        this.getSavedArticles();
      })
      .catch(err => {
        console.log("error", err);
      });
  }
  getSavedArticles() {
    fetch("/api/saved")
    .then(response => response.json())
    .then(savedArticles => {
      this.setState({savedArticles})
    })
  }

  deleteSavedArticles(article) {
    const data = { id: article._id};
     const fetchOptions = { method: "DELETE", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } };
     fetch("api/saved", fetchOptions)
     .then(response => response.json())
     .then(data => {
       console.log(data)
       this.getSavedArticles();
     })
  }

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <SearchForm getNewArticles={this.getNewArticles} />
        <DisplayArticles
          articles={this.state.articles}
          saveArticle={this.saveArticle}
        />
        <SavedArticles
          savedArticles={this.state.savedArticles}
          getSavedArticles={this.getSavedArticles}
          deleteSavedArticles={this.deleteSavedArticles}
        />
      </div>
    );
  }
}

export default App;
