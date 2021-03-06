import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../API/BooksAPI'
import Book from '../Book/Book'

class Search extends Component {

  state = {
    query: '',
    queryBooks : []
  }

  updateQuery = (query) => {
    this.setState({ query })
    if(query !== '') {
      BooksAPI.search(query.trim(), 50)
      .then((books) => {
        if(books && books.length > 0) this.setState({ queryBooks: books })
        else this.setState({ queryBooks: [] })
      })
    }else{
      this.setState({ queryBooks: [] })
    }
  }

  render() {

    let { query, queryBooks } = this.state
    let { changeShelf, books } = this.props

    books.map((book) => {
      queryBooks.map((queryBook) => {
        if(book.id === queryBook.id) {
          queryBook["shelf"] = book["shelf"]
        }
      })
    })

    return(
      <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search"> Close </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => this.updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {
          queryBooks.length > 0 ?
          <div>
            <h2>
              {queryBooks.length} books returned !!
            </h2>
            <ol className="books-grid">
            {
              queryBooks.map((book) =>(
                    <li key={book.id} >
                      <Book
                        key={book.id}
                        book={book}
                        changeShelf={changeShelf}
                      />
                    </li>
                  )
              )
            }
            </ol>
          </div>
            :
            <h2>
              No Books returned !!
            </h2>
        }
      </div>
      </div>
    )
  }
}

export default Search