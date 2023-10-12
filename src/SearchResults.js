import Book from "./Book";
import PropTypes from 'prop-types';

const SearchResults = ({ searchBooks, myBooks, onMove }) => {
    console.log('i am in search results' + JSON.stringify(searchBooks))
    console.log('this is my books' + JSON.stringify(myBooks))
    const updatedBooks = searchBooks.map(book => {
      myBooks.forEach(b => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
      });
      return book;
    });

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {updatedBooks.map(book => (
            <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : 'none'} onMove={onMove} />
          ))}
        </ol>
      </div>
    );
  };
  SearchResults.prototype = {
    searchBooks : PropTypes.object,
    myBooks : PropTypes.object,
    onMove : PropTypes.func
  }
  export default SearchResults;