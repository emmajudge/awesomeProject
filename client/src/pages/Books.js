import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { ArticleList, ArticleItem } from "../components/ArticleList";
import { Input, TextArea, FormBtn } from "../components/Form";

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

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.authors) {
  //     API.saveBook({
  //       title: this.state.title,
  //       authors: this.state.authors,
  //       description: this.state.description,
  //       image: this.state.image,
  //       link: this.state.link
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

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
