import React, { Component } from "react";
import NewsCard from "./NewsCard";

let apikey = "fa3eef3a85c74e859135e29ebb3f0b73";
export default class News extends Component {
  data = [];
  constructor() {
    super();
    this.state = {
      data: this.data,
      loading: false,
      totalResults: 0,
      page: 1,
    };
  }
  async fetchNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let parsed = await (await fetch(url)).json();
    this.setState({
      data: parsed.articles,
      totalResults: parsed.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.fetchNews();
  }

  handlePrev = async () => {
    this.setState({
      page: this.state.page - 1,
      loading: true,
    });

    this.fetchNews();
  };
  handleNext = async () => {
    this.setState({
      page: this.state.page + 1,
      loading: true,
    });
    this.fetchNews();
  };

  render() {
    return (
      <div className="container my-4">
        <div className="row">
          {this.state.data.map(
            (e) =>
              !this.state.loading && (
                <div className="col-md-4 my-4" key={e.url}>
                  <NewsCard
                    title={e.title ? e.title.slice(0, 40) : "NA"}
                    imgurl={e.urlToImage}
                    url={e.url}
                    source={e.source.name}
                    desc={
                      e.description
                        ? e.description.slice(0, 80) + "..."
                        : "No details"
                    }
                  />
                </div>
              )
          )}
        </div>

        <button
          disabled={this.state.page === 1}
          className="btn btn-success"
          onClick={this.handlePrev}
        >
          Prev
        </button>
        <button
          disabled={
            this.state.page + 1 >
            Math.ceil(this.state.totalResults / this.props.pageSize)
          }
          className="btn btn-success"
          onClick={this.handleNext}
        >
          Next
        </button>
      </div>
    );
  }
}
