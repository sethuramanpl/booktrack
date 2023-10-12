import Book from "./Book";
import PropTypes from 'prop-types';

const Bookshelf = ({ shelf, books, onMove }) => {
    const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnThisShelf.map(book => (
              <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
            ))}
          </ol>
        </div>
      </div>
    );
  };

  Bookshelf.prototype = {
    shelf : PropTypes.object,
    books : PropTypes.object,
    onMove : PropTypes.func
  }

  export default Bookshelf;