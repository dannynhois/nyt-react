import React, { Component } from "react";

class SavedArticles extends Component {
  renderCard(article, index) {
    return (
      <div className="card-body" key={index}>
        <h4 className="card-title">{article.title}</h4>
        <p className="card-text">{article.date}</p>
        <a
          href={`${article.url}`}
          target="_blank"
          className="btn btn-primary"
        >
          Visit Url
        </a>
        <button
          className="btn btn-primary"
          onClick={() => this.props.deleteSavedArticles(article)}
        >
          Delete Article
        </button>
      </div>
    );
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">Saved Articles</div>
        {this.props.savedArticles.map((article, index) =>
          this.renderCard(article, index)
        )}
      </div>
    );
  }
}

export default SavedArticles;
