import React from 'react'
import BookShelf from '../BookShelf/BookShelf';

const BookList = (props) => {

    const shelves = [
        { type: 'currentlyReading', title: 'Currently Reading' },
        { type: 'wantToRead', title: 'Want to Read' },
        { type: 'read', title: 'Read' }
      ];

    return(
        <div className="list-books-content">
        <div>
        {
            shelves.map((shelf) => {
                let typeBooks = props.books.filter((book) => book.shelf === shelf.type)
                return(
                <BookShelf
                    key={shelf.type}
                    title={shelf.title}
                    books={typeBooks}
                    changeShelf={props.changeShelf}
                />)
            })
        }
        </div>
        </div>
    )
}

export default BookList