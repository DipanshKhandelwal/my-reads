import React from 'react'
import Book from '../Book/Book'
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
            shelves.map((shelf) => 
                <BookShelf
                    title={shelf.title}
                    books={props.books}
                />
            )
        }
        </div>
        </div>
    )
}

export default BookList