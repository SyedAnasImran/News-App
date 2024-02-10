import React, { Component } from "react";

export default class NewsCard extends Component {
  render() {
    let { title, imgurl, url, desc, source } = this.props;
    return (
      <div>
        <div
          className="card col-4-4 "
          style={{ width: "18rem", backgroundColor: "#2A3D37" }}
        >
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body text-light">
        <span className="badge text-bg-danger my-3 ">{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={url} className="btn btn-success text-light" target="blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
