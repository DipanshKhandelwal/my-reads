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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksPage 
            books={this.state.books}
          />
        )} />
        <Route path='/search' render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
