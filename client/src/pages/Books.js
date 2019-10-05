import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { ArticleList, ArticleItem } from "../components/ArticleList";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", authors: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            {!this.state.books.length ? (
              <h3>No Results to Display</h3>
            ) : (
              <ArticleList>
                  <h1>Books On My List</h1>
                {this.state.books.map(book => {
                  return (
                    <ArticleItem
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                    />
                  );
                })}
              </ArticleList>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
