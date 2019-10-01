import axios from "axios";

console.log("----------------API (utils)------------------")
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  createLogin: function(loginData) {
    return axios.post("api/books/create", loginData);
  },
  checkLogin: function(loginData) {
    return axios.post("api/books/login", loginData);
  },
  //New Code
  getAmount: function() {
    return axios.get("api/books/login");
  },
  logInUser: function(loginData) {
    return axios.put("api/books/login", loginData);
  }
};
