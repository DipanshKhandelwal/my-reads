import React from "react";
import ShelfChanger from "../ShelfChanger/ShelfChanger";

const Book = (props) => {

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }} />
                <ShelfChanger
                    changeShelf={props.changeShelf}
                    value={props.book.shelf}
                />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
      </div>
    )
}

export default Book;