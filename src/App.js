import React from 'react'
import * as BooksAPI from './API/BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import Search from './Search/Search'
import BooksPage from './BooksPage/BooksPage'

class BooksApp extends React.Component {

  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=> this.setState({ books }) )
  }

  changeShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf)
      .then( response => {
        updatedBook.shelf = shelf
        this.setState((prevState) => ({
          books : prevState.books
                    .filter((book) => updatedBook.id !== book.id)
                    .concat(updatedBook)
        }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksPage 
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />
        <Route path='/search' render={() => (
          <Search
            changeShelf={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
