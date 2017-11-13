import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import DisplayArticles from './components/DisplayArticles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
    this.getNewArticles = this.getNewArticles.bind(this);

  }

  getNewArticles(query) {
    console.log("Query: ", query);
    fetch(`/api/articles/${query}`).then(response => response.json()).then(data => this.setState({articles: data}));
  }

  render() {
    return (
      <div className="container">
        <Jumbotron/>
        <SearchForm getNewArticles={this.getNewArticles}/>
        <DisplayArticles articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
