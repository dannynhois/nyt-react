import React, { Component } from "react";

class DisplayArticles extends Component {
  constructor() {
    super();
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard(article) {
    return (
      <div className="card-body">
        <h4 className="card-title">{article.headline.main}</h4>
        <p className="card-text">{article.snippet}</p>
        <a href={`${article.web_url}`} target="_blank" className="btn btn-primary">
          Visit Url
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">List of Articles</div>
        {this.props.articles.map(article => this.renderCard(article))}
      </div>
    );
  }
}

export default DisplayArticles;
