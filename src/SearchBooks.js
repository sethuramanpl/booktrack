import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


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

  export default SearchBooks;