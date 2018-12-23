import React from "react";
import ShelfChanger from "../ShelfChanger/ShelfChanger";
import emptyCover from "../../images/empty-cover.png";

const Book = (props) => {

    let image = props.book.imageLinks ?
                    props.book.imageLinks.thumbnail ?
                        props.book.imageLinks.thumbnail
                        :
                        props.book.imageLinks.smallThumbnail ?
                            props.book.imageLinks.smallThumbnail
                            :
                            emptyCover
                    :
                    emptyCover

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${image})` }} />
                <ShelfChanger
                    changeShelf={(value) => {
                        props.changeShelf(props.book, value)
                    }}
                    value={props.book.shelf}
                />
            </div>
            <div className="book-title">{props.book.title}</div>
            {
                props.book.authors && props.book.authors.map((author) => 
                    <div className="book-authors">
                        {author}
                    </div>
                )
            }
      </div>
    )
}

export default Book;