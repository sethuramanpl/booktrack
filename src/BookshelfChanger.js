import { useState } from 'react'

const BookshelfChanger = ({ book, shelf, onMove }) => {
    const [value, setValue] = useState(shelf);

    const handleChange = event => {
      const selectedValue = event.target.value;
      setValue(selectedValue);
      onMove(book, selectedValue);
    };

    return (
      <div className="book-shelf-changer">
        <select value={value} onChange={handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  };

  export default BookshelfChanger;