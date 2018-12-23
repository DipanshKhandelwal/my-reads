import React from 'react'
import { Link } from 'react-router-dom'
import BookList from '../BookList/BookList'

const BooksPage = (props) => {
    return(
        <div className="list-books">
            <div className="list-books-title">
            <h1>My Reads</h1>
            </div>
            <BookList
                changeShelf={props.changeShelf}
                books={props.books}
            />
            <div className="open-search">
                <Link to='/search' >
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}

export default BooksPage