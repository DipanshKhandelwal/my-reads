import React from "react"

const ShelfChanger = (props) => {
    return(
        <div className="book-shelf-changer">
            <select
                defaultValue={props.value ? props.value : 'none'}
                onChange={(e) => {
                    props.changeShelf( e.target.value )
                }} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfChanger