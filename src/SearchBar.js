import CloseSearchButton from "./CloseSearchButton";
import { useState} from 'react';

const SearchBar = ({ onSearch, onResetSearch }) => {
    const [value, setValue] = useState('');

    const handleChange = event => {
      const val = event.target.value;
      setValue(val);
      onSearch(val);
    };

    return (
      <div className="search-books-bar">
        <CloseSearchButton onResetSearch={onResetSearch} />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={value}
            placeholder="Search by title or author"
            onChange={handleChange}
            autoFocus
          />
        </div>
      </div>
    );
  };

  export default SearchBar;