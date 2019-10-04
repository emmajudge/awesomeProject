// copied file from googleBookSearch homework as placeholder/template. still need to call the methods defined in featureController file once those are set

import axios from "axios";

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
  getUser: function() {
    return axios.get("api/books/login");
  },
  logoutUser: function(loginData) {
    return axios.put("api/books/login", loginData);
  },
  viewAccount: function() {
    return axios.get("api/books/account");
  },
  getFeatures: function() {
    return axios.get("/api/features");
  }
};
