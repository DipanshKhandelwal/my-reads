import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import Search from './Search/Search'
import BooksPage from './BooksPage/BooksPage'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksPage />
        )} />
        <Route path='/search' render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
