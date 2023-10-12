import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from 'prop-types';


const SearchBooks = ({ searchBooks, myBooks, isMyBooksReady, onSearch, onResetSearch, onMove }) => {
    if (!isMyBooksReady) {
      return <div>Loading...</div>;
    }
    console.log('search books sectin' + myBooks)
    return (
      <div className="search-books">
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
        <SearchResults searchBooks={searchBooks} myBooks={myBooks} onMove={onMove} />
      </div>
    );
  };

  SearchBooks.prototype = {
    searchBooks : PropTypes.object,
    myBooks : PropTypes.object,
    isMyBooksReady : PropTypes.bool,
    onSearch : PropTypes.func,
    onResetSearch : PropTypes.func,
    onMove : PropTypes.func
  }

  export default SearchBooks;