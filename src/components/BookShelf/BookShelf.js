import React from 'react'
import Book from "../Book/Book";

const BookShelf = (props) => {

    let { changeShelf, title, books } = props

    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {
                books.map((book) => (
                    <li>
                        <Book
                            key={book.id}
                            book={book}
                            changeShelf={changeShelf}
                        />
                    </li>
                ))
            }
            </ol>
        </div>
        </div>
    )
}

export default BookShelf