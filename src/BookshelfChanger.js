import { useState } from 'react'
import PropTypes from 'prop-types';

const BookshelfChanger = ({ book, shelf, onMove }) => {
    const [value, setValue] = useState(shelf);

    const handleChange = event => {
      const selectedValue = event.target.value;
      setValue(selectedValue);
      onMove(book, selectedValue);
    };

    const options = [
      { value: 'move', label: 'Move to...', disabled: true },
      { value: 'currentlyReading', label: 'Currently Reading' },
      { value: 'wantToRead', label: 'Want to Read' },
      { value: 'read', label: 'Read' },
      { value: 'none', label: 'None' },
    ];


    return (
      <div className="book-shelf-changer">
        <select value={value} onChange={handleChange}>
         {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
          ))}
        {/* //   <option value="move" disabled>
        //     Move to...
        //   </option>
        //   <option value="currentlyReading">Currently Reading</option>
        //   <option value="wantToRead">Want to Read</option>
        //   <option value="read">Read</option>
        //   <option value="none">None</option>*/}
         </select>
      </div>
    );
  };

  BookshelfChanger.prototype = {
    book : PropTypes.object,
    shelf : PropTypes.string,
    onMove : PropTypes.func
  }

  export default BookshelfChanger;